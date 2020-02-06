import Vue from "vue";

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    },
    changeProductList(state, product) {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].key == product.key) {
                state.products[i] = product;
            }
        }
    },
    removeProduct(state, product) {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].key == product.key) {
                state.products.splice(i, 1);
            }
        }
    }
}

const actions = {
    initApp({ commit, dispatch }) {
        Vue.http.get('products.json')
            .then(response => {
                if (response.data != null) {
                    response.json()
                        .then(data => {
                            for (let [key, value] of Object.entries(data)) {
                                value.key = key;
                                commit('updateProductList', value);
                            }
                        })
                }
                dispatch('getTradeResult')

            })

            .then(() => {
                commit('toggleLoadingStatus')
            })
            .catch(err => {
                console.warn(err);
                commit('toggleLoadingStatus')

            });
    },
    saveProduct({ commit }, product) {
        Vue.http.post("products.json", product)
            .then((response) => {
                product.key = response.body.name;
                commit("updateProductList", product)

            })
            .catch(err => console.log(err));
    },
    sellProduct({ commit }, product) {
        Vue.http.put("products/" + product.key + ".json", product)
            .then(() => {
                return commit('changeProductList', product);
            })



    },
    removeProduct({ commit, getters, dispatch }, product) {
        Vue.http.delete("products/" + product.key + ".json")
            .then(() => {
                return commit('removeProduct', product);
            })
            .then(() => {
                let trades = getters.getTradeResult
                trades.purchase -= (product.count * product.price);
                dispatch('setTradeResult', trades)
            })
            .then(() => {
                commit('toggleLoadingStatus');
            })

            .catch(err => {
                commit('toggleLoadingStatus');
                console.error(err);
            })
    }
}

export default { state, getters, mutations, actions }