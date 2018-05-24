<template>
  <section class="splash splash-youtube fixed-pseudo flex-container flex-center" :style="`backgroundImage: url(${image})`">

    <youtube  :video-id="video.src"
              :player-vars="playerVars"
              :width="windowsWidth"
              :height="windowsHeight"
              ref="youtube"
              @playing="playing"
              @paused="paused"
              @ended="ended"
              style="position:fixed;"
    />

    <div class="splash-slot" v-bind:class="{ hidden: isPlaying }">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "YoutubeSplash",
  data: () => ({
    playerVars: {
        frameborder: 0,
        controls: 0,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0
      },
    windowsWidth: window.innerWidth,
    windowsHeight: window.innerHeight,
    isPlaying: false
  }),
  props: {
    video: {
      type: Object,
      required: true
    },
    image: {
      type: String,
      required: false,
      default: ""
    }
  },
  components: {

  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
  methods: {
    async playVideo() {
      await this.player.playVideo()
    },
    playing() {
      // Hide Title when Playing
      this.isPlaying = true
    },
    paused() {
      this.isPlaying = false
      console.log("Paaaused");
    },
    ended() {
      this.isPlaying = false
    }
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
    top: -20%;
  }
  h1 {
    display: initial;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 0 1px 3px #333;
  }
  q {
    font-size: 1.5rem;
    font-weight: 500;
  }
}
</style>
