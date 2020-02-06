<template>
  <!-- <nav class="navbar navbar-expand-sm navbar-dark" style="background-color:#563d7c;">
  <router-link tag="a" class="navbar-brand" to="/">Ürün Listesi</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link tag="a" class="nav-link" to="/urun-islemleri">Ürün İşlemleri <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link tag="a" class="nav-link" to="/urun-cikisi">Ürün Çıkışı</router-link>
      </li>
      
    </ul>
  </div>
  </nav>-->
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link tag="b-navbar-brand" to="/">Ürün Listesi</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="b-nav-item" to="/urun-islemleri">Ürün İşlemleri</router-link>
          <router-link tag="b-nav-item" to="/urun-cikisi">Ürün Çıkışı</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>