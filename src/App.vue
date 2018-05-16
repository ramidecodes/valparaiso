<template>
  <div>
    <!-- <transition name="transition-loading" mode="out-in">
      <valpo-loading v-if="!cached || showLoader"></valpo-loading>
    </transition> -->
    <valpo-side-menu/>
    <router-view/>
    <valpo-partners/>
    <valpo-footer v-if="$_config.site.mode === 1"></valpo-footer>
  </div>
</template>

<script>
import ValpoSideMenu from "@/components/ValpoSideMenu";
import ValpoFooter from "@/components/ValpoFooter";
import ValpoPartners from "@/components/ValpoPartners";

export default {
  name: "Site",
  components: { ValpoFooter, ValpoSideMenu, ValpoPartners }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
