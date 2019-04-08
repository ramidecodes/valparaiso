<template>
  <main role="main" id="events">

    <valpo-youtube-splash class="splash" :image="images.giuliana" :video="video">
      <h1>Events</h1>
    </valpo-youtube-splash>

    <valpo-content class="events-content flex-rows align-center">
      <h3>Who are we?</h3>
      <valpo-two-col-section>
        <p>
          The Valparaiso pirates are a ship-based community of artists and travellers who are passionate about sustainability and believe in a people-centric marketplace.
        </p>
        <p>
          We make installations and concepts that bring this vision to festivals. The tipi and the ship are unique venues that we offer as part of an experience where people can be submerged in a different world and no longer feel like visitors, but part of our community.
        </p>
        <p>
          As pirates of the Valparaíso, we believe that everyone has something to share: culture, experiences, skills and knowledge. We don’t raid, loot or wreck, but collaborate to create change.
        </p>
      </valpo-two-col-section>
      <h3>What do we do?</h3>
      <valpo-two-col-section>
        <p>
          Our foundation is about creating innovative and sustainable solutions to challenge mainstream consumer culture, while providing a bold, alternative way of thinking about trade and economics.
        </p>
        <p>
          To us, this is the real essence of piracy; the courage to branch out from established societal norms to explore and create progressive and exciting pathways.
        </p>
        <p>
          Stories and experiences are what make each of us who we are, and sharing them is what brings us together in this journey of combined human consciousness.
        </p>
      </valpo-two-col-section>

      <hr>

      <valpo-content class="spaces">
        <h3>Spaces we offer</h3>
        <valpo-two-col-section>
          <img v-lazy="spaces.valparaiso.image" :alt="spaces.valparaiso.title">
          <div>
            <h4>{{ spaces.valparaiso.title }}</h4></br>
            <p>{{ spaces.valparaiso.description }}</p>
          </div>
        </valpo-two-col-section>

        <valpo-two-col-section>
          <img v-lazy="spaces.tipi.image" :alt="spaces.tipi.title">
          <div>
            <h4>{{ spaces.tipi.title }}</h4></br>
            <p>{{ spaces.tipi.description }}</p>
          </div>
        </valpo-two-col-section>
      </valpo-content>

      <hr>
      <h3 id="projects" class="projects">
        Previous Festivals
      </h3>
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

      <section class="brochure">
        <p>
          <!-- <router-link :to="{ name: 'Manifesto', params: {} }">
          </router-link> -->
          <a href="/static/valparaiso_community_festival_brochure_2018.pdf" target="_blank">
            <valpo-button class="button terracota large" label="Download our brochure"></valpo-button>
          </a>
        </p>
      </section>
    </valpo-content>

    <valpo-content id="form" class="form flex-rows fixed-pseudo" v-lazy:background-image="images.beach">
      <div class="message">
        <h3>Message in a bottle</h3>
          <p>
            Do you have any questions or queries?
          </p>
          <p>
            We’d love to hear from you.
          </p>
          <p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3qMkBQEV7LfE-jIPq2tv0wXaxtyxGw20b7IrEWHUNLA52Tw/viewform" target="_blank">
              <valpo-button class="button magenta" label="Contact us!"></valpo-button>
            </a>
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
import ValpoTwoColSection from "@/components/ValpoTwoColSection";
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
    ValpoButton,
    ValpoTwoColSection
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
        title: "Gardens of babylon",
        description: ""
      },
      {
        image: qr,
        title: "Vrijland festival",
        description: ""
      },
      {
        image: boatbike,
        title: "Ceuvel",
        description: ""
      },
      {
        image: festivals,
        title: "Into the woods",
        description: ""
      },
      {
        image: glass,
        title: "Brest Maritime",
        description: ""
      }
    ],
    spaces: {
      valparaiso:
      {
        image: light,
        title: "Valparaiso Ship",
        description: "Deck and doors are thrown open. Visitors are welcomed in and invited to create their own place in the history of this 100-year old boat. We are a floating world of magic, a Fata Morgana on the water. The top deck is a lounge draped with blankets and pillows, and the ships also hosts a DJ booth and small stage. This wildly-popular venue can be reached by small boat or by swimming. It is usually moored in Amsterdam, as the hub of our creative community, but with a crane it can be put on long-distance transport."
      },
      tipi: {
        image: qr,
        title: "Tipi Tent",
        description: "The tipi is an inspiring place to relax. This eight metre space can host up to forty-five people, and includes a DJ deck and small stage. It is home to a beautiful mobile of origami cranes, is lit by UV lights, and is perfect for both relaxing and partying. But the experience we create is about more than the lights and Persian carpets. We invite people to step inside and become part of this world of imagination we build together."
      }
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
hr{
  margin: 15px 0;
  border: 1px solid var(--color-cerulean);
}
.events-content {
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
          .project-description {
            padding-top: 5px;
            font-weight: 300;
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
.spaces {
  section {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 90px;
    @media (max-width: 1342px) {
      flex-flow: column nowrap;
      align-items: center;
      img {
        margin-bottom: 40px;
      }
    }
    img {
      border-radius: 50%;
      width: 280px;
      height: auto;
    }
    div {
      max-width: 70%;
      p { text-align: left;}
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
    text-align: center;
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
