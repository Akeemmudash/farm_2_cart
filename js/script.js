"use-strict";

// SWIPER REGISTRATION AND LOGIN PAGE
// const formTabs = new Swiper(".form-tabs-swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   speed: 4000,
//   centeredSlides: true,
//   allowTouchMove: false,
//   loop: false,
//   fadeEffect: { crossFade: true },
//   effect: "fade",

//   // Navigation arrows
//   navigation: {
//     nextEl: ".sign-up-tab",
//     prevEl: ".login-tab",
//   },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: ".swiper-scrollbar",
//   // },
// });
function log(input) {
  console.log(input);
}
function changePageTitle(pageTitle) {
  const formTitle = document.querySelector("h1.form-title");

  formTitle.textContent = pageTitle;
}
function pageReload() {
  const pagemodal = document.querySelector(".pagemodal");
  pagemodal.style.display = "block";
  setTimeout(() => (pagemodal.style.display = "none"), 800);
  // setTimeout(() => window.location.reload(), 300);
}

function slideNext(event) {
  if (!event.target.classList.contains("active")) {
    const signUpSlide = document.querySelector(".form-slide2");
    const loginSlide = document.querySelector(".form-slide1");
    const loginTab = document.querySelector(".login-tab");
    const signUpTab = document.querySelector(".sign-up-tab");
    loginSlide.style.display = "none";
    signUpSlide.style.display = "block";
    loginTab.classList.remove("active");
    signUpTab.classList.add("active");
    changePageTitle("Registration");
    setTimeout(() => {
      location.reload();
    }, 100);
  }
}

function slidePrev(event) {
  if (!event.target.classList.contains("active")) {
    const loginSlide = document.querySelector(".form-slide1");
    const signUpSlide = document.querySelector(".form-slide2");
    const loginTab = document.querySelector(".login-tab");
    const signUpTab = document.querySelector(".sign-up-tab");
    signUpSlide.style.display = "none";
    loginSlide.style.display = "block";
    signUpTab.classList.remove("active");

    loginTab.classList.add("active");
    changePageTitle("Sign In");

    setTimeout(() => {
      location.reload();
    }, 100);
  }
}
function slideTab(targetTab) {
  const loginTab = document.querySelector(".login-tab");
  const signUpTab = document.querySelector(".sign-up-tab");
  if (targetTab === "#sign-up") {
    loginTab.classList.remove("active");
    signUpTab.classList.add("active");
    changePageTitle("Registration");
  } else {
    loginTab.classList.add("active");
    signUpTab.classList.remove("active");
    changePageTitle("Sign In");
  }
}

function signIn(event) {}
function toggleRevealButton() {
  var passwordInput = document.getElementById("sign-in-password");
  var revealButton = document.querySelector(".reveal-button");

  if (passwordInput.value.length > 0) {
    revealButton.style.display = "inline-block";
  } else {
    revealButton.style.display = "none";
  }
}
function revealPassword() {
  let passwordInput = document.getElementById("sign-in-password");
  let revealButton = document.querySelector(".reveal-button");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    revealButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    revealButton.textContent = "Show";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".tab-content");

  function showTabFromHash() {
    let hash = window.location.hash;
    let targetTab = document.querySelector(hash);

    if (targetTab) {
      tabs.forEach(function (tab) {
        tab.style.display = "none";
        slideTab(hash);
      });
      pageReload();
      targetTab.style.display = "block";
    } else {
      // If hash doesn't match any tab, show the first tab
      tabs[0].style.display = "block";
    }
  }

  function handleHashChange() {
    showTabFromHash();
  }

  window.addEventListener("hashchange", handleHashChange);

  showTabFromHash();
});

function validatePassword() {
  const password = document.querySelector("#sign-up-password").value;
  const digitRegex = /\d/;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const minLengthRegex = /.{6,}/;

  const pwDigit = document.querySelector(".pw-digit");
  const pwLowercase = document.querySelector(".pw-lowercase");
  const pwUppercase = document.getElementById("pw-upper-case");
  const pwCharLength = document.getElementById("pw-char-length");

  const testDigit = digitRegex.test(password);
  const testLowerCase = lowercaseRegex.test(password);
  const testUpperCase = uppercaseRegex.test(password);
  const testminLength = minLengthRegex.test(password);

  if (testDigit) {
    pwDigit.classList.add("met");
  } else {
    pwDigit.classList.remove("met");
  }

  if (testLowerCase) {
    pwLowercase.classList.add("met");
  } else {
    pwLowercase.classList.remove("met");
  }

  if (testUpperCase) {
    pwUppercase.classList.add("met");
  } else {
    pwUppercase.classList.remove("met");
  }

  if (testminLength) {
    pwCharLength.classList.add("met");
  } else {
    pwCharLength.classList.remove("met");
  }
  if (testDigit && testLowerCase && testUpperCase && testminLength) {
    return true;
  } else {
    return false;
  }
}
function checkMet() {
  const pwDigit = document.querySelector(".pw-digit");
  const pwLowercase = document.querySelector(".pw-lowercase");
  const pwUppercase = document.getElementById("pw-upper-case");
  const pwCharLength = document.getElementById("pw-char-length");
  const pwConstraints = [pwCharLength, pwDigit, pwLowercase, pwUppercase];
  pwConstraints.forEach((constraint) => {
    if (!constraint.classList.contains("met")) {
      constraint.style.color = "red";
    }
  });
}
function validSignUpEmail() {
  // Regular expression to match valid email addresses.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const signUpEmail = document.querySelector("#sign-up-email");
  const errMsg = document.querySelector(".sign-up-err");

  if (!emailRegex.test(signUpEmail.value)) {
    errMsg.style.display = "block";
    return false;
  } else {
    errMsg.style.display = "none";
    return true;
  }
}

function validateName() {
  const nameInput = document.getElementById("sign-up-name");
  const nameRegex = /^[A-Za-z\s'-]{2,30}$/;
  const nameErrMsg = document.querySelector(".nameCheck");
  console.log("wofrking");
  if (!nameRegex.test(nameInput.value)) {
    nameErrMsg.style.display = "block";
    return false;
  } else {
    nameErrMsg.style.display = "none";
    return true;
  }
}

function displaySpinner() {
  const getSpin = document.querySelector(".spinner");
  getSpin.style.display = "inline-block";
}
function hideSpinner() {
  const getSpin = document.querySelector(".spinner");
  getSpin.style.display = "none";
}

function signUp(event) {
  event.preventDefault();
  const getName = document.querySelector("#sign-up-name").value;
  const getEmail = document.querySelector("#sign-up-email").value;
  const getPassword = document.querySelector("#sign-up-password").value;
  const getConfirmPassword = document.querySelector("#sign-up-name").value;

  displaySpinner();
  log(isValidEmail);

  // if (
  //   getName === "" ||
  //   getEmail === "" ||
  //   getPassword === "" ||
  //   getConfirmPassword === ""
  // ) {
  //   Swal.fire({
  //     icon: "warning",
  //     text: "All Inputs Fields are Required",
  //     confirmButtonColor: "var(--dark-green)",
  //   });
  //   hideSpinner();
  // } else {
  //   if (getConfirmPassword !== getPassword) {
  //     Swal.fire({
  //       icon: "warning",
  //       text: "Passwords do not match",
  //       confirmButtonColor: "var(--dark-green)",
  //     });
  //   }
  // }
}

function disableScroll() {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Apply styles to disable scrolling
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
  // Retrieve the previous scroll position
  const scrollY = Math.abs(parseInt(document.body.style.top));

  // Remove the styles to enable scrolling
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";

  // Scroll back to the previous position
  window.scrollTo(0, scrollY);
}

const optMenus = document.querySelectorAll(".select-menu");
function addActiveClass() {
  optMenus.forEach((optMenu) => {
    optMenu.classList.add("active");
  });
}
function removeActiveClass() {
  optMenus.forEach((optMenu) => {
    optMenu.classList.remove("active");
  });
}
function toggleClass() {
  optMenus.forEach((optMenu) => {
    optMenu.classList.toggle("active");
  });
}

optMenus.forEach((optMenu) => {
  const optionEls = optMenu.querySelectorAll(".option");
  const sBtn_text = optMenu.querySelector(".sBtn-text");
  const optionsList = optMenu.querySelector("#optionslist");

  optionEls.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.textContent = selectedOption;
      removeActiveClass();
    });
  });

  // Remove active class when anywhere else on the window is clicked
  window.addEventListener("click", (event) => {
    if (!optMenu.contains(event.target)) {
      optMenu.classList.remove("active");
    }
  });
});

function addSubList() {
  const dropLists = document.querySelectorAll(".drop-list");
  dropLists.forEach((dropList) => {
    dropList.classList.toggle("open");
  });
  console.log("working");
}
function timeLeave() {
  const dropLists = document.querySelectorAll(".drop-list");
  const list = document.querySelectorAll(".list");

  dropLists.forEach((dropList) => {
    if (dropList.classList.contains("open")) {
      setTimeout(() => {
        dropList.classList.remove("open");
      }, 2000);
    }
  });
}
function hideCatMenu() {
  //HDIES  CATEGORY BLOCK FROM FORM BLOCK
  optMenus.forEach((selectMenu) => {
    selectMenu.style.display = "none";
  });
}
function showCatMenu() {
  //RETURNS CATEGORY BLOCK INSIDE FORM
  optMenus.forEach((selectMenu) => {
    selectMenu.style.display = "flex";
  });
}
// ADDS SHADOW AROUND FORM BLOCK
function addshadow() {
  const searchForm = document.querySelector("#search2");
  searchForm.classList.add("focused");
}
//REMOVES SHADOW FROM FORM BLOCK
function removeShadow() {
  const searchForm = document.querySelector("#search2");
  searchForm.classList.remove("focused");
}
function activeSearchform() {
  //search content (with Modal)
  const searchBtnSM = document.querySelector("#search2 .search-btn");
  const searchBlock = document.querySelectorAll(".search-block");
  const searchInput = document.querySelectorAll(".search-input");
  const clearInput = document.querySelectorAll(".clear-button");
  const searchContent = document.querySelectorAll(".search-content");
  const searchSpin = document.querySelectorAll(".ispinner");
  const modalBack = document.querySelector(".modal-bg");
  for (let i = 0; i < searchContent.length; i++) {
    searchBlock[i].style.zIndex = "3";
    searchSpin[i].classList.add("active-search");
    searchContent[i].style.display = "block";
    searchInput[i].classList.add("active-input");
    clearInput[i].style.display = "block";
  }
  modalBack.style.display = "block";
  searchBtnSM.classList.add("mobile-search");
}
function unActiveSearchForm() {
  const searchBtnSM = document.querySelector("#search2 .search-btn");
  const modalBack = document.querySelector(".modal-bg");
  const searchBlock = document.querySelectorAll(".search-block");
  const searchContent = document.querySelectorAll(".search-content");
  const searchInput = document.querySelectorAll(".search-input");
  const clearInput = document.querySelectorAll(".clear-button");
  const searchSpin = document.querySelectorAll(".ispinner");
  for (let i = 0; i < searchContent.length; i++) {
    searchBlock[i].style.zIndex = "2";
    searchSpin[i].classList.remove("active-search");
    searchContent[i].style.display = "none";
    searchInput[i].classList.remove("active-input");
    clearInput[i].style.display = "none";
  }
  modalBack.style.display = "none";
  searchBtnSM.classList.remove("mobile-search");
}
function removeSearchContent() {
  showCatMenu();
  unActiveSearchForm();
}

function unActiveSearch() {
  removeSearchContent();
  enableScroll();
}
function addSearchContent() {
  const searchInput = document.querySelectorAll(".search-input");
  searchInput.forEach((inputField) => {
    inputField.addEventListener("input", (event) => {
      const inputValue = event.target.value;
      if (inputValue.length > 0) {
        hideCatMenu();
        activeSearchform();
        disableScroll();
      } else {
        unActiveSearch();
        enableScroll();
      }
    });
  });
}

function activeSearch() {
  // search with modal
  addshadow();
  addSearchContent();
}

function clearSearch(event) {
  event.preventDefault();
  const searchInput = document.querySelectorAll(".search-input");
  searchInput.forEach((inputField) => {
    inputField.value = "";
    inputField.focus();
  });

  removeSearchContent();
  enableScroll();
}
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  console.log(currentScrollPos);
  console.log("window Height", window.innerHeight);

  if (currentScrollPos > window.innerHeight) {
    document.getElementById("cart-icon").classList.add("visible");
  } else {
    document.getElementById("cart-icon").classList.remove("visible");
  }

  prevScrollPos = currentScrollPos;
};

console.log(window);
// Remove active class after 5 seconds
// function resetTimeout() {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(removeActiveClass, 2000);
// }

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function openNav() {
  const hamBtn = document.querySelector("#nav-icon1");
  hamBtn.classList.toggle("open");
}

// category small devices

const categorySm = document.querySelector(".category-sm .offcanvas"); //global variable

function showCat(event) {
  event.preventDefault();
  categorySm.classList.add("show");
}

// window.addEventListener("DOMContentLoaded", () => {
//   const pagemodal = document.querySelector(".pagemodal");
//   pagemodal.style.display = "block";
//   setTimeout(() => (pagemodal.style.display = "none"), 800);
// });

// TOOLTIP
PopoverComponent.init({
  ele: ".popover-demo",
  showOnHover: true,
  zIndex: 5,
  position: "left",
});
PopoverComponent.init({
  ele: ".quick-view-img",
  showOnHover: true,
  zIndex: 1056,
  position: "right",
  hideArrowIcon: true,
});

//sliding tabs
function slidetabs(event) {
  const slideLine = document.querySelector(".slider-line");
  const tabLinks = document.querySelectorAll(".tab-link");
  const clickedButton = event.target;
  tabLinks.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  clickedButton.classList.add("active");

  slideLine.style.width = `${clickedButton.offsetWidth}px`;
  slideLine.style.left = `${clickedButton.offsetLeft}px`;
}

window.addEventListener("DOMContentLoaded", () => {
  const activetab = document.querySelector(".tab-link.active");
  const slideLine = document.querySelector(".slider-line");

  slideLine.style.width = `${activetab.offsetWidth}px`;
  console.log(activetab);
});

window.addEventListener("resize", () => {
  const activetab = document.querySelector(".tab-link.active");
  const slideLine = document.querySelector(".slider-line");
  slideLine.style.left = `${activetab.offsetLeft}px`;
});

function slidetabs2(event) {
  const slideLine = document.querySelector(".slider-line2");
  const tabLinks = document.querySelectorAll(".tab-link2");
  const clickedButton = event.target;
  tabLinks.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  clickedButton.classList.add("active");

  slideLine.style.width = `${clickedButton.offsetWidth}px`;
  slideLine.style.left = `${clickedButton.offsetLeft}px`;
}

window.addEventListener("DOMContentLoaded", () => {
  const activetab = document.querySelector(".tab-link2.active");
  const slideLine = document.querySelector(".slider-line2");

  slideLine.style.width = `${activetab.offsetWidth}px`;
  console.log(activetab);
});

window.addEventListener("resize", () => {
  const activetab = document.querySelector(".tab-link2.active");
  const slideLine = document.querySelector(".slider-line2");
  slideLine.style.left = `${activetab.offsetLeft}px`;
});

//
//
//
//
//

function slidetabs3(event) {
  const slideLine = document.querySelector(".slider-line3");
  const tabLinks = document.querySelectorAll(".tab-link3");
  const clickedButton = event.target;
  tabLinks.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  clickedButton.classList.add("active");

  slideLine.style.width = `${clickedButton.offsetWidth}px`;
  slideLine.style.left = `${clickedButton.offsetLeft}px`;
}

window.addEventListener("DOMContentLoaded", () => {
  const activetab = document.querySelector(".tab-link3.active");
  const slideLine = document.querySelector(".slider-line3");

  slideLine.style.width = `${activetab.offsetWidth}px`;
  console.log(activetab);
});

window.addEventListener("resize", () => {
  const activetab = document.querySelector(".tab-link3.active");
  const slideLine = document.querySelector(".slider-line3");
  slideLine.style.left = `${activetab.offsetLeft}px`;
});

function slidetabs4(event) {
  const slideLine = document.querySelector(".slider-line4");
  const tabLinks = document.querySelectorAll(".tab-link4");
  const clickedButton = event.target;
  tabLinks.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add 'active' class to the clicked button
  clickedButton.classList.add("active");

  slideLine.style.width = `${clickedButton.offsetWidth}px`;
  slideLine.style.left = `${clickedButton.offsetLeft}px`;
}

window.addEventListener("DOMContentLoaded", () => {
  const activetab = document.querySelector(".tab-link4.active");
  const slideLine = document.querySelector(".slider-line4");

  slideLine.style.width = `${activetab.offsetWidth}px`;
  console.log(activetab);
});

window.addEventListener("resize", () => {
  const activetab = document.querySelector(".tab-link4.active");
  const slideLine = document.querySelector(".slider-line4");
  slideLine.style.left = `${activetab.offsetLeft}px`;
});

//fetch from Api number of items in cart upon loading
// save in local storage

// const numinCart = 0;
// // CART
// function incrementQty() {
//   const numOfItems = document.querySelector(".input-num");
//   const decrementBtn = document.querySelector(".decrement-btn");
//   const cartNum = (decrementBtn.disabled = false);
//   decrementBtn.classList.remove("disabled-btn");
//   numOfItems.value++;
//   numinCart += numOfItems.value;
//   //get number of items in cart from  local  storage
//   // update it
//   //

//   sessionStorage.setItem("numberInCart", numOfItems.value);
// }
// function decrementQty() {
//   const numOfItems = document.querySelector(".input-num");
//   const decrementBtn = document.querySelector(".decrement-btn");

//   if (numOfItems.value > 1) {
//     numOfItems.value--;
//   }

//   if (numOfItems.value === "1") {
//     decrementBtn.disabled = true;
//     decrementBtn.classList.add("disabled-btn");
//   }
// }
function quickView(event) {
  event.preventDefault();
  const modal = new bootstrap.Modal(document.getElementById("quick-view"));
  modal.show();
}

// applyEffect(".reveal-btn", {
//   lightColor: "rgba(0,0,0,0.3)",
//   gradientSize: 250,
// });

// function isElementLoaded(elementId, callback) {
//   document.addEventListener("DOMContentLoaded", function () {
//     var element = document.getElementById(elementId);
//     if (element) {
//       callback(true); // Element is loaded
//     } else {
//       callback(false); // Element is not loaded
//     }
//   });
// }

function showCamTtp() {
  const cameroonPepperTtp = document.querySelector("#cameroontooltip");
  const cameroonPepper = document.querySelector("#cameroon-pepper");
  const popperInstance = Popper.createPopper(
    cameroonPepper,
    cameroonPepperTtp,
    {
      placement: "left",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 20],
          },
        },
      ],
    }
  );
  cameroonPepperTtp.setAttribute("data-show", "");
  // We need to tell Popper to update the tooltip position
  // after we show the tooltip, otherwise it will be incorrect
  popperInstance.update();
}

function hideCamTtp() {
  const cameroonPepperTtp = document.querySelector("#cameroontooltip");
  cameroonPepperTtp.removeAttribute("data-show");
}

function showRedHotTtp() {
  const redHotPepperTtp = document.querySelector("#redHotTooltip");
  const redHotPepper = document.querySelector("#red-hot-pepper");
  const popperInstance = Popper.createPopper(redHotPepper, redHotPepperTtp, {
    placement: "right",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
  log(redHotPepper);
  redHotPepperTtp.setAttribute("data-show", "");
  // We need to tell Popper to update the tooltip position
  // after we show the tooltip, otherwise it will be incorrect
  popperInstance.update();
}

function hideRedHotTtp() {
  const redHotPepperTtp = document.querySelector("#redHotTooltip");
  redHotPepperTtp.removeAttribute("data-show");
  log("clicked");
}

function showMoreDetails() {
  const hiddenDetailsInstances = document.querySelectorAll(".hidden-more");
  hiddenDetailsInstances.forEach((hiddendetails) => {
    hiddendetails.classList.toggle("active");
  });
}

// showEvents.forEach((event) => {
//   button.addEventListener(event, show);
// });

// hideEvents.forEach((event) => {
//   button.addEventListener(event, hide);
// });

// Popper.createPopper(redHotPepper, tooltip, {
//   placement: "left",
// });
console.log("okay");
