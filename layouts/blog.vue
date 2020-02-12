<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <Nuxt />
        </div>
        <div class="column is-4"></div>
      </div>
    </div>
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
