<template>
  <b-navbar wrapper-class="container" shadow fixed-top>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Hasan Misbah</b-navbar-item>
    </template>
    <template slot="start"></template>
    <template slot="end">
      <b-navbar-item href="#">Home</b-navbar-item>
      <b-navbar-item href="#">About</b-navbar-item>
      <b-navbar-item href="#">Project</b-navbar-item>
      <b-navbar-item href="#">Contact</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item class="social" href="#">
        <i class="fab fa-github"></i>
      </b-navbar-item>
      <b-navbar-item href="#">
        <i class="fab fa-twitter"></i>
      </b-navbar-item>
      <b-navbar-item href="#">
        <i class="fab fa-facebook-f"></i>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav.navbar {
  font-size: 1rem;
}
.navbar-item,
.navbar-link {
  line-height: 3;
}
a.navbar-burger {
  width: 3.5rem;
  height: 4rem;
  line-height: 3.5;
}
.navbar-item {
  i {
    font-size: 22px;
  }
}
</style>