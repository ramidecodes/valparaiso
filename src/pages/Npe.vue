<template>
  <main role="main" id="npe">
    <valpo-splash class="splash" :image="images.ship">
      <!-- <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /><br> -->
      <h1>New Pirate Economy</h1>
      <div>
        <q cite="The Pirate">
          We are landlubbers because Mother Earth gives us her great resources.<br>
          We are pirates because the best ideas don’t know limits.
        </q>
      </div>
    </valpo-splash>

    <valpo-content class="manifesto flex-rows align-center">
      <h2>The New Pirate Economy Manifesto</h2>
      <valpo-two-col-section>
        <p>
          Pirates are typically known for looting, raiding and wrecking wherever they went. But pirates were also the revolutionaries, the progressives, the explorers. They challenged the existing authority, sailed away from mainstream society and created their own alternative culture and socio-economic structure. As pirates of the Valparaíso, we believe that everyone has something to share: culture, experiences, skills and knowledge. We don’t raid, loot or wreck, but collaborate to create change.
        </p>
        <p>
          Our foundation is about creating innovative and sustainable solutions for challenging the mainstream consumer culture, while providing a bold alternative of thinking about trade and economics. To us, this is the real essence of piracy: the courage to branch out from established societal norms to explore and create progressive and exciting pathways.
        </p>
        <p>
          <strong>We are the new pirates!</strong>
        </p>
      </valpo-two-col-section>
      <p>
        <!-- <router-link :to="{ name: 'Manifesto', params: {} }">
        </router-link> -->
        <a href="/static/New-Pirate-Economy-manifesto.pdf" target="_blank">
          <valpo-button class="button cerulean large" label="Download our manifesto"></valpo-button>
        </a>
      </p>
    </valpo-content>

    <valpo-content class="npe flex-rows align-center">
      <h2>What is the New Pirate Economy?</h2>

      <valpo-two-col-section>
        <p>
          The New Pirate Economy (<strong>NPE</strong>) is about creating a <strong>sustainable marketplace</strong> that inspires genuine connection between people; creative reuse of commodities and a bold alternative to mainstream consumer culture.  It is apparent that future trends are shifting towards a new economic model where money will no longer serve as the sole motivator behind trades.
        <p>
          Which is why we are developing the Pirate App, where participants can trade goods for three things: <strong>skills, goods and stories</strong>.
        </p>
        <p>
          The app will track each transaction using a unique QR code, showing the story behind each individual trade. The story of each trade can be recorded in video, photo or text and attached to the item through the app.
        </p>
        <p>
          No matter where you are, the use of blockchain technology will allow us to secure, verify and authenticate this data, to make it possible for people to trade the items again. This way we can start a web of trading that we can trace in lines all over the world.
        </p>
        <p>
          We are building an economy founded on personal relationships rather than financial worth.
          <strong>Trust is the currency of the future.</strong>
        </p>
      </valpo-two-col-section>

      <img v-lazy="images.iconEconomy" class="economy" alt="Pirate Economy" />


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
import npe from "../assets/images/headers/npe.jpg";
import ship from "../assets/images/headers/ship.jpg";
import iconEconomy from "../assets/images/icons/pirate_economy.svg"

export default {
  name: "Npe",
  components: {
    ValpoSplash,
    ValpoContent,
    ValpoList,
    ValpoListItem,
    ValpoButton,
    ValpoTwoColSection
  },
  data: () => ({
    images: { logo, npe, iconEconomy, ship }
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
.npe {
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
