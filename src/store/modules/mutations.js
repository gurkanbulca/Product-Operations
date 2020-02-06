
export const updateTradeResult = (state,payload)=>{
    state.purchase = payload.purchase;
    state.sale = payload.sale;
    state.balance = payload.sale-payload.purchase;
    
}

export const toggleLoadingStatus = (state)=>{
    state.loading = !state.loading
}
