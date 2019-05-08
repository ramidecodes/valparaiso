<template>
  <main role="main" id="trainings">
    <valpo-splash class="splash" :image="images.trainings">
      <!-- <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /><br> -->
      <h1>Trainings</h1>
    </valpo-splash>

    <valpo-content class="manifesto flex-rows align-center">
      <valpo-two-col-section>
        <p>
          In response to the changing world we find ourselves in, it is more important than ever to make sure we have the skills to deal with it.
        </p>
        <p>
          While general education provides a good base, it does not always keep up as quickly as it needs to, while climate change is becoming a more imminent threat each day.
        </p>
        <p>
          The Adventures of the Valparaiso is in a unique position to provide trainings in line with our partners at the European Commission, Erasmus+ and the European Solidarity Corps, and we are welcoming any new funders who wish to help us reach out to more people.
        </p>
        <p>
          Our Adventures of the Valparaiso youth exchanges see us work with young adults and youth workers, as well as partner organizations from around Europe to help deliver skills and teachings in a completely different environment.
        </p>
        <p>
          From our DIY renewable energy trainings to a focus on non-violent communications and sharing stories to promote peaceful direct action to overcome global and local issues, we also welcome professional trainers who want to pitch ideas and work with us.
        </p>
      </valpo-two-col-section>
      <p>
        For all enquiries, please email trainings@adventuresofthevalparaiso.com
        <!-- <router-link :to="{ name: 'Manifesto', params: {} }">
        </router-link> -->
      </p>
    </valpo-content>
  </main>
</template>

<script>
import ValpoSplash from "@/components/ValpoSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoButton from "@/components/ValpoButton";
import ValpoTwoColSection from "@/components/ValpoTwoColSection"

import logo from "../assets/images/logo-valparaiso.svg";
import trainings from "../assets/images/timeline/trainings_1.jpg";

export default {
  name: "Npe",
  components: {
    ValpoSplash,
    ValpoContent,
    ValpoButton,
    ValpoTwoColSection
  },
  data: () => ({
    images: { logo, trainings }
  })
};
</script>

<style lang="scss" scoped>
section.splash {
  background-position-y: 100%;
  &:after {
    background: linear-gradient(to bottom, rgba(0, 99, 135, 0) 0%, var(--color-mustard) 94%, var(--color-mustard) 100%);
    z-index: 0;
  }
}
.manifesto{
  background: var(--color-mustard)
}
.trainings {
  background: linear-gradient(to bottom, var(--color-mustard) 60%, var(--color-cerulean) 100%);
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
  img.economy {
    max-width: 65%;
    @media (max-width: 550px) {
      max-width: 100%;
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
