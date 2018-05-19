<template>
  <div>
    <!-- <transition name="transition-loading" mode="out-in">
      <valpo-loading v-if="!cached || showLoader"></valpo-loading>
    </transition> -->
    <valpo-top-bar-b/>
    <router-view/>
    <valpo-partners/>
    <valpo-footer v-if="$_config.site.mode === 1"></valpo-footer>
  </div>
</template>

<script>
import ValpoTopBar from "@/components/ValpoTopBar";
import ValpoTopBarB from "@/components/ValpoTopBarB";
import ValpoFooter from "@/components/ValpoFooter";
import ValpoPartners from "@/components/ValpoPartners";

export default {
  name: "Site",
  components: { ValpoFooter, ValpoTopBar,ValpoTopBarB, ValpoPartners }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
