d<template>
  <main role="main" id="index">

    <valpo-splash class="splash" :image="images.vision">
      <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /><br>
      <q cite="The Pirate">
        We are landlubbers because Mother Earth gives us her great resources.<br>
        We are pirates because the best ideas don’t know limits.
      </q>
    </valpo-splash>

    <valpo-content id="npe" class="npe flex-rows align-center">
      <h1>The New Pirate Economy Manifesto</h1>
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
        <valpo-button class="button cerulean large" label="Download our manifesto"></valpo-button>
      </p>

      <hr>
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

      <valpo-list class="icons flex-center">
        <valpo-list-item v-for="(item) in pirateStuff" :key="item.icon">
          <figure>
            <img v-lazy="item.icon" :alt="item.alt">
            <figcaption>{{ item.alt }}</figcaption>
          </figure>
        </valpo-list-item>
      </valpo-list>

      <h2 class="cta">Our Future Activities Abroad</h2>
      <valpo-two-col-section>
        <p>
          In 2019, our journey to Valparaiso will begin. We’ll set up temporary marketplaces in the U.K., France, Denmark, Spain, Portugal, Morocco, the Canary Islands, Cuba, Puerto Rico, Venezuela, Brazil, Argentina, and, of course, Chile - our final destination. We expect the journey to take a year and a half.
        </p>
        <p>
          We’ll stock the ship with goods contributed by people and partners. Through a series of sustainability workshops, we’ll show how recycling, upcycling and responsible waste management can change the world.
        </p>
        <p>
          Whilst abroad, we will trade donated goods and our skills for three things:
        </p>
        <h4>Stories</h4>
        <p>
          Stories and experiences are what makes each of us who we are, and sharing them is what bonds us in this journey of combined human consciousness. Stories are recorded, labelled with a serial number, and will be playable on our website, Facebook and mobile app.
          We will make a documentary of our entire story.
        </p>
        <h4>Goods</h4>
        <p>
          We will trade our skills and donated goods from our sponsors for sailing necessities and mementos from communities we encounter. All transactions will be recorded in our online database, so that the participants from both our homebase community and abroad can track the journey of their goods across the globe.
        </p>
        <h4>Skills</h4>
        <p>
          The Valparaiso has always attracted unique people from all over the world with varied skillsets. When we set sail, we will trade the skills of the people we meet with donated goods from our local community.
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
import npe from "../assets/images/headers/vision.jpg";

import iconSpeaker from "../assets/images/icons/speaker_icon.svg";
import iconTreasure from "../assets/images/icons/treasure_icon.svg";
import iconWrench from "../assets/images/icons/wrench_icon.svg";
import iconEconomy from "../assets/images/icons/pirate_economy.svg";

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
    images: { logo, npe, iconEconomy },
    pirateStuff: [
      {
        icon: iconSpeaker,
        alt: "Stories"
      },
      {
        icon: iconTreasure,
        alt: "Goods"
      },
      {
        icon: iconWrench,
        alt: "Skills"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
section.splash {
  background-position-y: 100%;
  .logo {
    max-width: 400px;
    width: 90%;
    margin-bottom: 3em;
  }
}
.npe {
  background: #ffa953;
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
    max-width: 60%;
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
