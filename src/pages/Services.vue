<template>
  <main role="main" id="services">

    <valpo-youtube-splash class="splash" :image="images.giuliana" :video="video">
      <h1>Events</h1>
    </valpo-youtube-splash>

    <valpo-content class="services-content flex-rows align-center">
      <section class="who-we-are">
        <div>
          <h3>Who are we?</h3>
          <p>
            The Valparaiso pirates are a ship-based community of artists and travellers who are passionate about sustainability and believe in a people-centric marketplace.
          </p>
          <p>
            We make installations and concepts that bring this vision to festivals. The tipi and the ship are unique venues that we offer as part of an experience where people can be submerged in a different world and no longer feel like visitors, but part of our community.
          </p>
          <p>
            As pirates of the Valparaíso, we believe that everyone has something to share: culture, experiences, skills and knowledge. We don’t raid, loot or wreck, but collaborate to create change.
          </p>
        </div>
        <div>
          <h3>What do we do?</h3>
          <p>
            Our foundation is about creating innovative and sustainable solutions to challenge mainstream consumer culture, while providing a bold, alternative way of thinking about trade and economics.
          </p>
          <p>
            To us, this is the real essence of piracy; the courage to branch out from established societal norms to explore and create progressive and exciting pathways.
          </p>
          <p>
            Stories and experiences are what make each of us who we are, and sharing them is what brings us together in this journey of combined human consciousness.
          </p>
        </div>
      </section>

      <hr>

      <valpo-content class="spaces">
        <h3>Spaces we offer</h3>
        <valpo-two-col-section v-for="(space) in spaces" :key="space.title">
          <div>
            <h4>{{ space.title }}</h4></br>
            <p>{{ space.description }}</p>
          </div>
          <img v-lazy="space.image" :alt="space.title">
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

      <valpo-content class="concepts">
        <h3>Concepts &amp; Collaborators</h3>
        <valpo-two-col-section v-for="(concept) in concepts" :key="concept.title">
          <img v-lazy="concept.image" :alt="concept.title">
          <div>
            <h4>{{ concept.title }}</h4></br>
            <p>{{ concept.description }}</p>
            <p v-if="concept.collaborator">Collaborator: <a :href="concept.link" target="_blank">{{concept.collaborator}}</a></p>
          </div>
        </valpo-two-col-section>
      </valpo-content>

      <section class="brochure">
        <p>
          <!-- <router-link :to="{ name: 'Manifesto', params: {} }">
          </router-link> -->
          <a href="/static/valparaiso_community_festival_brochure_2018.pdf" target="_blank">
            <valpo-button class="button terracota large" label="Find out more"></valpo-button>
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
        title: "Gardens of Babylon",
        description: ""
      },
      {
        image: qr,
        title: "Vrijland",
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
    spaces: [
      {
        image: light,
        title: "The Valparaiso",
        description: "Deck and doors are thrown open. Visitors are welcomed in and invited to create their own place in the history of this 100-year old boat. We are a floating world of magic, a Fata Morgana on the water. The top deck is a lounge draped with blankets and pillows, and the ships also hosts a DJ booth and small stage. This wildly-popular venue can be reached by small boat or by swimming. It is usually moored in Amsterdam, as the hub of our creative community, but with a crane it can be put on long-distance transport."
      },
      {
        image: qr,
        title: "Tipi Tent",
        description: "The tipi is an inspiring place to relax. This eight metre space can host up to forty-five people, and includes a DJ deck and small stage. It is home to a beautiful mobile of origami cranes, is lit by UV lights, and is perfect for both relaxing and partying. But the experience we create is about more than the lights and Persian carpets. We invite people to step inside and become part of this world of imagination we build together."
      }
    ],
    concepts: [
      {
        image: light,
        title: "Rent a Friend",
        description: "Ever lost a friend at a festival? It happens to all of us. Now you don’t have to be alone - you can rent a friend! If you need help finding your lost friends, or your lost keys, or you just don’t want to go to a dance alone, we have lots of friends in stock that you can rent for free! They come equipped with an alarm clock, and return automatically when it goes off! Our visitors are also invited to put themselves up to rent. Festivals are amazing places to meet people, and what better way to make new friends?",
        collaborator: "",
        link: ""
      },
      {
        image: qr,
        title: "Origami Crane Installation",
        description: "Visitors to Suzanne’s art studio are often asked to paint a piece of paper, which she then transforms into origami cranes. Over the years this had grown into a substantial flock of unique, hand-painted birds that radiate with the various souls that have contributed to it. This year, we are asking visitors to join in, painting their own pieces of paper to become part of this art installation and centrepiece that represents the beautiful things we can achieve through connection and community.",
        collaborator: "Suzanne Dirne",
        link: "http://overratedenzo.nl/"
      },
      {
        image: light,
        title: "Glow in the Dark Dating",
        description: "Ever tried dating in the dark? With our quizmaster deciding the rhythm of the night, all extra lights are off and all the glow in the dark makeup is on. Inspiring luminous connections in unique spaces under the romance of black lighting, it will make a great ‘how we met’ story in years to come. People will choose coloured bands to wear based on their dating preferences – purple for women, blue for men, and white for non-binary people. If they have no preferences, they can wear all three!",
        collaborator: "",
        link: ""
      },
      {
        image: qr,
        title: "Music by Kevin Valentine",
        description: "Our DJ stage is a platform for emerging artists and hidden gems. We select our DJs carefully and make sure the music fits the vibe of the festival and our space. Depending on the program the DJ will play down tempo music or music that it will make it impossible for you to stand still! The intimate atmosphere makes sure this secret stage will be something all visitors will remember. Our doors are always open to new opportunities, new connections, and new experiences. Kevin also invites other unfamiliar DJs connected to the genre to play, so for this contact him on Soundcloud.",
        collaborator: "Kevin Valentine",
        link: "http://www.soundcloud.com/kevinvalentine"
      },
      {
        image: light,
        title: "Mobile Mermaid",
        description: "Normal mermaids don’t do too well out of water. They just flop around and flap their fins, and you have to come to see them. But the mermaid that the pirates captured is on wheels! She is an oracle who listens to the whispers of the wind and the waves, knows the stories of the sky and the sea - and the secrets of legless modes of travel. She drives around the festival, going from stage to stage. Who better than a mythical mermaid to bring a sense of calm and normality to this crazy world?",
        collaborator: "Veerle Nanna",
        link: "http://www.VnannaV.nl/"
      },
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
hr{
  margin: 15px 0;
  border: 1px solid var(--color-cerulean);
}
.services-content {
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
.who-we-are {
  columns: 2 auto;
  column-gap: 2rem;
  div {
    display: flex;
    flex-flow: column nowrap;
    h3 {
      text-align: center;
    }
    p {
      text-align: left;
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
      border-radius: 40px;
      width: 280px;
      height: auto;
    }
    div {
      max-width: 70%;
      p { text-align: left;}
    }
  }
}
.concepts {
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
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
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
