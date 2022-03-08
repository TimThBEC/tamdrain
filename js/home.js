// Tam Drain Studios Home Page

// Init

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

var version = 3.2;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var introWrap = ".intro__wrap-js";
var introImg1 = ".intro__img1-js";
var introImg2 = ".intro__img2-js";
var introTitle = ".intro__title-js";
var introSubtitleWrap = ".intro__subtitle-wrap-js";

var aboutImg = ".about__img-js";
var aboutName = ".about__name-js";
var aboutText = ".about__text-js";
var aboutCTA = ".about__cta-js";

var featImg1 = ".featured__img1-js";
var featImg2 = ".featured__img2-js";
var featImg3 = ".featured__img3-js";
var featTitle = ".featured__h2-js";
var featScale = 1.11;

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

  // if (window.matchMedia("(min-width: 990px)").matches) {
  featImgTLPrep();
  // }
}

function introTLPrep() {
  // Prep text

  var titleSplitText = new SplitText(introTitle, { type: "chars" });
  var titleChars = titleSplitText.chars;
  var nameSplitText = new SplitText(aboutName, { type: "chars" });
  var nameChars = nameSplitText.chars;

  //Define timeline

  var introTL = gsap.timeline({
    id: "intro",
    scrollTrigger: {
      trigger: introWrap,
      start: "34% bottom",
      end: "80% bottom",
      scrub: true,
      markers: false
    }
  });

  // Build timeline

  introTL
    .to(introImg1, { opacity: 0 })
    .to(introSubtitleWrap, { opacity: 0 }, "<")
    .to(aboutImg, { opacity: 1 })
    .from(aboutImg, { xPercent: 3 }, "<")
    .to(titleChars, { opacity: 0, duration: 1, stagger: { each: 0.1 } })
    .set(aboutName, { zIndex: 30 }, "<")
    .from(
      nameChars,
      { opacity: 0, duration: 1, stagger: { each: 0.1 } },
      "<+=0.25"
    )
    .from(aboutText, { opacity: 0, ease: "none" })
    .to(introImg2, { opacity: 0, ease: "none" }, "<+=0.25")
    .to(aboutCTA, { scale: 1 }, ">-0.25");
} // end function

function textTLPrep() {
  var textTL = gsap.timeline({
    id: "text",
    scrollTrigger: {
      trigger: introScroll,
      start: "33.33% top",
      markers: false
    }
  });

  var titleSplitText = new SplitText(introTitle, {
    type: "chars",
    position: "absolute"
  });

  var titleChars = titleSplitText.chars;

  var nameSplitText = new SplitText(name, {
    type: "chars",
    position: "absolute"
  });

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
