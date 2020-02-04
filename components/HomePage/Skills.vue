<template>
  <div id="skills">
    <div class="section-title">
      <h3 class="title is-3">Skills</h3>
    </div>
    <div class="skill skill-primary">
      <h2 class="key-skill title is-4">PROFICIENT</h2>
      <ul>
        <li v-for="(skill, index ) in primarySkills" :key="index">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                <i :class="skill.icon"></i>
              </span>
              <span class="tag is-info">{{skill.name}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="skill skill-familiar">
      <h2 class="key-skill title is-4">FAMILIAR WITH</h2>
      <ul>
        <li v-for="(skill, index ) in familiarSkill" :key="index">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                <i :class="skill.icon"></i>
              </span>
              <span class="tag is-info">{{skill.name}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classID: 0,
      primarySkills: [
        {
          name: "HTML5",
          icon: "mdi mdi-language-html5",
          label: "85"
        },
        {
          name: "CSS3",
          icon: "mdi mdi-language-css3",
          label: "85"
        },
        {
          name: "Javascript",
          icon: "mdi mdi-language-javascript",
          label: "75"
        },
        {
          name: "Jquery",
          icon: "mdi mdi-jquery",
          label: "75"
        },
        {
          name: "VueJS",
          icon: "mdi mdi-vuejs",
          label: "75"
        },

        {
          name: "PHP",
          icon: "mdi mdi-language-php",
          label: "80"
        },
        {
          name: "mySql",
          icon: "devicons devicons-mysql",
          label: "85"
        },
        {
          name: "laravel",
          icon: "mdi mdi-laravel",
          label: "50"
        },
        {
          name: "Adobe Photshop",
          icon: "devicons devicons-photoshop",
          label: "90"
        },
        {
          name: "Bootstrap",
          icon: "devicons devicons-bootstrap",
          label: "85"
        },
        {
          name: "Sass",
          icon: "mdi mdi-sass",
          label: "85"
        },

        {
          name: "Git",
          icon: "mdi mdi-git",
          label: "85"
        }
      ],
      familiarSkill: [
        {
          name: "Nuxt JS",
          icon: "mdi mdi-nuxt",
          label: "70"
        },
        {
          name: "Vuex",
          icon: "fab fa-vuejs",
          label: "70"
        },
        {
          name: "Vuetify",
          icon: "mdi mdi-vuetify",
          label: "70"
        },
        {
          name: "BulmaCSS",
          icon: "mdi mdi-bulma",
          label: "70"
        },
        {
          name: "MaterializeCSS",
          icon: "devicons devicons-materializecss",
          label: "70"
        },
        {
          name: "Ubuntu",
          icon: "mdi mdi-ubuntu",
          label: "70"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/assets";
#skills {
  .color-1 {
    span.dark {
      background-color: map-get($map: $span-color, $key: color-1);
      color: #ffffff;
    }
    span.info {
      background-color: rgba(
        $color: map-get($map: $span-color, $key: color-1),
        $alpha: 0.2
      );
      color: map-get($map: $span-color, $key: color-1);
    }
  }
  .title.is-4 {
    margin-bottom: 0.6rem;
  }
  .skill {
    margin-bottom: 1.6rem;
  }
  ul {
    li {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 0.5rem;
      .control {
        span {
          font-size: 1.125rem;
        }
      }
    }
  }
}
</style>