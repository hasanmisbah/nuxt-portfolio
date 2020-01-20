<template>
  <main>
    <Intro />
    <About />
    <Skills />
  </main>
</template>

<script>
import Intro from "~/components/Intro";
import About from "~/components/About";
import Skills from "~/components/Skills";

export default {
  name: "HomePage",

  components: {
    Intro,
    About,
    Skills
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