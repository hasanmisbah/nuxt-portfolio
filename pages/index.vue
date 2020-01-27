<template>
  <div id="home">
    <intro />
    <About/>
  </div>
</template>

<script>
import intro from "../components/HomePage/Intro";
import About from "../components/HomePage/About";
export default {
  name: "HomePage",
  components: {
    intro,
    About
  },
  head() {
    return {};
  }
};
</script>
<style lang="scss" >
</style>