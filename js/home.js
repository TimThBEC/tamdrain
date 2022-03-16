// Tam Drain Studios Home Page

// Init

gsap.registerPlugin(ScrollTrigger);

var version = 4.4;

var devToolsOn = false; // Set to true to turn on GSAP Dev Tools.

var gsapDevToolsContainer = "#gsap-dev-tools-js"; // Container for GSAP Dev Tools

var desktopWidth = "(min-width: 992px)";

var introWrap = ".intro__wrap-js";
var introImg1 = ".intro__img1-js";
var introTitle = ".intro__title-js";
var introSubtitleWrap = ".intro__subtitle-wrap-js";

var aboutSectn = ".about-js";
var aboutImg = ".about__img-js";
var aboutPainting = ".about__painting-js";
var aboutName = ".about__name-js";
var aboutText = ".about__text-js";
var aboutCTA = ".about__cta-js";

var featImg1 = ".featured__img1-js";
var featImg2 = ".featured__img2-js";
var featImg3 = ".featured__img3-js";
var featTitle = ".featured__h2-js";
var featScale = 1.11;

// Doc ready

$(document).ready(function () {
  console.log("home.js v" + version);
  introTLPrep();
  featImgTLPrep();
  gsapDevTools();
});

// Functions

function introTLPrep() {
  //Timeline for intro animations

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

  if (window.matchMedia(desktopWidth).matches) {
    console.log("Desktop Intro");

    introTL
      .set(aboutSectn, { opacity: 1 })
      .to(introImg1, { opacity: 0 }, "<")
      .to(introSubtitleWrap, { opacity: 0 }, "<")
      .to(introTitle, { xPercent: -50, opacity: 0 }, "<")
      .set(aboutName, { zIndex: 30 }, "<")
      .from(aboutName, { xPercent: -50, opacity: 0 }, "<+0.5")
      .from(aboutImg, { opacity: 0 }, ">1")
      .from(aboutImg, { xPercent: 10, duration: 1 }, "<")
      .to(aboutPainting, { opacity: 0 }, ">+1")
      .from(aboutText, { opacity: 0, ease: "none" })
      .from(aboutCTA, { scale: 0 }, ">-0.25");
  } else {
    console.log("Mobile Intro");

    introTL
      .set(aboutSectn, { opacity: 1 })
      .to(introImg1, { opacity: 0 }, "<")
      .to(introSubtitleWrap, { opacity: 0 }, "<")
      .to(introTitle, { xPercent: -50, opacity: 0 }, "<")
      .set(aboutName, { zIndex: 30 }, "<")
      .from(aboutName, { xPercent: -50, opacity: 0 }, "<+0.5")
      .from(aboutPainting, { scale: 2 }, ">+0.5")
      .from(aboutPainting, { yPercent: 50 }, "<")
      .from(aboutText, { opacity: 0, ease: "none" }, "<")
      .from(aboutCTA, { scale: 0 }, ">-0.25")
      .from(aboutImg, { opacity: 0 }, "<")
      .from(aboutImg, { xPercent: 10, duration: 1 }, "<");
  }
} // end function

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

function gsapDevTools() {
  // Set up GSAP dev tools
  if (devToolsOn) {
    gsap.set(gsapDevToolsContainer, { display: "block" });
    GSDevTools.create({ container: gsapDevToolsContainer });
  }
}
