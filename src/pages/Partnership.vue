<template>
  <main role="main" id="partnership">
    <valpo-splash class="splash" :image="images.partnership">
      <h1>Become our Partner</h1>
    </valpo-splash>

    <valpo-content class="partnership flex-rows align-center">
      <h1>Get Involved!</h1>
      <valpo-two-col-section>
        <p>
          We have a brave, collective vision. A vision of a sustainable future; of a fair, people-oriented marketplace driven by human connection and the stories that we can only create together.
        </p>
        <p>
          By hosting travellers, participating in international festivals, and producing online content to share our stories, we are quickly spreading our message all over the world.
        </p>
        <p>
          And now we’re looking for a ship, be it abandoned or donated, to spread our message even further across the globe. We will refit it through creativity, skill and sustainable solutions to transform into unique, renewable community home.
        </p>
        <p>
          We’re looking for partners who want to be a part of this journey, not just in our practical support stages, but also in the creative initiatives.
        </p>
      </valpo-two-col-section>
      <p class="lead-paragraph">
        Please contact our crew if you are interested or would like to learn more.
      </p>
      <p>
        <valpo-button class="button magenta" label="Send us an email!"></valpo-button>
      </p>

    </valpo-content>
  </main>
</template>

<script>
import ValpoSplash from "@/components/ValpoSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoList from "@/components/ValpoList";
import ValpoListItem from "@/components/ValpoListItem";
import ValpoButton from "@/components/ValpoButton";
import ValpoTwoColSection from "@/components/ValpoTwoColSection"

import logo from "../assets/images/logo-valparaiso.svg";
import partnership from "../assets/images/headers/partnership.jpg";

import iconBuilding from "../assets/images/icon-building.svg";
import iconDesign from "../assets/images/icon-design.svg";
import iconVideo from "../assets/images/icon-video.svg";
import iconMarketing from "../assets/images/icon-marketing.svg";
import iconSocial from "../assets/images/icon-social.svg";

export default {
  name: "Partnership",
  components: {
    ValpoSplash,
    ValpoContent,
    ValpoList,
    ValpoListItem,
    ValpoButton,
    ValpoTwoColSection
  },
  data: () => ({
    images: { logo, partnership },
  })
};
</script>

<style lang="scss" scoped>
section.splash {
  background-position-y: 133%;
  &:after {
    background: linear-gradient(
      to bottom,
      rgba(0, 99, 135, 0) 0%,
      var(--color-ocean) 94%,
      var(--color-ocean) 100%);
    z-index: 0;
  }
}
.partnership {
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
