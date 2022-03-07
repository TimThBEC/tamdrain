// Tam Drain Studios Home Page

// Init

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

var version = 2.9;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var introScroll = ".scroll-js";
var aboutDiv = ".about-js";
var textDiv = ".text-js";

var heroLayer1 = "#hero-layer-1-js";
var heroLayer2 = "#hero-layer-2-js";

var title = ".title-js";
var name = ".name-js";

var featImg1 = ".featured__img1-js";
var featImg2 = ".featured__img2-js";
var featImg3 = ".featured__img3-js";
var featTitle = ".featured__h2-js";
var featScale = 1.15;

var brightYellow = "#fde064";

// Doc ready

$(document).ready(function () {
  console.log("home.js v" + version);

  gsapPrep();
  gsapDevTools();
});

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

  // if (window.matchMedia("(min-width: 990px)").matches) {
  featImgTLPrep();
  // }
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
}

function textTLPrep() {
  var textTL = gsap.timeline({
    id: "text",
    scrollTrigger: {
      trigger: introScroll,
      start: "33.33% top",
      markers: false
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

function featImgTLPrep() {
  // Create timelines for all Feature Image 1s

  var allImg1s = gsap.utils.toArray(featImg1);
  var img1TLs = [];

  allImg1s.forEach((img, imgNum) => {
    // Add var for image timeline array here

    console.log("Image1 index = " + imgNum);

    img1TLs[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });

    img1TLs[imgNum]
      .to(img, {
        scale: featScale,
        ease: "power1.out"
      })

      .to(img, {
        scale: 1,
        ease: "power1.out"
      });
  }); // end forEach

  // Create timelines for all Feature Image 2s

  var allImg2s = gsap.utils.toArray(featImg2);
  var img2TLs = [];

  allImg2s.forEach((img, imgNum) => {
    // Add var for image timeline array here

    console.log("Image2 index = " + imgNum);

    img2TLs[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });

    img2TLs[imgNum]
      .to(img, {
        scale: featScale,
        ease: "power1.out"
      })

      .to(img, {
        scale: 1,
        ease: "power1.out"
      });
  }); // end forEach

  // Create timelines for all Feature Image 3s

  var allImg3s = gsap.utils.toArray(featImg3);
  var img3TLs = [];

  allImg3s.forEach((img, imgNum) => {
    // Add var for image timeline array here

    console.log("Image3 index = " + imgNum);

    img3TLs[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });

    img3TLs[imgNum]
      .to(img, {
        scale: featScale,
        ease: "power1.out"
      })

      .to(img, {
        scale: 1,
        ease: "power1.out"
      });
  }); // end forEach

  // Create timelines for all Featured Titles

  var allFeatTitles = gsap.utils.toArray(featTitle);
  var featTitlesTL = [];

  allFeatTitles.forEach((img, imgNum) => {
    console.log("Title index = " + imgNum);

    featTitlesTL[imgNum] = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });

    featTitlesTL[imgNum]
      .to(img, {
        scale: featScale,
        ease: "power1.out"
      })

      .to(img, {
        scale: 1,
        ease: "power1.out"
      });
  }); // end forEach
} // end function
