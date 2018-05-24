import config from "@/config";

import Index from "@/pages/Index";
import Volunteer from "@/pages/Volunteer";
import About from "@/pages/About";
import Npe from "@/pages/Npe";
import Events from "@/pages/Events";
import Partnership from "@/pages/Partnership";
import Contact from "@/pages/Contact";
import Error404 from "@/pages/Error404";
import Construction from "@/pages/Construction";

let routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      title: "Adventures of The Valparaiso"
    }
  },
  {
    path: "/become-a-volunteer",
    alias: ["/volunteer", "/volunteering"],
    name: "Volunteer",
    component: Volunteer,
    meta: {
      title: "Become a volunteer"
    }
  },
  {
    path: "/about-us",
    alias: ["/about", "/history", "/history-of-the-valparaiso"],
    name: "About",
    component: About,
    meta:{
      title: "About Us - History of the Valparaiso"
    }
  },
  {
    path: "/npe",
    alias: ["/new-pirate-economy"],
    name: "Npe",
    component: Npe,
    meta:{
      title: "The New Pirate Economy"
    }
  },
  {
    path: "/events",
    alias: ["/festivals","/whats-on"],
    name: "Events",
    component: Events,
    meta:{
      title: "Events & Festivals"
    }
  },
  {
    path: "/partnership",
    alias: ["/investors"],
    name: "Partnership",
    component: Partnership,
    meta:{
      title: "Partnership & Investors"
    }
  },
  {
    path: "/contact",
    alias: ["/contactu-us", "/email"],
    name: "Contact",
    component: Contact,
    meta:{
      title: "Get in Contact"
    }
  },
  {
    path: "/facebook",
    name: "Facebook",
    component: Contact,
    meta:{
      title: "Get in Contact"
    },
    beforeEnter() { location.href = 'https://www.facebook.com/adventuresofthevalparaiso/' }
  },
  {
    path: "/twitter",
    name: "Twitter",
    component: Contact,
    meta:{
      title: "Get in Contact"
    },
    beforeEnter() { location.href = 'https://www.twitter.com/' }
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Contact,
    meta:{
      title: "Get in Contact"
    },
    beforeEnter() { location.href = 'https://www.youtube.com/channel/UC1XzBAvMDmw21mgIdFbMbfw' }
  },
  {
    path: "/instagram",
    name: "Instagram",
    component: Contact,
    meta:{
      title: "Get in Contact"
    },
    beforeEnter() { location.href = 'https://www.instagram.com' }
  },
  {
    path: "/static/New-Pirate-Economy-manifesto.pdf",
    alias: ["/manifesto"],
    name: "Manifesto",
    meta:{
      title: "The New Pirate Economy Manifesto"
    }
  },
  {
    path: "*",
    name: "Error404",
    component: Error404,
    meta: {
      title: "Error 404 - Page not found"
    }
  }
];

if (!config.site.mode) {
  routes = [
    {
      path: "*",
      name: "UnderConstruction",
      component: Construction,
      meta: {
        title: "Under construction"
      }
    }
  ];
}

export default routes;
