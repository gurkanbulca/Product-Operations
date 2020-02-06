<template>
  <div>
    <router-view name="navbar"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <router-view name="footbar"></router-view>
    <app-loading v-show="getLoadingStatus()"></app-loading>

  </div>
</template>

<script>
import Loading from "./components/Loading";
export default {
  components: {
    appLoading: Loading,
  },
  data() {
    return {
      status: false
    };
  },
  methods:{
    getLoadingStatus(){
      return this.$store.getters.getLoadingStatus
    }
  }
};
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  transform: translateX(-200px);
}
.fade-leave-to {
  transform: translateX(200px);
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
}
</style>