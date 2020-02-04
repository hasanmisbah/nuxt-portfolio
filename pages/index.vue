<template>
  <div id="home">
    <Intro />
    <About />
    <Testimonial />
    <Contact />
  </div>
</template>

<script>
import Intro from "../components/HomePage/Intro";
import About from "../components/HomePage/About";
import Testimonial from "../components/HomePage/Testimonial";
import Contact from "../components/HomePage/Contact";
export default {
  name: "HomePage",
  components: {
    Intro,
    About,
    Testimonial,
    Contact
  }
};
</script>
<style lang="scss" >
</style>