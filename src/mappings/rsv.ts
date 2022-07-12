import {
  Issuance as RSVIssuance,
  Redemption as RSVRedemption,
} from "../../generated/RSVManager/RSVManager";
import { Transfer as TransferEvent } from "../../generated/templates/RToken/RToken";
import {
  getOrCreateAccount,
  getOrCreateAccountBalance,
  getOrCreateAccountBalanceDailySnapshot,
  getOrCreateEntry,
  getOrCreateToken,
  getOrCreateTokenDailySnapshot,
  getOrCreateTokenHourlySnapshot,
} from "../common/getters";
import { Address, BigDecimal, BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  EntryType,
  ZERO_ADDRESS,
  RSV_ADDRESS,
  BIGINT_ZERO,
  INT_ONE,
  BIGDECIMAL_ZERO,
  INT_NEGATIVE_ONE,
  BIGINT_ONE,
} from "./../common/constants";
import { Account, Token } from "../../generated/schema";
import { updateTokenMetrics } from "../common/metrics";

/**
 * * RSV specific mappings
 */

function updateTokenHolder(
  tokenAddress: Address,
  newHolder: boolean,
  event: ethereum.Event
): void {
  let token = getOrCreateToken(tokenAddress);
  let dailyMetrics = getOrCreateTokenDailySnapshot(token.id, event);
  let hourlyMetrics = getOrCreateTokenHourlySnapshot(token.id, event);

  if (newHolder) {
    token.holderCount = token.holderCount.plus(BIGINT_ONE);
    dailyMetrics.dailyHolderCount += INT_ONE;
    hourlyMetrics.hourlyHolderCount += INT_ONE;
  } else {
    token.holderCount = token.holderCount.minus(BIGINT_ONE);
  }
  token.save();
}

function updateAccountBalance(
  accountAddress: Address,
  tokenAddress: Address,
  amount: BigInt,
  event: ethereum.Event
): void {
  // update balance
  let accountBalance = getOrCreateAccountBalance(accountAddress, tokenAddress);
  let balance = accountBalance.amount.plus(amount.toBigDecimal());

  if (accountBalance.amount.le(BIGDECIMAL_ZERO) && amount.gt(BIGINT_ZERO)) {
    updateTokenHolder(tokenAddress, true, event);
  } else if (balance.le(BIGDECIMAL_ZERO)) {
    updateTokenHolder(tokenAddress, false, event);
  }

  accountBalance.transferCount += INT_ONE;
  accountBalance.amount = balance;
  accountBalance.blockNumber = event.block.number;
  accountBalance.timestamp = event.block.timestamp;
  accountBalance.save();

  // update snapshot
  let accountBalanceSnapshot = getOrCreateAccountBalanceDailySnapshot(
    accountAddress,
    tokenAddress,
    event
  );
  accountBalanceSnapshot.amount = accountBalance.amount;
  accountBalanceSnapshot.blockNumber = accountBalance.blockNumber;
  accountBalanceSnapshot.timestamp = accountBalance.timestamp;
  accountBalanceSnapshot.transferCount = accountBalance.transferCount;
  accountBalanceSnapshot.save();
}

// Handles token issuance
export function handleIssuance(event: RSVIssuance): void {
  let account = getOrCreateAccount(event.params.user);
  let token = getOrCreateToken(RSV_ADDRESS);

  // Create entry
  getOrCreateEntry(
    event,
    token.id,
    account.id,
    event.params.amount,
    EntryType.ISSUE
  );
}

// Handles RSV redemption
export function handleRedemption(event: RSVRedemption): void {
  let account = getOrCreateAccount(event.params.user);
  let token = getOrCreateToken(RSV_ADDRESS);

  // Create entry
  getOrCreateEntry(
    event,
    token.id,
    account.id,
    event.params.amount,
    EntryType.REDEEM
  );
}

export function handleTransfer(event: TransferEvent): void {
  let fromAccount = getOrCreateAccount(event.params.from);
  let toAccount = getOrCreateAccount(event.params.to);
  let token = getOrCreateToken(event.address);
  // Update transfer count

  let entryType = EntryType.TRANSFER;

  if (ZERO_ADDRESS == event.params.to.toHexString()) {
    entryType = EntryType.BURN;
  } else if (ZERO_ADDRESS == event.params.from.toHexString()) {
    entryType = EntryType.MINT;
  }

  let entry = getOrCreateEntry(
    event,
    token.id,
    fromAccount.id,
    event.params.value,
    entryType
  );
  // Transfer specific
  entry.to = toAccount.id;
  entry.save();

  // dont update zero address
  if (entryType !== EntryType.MINT) {
    updateAccountBalance(
      event.params.from,
      event.address,
      BIGINT_ZERO.minus(event.params.value),
      event
    );
  }

  if (entryType !== EntryType.BURN) {
    updateAccountBalance(
      event.params.to,
      event.address,
      BIGINT_ZERO.minus(event.params.value),
      event
    );
  }

  // Update token analytics
  updateTokenMetrics(
    event,
    event.address,
    event.params.from,
    event.params.value,
    entryType
  );
}
