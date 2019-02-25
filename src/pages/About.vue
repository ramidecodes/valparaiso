<template>
  <main role="main" id="about">

    <valpo-splash class="splash" :image="images.about">
    <h1>Get to know the pirates</h1>
    <!-- <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /><br> -->
    </valpo-splash>

    <valpo-content class="about flex-rows align-center">
      <h2>
        History of the Valparaiso
      </h2>
      <valpo-two-col-section>
        <p>Valparaiso is a city located on the coastline of Chile, between the Andes and the Pacific Ocean. It was named by the Spanish conquerors when their ships moored upon the shores over five hundred years ago. It was the closest port city that lay along the path to a place which was considered paradise by these sailors after a long enduring journey.
        </p>
        <p>Ulysses, a Dutch traveler, came to the city by coincidence. With his motorcycle left broken on the roadside in Argentina, he resorted to hitchhiking to continue his journey and found his way to Valparaiso.</p>
        <p>As he travelled through the rough exterior he began to look more into the interior of the city. He fell in love with the bohemian and artistic winds within the city and found a limitless source of inspiration. Like dirty nails and worn hands, the city had its own beauty beneath the surface.</p>
      </valpo-two-col-section>
      <h4>His compass turned upside down</h4>
      <valpo-two-col-section>
        <p>Art and culture was very much alive and growing, creating a place of collaboration for creative minds and free thinking people. It was the people that were breathing life into the old streets and dying walls. Valparaiso was referred to as the road to paradise. However it has its own sense of paradise, one that comes from the connections of those living in the city. The sense of satisfaction from a hard day's work or working together to achieve something beautiful is what creates the rich soul of the city.
        </p>
        <p>Adventures of the Valparaiso is a journey along the road to paradise. It is an art studio above the hull of a hundred years old barge that has had more people helping on board than scratches in its paint. The fuel that keeps this ship and its projects going is the inspiration of the old port city it is named after and the sign you see in the window when you first step on board that reads. <q>Happiness is the journey not the destination</q>
        </p>
      </valpo-two-col-section>

      <!-- The Timeline -->
      <h2>The Timeline</h2>
      <hr>
      <valpo-timeline/>

      <section class="crew">
        <h2>The Crew</h2>
        <valpo-list class="crew-members flex-center">
          <valpo-list-item v-for="(member) in crew" :key="member.icon">
            <figure>
              <img v-lazy="member.image" :alt="member.name">
              <figcaption>{{ member.name }} <br/><em>{{member.title}}</em> </figcaption>
            </figure>
          </valpo-list-item>
        </valpo-list>
      </section>
    </valpo-content>
  </main>
</template>

<script>
import ValpoSplash from "@/components/ValpoSplash";
import ValpoContent from "@/components/ValpoContent";
import ValpoList from "@/components/ValpoList";
import ValpoListItem from "@/components/ValpoListItem";
import ValpoButton from "@/components/ValpoButton";
import ValpoTwoColSection from "@/components/ValpoTwoColSection";
import ValpoTimeline from "@/components/ValpoTimeline";

// Images
import about from "../assets/images/headers/about.jpg";
import beach from "../assets/images/image-beach.jpg";

// import light from "../assets/images/image-light.jpg";
// import qr from "../assets/images/image-qr.jpg";
// import birds from "../assets/images/image-birds.jpg";

import iconEconomy from "../assets/images/icons/pirate_economy.svg";

// Crew
import ulysses from "../assets/images/crew/valparaiso-crew-ulysses.jpg";
import margo from "../assets/images/crew/valparaiso-crew-margo.jpg";
import alexis from "../assets/images/crew/valaparaiso-crew_alexis.jpg";
import david from "../assets/images/crew/valparaiso-crew-dave.jpg";
import ramiro from "../assets/images/crew/Ramiro_Ramirez_crew.jpg";
import lyvia from "../assets/images/crew/valparaiso-crew-lyvia.jpg";
import jen from "../assets/images/crew/valparaiso-crew-jennie.jpg";
import yoram from "../assets/images/crew/yoram.jpeg";

export default {
  name: "About",
  components: {
    ValpoSplash,
    ValpoContent,
    ValpoList,
    ValpoListItem,
    ValpoButton,
    ValpoTwoColSection,
    ValpoTimeline
  },
  data: () => ({
    images: {
      about, beach
    },
    crew: [
      {
        image: ulysses,
        name: "Ulysses Schuitemaker",
        title: "Captain & Founder",
      },
      {
        image: margo,
        name: "Margo Muttart",
        title: "Event Organization",
      },
      {
        image: alexis,
        name: "Alexis Camejo",
        title: "Designer",
      },
      {
        image: david,
        name: "Dave Dega",
        title: "App Developer",
      },
      {
        image: jen,
        name: "Jennie Hughes",
        title: "Treasurer",
      },
      {
        image: lyvia,
        name: "Lyvia Lozano",
        title: "Partner Contacts",
      },
      {
        image: ramiro,
        name: "Ramiro Ramirez",
        title: "Software Developer",
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
section.splash {
  background-position-y: 100%;
}
hr{
  margin: 0;
  border: 1px solid var(--color-cerulean);
}
.about {
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
  .crew {
    padding-top: calc(var(--tracking-large) * 5);
  }
  .crew-members {
    margin: 0 3em;
    li {
      margin: 5vw;
      max-width: 160px;
      margin-top: calc(var(--tracking-large) * 1);
      figure {
        width: 100%;
        img {
          border: 2px solid var(--color-light);
          border-radius: 50%;
          max-height: 160px;
        }
        figcaption {
          padding-top: 0;
          em {
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
    h2 {
      margin-bottom: 1.5em;
    }
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
