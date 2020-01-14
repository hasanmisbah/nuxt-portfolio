<template>
  <main>
    <header>
      <Navigation />
      <Nuxt />
    </header>
  </main>
</template>
<script>
import Navigation from "../components/Navigation";
export default {
  components: {
    Navigation
  },
  data() {
    return {};
  }
};
</script>
