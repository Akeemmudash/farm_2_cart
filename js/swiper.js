const swiper = new Swiper(".hero-swiper", {
  // Optional parameters
  fadeEffect: { crossFade: true },
  direction: "horizontal",
  effect: "fade",
  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: ".hero-pagin",
  },
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
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".ftd-next-btn",
    prevEl: " .ftd-prev-btn",
  },
});

const SpecialOffersSwiper = new Swiper(".so-swiper", {
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
    nextEl: ".so-next-btn",
    prevEl: " .so-prev-btn",
  },
});

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
  cssMode: true,
  rewind: true,

  navigation: {
    nextEl: ".more-flav-next-btn ",
    prevEl: ".more-flav-prev-btn",
  },
  pagination: {
    el: ".more-flavor-pagin",
    clickable: true,
  },
});

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
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
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
