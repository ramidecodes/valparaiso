<template>
  <main role="main" id="index">

    <valpo-splash class="splash" :image="images.about">
      <!-- ~ we like acid yay ~ -->
      <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" /><br>
    </valpo-splash>

    <valpo-content id="about" class="about flex-rows align-center">
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
        <p>Adventures of the Valparaiso is a journey along the road to paradise. It is an art studio above the hull of a hundred years old barge that has had more people helping on board than scratches in its paint. The fuel that keeps this ship and its projects going is the inspiration of the old port city it is named after and the sign you see in the window when you first step on board that reads. <q>Happiness is the journey not the destination</q>
        </p>
      </valpo-two-col-section>

      <!-- Todo> Create Timeline Component -->
      <section class="timeline">
        <h3>The Timeline</h3>
      </section>

      <h3 id="crew" class="crew">
        The Crew
      </h3>
      <valpo-list class="crew-members flex-center">
        <valpo-list-item v-for="(item) in crew" :key="item.icon">
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
          We're always on the lookout for new abouts and ideas!
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

// Images
import logo from "../assets/images/logo-valparaiso.svg";
import about from "../assets/images/headers/about.jpg"
import beach from "../assets/images/image-beach.jpg";

import light from "../assets/images/image-light.jpg";
import qr from "../assets/images/image-qr.jpg";
import birds from "../assets/images/image-birds.jpg";

// Crew
import alexis from "../assets/images/crew/Alexis_Camejo_crew.jpg";
import bolour from "../assets/images/crew/Bolour_Khaz_crew.jpg";
import brandon from "../assets/images/crew/Brandon_Turner_crew.jpg";
import david from "../assets/images/crew/David_Delgado_crew.jpg";
import gabriel from "../assets/images/crew/Gabriel_Busili_crew.jpg";
import kim from "../assets/images/crew/Kim_Berghout_crew.jpg";
import margo from "../assets/images/crew/Margo_Muttart_crew.jpg";
import timothy from "../assets/images/crew/Timothy_Heddes_crew.jpg";
import ulysses from "../assets/images/crew/Ulysses_Schuitemaker_crew.jpg";
import vivian from "../assets/images/crew/Vivian_Soneghet_crew.jpg";
import yoram from "../assets/images/crew/Yoram_crew.jpg";

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
    images: {
      logo, about, beach, alexis, bolour, brandon, david, gabriel, kim,
      margo, timothy, ulysses, vivian, yoram
    },
    video: {
      src: "https://fat.gfycat.com/HighlevelZestyAxolotl.webm",
      loop: true
    },
    crew: [
      {
        image: ulysses,
        title: "Ulysses Schuitemaker"
      },
      {
        image: margo,
        title: "Margo Muttart"
      },
      {
        image: vivian,
        title: "Vivian Soneghet"
      },
      {
        image: kim,
        title: "Kim Berghout"
      },
      {
        image: bolour,
        title: "Bolour Khaz"
      },
      {
        image: brandon,
        title: "Brandon Turner"
      },
      {
        image: alexis,
        title: "Alexis Camejo"
      },
      {
        image: david,
        title: "David Delgado"
      },
      {
        image: yoram,
        title: "Yoram"
      },
      {
        image: gabriel,
        title: "Gabriel Busili"
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
  }
}
.about {
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
  .crew {
    padding-top: calc(var(--tracking-large) * 5);
  }
  .crew-members {
    .valpo-list-item {
      margin: 5vw;
      max-width: 160px;
    }
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
    h3 {
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
