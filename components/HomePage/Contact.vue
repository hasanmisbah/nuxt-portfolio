<template>
  <section id="contact" class="is-fullheight section">
    <div class="container">
      <div class="columns is-desktop is-vcentered is-vertical-center is-centered">
        <div class="column is-two-thirds is-centered">
          <template v-if="loading">
            <b-loading is-full-page :active.sync="loading" :can-cancel="false"></b-loading>
          </template>
          <form @submit.prevent="submitForm()">
            <input
              type="checkbox"
              name="_honeypot"
              style="display:none"
              tabindex="-1"
              autocomplete="off"
            />
            <div class="field">
              <label class="label">Name</label>
              <p class="control has-icons-left">
                <input v-model="formsData.name" class="input" type="text" placeholder="Name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <p class="control has-icons-left">
                <input v-model="formsData.email" class="input" type="email" placeholder="Email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <label class="label">Subject</label>
              <p class="control has-icons-left">
                <input
                  v-model="formsData.subject"
                  name="subject"
                  class="input"
                  type="text"
                  placeholder="Subject"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-pen"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea v-model="formsData.messages" class="textarea"></textarea>
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">Login</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      loading: false,
      formsData: {
        name: "",
        email: "",
        subject: "",
        messages: ""
      }
    };
  },
  methods: {
    submitForm(e) {
      this.loading = true;
      let self = this;
      let { name, subject, email, messages } = this.formsData;
      axios
        .post("https://submit-form.com/pXmSXkeivd4BRfYC9B_2c", {
          name,
          subject,
          email,
          messages
        })
        .then(function(response) {
          console.log(response);
          self.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
</style>
