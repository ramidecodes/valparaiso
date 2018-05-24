<template>
  <main role="main" id="partnership">

    <valpo-splash class="splash" :video="video" :image="images.giuliana">
      <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /><br>
      <!-- ~ we like acid yay ~ -->
    </valpo-splash>

    <valpo-content class="partnership flex-rows align-center">
      <h3>
        History of the Valparaiso
      </h3>
      <valpo-two-col-section>
        <p>Valparaiso is a city located on the coastline of Chile, between the Andes and the Pacific Ocean. It was named afterby the Spanish conquerors when their ships moored upon the shores over five hundred years ago. It was the closest port city that lay along the path to a place which was considered paradise by these sailors after a long enduring journey.
        </p>
        <p>Ulysses, a dutch traveler, came to the city by coincidence. With his motorcycle left broken on the roadside in Argentina, he resorted to hitchhiking to continue his journey and found his way to Valparaiso. As he travelled through the rough exterior he began to look more into the interior of the city. He fell in love with the bohemian and artistic winds within the city and found a limitless source of inspiration. Like dirty nails and worn hands, the city had its own beauty beneath the surface.
        </p>
      </valpo-two-col-section>
      <h4>His compass turned upside down</h4>
      <valpo-two-col-section>
        <p>Art and culture was very much alive and growing, creating a place of collaboration for creative minds and free thinking people. It was the people that were breathing life into the old streets and dying walls. Valparaiso was referred to as the road to paradise. However it has its own sense of paradise, one that comes from the connections of those living in the city. The sense of satisfaction from a hard day's work or working together to achieve something beautiful is what creates the rich soul of the city.
        </p>
        <p>Adventures of the Valparaiso is a journey along the road to paradise. It is an art studio above the hull of a hundred years old barge that has had more people helping on board than scratches in its paint. The fuel that keeps this ship and its projects going is the inspiration of the old port city it is named after and the sign you see in the window when you first step on board that reads. “Happiness is the journey not the destination.”
        </p>
      </valpo-two-col-section>
      <valpo-list class="icons flex-center">
        <valpo-list-item v-for="(item) in tasks" :key="item.icon">
          <figure>
            <img v-lazy="item.icon" :alt="item.alt">
            <figcaption>{{ item.alt }}</figcaption>
          </figure>
        </valpo-list-item>
      </valpo-list>
      <h3 id="projects" class="projects">
        Current projects
      </h3>
      <p>
        We are determined, with support from our homebase in the Netherlands, to equip a larger and seaworthy ship for aninternational journey of art, sustainability, connection, education, and technological innovation. This all comes together to promote an alternative and people-centric way of trading. One that we call the New Pirate Economy.
      </p>
      <valpo-list class="project-items flex-center">
        <valpo-list-item v-for="(item) in projects" :key="item.icon">
          <figure>
            <img v-lazy="item.image" :alt="item.title">
            <figcaption>{{ item.title }}</figcaption>
          </figure>
        </valpo-list-item>
      </valpo-list>
    </valpo-content>
    <valpo-content id="form" class="form flex-rows fixed-pseudo" v-lazy:background-image="images.beach">
      <div class="message">
        <h3>Message in a bottle</h3>
        <p>
          Want to get in touch, have a question or just want to say hi?<br>
          We're always on the lookout for new visions and ideas!
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
import ValpoList from "@/components/ValpoList";
import ValpoListItem from "@/components/ValpoListItem";
import ValpoButton from "@/components/ValpoButton";
import ValpoTwoColSection from "@/components/ValpoTwoColSection"

import logo from "../assets/images/logo-valparaiso.svg";
import giuliana from "../assets/images/image-giuliana.jpg";
import beach from "../assets/images/image-beach.jpg";

import iconBuilding from "../assets/images/icon-building.svg";
import iconDesign from "../assets/images/icon-design.svg";
import iconVideo from "../assets/images/icon-video.svg";
import iconMarketing from "../assets/images/icon-marketing.svg";
import iconSocial from "../assets/images/icon-social.svg";

import light from "../assets/images/image-light.jpg";
import qr from "../assets/images/image-qr.jpg";
import birds from "../assets/images/image-birds.jpg";

export default {
  name: "About",
  components: {
    ValpoSplash,
    ValpoContent,
    ValpoList,
    ValpoListItem,
    ValpoButton,
    ValpoTwoColSection
  },
  data: () => ({
    images: { logo, giuliana, beach },
    video: {
      src: "https://fat.gfycat.com/HighlevelZestyAxolotl.webm",
      loop: true
    },
    tasks: [
      {
        icon: iconBuilding,
        alt: "Building / Repairing"
      },
      {
        icon: iconDesign,
        alt: "Design"
      },
      {
        icon: iconVideo,
        alt: "Photography / Video"
      },
      {
        icon: iconMarketing,
        alt: "Marketing"
      },
      {
        icon: iconSocial,
        alt: "Social Media"
      }
    ],
    projects: [
      {
        image: light,
        title: "We're upgrading our ship!"
      },
      {
        image: qr,
        title: "The pirate app"
      },
      {
        image: birds,
        title: "Into the Woods festival"
      }
    ]
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
.partnership {
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
