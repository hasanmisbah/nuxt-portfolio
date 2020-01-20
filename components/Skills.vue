<template>
  <section id="skill" class="section is-full-height">
    <div class="container">
      <div class="columns is-desktop is-vcentered is-vertical-center">
        <div class="column">
          <div class="section-title">
            <h3 class="title is-3">Skills</h3>
          </div>

          <div class="skills">
            <div class="card" v-for="(skill, index) in skillsItem" :key="index">
              <h4>{{skill.name}}</h4>
              <p>{{skill.label}}%</p>
              <div class="progress-bar" :style="'width: '+skill.label+'%;'"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillsItem: [
        {
          name: "HTML5 & CSS3",
          icon: "fab fa-html5",
          label: "85"
        },
        {
          name: "Javascript & Jquery",
          icon: "fab fa-html5",
          label: "75"
        },
        {
          name: "VueJS",
          icon: "fab fa-html5",
          label: "75"
        },
        {
          name: "Nuxt JS",
          icon: "fab fa-html5",
          label: "70"
        },
        {
          name: "PHP",
          icon: "fab fa-html5",
          label: "80"
        },
        {
          name: "laravel",
          icon: "fab fa-html5",
          label: "50"
        },
        {
          name: "Adobe Photshop",
          icon: "fab fa-html5",
          label: "90"
        },
        {
          name: "WordPress",
          icon: "fab fa-html5",
          label: "85"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
