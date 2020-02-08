<template>
  <section id="project" class="is-fullheight section">
    <div class="container">
      <div class="section-title">
        <h3 class="title is-3 has-text-centered">Project</h3>
        <p class="has-text-centered">Some of my project i worked/working</p>
      </div>
      <div class="columns custom-columns is-vcentered is-vertical-center">
        <div class="column is-4">
          <div class="project-content">
            <div class="card">
              <header class="card-header">
                <h3 class="card-header-title has-text-centered">Component</h3>
              </header>
              <!-- <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" />
                </figure>
              </div>-->
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer class="card-footer">
                <div class="card-footer-item">
                  <div class="stack">
                    <i class="fab fa-github"></i>
                    <i class="fab fa-php"></i>
                    <i class="fab fa-php"></i>
                  </div>
                </div>
                <div class="card-footer-item">
                  <div class="stack">
                    <i class="fas fa-external-link-alt"></i>
                    <i class="fas fa-code-branch"></i>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "~/assets/stylesheet/assets.scss";
#project {
  display: flex;
  min-height: 90vh;
  align-items: center;
  .section-title {
    margin-bottom: 1rem;
    p {
      margin-top: -1rem;
    }
  }
  .project-content {
    .card {
      background-color: rgba(
        $color: map-get($map: $span-color, $key: color-5),
        $alpha: 0.015
      );
      box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 9px 0px;
      .content {
        font-size: 1.2rem;
      }
    }
    .stack {
      i {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>