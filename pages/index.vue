<template>
  <main>
    <section class="section is-fullheight">
      <div class="container">
        <div class="columns is-desktop is-vcentered">
          <div class="column">
            <h5>Hello! I am</h5>
            <h1 class="title is-1">Hasan Misbah</h1>
          </div>
        </div>
        <div class="intro"></div>
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
  }
};
</script>
