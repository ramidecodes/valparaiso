<template>
  <section id="socialmedia" class="socialmedia">
    <valpo-list class="icons flex-between">
      <valpo-list-item v-for="(item) in socialicons" :key="item.icon">
        <router-link :to="{ name: item.alt, params: {} }">
          <img v-lazy="item.icon" :alt="item.alt">
        </router-link>
      </valpo-list-item>
    </valpo-list>
  </section>
</template>

<script>

// Components
import ValpoList from "@/components/ValpoList";
import ValpoListItem from "@/components/ValpoListItem";

// Images
import facebook from "../assets/images/icons/fb_blck.svg";
import twitter from "../assets/images/icons/twitter.svg";
// import youtube from "../assets/images/icons/youtube.svg";
import instagram from "../assets/images/icons/instagram.svg";
import email from "../assets/images/icons/mail.svg";

export default {
  name: "Socialmedia",
  components: {
    ValpoList,
    ValpoListItem
  },
  data: () => ({
    socialicons: [
      {
        icon: facebook,
        alt: "Facebook"
      },
      {
        icon: twitter,
        alt: "Twitter"
      },
      // {
      //   icon: youtube,
      //   alt: "Youtube"
      // },
      {
        icon: instagram,
        alt: "Instagram"
      },
      {
        icon: email,
        alt: "Contact"
      }
    ]
  })
}
</script>

<style lang="scss" scoped>

.socialmedia {
  height: 70px;
  z-index: 99;
  ul.valpo-list.icons {
    margin: 0;
    margin-right: 7px;
    li {
      margin: 16px 7px;
      a {
        display: flex;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}

footer{
  .socialmedia {
    ul {
      width: 100%;
    }
  }

}

@media (max-width: 630px) {
  #top-bar .socialmedia {
    display: none;
  }
}

</style>
