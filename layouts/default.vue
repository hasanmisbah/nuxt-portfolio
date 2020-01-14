<template>
  <div>
    <header>
      <Navigation />
    </header>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {};
  }
};
</script>
