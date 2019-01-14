<template>
  <form id="contactForm" class="contactForm" @submit.prevent="processForm">
    <div class="field">
        <!-- <label class="label">Name</label> -->
        <input type="text" name="name" v-model="contactName" class="input" placeholder="Name..." autofocus required>
    </div>
    <div class="field">
        <!-- <label class="label">Email</label> -->
        <input type="email" name="email" v-model="contactEmail" class="input" placeholder="your@email.com" required>
    </div>
    <div class="select">
      <p>Select Subject</p>
      <select class="contactSubject field" v-model="contactSubject" name="contactSubject" required>
        <option value="Volunteer Opportunities" lable="Volunteer Opportunities">Volunteer Opportunities</option>
        <option value="Partnership Opportunities" label="Partnership Opportunities">Partnership Opportunities</option>
        <option value="General Tips and Questions" label="General Tips & Questions">General Tips & Questions</option>
      </select>
    </div>
    <div class="field textarea">
        <textarea name="contactMessage" v-model="contactMessage" rows="8" cols="80" placeholder="Your message..." required></textarea>
    </div>
    <div class="confirmation">
      <label class="label">Are you Human? What's 3 * 3?</label><input type="number" v-model="contactHumanCheck" name="humanCheck" value="" required>
      <button type="submit" :class="{disabled: !contactIsHuman}" class="button magenta">Send Message</button>
    </div>
    <!-- <valpo-recaptcha/> -->
  </form>
</template>

<script>

import ValpoButton from "@/components/ValpoButton";
import ValpoRecaptcha from "@/components/ValpoRecaptcha";
import firebase from "firebase"

firebase.initializeApp({
    apiKey: "AIzaSyAxobPYZVHkG1TfpkENA1KoZLtm9m_uews",
    authDomain: "valparaiso-b2287.firebaseapp.com",
    databaseURL: "https://valparaiso-b2287.firebaseio.com",
    projectId: "valparaiso-b2287",
    storageBucket: "valparaiso-b2287.appspot.com",
    messagingSenderId: "630564716917"
  });


const addMessage = firebase.functions().httpsCallable('sendMessage');


export default {
  name: "contactForm",
  components: { ValpoButton, ValpoRecaptcha },
  data: () => ({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
    contactHumanCheck: ''
  }),
  props: {
  },
  computed: {
    contactIsHuman: function() { return parseInt(this.contactHumanCheck, 10) === 9 },
    emailDestination: function() {
      switch (this.contactSubject) {
        case 'Volunteer Opportunities':
          return 'crew@adventuresofthevalparaiso.com';
          break;
        case 'Partnership Opportunities':
          return 'ulysses@adventuresofthevalparaiso.com';
          break;
        default:
          return 'marketing@adventuresofthevalparaiso.com'
      }
    }
  },
  methods: {
    processForm: function() {
      if (this.contactIsHuman) {
        const messageData = {
          name: this.contactName,
          email: this.contactEmail,
          subject: this.contactSubject,
          destination: this.emailDestination,
          message: this.contactMessage
        };
        addMessage(messageData).then(function(result) {
          // Check if message was sent successfully and show confirmatino message
          console.log(result)
        });
      }
    }
  }
};


</script>

<style lang="scss" scoped>
#contactForm{
  color: var(--color-dark-text);
  .field {
    border: 1px solid white;
    margin: 10px 0;
    padding: 10px;
    background: rgba(255, 255, 255, 0.33);
    input.input {
      width: 100%;
    }
    textarea {
      line-height: 1.5;
    }
  }
  .select {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    p {
      color: #555;
      text-align: left;
      padding: 13px 10px;
      max-width: 33%;
      font-size: 22px;
    }
    select.contactSubject.field {
      width: 100%;
    }
  }
  .confirmation{
    label {
      color: #555;
      font-size: 22px,
    }
    input {
      width: 25%;
      border: 1px solid white;
      margin: 0 5px 0 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.33);
    }
    button.disabled {
      background: gray
    }
  }
  button {
    float: right;
  }
}
</style>
