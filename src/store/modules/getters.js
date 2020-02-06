export const getTradeResult = (state) => {
    return {
        purchase: state.purchase,
        sale: state.sale,
        balance: state.balance
    }
}

export const getLoadingStatus = (state)=>{
    return state.loading
}