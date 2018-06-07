import Vue from "vue";

import * as firebase from "firebase/app";
// import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAxobPYZVHkG1TfpkENA1KoZLtm9m_uews",
  authDomain: "valparaiso-b2287.firebaseapp.com",
  databaseURL: "https://valparaiso-b2287.firebaseio.com",
  projectId: "valparaiso-b2287",
  storageBucket: "valparaiso-b2287.appspot.com",
  messagingSenderId: "630564716917"
};
const Firebase = firebase.initializeApp(config);

Vue.mixin({
  created: function() {
    this.$_firebase = Firebase;
  }
});
