<template>
  <main role="main" id="contact" :style="`backgroundImage: url(${images.beach})`">
    <valpo-content id="form" class="form">
      <h1>Send us a message in a bottle!</h1>
      <section class="message">
        <p>
          Want to get in touch, have a question or just want to say hi?<br>
          We're always on the lookout for new visions and ideas!
          <br><br>
        </p>
        <p>Sends us an email to crew@adventuresofthevalparaiso.com</p>
        <!-- <ValpoContactForm/> -->
      </section>
    </valpo-content>
  </main>
</template>

<script>
import ValpoSplash from "@/components/ValpoSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoContactForm from "@/components/ValpoContactForm";


import beach from "../assets/images/image-beach.jpg";

export default {
  name: "Contact",
  components: {
    ValpoContent,
    ValpoContactForm
  },
  data: () => ({
    images: { beach }
  })
};
</script>

<style lang="scss" scoped>

#contact {
  h1 {
    text-shadow: 0 0 6px #888;
  }
  background-size: cover;
  padding-top: calc(var(--tracking-large) * 5);
  .message {
    width: 60%;
    align-self:flex-start;
    padding-top: 1em;
    @media (max-width: 1280px) {
      width: 70%;
    }
    @media (max-width: 1100px) {
      width: 100%;
    }
    p {
    font-size: 22px;
    }
  }
}
</style>
