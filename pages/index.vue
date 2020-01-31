<template>
  <div id="home">
    <intro />
    <About />
    <Contact />
  </div>
</template>

<script>
import intro from "../components/HomePage/Intro";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
export default {
  name: "HomePage",
  components: {
    intro,
    About,
    Contact
  }
};
</script>
<style lang="scss" >
</style>