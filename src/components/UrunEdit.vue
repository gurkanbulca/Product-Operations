<template>
  <div>
    <modal
      name="urun-edit"
      @before-open="beforeOpen"
      @before-close="beforeClose"
      transition="pop-out"
      height="auto"
      width="450"
    >
      <div class="modal-container">
        <div class>
          <div class="pt-3 m-2 card">
            <div class="card-body">
              <h3>Ürün İşlemleri</h3>
              <hr />
              <div class="form-group">
                <label>Ürün Adı</label>
                <input
                  v-model="edited.title"
                  type="text"
                  class="form-control"
                  placeholder="Ürün adını giriniz.."
                />
              </div>
              <div class="form-group">
                <label>Adet</label>
                <input
                  v-model="edited.count"
                  type="number"
                  class="form-control"
                  placeholder="Ürün adetini giriniz.."
                />
              </div>
              <div class="form-group">
                <label>Fiyat</label>
                <input
                  v-model="edited.price"
                  type="number"
                  class="form-control"
                  placeholder="Ürün fiyatı giriniz.."
                />
              </div>
              <div class="form-group">
                <label>Açıklama</label>
                <textarea
                  v-model="edited.description"
                  cols="30"
                  rows="5"
                  placeholder="Ürüne ait bir açıklama giriniz..."
                  class="form-control"
                ></textarea>
              </div>
              <hr />
              <button class="btn btn-primary" @click="save()" :disabled="checkInputs">Kaydet</button>
              <button class="btn btn-danger ml-2" @click="remove()">Kaldır</button>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        key: null,
        title: "",
        count: null,
        price: null,
        description: ""
      },
      edited: {
        key: null,
        title: "",
        count: null,
        price: null,
        description: ""
      }
    };
  },
  methods: {
    beforeOpen(event) {
      this.product = event.params.product;
      this.edited = { ...this.product };
    },
    beforeClose(event){
      Object.keys(this.product).forEach(key=>{
        if(this.product[key]!=this.edited[key]){
          return confirm("Değişikler kayıt edilmedi. Yine de ayrılmak istiyor musunuz?")?null:event.stop()
        }
      })
    },
    save() {
      if (
        this.product.title != this.edited.title ||
        this.product.count != this.edited.count ||
        this.product.price != this.edited.price ||
        this.product.description != this.edited.description
      ) {
        // farklı
        
        let trades = this.$store.getters.getTradeResult;
        trades.purchase += (this.edited.count*this.edited.price-this.product.count*this.product.price)
        this.product.title=this.edited.title
        this.product.count=this.edited.count
        this.product.price=this.edited.price
        this.product.description=this.edited.description
        this.$store.dispatch("setTradeResult", trades);
        this.$store.dispatch("sellProduct", this.edited)
        this.$modal.hide('urun-edit')
      }else{
        this.$modal.hide('urun-edit')
      }
    },
    remove(){
      this.$modal.hide('urun-edit');
      this.$store.commit('toggleLoadingStatus');
      this.$store.dispatch('removeProduct',this.product)
        

    }
  },
  computed:{
    checkInputs(){
      if(this.edited.title!="" &&
        this.edited.count >=0 &&
        this.edited.count !="" &&
        this.edited.price !="" &&
        this.edited.price >=0 &&
        this.edited.description !=""
      ){
        return false;
      }
      else{
        return true;
      }
    }
  }
};
</script>

<style>
</style>