<template>
  <div id="home">
    <Intro />
    <About />
    <Project />
    <Testimonial />
    <Contact />
  </div>
</template>

<script>
import Intro from "../components/HomePage/Intro";
import About from "../components/HomePage/About";
import Testimonial from "../components/HomePage/Testimonial";
import Contact from "../components/HomePage/Contact";
import Project from "../components/HomePage/Project";
export default {
  name: "HomePage",
  components: {
    Intro,
    About,
    Testimonial,
    Contact,
    Project
  }
};
</script>
<style lang="scss" >
</style>