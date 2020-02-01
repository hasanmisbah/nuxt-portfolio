<template>
  <footer id="footer">
    <div class="container">
      <div class="columns">
        <div class="column left">
          <p class="has-text-centered-mobile">Copyright &copy; Hasan Misbah</p>
        </div>
        <div class="column right">
          <ul id="footer-social" class="has-text-right has-text-centered-mobile">
            <li>
              <a href>
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href>
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href>
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href>
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../assets/stylesheet/assets";
#footer {
  background-color: rgba(
    $color: map-get($map: $span-color, $key: color-3),
    $alpha: 0.1
  );
  color: map-get($map: $span-color, $key: color-3);
  padding: 15px 0;

  p {
    padding: 5px 0;
    font-size: 1.3rem;
  }

  &-social {
    list-style: none;

    li {
      display: inline-block;

      a {
        display: block;

        &:hover {
          i {
            border-color: map-get($map: $span-color, $key: color-3);
            background-color: rgba(
              $color: map-get($map: $span-color, $key: color-3),
              $alpha: 0.2
            );
            color: map-get($map: $span-color, $key: color-3);
          }
        }

        i {
          height: 50px;
          width: 50px;
          font-size: 25px;
          line-height: 1.15;
          text-align: center;
          color: map-get($map: $span-color, $key: color-3);
          border: 1px solid transparent;
          padding: 10px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>