import config from "@/config";

import Index from "@/pages/Index";
import Volunteer from "@/pages/Volunteer";
import About from "@/pages/About";
import Vision from "@/pages/Vision";
import Events from "@/pages/Events";
import Partnerships from "@/pages/Partnerships";
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
    path: "/vision",
    alias: ["/new-pirate-economy"],
    name: "Vision",
    component: Vision,
    meta:{
      title: "Vision - The New Pirate Economy"
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
    path: "/partnerships",
    alias: ["/investors"],
    name: "Partnerships",
    component: Partnerships,
    meta:{
      title: "Partnerships & Investors"
    }
  },
  {
    path: "/contact",
    alias: ["/contactu-us"],
    name: "Contact",
    component: Contact,
    meta:{
      title: "Get in Contact"
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
