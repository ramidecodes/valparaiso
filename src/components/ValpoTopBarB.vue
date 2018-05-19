<template>
  <section id="top-bar" class="flex-between">
    <valpo-main-nav/>
    <valpo-socialmedia/>
  </section>
</template>

<script>

import ValpoSocialmedia from "@/components/ValpoSocialmedia";
import ValpoMainNav from "@/components/ValpoMainNav";

export default {
  name: "TopBarB",
  components: {
    ValpoSocialmedia,
    ValpoMainNav
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
}
</style>
