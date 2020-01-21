<template>
  <main>
    <Intro />
    <About />
    <Skills />
    <Portfolio />
  </main>
</template>

<script>
import Intro from "~/components/Intro";
import About from "~/components/About";
import Skills from "~/components/Skills";
import Portfolio from "~/components/Portfolio";

export default {
  name: "HomePage",

  components: {
    Intro,
    About,
    Skills,
    Portfolio
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