<template>
  <vue-recaptcha
          @verify="onVerify"
          @expired="onExpired"
          :sitekey="sitekey">
          <button class="button cerulean">Confirm your humanity</button>
</vue-recaptcha>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  export default {
    components: { VueRecaptcha },
    data: () => ({
        sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    }),
    methods: {
        onSubmit: function () {
          this.$refs.invisibleRecaptcha.execute()
        },
        onVerify: function (response) {
          console.log('Verify: ' + response)
        },
        onExpired: function () {
          console.log('Expired')
        },
        resetRecaptcha () {
          this.$refs.recaptcha.reset() // Direct call reset method
        }
    }
  };
</script>
