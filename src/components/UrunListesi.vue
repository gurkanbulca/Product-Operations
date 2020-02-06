<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5 card mt-5 shadow">
          <div class="card-body">
            <h3>Ürün Listesi</h3>
            <hr />
            <table class="table table-hover table-striped table-bordered">
              <thead>
                <th>id</th>
                <th>Ürün Adı</th>
                <th>Adet</th>
                <th>Fiyat</th>
                <th>Açıklama</th>
              </thead>
              <tbody v-for="product in getProducts" :key="product.key" @click="test">
                <tr :id="product.key">
                  <td class="align-middle text-center">
                    <span class="badge badge-info">{{product.key}}</span>
                  </td>
                  <td class="align-middle text-center">{{product.title}}</td>
                  <td
                    class="align-middle text-center"
                    :style="{backgroundColor:setColor(product.count)}"
                  >{{product.count}}</td>
                  <td style="width: 120px;">{{product.price | currency}}</td>
                  <td class="align-middle">{{product.description}}</td>
                </tr>
              </tbody>
            </table>
            <div class="alert alert-warning" v-show="getProducts.length==0">
              <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
              <br />
              <small>Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-edit></app-edit>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UrunEdit from "./UrunEdit";
export default {
  components: {
    appEdit: UrunEdit
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  methods: {
    setColor(count) {
      if (count == 0) return "#ff5d6c";
      else if (count < 6) return "#e9ea77";
      else return "#8cba51";
    },
    //TEST
    test(event){
      this.$store.getters.getProducts.map(product=>{
            if(product.key==event.target.parentElement.id){
              this.$modal.show('urun-edit',{product})
            } 
        })
        
    },
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<style>
</style>