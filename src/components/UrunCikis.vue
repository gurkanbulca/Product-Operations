<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="selectedProduct">
              <option hidden disabled selected :value="null">Bir ürün seçin</option>
              <option
                v-for="product in getProducts()"
                :key="product.key"
                :value="product"
              >{{product.title}}</option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="selectedProduct!=null">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center" >
                  <div class="mb-3">
                    <span class="badge badge-info">Stok : {{selectedProduct.count}}</span>
                    <span class="badge badge-primary">Fiyat : {{selectedProduct.price}} TL</span>
                  </div>
                  <p
                    class="border border-warning p-2 text-secondary"
                  >{{selectedProduct.description}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              type="number"
              v-model="count"
              class="form-control "
              :class="{'is-invalid':showAlert}"
              placeholder="Ürün adetini giriniz.."
            />
            <small class="text-danger" v-show="showAlert">*Yetersiz stock.</small>
          </div>
          <hr />
          <button class="btn btn-primary" @click="sellProduct" :disabled="isFilled">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: null,
      count: null,
      submit : false
    };
  },
  methods: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
    sellProduct() {
      this.$store.commit('toggleLoadingStatus')
      this.submit=true;
      this.selectedProduct.count -= this.count;
      let trades = this.$store.getters.getTradeResult;
      trades.sale += this.selectedProduct.price * this.count;
      this.$store.dispatch("setTradeResult", trades);
      this.$store.dispatch("sellProduct", this.selectedProduct)
        .then(()=>{
          this.$store.commit('toggleLoadingStatus');
        })
      this.$router.push("/");
    }
  },
  computed: {
    isFilled() {
      return this.count > 0 &&
        this.selectedProduct != null &&
        this.count <= Number(this.selectedProduct.count)
        ? false
        : true;
    },
    showAlert() {
      if (this.count == null || this.selectedProduct == null) return false;
      return this.selectedProduct.count < this.count;
    }
  },
  beforeRouteLeave(to, from, next) {
    if(this.submit){
      next()
    }
    else if (this.count > 0 || this.selectedProduct != null) {
      confirm("İşlem kayıt edilmedi. Yine de ayrılmak ister misiniz?")
        ? next()
        : next(false);
    } else {
      next();
    }
  }
};
</script>

<style>
.alert {
  color: red;
}
</style>