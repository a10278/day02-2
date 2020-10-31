<template>
  <div>
    <Header></Header>
    <keep-alive include="Search">
      <router-view></router-view>
    </keep-alive>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" secoped></style>
