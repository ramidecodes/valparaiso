<template>
  <section class="content flex-container">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  max-width: var(--wrapper-width);
  padding: 2em 4em;
  padding-bottom: 5em;
  padding-top: calc(var(--tracking-large) * 5);
  position: relative;
  width: 100%;
  h1,h2,h3 {
    text-align: center;
    max-width: 100%;
    font-weight: bold;
    padding-bottom: 1em;
  }
  h1{
    margin-bottom: 1em;
  }
}
</style>
