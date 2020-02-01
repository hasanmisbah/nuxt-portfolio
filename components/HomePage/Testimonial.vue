<template>
  <section id="testimonials" class="section is-fullheight">
    <div class="container">
      <div class="section-title has-text-centered">
        <h3 class="title is-3">Testimonials</h3>
        <p>Lets know! what my clients say's about me.</p>
      </div>
      <div class="columns is-vcentered is-vertical-center">
        <!-- Slider -->
        <b-carousel with-carousel-list>
          <b-carousel-item v-for="(item, index) in testimonials" :key="index" :items-to-show="3">
            <!-- Contect -->
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
            <!-- Content -->
          </b-carousel-item>
        </b-carousel>
        <!-- /Slider -->
        <!-- <div v-for="(item, index) in testimonials" :key="index" class="column is-3"> -->
        <!-- Contect -->
        <!-- <div class="testimonial">
            <div class="icon">
              <span>&#44;&#44;</span>
            </div>
            <div class="messages">
              <p class="review">{{item.messages}}</p>
              <h3>{{item.name}}</h3>
              <p class="company">{{item.company}}</p>
            </div>
        </div>-->
        <!-- Content -->
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Fabio alenca",
          messages:
            "Hasan is a great and hardworking guy. I luckily have him. He helped me so much.",
          company: "Brandica"
        },
        {
          name: "Melissa coen",
          messages:
            "Hasan is a great Designer, hard worker  and a friendly person. He Know how to maintain time and Deliver work on exact time.",
          company: "Fiverr Client"
        },
        {
          name: "Fabio alenca",
          messages:
            "Hasan is a great and hardworking guy. I luckily have him. He helped me so much.",
          company: "Brandica"
        },
        {
          name: "Melissa coen",
          messages:
            "Hasan is a great Designer, hard worker  and a friendly person. He Know how to maintain time and Deliver work on exact time.",
          company: "Fiverr Client"
        },
        {
          name: "Fabio alenca",
          messages:
            "Hasan is a great and hardworking guy. I luckily have him. He helped me so much.",
          company: "Brandica"
        },
        {
          name: "Melissa coen",
          messages:
            "Hasan is a great Designer, hard worker  and a friendly person. He Know how to maintain time and Deliver work on exact time.",
          company: "Fiverr Client"
        },
        {
          name: "Fabio alenca",
          messages:
            "Hasan is a great and hardworking guy. I luckily have him. He helped me so much.",
          company: "Brandica"
        },
        {
          name: "Melissa coen",
          messages:
            "Hasan is a great Designer, hard worker  and a friendly person. He Know how to maintain time and Deliver work on exact time.",
          company: "Fiverr Client"
        },
        {
          name: "Fabio alenca",
          messages:
            "Hasan is a great and hardworking guy. I luckily have him. He helped me so much.",
          company: "Brandica"
        },
        {
          name: "Melissa coen",
          messages:
            "Hasan is a great Designer, hard worker  and a friendly person. He Know how to maintain time and Deliver work on exact time.",
          company: "Fiverr Client"
        },
        {
          name: "Fabio alenca",
          messages:
            "Hasan is a great and hardworking guy. I luckily have him. He helped me so much.",
          company: "Brandica"
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
#testimonials {
  background-color: rgba(
    $color: map-get($map: $span-color, $key: color-5),
    $alpha: 0.05
  );
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