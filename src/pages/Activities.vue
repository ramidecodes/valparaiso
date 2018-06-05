<template>
  <main role="main" id="activities">

    <valpo-splash class="splash" :image="images.stories">
      <h1>Upcoming Events & Festivals</h1>
    </valpo-splash>

    <valpo-content class="activities flex-rows fixed-pseudo">
      <p class="lead-paragraph align-center">
        Be part of the <strong>New Pirate Economy</strong> by participating in our monthly activities.
      </p>

      <valpo-fb-events/>

      <valpo-events/>
    </valpo-content>
  </main>
</template>

<script>
import ValpoSplash from "@/components/ValpoSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoList from "@/components/ValpoList";
import ValpoListItem from "@/components/ValpoListItem";
import ValpoButton from "@/components/ValpoButton";
import ValpoEvents from "@/components/ValpoEvents";
import ValpoFbEvents from "@/components/ValpoFbEvents";

import stories from "@/assets/images/headers/trade-stories.jpg";

export default {
  name: "Activities",
  components: {
    ValpoSplash,
    ValpoContent,
    ValpoList,
    ValpoListItem,
    ValpoButton,
    ValpoEvents,
    ValpoFbEvents
  },
  data: () => ({
    images: { stories }
    // video: {
    //   src: "https://fat.gfycat.com/HighlevelZestyAxolotl.webm",
    //   loop: true
    // }
  })
};
</script>

<style lang="scss" scoped>
section.splash {
  background-position-y: 100%;
  &:after {
    background: linear-gradient(to bottom, rgba(0, 99, 135, 0) 0%, var(--color-ocean) 94%, var(--color-ocean) 100%);
    z-index: 0;
  }
}
.activities {
  background: linear-gradient(
    to bottom,
    var(--color-ocean) 0%,
    var(--color-cerulean) 100%
  );
  padding-bottom: calc(var(--tracking-large) * 5);
  padding-top: calc(var(--tracking-large) * 5);
  .icons {
    margin: 0 auto;
    margin-top: calc(var(--tracking-large) * 2);
    max-width: 740px;
    text-align: center;
    width: 100%;
    li {
      margin: 1.8em 2.5vw;
      margin-top: calc(var(--tracking-large) * 1);
      width: 20%;
      @media (max-width: 800px) {
        margin-top: 0;
      }
      @media (max-width: 550px) {
        margin: 0;
        max-width: 100%;
        width: 100%;
        figure {
          margin: 1.5em auto;
          max-width: 160px;
        }
      }
    }
  }
}
.form {
  background-color: rgba(0, 175, 187, 1);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  margin-top: -1px;
  min-height: 80vh;
  position: relative;
  .message {
    bottom: 10%;
    left: 0;
    margin: 0 auto;
    max-width: 1040px;
    padding: 2em;
    position: absolute;
    right: 0;
    width: 100%;
  }
  &:before {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      var(--color-ocean) 81%,
      var(--color-ocean) 100%
    );
    opacity: 0.5;
    z-index: 0;
  }
}
</style>
