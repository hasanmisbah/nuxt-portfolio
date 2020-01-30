<template>
  <section id="contact" class="is-fullheight section">
    <div class="container">
      <div class="columns is-desktop is-vcentered is-vertical-center is-centered">
        <div class="column is-two-thirds is-centered">
          <div class="section-title has-text-centered">
            <h3 class="title is-3">Contact</h3>
            <p>Have any question or just want to get in touch?</p>
            <p>Drop me a message and i will contact you back shortly</p>
          </div>
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
              <button :class="loading? 'is-loading' : ''" class="button is-danger is-medium">
                <span>Send</span>
                <span class="icon">
                  <i class="fa fa-paper-plane"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <FlashMessage position="right bottom" clickable></FlashMessage>
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
      },
      userInfo: {
        ip: "",
        country: "",
        city: ""
      }
    };
  },
  methods: {
    notify(status) {
      if (status == "error") {
        this.flashMessage.show({
          status: status,
          title: "oops! There is an error to send",
          message: "Try Again",
          blockClass: "flash-messages",
          time: 10000
        });
      } else if (status == "success") {
        this.flashMessage.show({
          status: status,
          title: "Thank you for being awesome!",
          message: "I will contact you back shortly",
          blockClass: "flash-messages",
          time: 10000
        });
      }
    },
    submitForm(e) {
      this.loading = true;
      let self = this;
      let { name, subject, email, messages } = this.formsData;
      let { ip, country, city } = this.userInfo;
      axios
        .post("https://submit-form.com/pXmSXkeivd4BRfYC9B_2c", {
          name,
          subject,
          email,
          messages,
          from: city + ", " + country,
          ip
        })
        .then(function(response) {
          self.loading = false;
          self.notify("success");
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    let self = this;
    axios
      .get("https://freegeoip.app/json/")
      .then(function(response) {
        let data = response.data;
        self.userInfo.ip = data.ip;
        self.userInfo.country = data.country_name;
        self.userInfo.city = data.city;
      })
      .catch(function(error) {});
  }
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/assets";
#contact {
  .btn.primary {
    @extend %has-btn;
    cursor: pointer;
  }
  .flash-messages {
    z-index: 99999;
  }
}
</style>
