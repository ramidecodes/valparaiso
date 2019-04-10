<template>
  <footer id="footer" class="footer content flex-around">
    <div class="socialmedia">
      <h4 class="align-center">Join us on our journey!</h4>
      <valpo-socialmedia/>
    </div>
    <p class="align-center">
      <br>
      <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaíso" />
      <br>
      <br>
      Site by <router-link :to="{ name: 'About', params: { focus: 'crew' }}" title="Art &amp; Design">Alexis Camejo</router-link>, <router-link :to="{ name: 'About', params: { focus: 'crew' }}" title="Development">Timo Heddes &amp; Ramiro Ramirez</router-link>
    </p>
    <p class="align-center">
      Stichting Adventures of the Valparaíso<br>
      NL32TRIO0338494154
      <br>
      <br>
      <router-link :to="{ name: 'PrivacyPolicy', params: {} }">Privacy Policy</router-link>
      <br>
      <br>
      &copy; 2014-{{thisYear}} All rights (and lefts) reserved
    </p>
  </footer>
</template>

<script>

import logo from "../assets/images/logo-valparaiso.svg";
import ValpoSocialmedia from "@/components/ValpoSocialmedia";

export default {
  name: "Footer",
  components: {ValpoSocialmedia},
  data: () => ({
    images: { logo },
    thisYear : new Date().getFullYear()
  })
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--color-elephant);
  font-size: 0.9em;
  margin: 0 auto;
  max-width: var(--wrapper-width);
  min-height: 20vh;
  padding-top: calc(var(--tracking-large) * 5);
  padding: 2em;
  position: relative;
  width: 100%;
  @media (max-width: 680px) {
    flex-direction: column-reverse;
  }
  p {
    width: 33%;
    @media (max-width: 680px) {
      text-align: center;
      width: 100%;
    }
  }
  .logo {
    margin-top: calc(var(--tracking-large) * 1);
    max-width: 250px;
  }
  .socialmedia {
    align-self: center;
}
}
@media (max-width: 550px){
  footer li.valpo-list-item {
    width: inherit;
  }
}
</style>
