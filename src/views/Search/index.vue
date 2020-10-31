<template>
  <div>
    Search<br />

    params参数:{{ $route.params.keyword }}<br />
    query参数:{{ $route.query.keyword1 }}

    <!-- <div style="margin:30px">
      params参数:{{ keyword }}<br />
      query参数:{{ keyword1 }}
      <input type="text" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Search",
  // props: ["keyword", "keyword1"],
};
</script>

<style lang="less" secoped></style>
