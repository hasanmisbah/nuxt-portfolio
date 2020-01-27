<template>
  <section class="is-fullheight section" id="intro">
    <div class="container">
      <div class="columns is-desktop is-vcentered is-vertical-center">
        <div class="column is-16 intro-content">
          <p>Hello! I am</p>
          <h1 class="title is-1">Hasan Misbah</h1>
          <p>
            i am self taught <strong>Programmer</strong>,
            <strong>Frontend Developer</strong>,
            <strong>WordPress Developer</strong> &amp; 
            <strong>Linux Freak</strong>
          </p>
          <div class="action-btn">
            <a href="#" class="btn is-primary">Get Resume</a>
            <a href="#" class="btn outline is-primary">About Me</a>
          </div>
        </div>
        <div class="column is-6">
          <img src="../../assets/img/introimg.png" alt="Code Review" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/assets";
#intro {
  align-items: center;
  min-height: 90vh;
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.6;
  .action-btn {
    margin-top: 20px;
  }
}
strong {
  @include spanStyle(1, 1);
  @include spanStyle(2, 2);
  @include spanStyle(3, 3);
  @include spanStyle(4, 4);
}
.btn {
  @extend %has-btn;
}
</style>