<template>
  <main role="main" id="privacy-policy">
    <valpo-content class="content">
      <h1>Privacy Policy</h1>
      <section class="">
        <p>
          This is our privacy policy
          <br><br>
        </p>
      </section>
    </valpo-content>
  </main>
</template>

<script>
import ValpoContent from "@/components/ValpoContent";

export default {
  name: "PrivacyPolicy",
  components: {
    ValpoContent
  },
  data: () => ({
  })
};
</script>

<style lang="scss" scoped>

#privacy-policy {
  .content {
    h1 {
      text-align: center;
    }
    section {
      width: 100%;
    }
    text-align: left;
    background: linear-gradient(
      to bottom,
      var(--color-ocean) 0%,
      var(--color-cerulean) 100%
    );
  }
}
</style>
