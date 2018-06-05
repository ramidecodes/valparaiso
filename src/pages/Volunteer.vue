<template>
  <main role="main" id="index">

    <valpo-youtube-splash class="splash" :image="images.giuliana" :video="video">
      <h1>Become a volunteer</h1>
    </valpo-youtube-splash>

    <valpo-content id="volunteer" class="volunteer flex-rows align-center">
      <h3>
        Join us!
      </h3>
      <p>
        Looking to be part of an inclusive and creative community? </br>
        Trade your skills and knowledge in exchange for the chance to learn
        something new from our international crew of volunteers,
        and get a taste of the pirate life!
      </p>
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
        We are determined, with support from our homebase in the Netherlands, to equip a larger and seaworthy ship for aninternational journey of art, sustainability, connection, education, and technological innovation. This all comes together to promote an alternative and people-centric way of trading. One that we call the New Pirate Economy.
      </p>
      <valpo-list class="project-items flex-center">
        <valpo-list-item v-for="(project) in projects" :key="project.icon">
          <figure>
            <img v-lazy="project.image" :alt="project.title">
            <figcaption>
              {{ project.title }}</br>
              <span class="project-description">{{ project.description }}</span>

            </figcaption>
          </figure>
        </valpo-list-item>
      </valpo-list>
    </valpo-content>
    <valpo-content id="form" class="form flex-rows fixed-pseudo" v-lazy:background-image="images.beach">
      <div class="message">
        <h3>Message in a bottle</h3>
          <p>
            Want to get in touch, have a question or just want to say hi?<br>
            We're always on the lookout for new volunteers and ideas!
            <br><br>
          </p>
          <p>
            <valpo-button class="button magenta" label="Send us a message!"></valpo-button>
          </p>
        </div>
      </valpo-content>
  </main>
</template>

<script>
import ValpoYoutubeSplash from "@/components/ValpoYoutubeSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoList from "@/components/ValpoList";
import ValpoListItem from "@/components/ValpoListItem";
import ValpoButton from "@/components/ValpoButton";

import giuliana from "../assets/images/image-giuliana.jpg";
import beach from "../assets/images/image-beach.jpg";

import iconBuilding from "../assets/images/icon-building.svg";
import iconDesign from "../assets/images/icon-design.svg";
import iconVideo from "../assets/images/icon-video.svg";
import iconMarketing from "../assets/images/icon-marketing.svg";
import iconSocial from "../assets/images/icon-social.svg";

import light from "../assets/images/projects/image-light.jpg";
import qr from "../assets/images/projects/image-qr.jpg";
import birds from "../assets/images/projects/image-birds.jpg";
import boatbike from "../assets/images/projects/valparaiso_projects_boatbike.jpg";
import festivals from "../assets/images/projects/valparaiso_projects_festivals.jpg";
import glass from "../assets/images/projects/valparaiso_projects_glass.jpg";
import grulla from "../assets/images/projects/valparaiso_projects_grulla.jpg";

// TODO: add new pictures

export default {
  name: "Volunteer",
  components: {
    ValpoYoutubeSplash,
    ValpoContent,
    ValpoList,
    ValpoListItem,
    ValpoButton
  },
  data: () => ({
    images: { giuliana, beach },
    video: {
      src: "cjC9ggS7EVE"
    },
    tasks: [
      {
        icon: iconBuilding,
        alt: "Building & Repairing"
      },
      {
        icon: iconDesign,
        alt: "Design"
      },
      {
        icon: iconVideo,
        alt: "Multimedia Production"
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
        title: "Ship upgrading",
        description: "Grab the tools and get hands on!"
      },
      {
        image: qr,
        title: "The Pirate App",
        description: "Code with our pirate developers"
      },
      {
        image: boatbike,
        title: "Boat-Bike",
        description: "Building a pirate ship on an e-bike"
      },
      {
        image: festivals,
        title: "Festival planning",
        description: "Organize summer festivals!"
      },
      {
        image: glass,
        title: "Stained glass",
        description: "An old craft in a new light"
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
.volunteer {
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
          .project-description {
            font-weight: 300;
            padding-top: 5px;
          }
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
