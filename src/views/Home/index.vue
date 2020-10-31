<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContalner";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style lang='less' secoped>
</style>