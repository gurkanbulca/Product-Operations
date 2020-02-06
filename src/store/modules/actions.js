import Vue from 'vue';

export const setTradeResult = ({commit},trades)=>{
    commit('updateTradeResult',trades)
    return Vue.http.put('trades.json',trades)
}

export const getTradeResult = ({commit})=>{
    Vue.http.get('trades.json')
        .then(response=>{
            return response.json()
        })
        .then(trades=>{
            if(trades!=null){
                commit('updateTradeResult',trades);
            }
        })
}