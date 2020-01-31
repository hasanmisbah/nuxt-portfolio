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
            <b-field grouped>
              <b-field label="Name" expanded>
                <b-field>
                  <b-input v-model="formsData.name" placeholder="Name" expanded required></b-input>
                </b-field>
              </b-field>
              <b-field label="Email" expanded>
                <b-input v-model="formsData.email" placeholder="you@email.com" required></b-input>
              </b-field>
            </b-field>

            <b-field grouped>
              <b-field label="Phone (Optional)" expanded>
                <b-field>
                  <b-input v-model="formsData.phone" type="tel" placeholder="Phone" expanded></b-input>
                </b-field>
              </b-field>
              <b-field label="Subject" expanded>
                <b-input v-model="formsData.subject" placeholder="Subject" required></b-input>
              </b-field>
            </b-field>

            <b-field>
              <b-field label="Messages" expanded>
                <b-input
                  v-model="formsData.messages"
                  type="textarea"
                  placeholder="Messages"
                  required
                ></b-input>
              </b-field>
            </b-field>

            <div class="field">
              <b-button
                :disabled="sendButton"
                :loading="loading"
                native-type="submit"
                icon-pack="fa"
                type="is-danger is-medium"
                icon-right="paper-plane"
              >Send</b-button>
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
      online: null,
      validated: {
        submit: true,
        name: false,
        email: false,
        subject: false,
        messages: false
      },
      formsData: {
        name: "",
        email: "",
        phone: "",
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
  computed: {
    sendButton() {
      if (this.validate()) {
        return false;
      } else {
        return true;
      }
    },
    statusCheck() {
      $nuxt.isOffline ? (this.status = false) : (this.status = true);
      return this.status;
    }
  },
  methods: {
    notify(status) {
      if (status == "error") {
        this.flashMessage.show({
          status: status,
          title: "oops! There is an error to send",
          message: "Try Again",
          blockClass: "flash-messages",
          time: 20000
        });
      } else if (status == "success") {
        this.flashMessage.show({
          status: status,
          title: "Thank you for being awesome!",
          message: "I will contact you back shortly",
          blockClass: "flash-messages",
          time: 20000
        });
      }
    },
    validate() {
      let { name, email, subject, messages } = this.formsData;
      if (name && email && subject && messages) {
        return true;
      } else {
        return false;
      }
    },
    submitForm(e) {
      this.loading = true;
      let self = this;
      let { name, subject, email, phone, messages } = this.formsData;
      let { ip, country, city } = this.userInfo;
      axios
        .post("https://submit-form.com/pXmSXkeivd4BRfYC9B_2c", {
          name,
          subject,
          email,
          phone,
          messages,
          from: city + ", " + country,
          ip
        })
        .then(function(response) {
          self.loading = false;
          self.formsData.name = "";
          self.formsData.subject = "";
          self.formsData.email = "";
          self.formsData.phone = "";
          self.formsData.messages = "";
          self.notify("success");
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
  .section-title {
    margin-bottom: 25px;
  }
  .btn.primary {
    @extend %has-btn;
    cursor: pointer;
  }
  .flash-messages {
    z-index: 99999;
  }
}
</style>
