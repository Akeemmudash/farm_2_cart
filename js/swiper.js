const heroSwiper = new Swiper(".hero-swiper", {
  // Optional parameters
  fadeEffect: { crossFade: true },
  direction: "horizontal",
  effect: "fade",
  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  slidesPerView: 1,
});
//
//
//Another carousel

const topCatSwiper = new Swiper(".top-cat-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  rewind: true,
  keyboard: {
    enabled: true,
  },
  freeMode: { enabled: true },
  breakpoints: {
    575: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".top-cat-next-btn",
    prevEl: ".top-cat-prev-btn",
  },
});

const featuredSwiper = new Swiper(".ftd-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
  cssMode: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
   
  },
  navigation: {
    nextEl: ".ftd-next-btn",
    prevEl: " .ftd-prev-btn",
  },
});

const SpecialOffersSwiper = new Swiper(".so-swiper", {
  slidesPerView: 2,
  direction: "vertical",
  scrollbar: {
    el: ".scroll-bar",
    draggable: true,
    dragSize: "auto",
    enabled:false,
  },
  allowSlideNext:false,
  spaceBetween: 10,
  snapOnRelease: true,

  mousewheel: true,

  breakpoints: {
    576: {
      spaceBetween: 20,
    },
  },
  on: {
    reachEnd: function () {
      // appendSlide(``)
    },
  },
});


const SpecialOffersSwiper2 = new Swiper(".specialoffer2-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,

  pagination: {
    el: ".specialoffer2pagin",
    clickable:true,
    dynamicBullets:true,
    dynamicMainBullets:1,
  },
  // effect:"flip",
  loop:true,
  navigation: {
    nextEl: ".so2-nxt-btn",
    prevEl: ".so2-prev-btn",
  },
});

console.log(SpecialOffersSwiper);

const quickViewSwiper = new Swiper(".quick-view-swiper", {
  slidesPerView: 1,
  cssMode: true,
  rewind: true,
  zoom: {
    containerClass: "zoom-container",
    maxRatio: 3,
    minRatio: 0.8,
  },

  navigation: {
    nextEl: ".quick-view-next",
    prevEl: " .quick-view-prev",
  },
});

const moreFlavorSwiper = new Swiper(".more-flavor-swiper", {
  slidesPerView: 1,
  fadeEffect: { crossFade: true },
  // direction:"horizontal",
  effect: "fade",

  navigation: {
    nextEl: ".more-flav-next-btn",
    prevEl: ".more-flav-prev-btn",
  },
});
console.log(moreFlavorSwiper);

const enjoyMinistrySwiper = new Swiper(".enjoy-swiper", {
  grid: {
    fill: "row",
    rows: 1,
  },

  spaceBetween: 4,
  slidesPerView: 2,
  cssMode: true,

  breakpoints: {
    340: {
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 4,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 5,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
  },

  navigation: {
    nextEl: ".enjoy-next-btn",
    prevEl: " .enjoy-prev-btn",
  },
});

const onSaleSwiper = new Swiper(".on-sale-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
  cssMode: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".on-sale-next-btn",
    prevEl: " .on-sale-prev-btn",
  },
});

const greensSwiper = new Swiper(".greens-swiper", {
  slidesPerView: 1,
  cssMode: true,
  rewind: true,

  navigation: {
    nextEl: ".greens-next-btn ",
    prevEl: ".greens-prev-btn",
  },
  pagination: {
    el: ".greens-pagin",
    clickable: true,
  },
});

const gardensSwiper = new Swiper(".gardens-swiper", {
  grid: {
    fill: "row",
    rows: 1,
  },

  spaceBetween: 4,
  slidesPerView: 2,
  cssMode: true,

  breakpoints: {
    340: {
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 4,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 5,
    },
    // 1200: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    //   slidesPerGroup: 3,
    // },
  },

  navigation: {
    nextEl: ".gardens-next-btn",
    prevEl: ".gardens-prev-btn",
  },
});

const ethnicDelicacySwiper = new Swiper(".delicacy-swiper", {
  spaceBetween: 4,
  slidesPerView: 2,
  cssMode: true,
  grid: {
    fill: "row",
    rows: 2,
  },
  navigation: {
    nextEl: ".delicacy-next-btn",
    prevEl: ".delicacy-prev-btn",
  },

  breakpoints: {
    340: {
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 4,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 5,
      // grid: {
      //   rows: 1,
      // },
    },
    // 1200: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    //   slidesPerGroup: 3,
    // },
  },
});
// function handleGrid() {
//   const smallScreen = window.matchMedia("(max-width:575px)");
//   if (smallScreen.matches) {
//     ethnicDelicacySwiper.params.grid.rows = 2;
//     console.log("condition true");
//   } else {
//     ethnicDelicacySwiper.params.grid.rows = 1;
//   }
//   ethnicDelicacySwiper.update(); // Update the Swiper instance
// }

// handleGrid();
// function setEqualSlideHeight(swiper) {
//   let swiperClass = swiper.el.classList[0];
//   let slides = document.querySelectorAll(`.${swiperClass} .swiper-slide`);
//   let maxHeight = 0;

//   // Find the maximum height among all slides
//   slides.forEach(function (slide) {
//     let slideHeight = slide.offsetHeight;
//     if (slideHeight > maxHeight) {
//       maxHeight = slideHeight;
//     }
//   });

//   // Set the same height for all slides
//   slides.forEach(function (slide) {
//     slide.style.height = maxHeight + "px";

//     swiper.update();
//   });

// const swipers = [
//   heroSwiper,
//   ethnicDelicacySwiper,
//   topCatSwiper,
//   featuredSwiper,
//   SpecialOffersSwiper,
//   quickViewSwiper,
//   enjoyMinistrySwiper,
//   onSaleSwiper,
//   greensSwiper,
// ];
// // Update Swiper to recalculate slide positions
// swipers.forEach((swiperInstance) => {
//   swiperInstance.update();
// });
// }

// Call the function on Swiper initialization and window resize

window.addEventListener("resize", () => {
  ethnicDelicacySwiper.update();
  heroSwiper.updateSize();
  topCatSwiper.updateSize();
  // featuredSwiper.updateSize();
  console.log("specisal");
  SpecialOffersSwiper.updateSize();
  // quickViewSwiper.updateSize();
  // onSaleSwiper.updateSize();
  moreFlavorSwiper.updateSize();
  enjoyMinistrySwiper.updateSize();
});
