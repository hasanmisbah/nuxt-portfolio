<template>
  <main>
    <section id="intro" class="section is-fullheight">
      <div class="container">
        <div class="columns is-desktop is-vcentered is-vertical-center">
          <div class="column intro-content">
            <p>Hello! I am</p>
            <h1 class="title is-1">Hasan Misbah</h1>
            <p>I'm a frontend Developer, WordPress Fanatic &amp; Linux Freak</p>
            <div class="action-btn">
              <a href="#" class="btn is-primary">Get Resume</a>
              <a href="#" class="btn outline is-primary">About Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",

  components: {
    Card
  },
  head() {
    return {
      title: "Hasan Misbah || Another Lazy From The Earth "
    };
  }
};
</script>
<style lang="scss" >
</style>