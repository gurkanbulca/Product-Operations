<template>
  <nav class="navbar fixed-bottom navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
      <strong>Developed by</strong>  Gurkan Bulca
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Alış Tutarı :</strong>
      <span class="badge badge-danger">{{getTradeResult().purchase | currency}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Satış Tutarı :</strong>
      <span class="badge badge-success">{{getTradeResult().sale | currency}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Bakiye :</strong>
      <span class="badge badge-primary">{{getTradeResult().balance | currency}}</span>
    </span>
  </nav>
</template>

<script>
export default {
  methods:{
    getTradeResult(){
      return this.$store.getters.getTradeResult;
    }
  }
};
</script>

<style>
</style>