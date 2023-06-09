export enum ActionType {
    unknown = "unknown",
    jetton_internal_transfer = "jetton:internal_transfer",
    jetton_transfer_notification = "jetton:transfer_notification",
    jetton_transfer = "jetton:transfer",
    jetton_excesses = "jetton:excesses",
    dedust_buy = "dedust:buy",
    dedust_sell = "dedust:sell",
    dedust_liquidity_deposit = "dedust:liquidity_deposit",
    dedust_jetton_liquidity_deposit = "dedust:jetton_liquidity_deposit",
    dedust_lp_notification = "dedust:lp_notification",
    dedust_swap_pool_notification = "dedust:swap_pool_notification",
}
