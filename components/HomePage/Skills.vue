<template>
  <div id="skills">
    <div class="skill-primary">
      <h2 class="key-skill">Key Skill</h2>
      <ul>
        <li v-for="(skill, index ) in primarySkills" :key="index">
          <b-taglist attached>
            <b-tag type="is-info" size="is-large">
              <i :class="skill.icon"></i>
            </b-tag>
            <b-tag type="is-info" size="is-large">{{skill.name}}</b-tag>
          </b-taglist>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primarySkills: [
        {
          name: "HTML5",
          level: "5",
          icon: "fab fa-html5"
        },
        {
          name: "CSS3",
          level: "5",
          icon: "fab fa-html5"
        },
        {
          name: "Javascript",
          level: "5",
          icon: "fab fa-html5"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#skills {
  ul {
    li {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
</style>