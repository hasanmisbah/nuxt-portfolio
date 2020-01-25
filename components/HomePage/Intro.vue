<template>
  <section class="is-fullheight section" id="intro">
    <div class="container">
      <div class="columns is-desktop is-vcentered is-vertical-center">
        <div class="column is-12 intro-content">
          <p>Hello! I am</p>
          <h1 class="title is-1">Hasan Misbah</h1>
          <p>
            i am
            <strong>frontend Developer</strong>,
            <strong>WordPress Developer</strong> &amp;
            <strong>Linux Freak</strong>
          </p>
          <div class="action-btn">
            <a href="#" class="btn is-primary">Get Resume</a>
            <a href="#" class="btn outline is-primary">About Me</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../assets/stylesheet/assets";
#intro {
  align-items: center;
  min-height: 90vh;
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.6;
  .action-btn {
    margin-top: 20px;
  }
}
strong {

$count : length($span-color);




//   &:nth-child(1) {
//     box-shadow: 0 10px 0 0 rgba($color: map-get($span-color, color-1), $alpha: 0),
//       inset 0 -0.125em rgba($color: map-get($span-color, color-1), $alpha: 0.2);
//     transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
//     &:hover {
//       box-shadow: 0 1px 0 4px rgba($color: map-get($span-color, color-1), $alpha: 0.1),
//         inset 0 -1.375em 0 rgba($color: map-get($span-color, color-1), $alpha: 0.1);
//       color: map-get($span-color, color-1);
//     }
//   }
//   &:nth-child(2) {
//     box-shadow: 0 10px 0 0 rgba($color: map-get($span-color, color-2), $alpha: 0),
//       inset 0 -0.125em rgba($color: map-get($span-color, color-2), $alpha: 0.2);
//     transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
//     &:hover {
//       box-shadow: 0 1px 0 4px rgba($color: map-get($span-color, color-2), $alpha: 0.1),
//         inset 0 -1.375em 0 rgba($color: map-get($span-color, color-2), $alpha: 0.1);
//       color: map-get($span-color, color2);
//     }
//   }
//   &:nth-child(3) {
//     box-shadow: 0 10px 0 0 rgba($color: map-get($span-color, color-3), $alpha: 0),
//       inset 0 -0.125em rgba($color: map-get($span-color, color-3), $alpha: 0.2);
//     transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
//     &:hover {
//       box-shadow: 0 1px 0 4px rgba($color: map-get($span-color, color-3), $alpha: 0.1),
//         inset 0 -1.375em 0 rgba($color: map-get($span-color, color-3), $alpha: 0.1);
//       color: map-get($span-color, color-3);
//     }
//   }


}
.btn {
  @extend %has-btn;
}
$count : length($span-color);
@for $i from 0 through $count{
    strong:nth-child(#{$i}){
        box-shadow: 0 10px 0 0 rgba($color: map-get($span-color, color-#{$i}), $alpha: 0),
        inset 0 -0.125em rgba($color: map-get($span-color, color-#{$i}), $alpha: 0.2);
    }
}

</style>