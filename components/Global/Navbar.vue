<template>
  <b-navbar wrapper-class="container" fixed-top shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Hasan Misbah</b-navbar-item>
    </template>

    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item tag="router-link" :to="{path :'#' }">Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path :'#' }">About</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path :'#' }">Projects</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path :'#' }">Testimonial</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{path :'#' }">Contact</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item class="social" tag="router-link" :to="{path :'#' }">
        <i class="fab fa-github"></i>
      </b-navbar-item>
      <b-navbar-item class="social" tag="router-link" :to="{path :'#' }">
        <i class="fab fa-twitter"></i>
      </b-navbar-item>
      <b-navbar-item class="social" tag="router-link" :to="{path :'#' }">
        <i class="fab fa-linkedin-in"></i>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/assets";
nav.navbar {
  font-size: 1.2rem;
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
.navbar-brand {
  font-weight: 700;
  font-size: 1.8rem;
  a {
    color: $secondary-text;
    &:hover {
      color: map-get($map: $span-color, $key: color-3);
    }
  }
}
.navbar-end {
  .navbar-item {
    font-weight: 500;
    line-height: 3;
    margin-right: 10px;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      height: 2px;
      width: 100%;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: center left;
      transition: 0.4s transform;
    }
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
    &:nth-child(1) {
      &:hover {
        background-color: rgba(
          $color: map-get($map: $span-color, $key: color-1),
          $alpha: 0.1
        );
        color: map-get($map: $span-color, $key: color-1);
      }
      &::after {
        background-color: map-get($map: $span-color, $key: color-1);
      }
    }

    &:nth-child(2) {
      &:hover {
        background-color: rgba(
          $color: map-get($map: $span-color, $key: color-2),
          $alpha: 0.1
        );
        color: map-get($map: $span-color, $key: color-2);
      }
      &::after {
        background-color: map-get($map: $span-color, $key: color-2);
      }
    }

    &:nth-child(3) {
      &:hover {
        background-color: rgba(
          $color: map-get($map: $span-color, $key: color-3),
          $alpha: 0.1
        );
        color: map-get($map: $span-color, $key: color-3);
      }
      &::after {
        background-color: map-get($map: $span-color, $key: color-3);
      }
    }

    &:nth-child(4) {
      &:hover {
        background-color: rgba(
          $color: map-get($map: $span-color, $key: color-4),
          $alpha: 0.1
        );
        color: map-get($map: $span-color, $key: color-4);
      }
      &::after {
        background-color: map-get($map: $span-color, $key: color-4);
      }
    }

    &:nth-child(5) {
      &:hover {
        background-color: rgba(
          $color: map-get($map: $span-color, $key: color-5),
          $alpha: 0.1
        );
        color: map-get($map: $span-color, $key: color-5);
      }
      &::after {
        background-color: map-get($map: $span-color, $key: color-5);
      }
    }
    &:last-child() {
      margin-right: 0;
    }
  }
}
</style>