// Tam Drain Studios Home Page

// Init

gsap.registerPlugin(ScrollTrigger);

var version = 1.1;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var introScroll = ".scroll-js";

var heroLayer1 = "#hero-layer-1-js";
var heroLayer2 = "#hero-layer-2-js";



// Doc ready

$(document).ready(function () {

  console.log("home.js v" + version);

  gsapPrep();
  gsapDevTools();

}); // End doc ready

// Functions

function gsapDevTools() {

  // Set up GSAP dev tools

  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }

}

function gsapPrep() {

  //Breakpoints

  if (window.matchMedia("(min-width: 992px)").matches) {
    console.log("Desktop");

  } else {
    console.log("Mobile");

  }

  // Timelines that don't depend on breakpoints

  introTLPrep();


}

function introTLPrep() {

  // Topic 1 - Image Parallax

  var introTL = gsap.timeline({
    id: "intro",
    scrollTrigger: {
      trigger: introScroll,
      start: "50% bottom",
      end: "50% top",
      scrub: true,
      markers: true
    }
  });

  introTL.to(
    heroLayer1,
    {
      opacity: 0
    }
  );


}