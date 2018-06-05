<!-- @TODO: Fix animation on hover -->
<template>
  <button class="animated">
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    url: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    target: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {

  },
  computed: {
    doBounce: function() {
      this.$_anime({
        targets: '.bounce',
        translateY: '50vh',
        duration: 300,
        loop: false,
        direction: 'alternate',
        easing: 'easeInCubic',
        scaleX: {
          value: 1.05,
          duration: 150,
          delay: 268
        }
      })
    }
  }
};
</script>
