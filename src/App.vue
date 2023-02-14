<template>
  <MainHeader></MainHeader>
  <router-view></router-view>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  components: { MainHeader },
};
</script>

<style lang="scss">
@import "@/scss/_config.scss";
#app {
  height: 200vh;
}
</style>
