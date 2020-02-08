<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
