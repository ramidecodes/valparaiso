<template>
  <main role="main" id="error404">

    <valpo-splash class="splash" :video="video" :image="images.giuliana">
      <!-- ~ we like acid yay ~ -->
      <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /><br>
    </valpo-splash>

    <valpo-content class="error404 flex-rows align-center">
      <h3>
        Error 404 - Treasure not found
      </h3>
      <valpo-two-col-section>
        <p>Valparaiso is a city located on the coastline of Chile, between the Andes and the Pacific Ocean. It was named afterby the Spanish conquerors when their ships moored upon the shores over five hundred years ago. It was the closest port city that lay along the path to a place which was considered paradise by these sailors after a long enduring journey.
        </p>
        <p>Ulysses, a dutch traveler, came to the city by coincidence. With his motorcycle left broken on the roadside in Argentina, he resorted to hitchhiking to continue his journey and found his way to Valparaiso. As he travelled through the rough exterior he began to look more into the interior of the city. He fell in love with the bohemian and artistic winds within the city and found a limitless source of inspiration. Like dirty nails and worn hands, the city had its own beauty beneath the surface.
        </p>
      </valpo-two-col-section>
    </valpo-content>
    <valpo-content id="form" class="form flex-rows fixed-pseudo" v-lazy:background-image="images.beach">
      <div class="message">
        <h3>Message in a bottle</h3>
        <p>
          Want to get in touch, have a question or just want to say hi?<br>
          We're always on the lookout for new abouts and ideas!
          <br><br>
        </p>
        <p>
          <valpo-button class="button terracota" label="Send us an email!"></valpo-button>
        </p>
      </div>
    </valpo-content>
  </main>
</template>

<script>
import ValpoSplash from "@/components/ValpoSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoButton from "@/components/ValpoButton";
import ValpoTwoColSection from "@/components/ValpoTwoColSection"

import logo from "../assets/images/logo-valparaiso.svg";
import giuliana from "../assets/images/image-giuliana.jpg";
import beach from "../assets/images/image-beach.jpg";

import light from "../assets/images/image-light.jpg";
import qr from "../assets/images/image-qr.jpg";
import birds from "../assets/images/image-birds.jpg";

export default {
  name: "Error",
  components: {
    ValpoSplash,
    ValpoContent,
    ValpoButton,
    ValpoTwoColSection
  },
  data: () => ({
    images: { logo, giuliana, beach },
    video: {
      src: "https://fat.gfycat.com/HighlevelZestyAxolotl.webm",
      loop: true
    }
  })
};
</script>

<style lang="scss" scoped>
.splash {
  .logo {
    max-width: 400px;
    width: 90%;
  }
}
.error404 {
  background: linear-gradient(
    to bottom,
    var(--color-ocean) 0%,
    rgba(0, 175, 187, 1) 100%
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
  .projects {
    padding-top: calc(var(--tracking-large) * 5);
  }
  .project-items {
    margin-top: calc(var(--tracking-large) * 2);
    li {
      margin-top: calc(var(--tracking-large) * 1);
      figure {
        width: 100%;
        img {
          border: 2px solid var(--color-light);
          border-radius: 50%;
          max-height: 160px;
        }
        figcaption {
          font-family: "BentonSans Cond";
          padding-top: 0;
        }
      }
      @media (max-width: 640px) {
        margin: 0;
        margin-bottom: 1em;
        max-width: 100%;
        width: 100%;
        figure {
          margin: 1.5em auto 0;
          max-width: 160px;
          figcaption {
            color: var(--color-light);
            margin-top: 0px;
            padding: 0.4em 1em 0.2em;
          }
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
