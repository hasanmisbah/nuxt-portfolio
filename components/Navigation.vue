<template >
  <b-navbar fixed-top type="is-dark" class="main-nav" wrapper-class="container">
    <template slot="brand" tag="strong">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Hasan Misbah</b-navbar-item>
    </template>
    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item href="#">Home</b-navbar-item>
      <b-navbar-item href="#">Documentation</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
</style>