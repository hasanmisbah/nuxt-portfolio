<template>
  <section id="portfolio" class="section is-full-height">
    <div class="container">
      <div class="columns is-desktop is-vcentered is-vertical-center">
        <div class="column is-3">
          <div class="card portfolio-card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-3">John Smith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <a href="#" class="card-footer-item">
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="#" class="card-footer-item">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
              <div class="card-footer-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      portfolio: null
    };
  }
};
</script>

<style lang="scss">
</style>