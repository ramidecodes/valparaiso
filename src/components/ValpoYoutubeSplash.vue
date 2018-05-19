<template>
  <section class="splash fixed-pseudo flex-container flex-center" :style="`backgroundImage: url(${image})`">
    <youtube :video-id="video.src"></youtube>
    <div class="splash-slot">
      <slot></slot>
    </div>
  </section>
</template>

<script>

import youtube from 'vue-youtube-embed';

export default {
  name: "YoutubeSplash",
  props: {
    video: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false,
      default: ""
    }
  },
  components: {
    youtube
  }
};
</script>

<style lang="scss" scoped>
.splash {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: var(--wrapper-width);
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100vw;
  &:after {
    background: rgba(1, 85, 107, 0.2);
  }
  video {
    left: 0;
    position: absolute;
    top: 0;
    z-index: 10;
  }
  .splash-slot {
    position: relative;
    width: 100%;
    z-index: 15;
  }
  h1 {
    display: initial;
  }
  q {
    font-size: 1.5rem;
    font-weight: 500;
  }
}
</style>
