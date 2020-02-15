<template>
  <div class="container content">
    <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="false"></b-loading>
    <div class="columns is-multiline">
      <template>
        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Bulma</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Components</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">Breadcrumb</a>
            </li>
          </ul>
        </nav>
      </template>
      <template v-if="posts">
        <div v-for="(post, index) in posts" :key="index" class="column is-full">
          <article class="blog-card">
            <div class="blog-card__background">
              <div class="card__background--wrapper">
                <div
                  class="card__background--main"
                  :style="`background-image: url(${post.images});`"
                >
                  <div class="card__background--layer"></div>
                </div>
              </div>
            </div>
            <div class="blog-card__head">
              <span class="date__box">
                <span class="date__day">{{post.date | formatDate}}</span>
              </span>
            </div>
            <div class="blog-card__info">
              <h5 v-html="post.title"></h5>
              <p>
                <a href="#" class="icon-link mr-3">
                  <i class="fas fa-pen-square"></i>
                  {{post.author}}
                </a>
                <a href="#" class="icon-link" v-for="(cat, index) in post.categories" :key="index">
                  <i class="fas fa-database"></i>
                  {{cat.name}}
                </a>
              </p>
              <p>
                <a href="#" class="icon-link" v-for="(tag, index) in post.tags" :key="index">
                  <i class="fas fa-database"></i>
                  {{tag.name}}
                </a>
              </p>
              <p v-html="post.excerpt"></p>
              <a @click.prevent="singlePost(post.id)" href="#" class="btn btn--with-icon">
                <i class="fas fa-long-arrow-alt-right"></i>READ MORE
              </a>
            </div>
          </article>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "blog",
  data() {
    return {
      loading: false,
      posts: []
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://public-api.wordpress.com/rest/v1/sites/59598075/posts/")
        .then(res => {
          this.loading = false;
          res.data.posts.map((post, index) => {
            let id = index;
            let title = post.title;
            let author = post.author.name;
            let images = post.featured_image;
            let excerpt = post.excerpt;
            let link = post.short_URL;
            let date = post.date;
            let tags = post.tags;
            let categories = post.categories;
            console.log(post);
            this.posts.push({
              id,
              title,
              excerpt,
              images,
              link,
              date,
              author,
              categories,
              tags
            });
          });
          //console.log(this.posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
    singlePost(id) {
      let data = this.posts.find(x => x.id === id);
      console.log(data);
    }
  },
  beforeMount() {
    if (this.posts.length < 1) {
      this.loading = true;
      this.getPosts();
    }
  }
};
</script>

<style lang="scss">
$primary: #ffb535;
$text-color: #363738;

.content {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}
.date__box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  border: 4px solid;
  font-weight: bold;
  padding: 5px 10px;
  .date__day {
    font-size: 22px;
  }
}
.blog-card {
  padding: 30px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 13px 1px;
  margin-bottom: 1.5rem;
  .date__box {
    opacity: 0;
    transform: scale(0.5);
    transition: 300ms ease-in-out;
  }
  .blog-card__background,
  .card__background--layer {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .blog-card__background {
    padding: 15px;
    background: white;
  }
  .card__background--wrapper {
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
    position: relative;
    overflow: hidden;
  }
  .card__background--main {
    height: 100%;
    position: relative;
    transition: 300ms ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card__background--layer {
    z-index: 0;
    opacity: 0;
    background: rgba(#333, 0.9);
    transition: 300ms ease-in-out;
  }
  .blog-card__head {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-card__info {
    z-index: 10;
    background: white;
    padding: 20px 15px;
    h5 {
      transition: 300ms ease-in-out;
    }
  }
  &:hover {
    .date__box {
      opacity: 1;
      transform: scale(1);
    }
    .card__background--main {
      transform: scale(1.2) rotate(5deg);
    }
    .card__background--layer {
      opacity: 1;
    }
    .blog-card__info {
      h5 {
        color: $primary;
      }
    }
  }
}

a.icon-link {
  color: $text-color;
  transition: 200ms ease-in-out;
  i {
    color: $primary;
  }
  &:hover {
    color: $primary;
    text-decoration: none;
  }
}

.btn {
  background: white;
  color: $text-color;
  font-weight: bold;
  outline: none;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 0;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  padding: 0;
  border: none;
  transition: all 0.3s;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: $primary;
    color: #fff;
  }
  &.btn--with-icon {
    padding-right: 20px;
    i {
      padding: 0px 30px 0px 15px;
      margin-right: 10px;
      height: 50px;
      line-height: 50px;
      vertical-align: bottom;
      color: white;
      background: $primary;
      clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
    }
  }
  &.btn--only-icon {
    width: 50px;
  }
}
</style>