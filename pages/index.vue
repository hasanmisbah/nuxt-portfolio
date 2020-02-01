<template>
  <div id="home">
    <intro />
    <About />
    <Testimonial />
    <Contact />
  </div>
</template>

<script>
import intro from "../components/HomePage/Intro";
import About from "../components/HomePage/About";
import Contact from "../components/HomePage/Contact";
import Testimonial from "../components/HomePage/Testimonial";
export default {
  name: "HomePage",
  components: {
    intro,
    About,
    Contact,
    Testimonial
  }
};
</script>
<style lang="scss" >
</style>