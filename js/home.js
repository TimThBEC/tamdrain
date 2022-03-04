// Tam Drain Studios Home Page

// Init

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

var version = 2.5;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var introScroll = ".scroll-js";
var aboutDiv = ".about-js";
var textDiv = ".text-js";

var heroLayer1 = "#hero-layer-1-js";
var heroLayer2 = "#hero-layer-2-js";

var title = ".title-js";
var name = ".name-js";

var brightYellow = "#fde064";

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
      markers: false
    }
  });

  introTL.to(heroLayer1, {
    opacity: 0,
    duration: 1
  });

  introTL.to(heroLayer2, {
    opacity: 0,
    duration: 1
  });

  /* introTL.from(
    aboutDiv,
    {
      backgroundColor: brightYellow,
      duration: 2
    },
    "0%"
  ); */
}

function textTLPrep() {
  var textTL = gsap.timeline({
    id: "text",
    scrollTrigger: {
      trigger: introScroll,
      start: "33.33% top",
      markers: true
    }
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

  textTL
    .addLabel("start")
    .to(titleChars, {
      left: "0%",
      opacity: 0,
      stagger: { each: 0.1 }
    })

    .from(nameChars, {
      left: "0%",
      opacity: 0,
      ease: "back.out(.5)",
      stagger: { each: 0.2, from: "end" }
    })

    .to(textDiv, { top: "5%", duration: 4, ease: "back.out(1)" }, "start");
}
