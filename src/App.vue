<template>
  <div>
    <!-- <transition name="transition-loading" mode="out-in">
      <valpo-loading v-if="!cached || showLoader"></valpo-loading>
    </transition> -->
    <valpo-top-bar/>
    <router-view/>
    <valpo-partners/>
    <valpo-footer v-if="$_config.site.mode === 1"></valpo-footer>
    <cookie-law theme="base"></cookie-law>
  </div>
</template>

<script>
import ValpoTopBar from "@/components/ValpoTopBar";
import ValpoFooter from "@/components/ValpoFooter";
import ValpoPartners from "@/components/ValpoPartners";
import CookieLaw from 'vue-cookie-law';

export default {
  name: "Site",
  components: { ValpoFooter, ValpoTopBar, ValpoPartners, CookieLaw }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
