<template>
  <section id="about" class="is-fullheight section">
    <div class="container">
      <div class="columns is-desktop is-vcentered is-vertical-center">
        <div class="column is-two-thirds-desktop">
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
            <skills/>
          </div>
        </div>
        <div class="column is-one-third-desktop">
          <div class="about-content">
            <div class="images">
              <img class="image" src="../../assets/img/hasanmisbah.jpg" alt="Hasan Misbah" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skills from './Skills';
export default {
    components:{
        Skills,
    }
}
</script>

<style lang="scss">
#about{
    display: flex;
    background-color: #f5f5f5;
      align-items: center;
        min-height: 90vh;
        display: flex;
        line-height: 1.5;
    .columns{
        align-items: center;
    }
    .section-title{
        margin-bottom: 1.5rem;
    }
    .action-btn{
        margin-top: 1.5rem;
    }
    .about-content{
        p{
            margin-bottom: .7rem;
        }
    }
    .images{
        img{
            border-radius: 10px;
            transform: scale(.9);
            filter: grayscale(1);
            transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                transform: scale(1);
                filter: grayscale(0);
            }
        }
    }
}
</style>