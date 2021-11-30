// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get outTransactions(): Array<string | null> {
    let value = this.get("outTransactions");
    return value.toStringArray();
  }

  set outTransactions(value: Array<string | null>) {
    this.set("outTransactions", Value.fromStringArray(value));
  }

  get inTransactions(): Array<string | null> {
    let value = this.get("inTransactions");
    return value.toStringArray();
  }

  set inTransactions(value: Array<string | null>) {
    this.set("inTransactions", Value.fromStringArray(value));
  }

  get systemTransactions(): Array<string | null> {
    let value = this.get("systemTransactions");
    return value.toStringArray();
  }

  set systemTransactions(value: Array<string | null>) {
    this.set("systemTransactions", Value.fromStringArray(value));
  }
}

export class Main extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Main entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Main entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Main", id.toString(), this);
  }

  static load(id: string): Main | null {
    return store.get("Main", id) as Main | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get stToken(): string | null {
    let value = this.get("stToken");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set stToken(value: string | null) {
    if (value === null) {
      this.unset("stToken");
    } else {
      this.set("stToken", Value.fromString(value as string));
    }
  }

  get rsr(): string | null {
    let value = this.get("rsr");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set rsr(value: string | null) {
    if (value === null) {
      this.unset("rsr");
    } else {
      this.set("rsr", Value.fromString(value as string));
    }
  }

  get rToken(): string | null {
    let value = this.get("rToken");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set rToken(value: string | null) {
    if (value === null) {
      this.unset("rToken");
    } else {
      this.set("rToken", Value.fromString(value as string));
    }
  }

  get vault(): string | null {
    let value = this.get("vault");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set vault(value: string | null) {
    if (value === null) {
      this.unset("vault");
    } else {
      this.set("vault", Value.fromString(value as string));
    }
  }

  get mood(): string | null {
    let value = this.get("mood");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mood(value: string | null) {
    if (value === null) {
      this.unset("mood");
    } else {
      this.set("mood", Value.fromString(value as string));
    }
  }

  get staked(): BigInt | null {
    let value = this.get("staked");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set staked(value: BigInt | null) {
    if (value === null) {
      this.unset("staked");
    } else {
      this.set("staked", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Collateral extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Collateral entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Collateral entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Collateral", id.toString(), this);
  }

  static load(id: string): Collateral | null {
    return store.get("Collateral", id) as Collateral | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vault(): string {
    let value = this.get("vault");
    return value.toString();
  }

  set vault(value: string) {
    this.set("vault", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get index(): i32 {
    let value = this.get("index");
    return value.toI32();
  }

  set index(value: i32) {
    this.set("index", Value.fromI32(value));
  }
}

export class Vault extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vault entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vault entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vault", id.toString(), this);
  }

  static load(id: string): Vault | null {
    return store.get("Vault", id) as Vault | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get main(): string {
    let value = this.get("main");
    return value.toString();
  }

  set main(value: string) {
    this.set("main", Value.fromString(value));
  }

  get collaterals(): Array<string> | null {
    let value = this.get("collaterals");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set collaterals(value: Array<string> | null) {
    if (value === null) {
      this.unset("collaterals");
    } else {
      this.set("collaterals", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get main(): string | null {
    let value = this.get("main");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set main(value: string | null) {
    if (value === null) {
      this.unset("main");
    } else {
      this.set("main", Value.fromString(value as string));
    }
  }

  get transfersCount(): BigInt {
    let value = this.get("transfersCount");
    return value.toBigInt();
  }

  set transfersCount(value: BigInt) {
    this.set("transfersCount", Value.fromBigInt(value));
  }

  get holdersCount(): BigInt {
    let value = this.get("holdersCount");
    return value.toBigInt();
  }

  set holdersCount(value: BigInt) {
    this.set("holdersCount", Value.fromBigInt(value));
  }

  get users(): Array<string> {
    let value = this.get("users");
    return value.toStringArray();
  }

  set users(value: Array<string>) {
    this.set("users", Value.fromStringArray(value));
  }

  get supply(): string | null {
    let value = this.get("supply");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set supply(value: string | null) {
    if (value === null) {
      this.unset("supply");
    } else {
      this.set("supply", Value.fromString(value as string));
    }
  }

  get transactions(): Array<string | null> {
    let value = this.get("transactions");
    return value.toStringArray();
  }

  set transactions(value: Array<string | null>) {
    this.set("transactions", Value.fromStringArray(value));
  }
}

export class SystemTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SystemTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SystemTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SystemTransaction", id.toString(), this);
  }

  static load(id: string): SystemTransaction | null {
    return store.get("SystemTransaction", id) as SystemTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get started(): string {
    let value = this.get("started");
    return value.toString();
  }

  set started(value: string) {
    this.set("started", Value.fromString(value));
  }

  get completed(): string | null {
    let value = this.get("completed");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set completed(value: string | null) {
    if (value === null) {
      this.unset("completed");
    } else {
      this.set("completed", Value.fromString(value as string));
    }
  }

  get availableAt(): BigInt | null {
    let value = this.get("availableAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set availableAt(value: BigInt | null) {
    if (value === null) {
      this.unset("availableAt");
    } else {
      this.set("availableAt", Value.fromBigInt(value as BigInt));
    }
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get main(): string {
    let value = this.get("main");
    return value.toString();
  }

  set main(value: string) {
    this.set("main", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class TokenUser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenUser entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenUser entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenUser", id.toString(), this);
  }

  static load(id: string): TokenUser | null {
    return store.get("TokenUser", id) as TokenUser | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get lastTransferTimestamp(): BigInt | null {
    let value = this.get("lastTransferTimestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastTransferTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("lastTransferTimestamp");
    } else {
      this.set("lastTransferTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get transferCount(): BigInt {
    let value = this.get("transferCount");
    return value.toBigInt();
  }

  set transferCount(value: BigInt) {
    this.set("transferCount", Value.fromBigInt(value));
  }

  get inTransferCount(): BigInt {
    let value = this.get("inTransferCount");
    return value.toBigInt();
  }

  set inTransferCount(value: BigInt) {
    this.set("inTransferCount", Value.fromBigInt(value));
  }

  get outTransferCount(): BigInt {
    let value = this.get("outTransferCount");
    return value.toBigInt();
  }

  set outTransferCount(value: BigInt) {
    this.set("outTransferCount", Value.fromBigInt(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get totalIncome(): BigInt {
    let value = this.get("totalIncome");
    return value.toBigInt();
  }

  set totalIncome(value: BigInt) {
    this.set("totalIncome", Value.fromBigInt(value));
  }

  get totalOutcome(): BigInt {
    let value = this.get("totalOutcome");
    return value.toBigInt();
  }

  set totalOutcome(value: BigInt) {
    this.set("totalOutcome", Value.fromBigInt(value));
  }
}

export class Supply extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Supply entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Supply entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Supply", id.toString(), this);
  }

  static load(id: string): Supply | null {
    return store.get("Supply", id) as Supply | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get changedTimestamp(): BigInt | null {
    let value = this.get("changedTimestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set changedTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("changedTimestamp");
    } else {
      this.set("changedTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get minted(): BigInt {
    let value = this.get("minted");
    return value.toBigInt();
  }

  set minted(value: BigInt) {
    this.set("minted", Value.fromBigInt(value));
  }

  get burned(): BigInt {
    let value = this.get("burned");
    return value.toBigInt();
  }

  set burned(value: BigInt) {
    this.set("burned", Value.fromBigInt(value));
  }

  get total(): BigInt {
    let value = this.get("total");
    return value.toBigInt();
  }

  set total(value: BigInt) {
    this.set("total", Value.fromBigInt(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transactionType(): string {
    let value = this.get("transactionType");
    return value.toString();
  }

  set transactionType(value: string) {
    this.set("transactionType", Value.fromString(value));
  }

  get fromAddr(): string {
    let value = this.get("fromAddr");
    return value.toString();
  }

  set fromAddr(value: string) {
    this.set("fromAddr", Value.fromString(value));
  }

  get toAddr(): string {
    let value = this.get("toAddr");
    return value.toString();
  }

  set toAddr(value: string) {
    this.set("toAddr", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}
