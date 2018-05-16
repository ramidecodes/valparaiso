<template>
  <section class="top-bar">
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Index'}">Home</router-link></li>
        <li><router-link :to="{ name: 'About'}">The History</router-link></li>
        <li><router-link :to="{ name: 'Npe'}">New Pirate Economy</router-link></li>
        <li><router-link :to="{ name: 'Volunteer'}">Volunteer</router-link></li>
        <li><router-link :to="{ name: 'Partnership'}">Partnership</router-link></li>
        <li><router-link :to="{ name: 'Events'}">Events</router-link></li>
        <li><router-link :to="{ name: 'Contact'}">Contact</router-link></li>
      </ul>
    </nav>
  </section>
</template>

<script>

export default {
    name: "NavMenu"
}
</script>
<style lang="scss">
nav{
    background-color: var(--color-cerulean);
    box-shadow:0 1px 3px #222;
    border-radius:2px;
}

nav a{
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent
}

</style>
