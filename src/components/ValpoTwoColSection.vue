<template>
  <section class="two-col-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "TwoColSection"
};
</script>

<style lang="scss" scoped>
.two-col-section {
  columns: 2 auto;
  column-gap: 2rem;
  margin-bottom: var(--section-bottom-margin);
  p {
    text-align: left;
  }
}
@media all and (max-width: 600px){
  .two-col-section {
    columns: 1 auto;
  }
}
</style>
