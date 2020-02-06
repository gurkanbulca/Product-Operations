<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
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