import { Address, BigDecimal, dataSource, log } from "@graphprotocol/graph-ts";
import { getTokenPriceFromCalculationCurve } from "./calculations/CalculationsCurve";
import { getTokenPriceFromSushiSwap } from "./calculations/CalculationsSushiswap";
import * as constants from "./common/constants";
import { CustomPriceType } from "./common/types";
import { getTokenPriceFromChainLink } from "./oracles/ChainLinkFeed";
import { getTokenPriceFromYearnLens } from "./oracles/YearnLensOracle";
import { getCurvePriceUsdc } from "./routers/CurveRouter";
import { getPriceUsdc as getPriceUsdcSushiswap } from "./routers/SushiSwapRouter";
import { getPriceUsdc as getPriceUsdcUniswap } from "./routers/UniswapRouter";

export function getUsdPricePerToken(tokenAddr: Address): CustomPriceType {
  // Check if tokenAddr is a NULL Address
  if (tokenAddr.toHex() == constants.ZERO_ADDRESS_STRING) {
    return new CustomPriceType();
  }

  let network = dataSource.network();

  // 1. ChainLink Feed Registry
  // let chainLinkPrice = getTokenPriceFromChainLink(tokenAddr, network);
  // if (!chainLinkPrice.reverted) {
  //   log.warning("[ChainLinkFeed] tokenAddress: {}, Price: {}", [
  //     tokenAddr.toHexString(),
  //     chainLinkPrice.usdPrice.div(chainLinkPrice.decimalsBaseTen).toString(),
  //   ]);
  //   return chainLinkPrice;
  // }

  // // 2. Yearn Lens Oracle
  // let yearnLensPrice = getTokenPriceFromYearnLens(tokenAddr, network);
  // if (!yearnLensPrice.reverted) {
  //   log.warning("[YearnLensOracle] tokenAddress: {}, Price: {}", [
  //     tokenAddr.toHexString(),
  //     yearnLensPrice.usdPrice.div(yearnLensPrice.decimalsBaseTen).toString(),
  //   ]);
  //   return yearnLensPrice;
  // }

  // // 3. CalculationsCurve
  // let calculationsCurvePrice = getTokenPriceFromCalculationCurve(
  //   tokenAddr,
  //   network
  // );
  // if (!calculationsCurvePrice.reverted) {
  //   log.warning("[CalculationsCurve] tokenAddress: {}, Price: {}", [
  //     tokenAddr.toHexString(),
  //     calculationsCurvePrice.usdPrice
  //       .div(calculationsCurvePrice.decimalsBaseTen)
  //       .toString(),
  //   ]);
  //   return calculationsCurvePrice;
  // }

  // 4. CalculationsSushiSwap
  let calculationsSushiSwapPrice = getTokenPriceFromSushiSwap(
    tokenAddr,
    network
  );
  if (!calculationsSushiSwapPrice.reverted) {
    log.warning("[CalculationsSushiSwap] tokenAddress: {}, Price: {}", [
      tokenAddr.toHexString(),
      calculationsSushiSwapPrice.usdPrice
        .div(calculationsSushiSwapPrice.decimalsBaseTen)
        .toString(),
    ]);
    return calculationsSushiSwapPrice;
  }

  // // 5. Curve Router
  // let curvePrice = getCurvePriceUsdc(tokenAddr, network);
  // if (!curvePrice.reverted) {
  //   log.warning("[CurveRouter] tokenAddress: {}, Price: {}", [
  //     tokenAddr.toHexString(),
  //     curvePrice.usdPrice.div(curvePrice.decimalsBaseTen).toString(),
  //   ]);
  //   return curvePrice;
  // }

  // // 6. Uniswap Router
  // let uniswapPrice = getPriceUsdcUniswap(tokenAddr, network);
  // if (!uniswapPrice.reverted) {
  //   log.warning("[UniswapRouter] tokenAddress: {}, Price: {}", [
  //     tokenAddr.toHexString(),
  //     uniswapPrice.usdPrice.div(uniswapPrice.decimalsBaseTen).toString(),
  //   ]);
  //   return uniswapPrice;
  // }

  // // 7. SushiSwap Router
  // let sushiswapPrice = getPriceUsdcSushiswap(tokenAddr, network);
  // if (!sushiswapPrice.reverted) {
  //   log.warning("[SushiSwapRouter] tokenAddress: {}, Price: {}", [
  //     tokenAddr.toHexString(),
  //     sushiswapPrice.usdPrice.div(sushiswapPrice.decimalsBaseTen).toString(),
  //   ]);
  //   return sushiswapPrice;
  // }

  log.warning("[Oracle] Failed to Fetch Price, tokenAddr: {}", [
    tokenAddr.toHexString(),
  ]);

  return new CustomPriceType();
}

// TODO: Commented for goerli -> no price oracle
export function getUsdPrice(
  tokenAddr: Address,
  amount: BigDecimal
): BigDecimal {
  // let tokenPrice = getUsdPricePerToken(tokenAddr);

  // if (!tokenPrice.reverted) {
  //   return tokenPrice.usdPrice.times(amount).div(tokenPrice.decimalsBaseTen);
  // }

  return constants.BIGDECIMAL_ZERO;
}
