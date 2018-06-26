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
        <textarea name="contactMessage" v-model="contactMessage" rows="8" cols="80" placeholder="Your message..."></textarea>
    </div>
    <button type="submit" class="button magenta" disabled>Send Message</button>
    <!-- <valpo-recaptcha/> -->
  </form>
</template>

<script>

import ValpoButton from "@/components/ValpoButton";
import ValpoRecaptcha from "@/components/ValpoRecaptcha";

export default {
  name: "contactForm",
  components: { ValpoButton, ValpoRecaptcha },
  data: () => ({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
    contactIsHuman: false
  }),
  props: {
  },
  methods: {
    processForm: function() {
      console.log({ name: this.contactName,
                    email: this.contactEmail,
                    subject: this.contactSubject }
      );
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
  button {
    float: right;
  }
}
</style>
