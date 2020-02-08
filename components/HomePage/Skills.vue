<template>
  <div id="skills">
    <div class="section-title">
      <h3 class="title is-3">Skills</h3>
    </div>
    <div class="skill skill-primary">
      <h2 class="key-skill title is-4">Language</h2>
      <ul class="columns is-multiline is-centered">
        <li
          v-for="(skill, index ) in primarySkills"
          :key="index"
          class="column is-narrow is-one-third-desktop is-full-mobile"
        >
          <div class="control">
            <div class="tags has-addons">
              <span class="tag icon">
                <i :class="skill.icon"></i>
              </span>
              <span class="tag">{{skill.name}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="skill skill-familiar">
      <h2 class="key-skill title is-4">Framework/Tools</h2>
      <ul class="columns is-multiline">
        <li
          v-for="(skill, index ) in familiarSkill"
          :key="index"
          class="column is-narrow is-one-third-desktop is-full-mobile"
        >
          <div class="control">
            <div class="tags has-addons">
              <span class="tag icon">
                <i :class="skill.icon"></i>
              </span>
              <span class="tag">{{skill.name}}</span>
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
          icon: "mdi mdi-language-html5 mdi-24px",
          label: "85"
        },
        {
          name: "CSS3",
          icon: "mdi mdi-language-css3 mdi-24px",
          label: "85"
        },
        {
          name: "Javascript",
          icon: "mdi mdi-language-javascript mdi-24px",
          label: "75"
        },
        {
          name: "Jquery",
          icon: "mdi mdi-jquery mdi-24px",
          label: "75"
        },
        {
          name: "VueJS",
          icon: "mdi mdi-vuejs mdi-24px",
          label: "75"
        },

        {
          name: "PHP",
          icon: "mdi mdi-language-php mdi-24px",
          label: "80"
        },
        {
          name: "mySql",
          icon: "devicons devicons-mysql",
          label: "85"
        },
        {
          name: "laravel",
          icon: "mdi mdi-laravel mdi-24px",
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
          icon: "mdi mdi-sass mdi-24px",
          label: "85"
        },

        {
          name: "Git",
          icon: "mdi mdi-git mdi-24px",
          label: "85"
        }
      ],
      familiarSkill: [
        {
          name: "Nuxt JS",
          icon: "mdi mdi-nuxt mdi-24px",
          label: "70"
        },
        {
          name: "Vuex",
          icon: "fab fa-vuejs mdi-24px",
          label: "70"
        },
        {
          name: "Vuetify",
          icon: "mdi mdi-vuetify mdi-24px",
          label: "70"
        },
        {
          name: "BulmaCSS",
          icon: "mdi mdi-bulma mdi-24px",
          label: "70"
        },
        {
          name: "MaterializeCSS",
          icon: "devicons devicons-materializecss",
          label: "70"
        },
        {
          name: "Ubuntu",
          icon: "mdi mdi-ubuntu mdi-24px",
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
    margin-top: 20px;
    display: flex;
    li {
      font-weight: 600;
      .control {
        width: 100%;
        .tags {
          background-color: #ffffff;
          border-right: 3px solid transparent;
          transition: all 0.3s ease-in;
          &:hover {
            border-color: map-get($map: $span-color, $key: color-5);
          }
          .tag {
            color: map-get($map: $span-color, $key: color-5);
            background-color: transparent;
            margin: 0;
            padding: 0.6rem;
            &.icon {
              margin-right: 10px;
              padding-right: 1.5rem;
              padding-left: 1.5rem;
              background-color: map-get($map: $span-color, $key: color-5);
              color: #ffffff;
            }
          }
        }
        span {
          font-size: 1.125rem;
        }
      }
    }
  }
}
</style>