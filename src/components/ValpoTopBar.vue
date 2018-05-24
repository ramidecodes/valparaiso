<template>
  <section id="top-bar" class="flex-between">
    <valpo-main-nav/>
    <section class="logo">
      <router-link :to="{ name: 'Index'}">
        <valpo-logo/>
        <!-- <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /> -->
      </router-link>
    </section>
    <valpo-socialmedia/>
  </section>
</template>

<script>

import ValpoSocialmedia from "@/components/ValpoSocialmedia"
import ValpoMainNav from "@/components/ValpoMainNav"
import ValpoLogo from "@/components/ValpoLogo"

export default {
  name: "TopBar",
  components: {
    ValpoSocialmedia,
    ValpoMainNav,
    ValpoLogo
  },
  data: () => ({

  }),
}
</script>

<style lang="scss">
#top-bar {
  position: fixed;
  z-index: 20;
  background: var(--color-ocean);
  width: 100%;
  max-height: 70px;
  box-shadow: 0 1px 5px #333;
  .logo {
    margin: 0;
    width: 204px;
    padding-top: 10px;
    @media (max-width: 630px){
      margin-right: 20px;
    }
  }
}
</style>
