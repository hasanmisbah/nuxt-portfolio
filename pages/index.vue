<template>
  <main>
    <section id="intro" class="section is-fullheight">
      <div class="container">
        <div class="columns is-desktop is-vcentered is-vertical-center">
          <div class="column intro-content">
            <p>Hello! I am</p>
            <h1 class="title is-1">Hasan Misbah</h1>
            <p>frontend Developer, WordPress Fanatic &amp; Linux Freak</p>
            <div class="action-btn">
              <a href="#" class="btn is-primary">Get Resume</a>
              <a href="#" class="btn outline is-primary">About Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="section is-fullheight">
      <div class="container">
        <div class="columns is-desktop is-vcentered is-vertical-center">
          <div class="column about-content is-two-thirds-desktop">
            <div class="about-content">
              <div class="section-title">
                <h3 class="title is-3">About Me</h3>
              </div>
              <p>
                I am
                <strong>Hasan Misbah</strong>. From Sylhet, Bangladesh. I’m a front-end developer
              </p>
              <p>I am enthusiastic about designing and developing user friendly interface. I always learn new concepts and ideas to stay up to date with new technology.</p>
              <p>I create fun, innovative, accessible, and fast websites. I try to write every bit I code I touch more readable, modular, performant and accessible than I found it.</p>
              <p>
                Beyond front-end coding chops, I’m also passionate about sharing what I’ve learned both with my teammates and the broader web community.
                Besides my profession, I enjoy reading books, travelling, songs, movies, coding, technologies, obviously coffee and food, oh, let's stop I’ve many more.
              </p>
              <div class="action-btn">
                <a href="#" class="btn is-primary">Get Resume</a>
                <a href="#" class="btn outline is-primary">Skill</a>
              </div>
            </div>
          </div>
          <div class="column about-content is-one-third-desktop">
            <div class="about-content">
              <div class="images">
                <img class="image" src="../assets/img/hasanmisbah.jpg" alt="Hasan Misbah" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="skill" class="section is-full-height">
      <div class="container">
        <div class="columns is-desktop is-vcentered is-vertical-center">
          <div class="column">
            <div class="section-title">
              <h3 class="title is-3">About Me</h3>
            </div>

            <div class="skills">
              <div class="card">
                <h4>React</h4>
                <p>90%</p>
                <div class="progress-bar" style="width: 90%;"></div>
              </div>
              <div class="card">
                <h4>React</h4>
                <p>90%</p>
                <div class="progress-bar" style="width: 90%;"></div>
              </div>
              <div class="card">
                <h4>React</h4>
                <p>90%</p>
                <div class="progress-bar" style="width: 90%;"></div>
              </div>
              <div class="card">
                <h4>React</h4>
                <p>90%</p>
                <div class="progress-bar" style="width: 90%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",

  components: {
    Card
  },
  head() {
    return {
      title: "Hasan Misbah || Another Lazy From The Earth "
    };
  }
};
</script>
<style lang="scss" >
</style>