<template>
  <section id="top-bar">
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <nav id="sidebarMenu">
      <ul class="sidebarMenuInner">
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
    name: "SideMenu"
}
</script>

<style lang="scss">
#top-bar{
  position: fixed;
  z-index: 20;
}
nav{
    background-color: var(--color-cerulean);
    box-shadow:0 1px 3px #222;
    border-radius:2px;
}

nav a{
    color: white !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent
}

#sidebarMenu {
  height: 100%;
  position: fixed;
  left: 0;
  width: 250px;
  margin-top: 60px;
  transform: translateX(-250px);
  transition: transform 250ms ease-in-out;
  background: linear-gradient(
    to bottom,
    var(--color-ocean) 0%,
    rgba(0, 175, 187, 1) 100%
  );
}

.sidebarMenuInner {
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
}

.sidebarMenuInner li {
  list-style: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
  // cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}

.sidebarMenuInner li span {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.50);
}

.sidebarMenuInner li a {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

input[type="checkbox"]:checked ~ #sidebarMenu { transform: translateX(0); }

input[type=checkbox] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}

.sidebarIconToggle {
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 22px;
  left: 15px;
  height: 42px;
  width: 42px;
}

.spinner {
  transition: all 0.3s;
  box-sizing: border-box;
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: #fff;
}

.horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 6px;
}

.diagonal.part-1 {
  position: relative;
  transition: all 0.3s;
  box-sizing: border-box;
  float: left;
}

.diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  position: relative;
  float: left;
  margin-top: 6px;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
  transition: all 0.3s;
  box-sizing: border-box;
  opacity: 0;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(135deg);
  margin-top: 8px;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
  transition: all 0.3s;
  box-sizing: border-box;
  transform: rotate(-135deg);
  margin-top: -9px;
}
</style>
