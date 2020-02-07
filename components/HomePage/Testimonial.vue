<template>
  <section id="testimonials" class="section is-fullheight">
    <div class="container">
      <div class="section-title has-text-centered">
        <h3 class="title is-3">Testimonials</h3>
        <p>Lets know! what my clients say's about me.</p>
      </div>
      <div class="columnss is-centered is-vcentered is-vertical-center">
        <!-- test slide -->
        <carousel
          :navigationNextLabel="slider.nextLink"
          :navigationPrevLabel="slider.prevLink"
          :perPage="3"
          class="columns is-centered is-vcentered is-vertical-center"
          :navigationEnabled="true"
          :paginationEnabled="false"
        >
          <slide class="column slide-item" v-for="(item, index) in testimonials" :key="index">
            <div class="testimonial">
              <div class="icon">
                <span>&#44;&#44;</span>
              </div>
              <div class="messages">
                <p class="review">{{item.messages}}</p>
                <h3>{{item.name}}</h3>
                <p class="company">{{item.company}}</p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      slider: {
        nextLink: '<i class="mdi mdi-chevron-right-circle-outline"></>',
        prevLink: '<i class="mdi mdi-chevron-left-circle-outline"></>'
      },
      testimonials: [
        {
          name: "Fabio alenca",
          messages:
            "Hasan is a great and hardworking guy. I luckily have him. He helped me so much.",
          company: "Brandica"
        },
        {
          name: "Suzanne",
          messages:
            "My Experience working with Hasan has been very positive. I receive quality service from him. I highly recommend him to everyone because I think he is one a of kind.",
          company: "Fiverr Client"
        },
        {
          name: "Maximilian",
          messages:
            "Hasan solved my problem super fast and exactly as I needed. I like it when someone does exactly what is needed and this was amazing. Highly recommended! Thank you!",
          company: "Fiverr Client"
        },
        {
          name: "Melissa coen",
          messages:
            "Hasan is a great Designer, hard worker  and a friendly person. He Know how to maintain time and Deliver work on exact time.",
          company: "Fiverr Client"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/assets";

.VueCarousel-navigation-button {
  i {
    font-size: 2.3rem;
    color: map-get($map: $span-color, $key: color-5);
  }
}

#testimonials {
  background-color: rgba(
    $color: map-get($map: $span-color, $key: color-5),
    $alpha: 0.05
  );
  .slide-item {
    padding-top: 25px;
  }
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  min-height: 90vh;
  .section-title {
    margin-bottom: 35px;
  }
  .testimonial {
    position: relative;
    background-color: #fff;
    padding: 10px;
    border-top: 7px solid map-get($map: $span-color, $key: color-5);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 9px 0px;
    .icon {
      position: relative;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      text-align: center;
      box-shadow: 2px 2px 10px gray;
      top: -35px;
      left: 41%;
      span {
        position: absolute;
        font-size: 80px;
        top: 0;
        left: 0;
        font-family: fantasy;
        transform: translate(11px, -65px);
        font-weight: bold;
        color: map-get($map: $span-color, $key: color-5);
      }
    }
    .messages {
      .review {
        color: #afabc3;
        line-height: 1.3;
        padding: 0 20px;
        margin-bottom: 20px;
      }
      .company {
        color: #cecece;
        margin-bottom: 10px;
        margin-left: 25px;
        text-transform: capitalize;
      }
      h3 {
        color: map-get($map: $span-color, $key: color-5);
        font-family: sans-serif;
        font-weight: 500;

        position: relative;
        padding-left: 25px;
        &::before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          background-color: map-get($map: $span-color, $key: color-5);
          width: 10px;
          height: 50px;
          transform: translate(-10px, 10px);
        }
      }
    }
  }
}
</style>