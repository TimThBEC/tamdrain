// Tam Drain Studios Home Page

// Init

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

var version = 2.1;

var devToolsOn = true; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var introScroll = ".scroll-js";
var introDiv = ".intro-js";

var heroLayer1 = "#hero-layer-1-js";
var heroLayer2 = "#hero-layer-2-js";

var title = ".title-js";
var name = ".name-js";

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
  textTLPrep();
}

function introTLPrep() {
  // Topic 1 - Image Parallax

  var introTL = gsap.timeline({
    id: "intro",
    scrollTrigger: {
      trigger: introScroll,
      start: "33.33% bottom",
      end: "66.66% top",
      scrub: true,
      markers: true
    }
  });

  introTL.to(heroLayer1, {
    opacity: 0
  });

  introTL.to(introDiv, {
    opacity: 0
  });
}

function textTLPrep() {
  var textTL = gsap.timeline({
    id: "text"
    //paused: true
  });

  var titleSplitText = new SplitText(title, {
    type: "chars",
    position: "absolute"
  });

  var nameSplitText = new SplitText(name, {
    type: "chars",
    position: "absolute"
  });

  var titleChars = titleSplitText.chars;
  var nameChars = nameSplitText.chars;

  textTL.to(titleChars, {
    left: "0%",
    stagger: { each: 0.1, from: 1 }
  });

  textTL.to(
    titleChars,
    {
      opacity: "0",
      stagger: { each: 0.1, from: 1 }
    },
    "-.25"
  );

  textTL.to(title, { opacity: 0, duration: 0.05 });
  textTL.from(name, { opacity: 0, duration: 0.05 }, "<");

  textTL.from(nameChars, {
    left: "0%",
    opactiy: 0,
    ease: "back.out(.5)",
    stagger: { each: 0.2, from: "end" }
  });
}
