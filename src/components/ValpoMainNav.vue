<template>
  <section class="main-nav">
    <div v-on:click="menuIsActive = !menuIsActive" v-bind:class="{ expanded: menuIsActive }" class="nav-toggle">
      <div class="nav-toggle-bar"></div>
    </div>
    <nav v-bind:class="{ expanded: menuIsActive }" class="nav">
      <!-- <section class="logo">
        <router-link :to="{ name: 'Index'}">
          <valpo-logo/>
        </router-link>
      </section> -->
      <ul>
        <li v-on:click="menuIsActive = !menuIsActive"><router-link :to="{ name: 'Index'}">Home</router-link></li>
        <li v-on:click="menuIsActive = !menuIsActive"><router-link :to="{ name: 'About'}">About Us</router-link></li>
        <li v-on:click="menuIsActive = !menuIsActive"><router-link :to="{ name: 'Npe'}">New Pirate Economy</router-link></li>
        <li v-on:click="menuIsActive = !menuIsActive"><router-link :to="{ name: 'Volunteer'}">Volunteer</router-link></li>
        <li v-on:click="menuIsActive = !menuIsActive"><router-link :to="{ name: 'Partnership'}">Partnership</router-link></li>
        <li v-on:click="menuIsActive = !menuIsActive"><router-link :to="{ name: 'Services'}">Book Us</router-link></li>
        <li v-on:click="menuIsActive = !menuIsActive"><router-link :to="{ name: 'Contact'}">Contact</router-link></li>
      </ul>
    </nav>
  </section>
</template>

<script>

import logo from "../assets/images/logo-valparaiso.svg";
import ValpoLogo from "@/components/ValpoLogo";

export default {
  name: "MainNavigation",
  components: {
    ValpoLogo
  },
  data: () => ({
    images: [ logo ],
    menuItems: ["Index", "About", "Npe", "Volunteer", "Partnership", "Events", "Contact"],
    menuIsActive: false
  }),
}
</script>

<style lang="scss">
// .logo {
//     margin-top: 2em;
//     width: 100%;
//     padding: 1em;
// }
.main-nav {
  align-self: flex-start;
  width: 190px;
}
.nav {
  -webkit-transition: left 0.5s ease;
  -moz-transition: left 0.5s ease;
  -ms-transition: left 0.5s ease;
  -o-transition: left 0.5s ease;
  transition: left 0.5s ease;
  // background: var(--color-cerulean);
  background: linear-gradient(
    to bottom,
    var(--color-ocean) 0%,
    rgba(0, 175, 187, 1) 100%
  );
  color: white;
  cursor: pointer;
  height: 100vh;
  left: -20rem;
  padding: 2rem 2rem 2rem 2rem;
  position: fixed;
  top: 0;
  width: 20rem;
  z-index: 1;
  box-shadow:0 1px 3px #222;
  border-radius:2px;
}

.nav.expanded { left: 0; }

.nav ul {
  position: absolute;
  width: 15rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  list-style: none;
  margin: 0;
  padding: 0;
}
nav li{
  margin: 2em 0;
  border-bottom: 1px solid var(--color-cerulean);
}
nav a{
    color: white !important;
    font-weight:bold;
    font-size:1.2em;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;
    &.router-link-exact-active.active {
      text-shadow: 0 0 9px #001a55;
    }
}

.nav-toggle {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
  // height: 2rem;
  left: 1em;
  position: fixed;
  top: 2em;
  width: 3em;
  z-index: 2;
}

.nav-toggle:hover { opacity: 0.8; }

.nav-toggle .nav-toggle-bar,  .nav-toggle .nav-toggle-bar::after,  .nav-toggle .nav-toggle-bar::before {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  background: white;
  content: '';
  height: 0.4rem;
  width: 100%;
}

.nav-toggle .nav-toggle-bar { margin-top: 0; }

.nav-toggle .nav-toggle-bar::after { margin-top: 0.8rem; }

.nav-toggle .nav-toggle-bar::before { margin-top: -0.8rem; }

.nav-toggle.expanded .nav-toggle-bar { background: transparent; }

.nav-toggle.expanded .nav-toggle-bar::after, .nav-toggle.expanded .nav-toggle-bar::before {
  background: white;
  margin-top: 0;
}

.nav-toggle.expanded .nav-toggle-bar::after {
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.nav-toggle.expanded .nav-toggle-bar::before {
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
