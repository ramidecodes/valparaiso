<template>
  <main role="main" id="index">

    <valpo-youtube-splash class="splash" :image="images.ship" :video="video">
      <h1>Welcome to the adventure</h1>
      <!-- <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /> -->
    </valpo-youtube-splash>

    <valpo-content id="about" class="about flex-rows" v-lazy:background-image="images.boat">
      <h1>Adventures of the Valparaíso</h1>
      <valpo-two-col-section>
        <p>
          We are a ship-based community passionate about expanding our on-board culture of sustainability and creativity. Since 2013, our foundation has involved over 500 international volunteers in our cana based in Amsterdam, our hub for new ideas around community and creative concepts.
          The success of this endeavour has strengthened our belief in a people-centric marketplace and grown our passion for a greater adventure.
        </p>
        <p>
          We are now determined, with support from our homebase in the Netherlands, to equip a larger, seaworthy ship and crew for an international journey of art, music, connection and trade. This transformation and voyage will, in collaboration with our sponsors and volunteers, exhibit the exchange of ideas, skills, stories and goods with local communities and embody our belief that it is only with each of our individual stories that we are able to tell one, whole story together: the story of the <strong>Adventures of the Valparaiso</strong>.
        </p>
        <p class="cta">
          <router-link :to="{ name: 'About', params: { focus: 'about' }}">
            <valpo-button class="button magenta animate-bounce-curve-in" label="Read more about us"></valpo-button>
          </router-link>
        </p>
    </valpo-two-col-section>
    </valpo-content>

    <valpo-content id="involved" class="involved flex-rows fixed-pseudo" v-lazy:background-image="images.hand">
      <h2>Get involved!</h2>
      <valpo-list class="icons flex-center">
        <valpo-list-item v-for="(item) in involved" :key="item.icon">
          <router-link :to="{ name: item.link }">
            <figure>
              <img v-lazy="item.icon" :alt="item.alt">
              <figcaption>
                {{ item.alt }}
              </figcaption>
            </figure>
          </router-link>
        </valpo-list-item>
      </valpo-list>
      <!-- <p class="cta">
        <router-link :to="{ name: 'Volunteer', params: { focus: 'volunteer' }}">
          <valpo-button class="button magenta large" label="Get involved!"></valpo-button>
        </router-link>
      </p> -->
      <!-- <p class="cta lead-paragraph">A ship-based community working on new sustainable solutions.</p> -->
    </valpo-content>

    <valpo-content id="future-activities" class="future-activities flex-rows">
      <h2 class="cta">Future Activities Abroad</h2>
      <valpo-two-col-section>
        <h4>A new journey</h4>
        <p>
          In 2019, our journey to Valparaiso will begin. We’ll set up temporary marketplaces in the U.K., France, Denmark, Spain, Portugal, Morocco, the Canary Islands, Cuba, Puerto Rico, Venezuela, Brazil, Argentina, and, of course, Chile - our final destination. We expect the journey to take a year and a half.
        </p>
        <p>
          We’ll stock the ship with goods contributed by people and partners. Through a series of sustainability workshops, we’ll show how recycling, upcycling and responsible waste management can change the world.
        </p>
        <p>
          We will trade donated goods and our skills for three things:
        </p>
        <valpo-list class="icons flex-center">
          <valpo-list-item v-for="(item) in pirateStuff" :key="item.icon">
            <figure>
              <img v-lazy="item.icon" :alt="item.alt">
              <figcaption>{{ item.alt }}</figcaption>
            </figure>
          </valpo-list-item>
        </valpo-list>
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
    </valpo-content>

    <valpo-content id="events" class="events flex-rows fixed-pseudo">
      <h3 class="slogan">
        Upcoming events & Festivals
      </h3>
      <p>
        Be part of the <strong>New Pirate Economy</strong> by participating in our monthly activities.
      </p>
      <valpo-events></valpo-events>
    </valpo-content>
  </main>
</template>

<script>
import ValpoYoutubeSplash from "@/components/ValpoYoutubeSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoButton from "@/components/ValpoButton";
import ValpoList from "@/components/ValpoList";
import ValpoListItem from "@/components/ValpoListItem";
import ValpoEvents from "@/components/ValpoEvents";
import ValpoTwoColSection from "@/components/ValpoTwoColSection";
import ValpoPartners from "@/components/ValpoPartners";

import logo from "../assets/images/logo-valparaiso.svg";
import ship from "../assets/images/headers/ship-water.jpg";
import boat from "../assets/images/graphic-boat.jpg";
import hand from "../assets/images/image-hand.jpg";

import iconPirate from "../assets/images/icons/big_pirate_icon.svg";
import iconConnect from "../assets/images/icon-connect.svg";
import iconGlobe from "../assets/images/icon-globe.svg";
import iconSpeaker from "../assets/images/icons/speaker_icon.svg";
import iconTreasure from "../assets/images/icons/treasure_icon.svg";
import iconWrench from "../assets/images/icons/wrench_icon.svg";


export default {
  name: "Index",
  components: {
    ValpoYoutubeSplash,
    ValpoContent,
    ValpoButton,
    ValpoList,
    ValpoListItem,
    ValpoEvents,
    ValpoTwoColSection,
    ValpoPartners
  },
  data: () => ({
    images: { logo, ship, boat, hand },
    video: {
      src: "r4Zm6H12WbM"
    },
    involved: [
      {
        icon: iconPirate,
        alt: "Become a Volunteer",
        link: "Volunteer"
      },
      {
        icon: iconConnect,
        alt: "Be one of our Partners",
        link: "Partnership"
      },
      {
        icon: iconGlobe,
        alt: "Experience the Pirate Community",
        link: "Activities"
      }
    ],
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
    ],
  })
  // mounted () {
  //     this.pagedata = JSON.parse(localStorage.getItem('valparaiso'))[this.$options.name.toLowerCase()]
  // }
};
</script>

<style lang="scss" scoped>
section.splash {
  // &:after {
  //   background: linear-gradient(
  //     to bottom,
  //     rgba(0, 99, 135, 0) 0%,
  //     white 94%,
  //     white 100%);
  //   z-index: 0;
  // }
}
.about {
  background-color: var(--color-light);
  background-repeat: no-repeat;
  background-position: right bottom;
  color: var(--color-ocean);
  min-height: 65vh;
  @media (max-width: 800px) {
    background-image: none !important;
  }
  p {
    background: rgba(255, 255, 255, 0.8);
    text-align: left;
    &.cta {
      background: none;
      margin-top: calc(var(--tracking-large) * 5);
      @media (max-width: 460px) {
        margin-top: calc(var(--tracking-large) * 2);
      }
    }
  }
}
.involved {
  background-color: var(--color-light);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  color: var(--color-light);
  min-height: 80vh;
  text-align: center;
  // text-shadow: 0 0 5px #555;
  h2 {
    color: var(--color-lagoon);
    text-shadow: none;
  }
  .icons {
    margin: 0 auto;
    margin-top: calc(var(--tracking-large) * 2);
    max-width: 740px;
    text-align: center;
    width: 100%;
    @media (max-width: 700px) {
      margin-top: calc(var(--tracking-large) * 7);
    }
    li {
      img {
        height: 145px;
      }
    }
  }
  .cta {
    margin-top: 70px;
    @media (max-width: 460px) {
      margin-top: 30px;
    }
  }
  // Gradient background on top of images
  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 99, 135, 0) 0%,
      var(--color-cerulean) 90%,
      var(--color-cerulean) 100%
    );
    z-index: 0;
  }
}
.future-activities {
  background: linear-gradient(
    to bottom,
    var(--color-cerulean) 0%,
    var(--color-ocean) 100%
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
.events {
  background: linear-gradient(
    to bottom,
    var(--color-ocean) 0%,
    var(--color-cerulean) 100%
  );
  color: var(--color-light);
  min-height: 70vh;
  text-align: center;
  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 99, 135, 0) 0%,
      var(--color-ocean) 81%,
      var(--color-ocean) 100%
    );
    height: 100px;
    top: -99px;
    z-index: 10;
  }
  .events-list {
    margin-bottom: calc(var(--tracking-large) * 4);
  }
}
</style>
