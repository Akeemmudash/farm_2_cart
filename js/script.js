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

// function signUp(event) {
//   event.preventDefault();
//   displaySpinner(event);
//   validateFields();

//   const getName = document.querySelector("#sign-up-name").value;
//   const getEmail = document.querySelector("#sign-up-email").value;
//   const getPassword = document.querySelector("#sign-up-password").value;
//   const getConfirmPassword = document.querySelector("#confirmPass").value;
//   const phoneNumber = "";
//   const address = "";
//   if (
//     getName === "" ||
//     getEmail === "" ||
//     getPassword === "" ||
//     getConfirmPassword === ""
//   ) {
//     Swal.fire({
//       icon: "warning",
//       text: "All Inputs Fields are Required",
//       confirmButtonColor: "var(--dark-green)",
//     });
//     hideSpinner(event);
//   } else {
//     if (getConfirmPassword !== getPassword) {
//       Swal.fire({
//         icon: "warning",
//         text: "Passwords do not match",
//         confirmButtonColor: "var(--dark-green)",
//       });
//       hideSpinner(event);
//     } else {
//       const signFormData = {
//         getName,
//         getEmail,
//         getPassword,
//         phoneNumber,
//         address,
//       };

//       const headersContent = {
//         "Content-Type": "application/json",
//       };
//       const signMethod = {
//         method: "POST",
//         body: JSON.stringify(signFormData),
//         headers: headersContent,
//       };
//       console.log("sth in form");

//       const url = "https://elehaus-backend.onrender.com/api/users";

//       fetch(url, signMethod)
//         .then((response) => {
//           response.text();
//         })
//         .then((result) => {
//           console.log(result);

//           if (result.status === "success") {
//             Swal.fire({
//               icon: "success",
//               text: `${result.message}`,
//               confirmButtonColor: "#var(--dark-green)",
//             });
//             hideSpinner(event);
//             setTimeout(() => {
//               location.href = "index.html";
//             }, 5000);
//           } else {
//             Swal.fire({
//               icon: "info",
//               text: "Registration Unsuccessful!",
//               confirmButtonColor: "#2D85DE",
//             });
//           }
//         })
//         .catch((error) => console.log("error", error));
//     }
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.querySelector(".header-container");
  let prevScrollPos = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > headerContainer.offsetHeight) {
      headerContainer.style.position = "sticky";
      if (prevScrollPos > currentScrollPos) {
        headerContainer.style.transform = "translateY(0)";
      } else {
        headerContainer.style.transform = `translateY(-${headerContainer.clientHeight}px)`;
      }
    }

    prevScrollPos = currentScrollPos;
  });
});

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
  const currentScrollPos = window.scrollY;

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

const SliderTabs = function (sectionClass) {
  this.parentEL = document.querySelector(`.${sectionClass}`);
  this.slideLine = this.parentEL.querySelector(".slider-line");
  this.tabLinks = this.parentEL.querySelectorAll(".tab-link");

  this.tabLinks.forEach((tab) => {
    tab.addEventListener("click", (event) => this.slidetabs(event));
  });

  window.addEventListener("DOMContentLoaded", () => this.initSlider());
  window.addEventListener("resize", () => this.updateSlideLinePosition());
};
SliderTabs.prototype.slidetabs = function (event) {
  const clickedButton = event.target;

  this.tabLinks.forEach((tab) => {
    tab.classList.remove("active");
  });

  clickedButton.classList.add("active");

  this.slideLine.style.width = `${clickedButton.offsetWidth}px`;
  this.slideLine.style.left = `${clickedButton.offsetLeft}px`;
};
SliderTabs.prototype.initSlider = function () {
  const activetab = this.parentEL.querySelector(".tab-link.active");
  this.slideLine.style.width = `${activetab.offsetWidth}px`;
};
SliderTabs.prototype.updateSlideLinePosition = function () {
  const activetab = this.parentEL.querySelector(".tab-link.active");
  this.slideLine.style.left = `${activetab.offsetLeft}px`;
};
document.addEventListener("DOMContentLoaded", () => {
  // Create instances for each section
  const section1SliderTabs = new SliderTabs("so-items");
  const section2SliderTabs = new SliderTabs("enjoy");
  const section3SliderTabs = new SliderTabs("gardens");
  const section4SliderTabs = new SliderTabs("delicacy");
});

// Add a scroll event listener
window.addEventListener("scroll", () => {
  const moreFlav = document.querySelector(".more-flavor-sec");
  const moreFlavSide = document.querySelector(".more-flav-side-desc");

  // Get the position of the element relative to the viewport
  const elementTop = moreFlav.getBoundingClientRect().top;

  // Check if the element is in the viewport (or close to it)
  const isVisible = elementTop - window.innerHeight < 0;

  if (isVisible) {
    // Add the class to trigger the animation
    moreFlavSide.classList.add("moveOut");
  } else {
    // If the element is not visible, remove the class to reset the animation
    moreFlavSide.classList.remove("moveOut");
  }
});

function getStarRating(rating, screenSizeType = 'large') {
  const maxRating = 5; // Maximum rating value (assuming 5 stars)

  // Calculate the number of filled stars (whole number part of the rating)
  const filledStars = Math.floor(rating);

  // Calculate the percentage of the last star to fill (if rating is not a whole number)
  const lastStarPercentage = (rating % 1) * 100;

  // Generate the HTML string for the filled stars with the custom class
  let starsHtml = "";

  // Determine the screen size class based on the screenSizeType argument
  let screenSizeClass = "";
  if (screenSizeType === 'small') {
    screenSizeClass = 'rating-for-small-screen';
  } else if (screenSizeType === 'fluid' && window.innerWidth <= 575) {
    screenSizeClass = 'rating-for-small-screen';
  }

  // Generate the star ratings based on screen size class
  if (screenSizeClass) {
    starsHtml += `<div class="${screenSizeClass}">`;
    if (screenSizeType === 'small' || screenSizeType === 'fluid') {
      starsHtml +=
        '<i class="fa-solid fa-star filled-star"></i>' +
        '<span class="rating-number">' +
        rating.toFixed(1) +
        "</span>";
    }
    starsHtml += "</div>";
  } else {
    // Larger screens: Generate the regular star ratings
    for (let i = 0; i < filledStars; i++) {
      starsHtml += '<i class="fa-solid fa-star filled-star"></i>';
    }

    if (lastStarPercentage > 0) {
      starsHtml += `<i class="fa-solid fa-star" style="background-image: linear-gradient(90deg, gold ${lastStarPercentage}%, transparent ${lastStarPercentage}%);"></i>`;
    }

    const remainingStars =
      maxRating - filledStars - (lastStarPercentage > 0 ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
  }

  return starsHtml;
}


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
function checkLabels(parentEl, product) {
  const discountLabel = parentEl.querySelector(".discount-label");
  const oldPrice = parentEl.querySelector(".old-price");
  if (product.discount === 0 || product.discount === null) {
    discountLabel.style.display = "none";
    oldPrice.style.visibility = "hidden";
  } else {
    discountLabel.style.display = "flex"; // Show the discount label for other values of discount
    oldPrice.style.visibility = "visible";
  }
  const soldOut = parentEl.querySelector(".sold-out");
  if (product.isAvailable === true) {
    soldOut.style.display = "none";
  } else {
    soldOut.style.display = "block";
  }
}
function quickView(event) {
  event.preventDefault();
  if (quickViewSwiper.zoom.scale > 1) {
    quickViewSwiper.zoom.out();
  }
  const modal = new bootstrap.Modal(document.getElementById("quick-view"));

  const getProductId = event.currentTarget.getAttribute("data-id");
  const quickViewContent = document.querySelector(".quick-view-content");
  const getCategoryEl = quickViewContent.querySelector(".quick-view-category");
  const getTagsEl = quickViewContent.querySelector(".quick-view-tags");
  const rating = quickViewContent.querySelector(".rating");

  const quickViewName = quickViewContent.querySelectorAll(
    ".quick-view-item-title"
  );
  const quickViewInfo = quickViewContent.querySelector(".quick-view-info");

  const quickViewImage = quickViewContent.querySelector(".quick-view-img");
  const quickViewload = quickViewContent.querySelectorAll("[data-load]");
  const newPrice = quickViewContent.querySelector(".new-price");
  const oldPrice = quickViewContent.querySelector(".old-price");
  const productDescription =
    quickViewContent.querySelector(".item-description");
  const brandNameEL = quickViewContent.querySelector(".brand-name");

  // Function to generate a random food-related brand name
  function generateBrandName() {
    // Arrays of sample words for food-related brand name generation
    const prefixes = [
      "Fresh",
      "Tasty",
      "Gourmet",
      "Delicious",
      "Savory",
      "Yummy",
      "Organic",
      "Natural",
    ];
    const suffixes = [
      "Foods",
      "Eats",
      "Kitchen",
      "Bites",
      "Pantry",
      "Grill",
      "Cuisine",
      "Table",
    ];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return randomPrefix + randomSuffix;
  }
  // Function to generate random tags based on the food category
  function generateRandomTags(category) {
    const tags = [];

    // Sample tag prefixes and suffixes
    const tagPrefixes = [
      " fresh",
      " organic",
      " delicious",
      " healthy",
      " tasty",
      " natural",
    ];
    const tagSuffixes = [
      " food",
      " dishes",
      " cuisine",
      " recipes",
      " kitchen",
      " meal",
    ];

    // Add category-specific tags based on the provided category
    switch (category.toLowerCase()) {
      case "flour":
        tags.push(" baking", " wheat", " gluten-free", " pastry", " dough");
        break;
      case "grain":
        tags.push(" whole grain", " cereal", " rice", " quinoa", " oats");
        break;
      case "livestock":
        tags.push(" meat", " poultry", " beef", " chicken", " lamb", " pork");
        break;
      case "fruit":
        tags.push(
          " fresh fruit",
          " juicy",
          " sweet",
          " vitamins",
          " healthy snack"
        );
        break;
      // Add additional cases for other food categories if needed
      default:
        break;
    }

    // Add random general tags (prefix + suffix) to the list
    const randomPrefix =
      tagPrefixes[Math.floor(Math.random() * tagPrefixes.length)];
    const randomSuffix =
      tagSuffixes[Math.floor(Math.random() * tagSuffixes.length)];
    tags.push(randomPrefix, randomSuffix);

    return tags;
  }

  quickViewload.forEach((load) => {
    load.setAttribute("data-load", "false");
  });
  quickViewImage.src="";
  quickViewInfo.classList.remove("overflow-auto");
  quickViewInfo.classList.add("overflow-hidden");
  modal.show();
  const url = `https://elehaus-backend.onrender.com/api/products/${getProductId}`;
  // const urlencoded = new URLSearchParams();

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  // quickViewload.forEach((load) => {
  //   if (!load.classList.contains("loading")) {
  //     load.classList.add("loading");
  //     load.removeAttribute("data-loaded");
  //   }
  // });

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      quickViewInfo.classList.add("overflow-auto");
      quickViewInfo.classList.remove("overflow-hidden");
      const productInfo = result.product;
      quickViewName.forEach((name) => {
        name.textContent = productInfo.name;
      });

      rating.innerHTML = getStarRating(productInfo.rating);
      quickViewImage.src = productInfo.images[0];
      oldPrice.textContent = "₦ " + productInfo.price.toLocaleString();
      newPrice.innerText =
        "₦ " +
        Math.floor(
          ((100 - productInfo.discount) / 100) * productInfo.price
        ).toLocaleString();
      productDescription.textContent = productInfo.description;
      getCategoryEl.textContent = productInfo.category;
      if (!productInfo.discount) {
        oldPrice.style.visibility = "hidden";
      }

      brandNameEL.textContent = generateBrandName();
      getTagsEl.textContent = generateRandomTags(productInfo.category);
      quickViewload.forEach((load) => {
        load.setAttribute("data-load", "true");
      });
    })
    .catch((error) => console.log("error", error));
}
console.log(window.location.search);

// special offers
function generateProductCard(product) {
  const discountPrice = Math.floor(
    ((100 - product.discount) / 100) * product.price
  );
  const productCard = `
  <div class="swiper-slide product-card appended d-flex" data-id="${
    product._id
  }">
               <div class="img loading-img" data-load="false">
                 <a href="#" class="position-relative d-block h-100">
                   <div class="image-container h-100">
                     <img src=""   data-src="${
                       product.images[0]
                     }" class="item-image">
                   </div>
                   <div class="product-item-action">
                     <button type="button" class="product-action-btn  fnt2" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add to WishList" data-id="${
                       product._id
                     }">
                       <i class="bx bx-heart"></i>
                     </button>
             
                     <button type="button" class="product-action-btn quick-view-btn  action-view-btn fnt2" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Quick View" onclick="quickView(event)" data-id="${
                       product._id
                     }">
                       <i class="bx bx-search-alt"></i>
                     </button>
                   </div>
                   <div class="item-label  fs-8">
                     <div class=" position-absolute top-0 left-0 discount-label rounded-circle align-items-center flex-sm-column justify-content-center mt-1" style="width:calc(25px + 1.5vw); height:calc(25px + 1.5vw);">
                        <span class="d-sm-none d-inline">-</span> ${
                    product.discount
                  }% <span class="d-none d-sm-block"> OFF</span>
                     </div>
                     <div class="sold-out top-50 start-50">Sold out</div>
                   </div>
                 </a>                      </div>
               <div class="info">
                 <div class="product-content d-flex flex-column justify-content-between ps-2 pe-1 ps-md-3 pe-md-2 pt-2 pb-2">
                   <h3 class=" text-gray mb-1" ><span class="title">${
                     product.name
                   }
                   </span></h3>
                   <div class="product-info-block">
                   <div class=" d-flex align-items-center justify-content-between mb-2 mb-sm-3">
                     <div class="rating lh-1 fs-7">
                       <span>${getStarRating(product.rating, "fluid")}</span>
                     </div>
                     <div class=" lh-1 ms-2 txt-gray" >
                       <i class="reviews fs-7" >(${
                         product.review.length
                       } review${product.review.length > 1 ? "s" : ""})</i>
                     </div>
                   </div>
                   <ul class="d-flex align-items-center ps-0 justify-content-between mb-0">
                     <div class="item-url  d-none d-xs-block mb-md-0">
                       <button class="bg-transparent item-url-link rounded-circle" title="Share URL" data-bs-toggle="modal" data-bs-target="#share-url" data-id="647b28b2f761ba520921b7d0">
                         <i class="fa-solid fa-link px-2 rounded-circle"></i></button><button class="bg-transparent item-url-qr ms-2 rounded-1" title="Scan QR code" onclick="generateQRCode()" data-bs-toggle="modal" data-bs-target="#qrcode" data-id="647b28b2f761ba520921b7d0">
                         <i class="fa-solid fa-qrcode px-2"></i>
                       </button>
                     </div>
                     <div class="item-price align-items-center">
                       <span class="txt-green   fs-8"><del class="old-price">₦${product.price.toLocaleString()}</del></span>
                       <span class="txt-green fs-6  ms-2"><b class="new-price">₦${discountPrice.toLocaleString()}</b></span>
                     </div>


                   </ul>
                   </div>
                   <div class="buttons">
                     <a class="button buy d-none d-xs-inline-block" href="#"><span>Buy</span></a>
                     <a class="button add txt-green w-xs-100m d-block d-xs-inline-block text-center" href="#"><span>Add to Cart</span></a>
                   </div>
                 </div>
               </div>
             </div>


`;

  return productCard;
}
function generateProductCard2(product) {
  const sellingPrice = Math.floor(
    ((100 - product.discount) / 100) * product.price
  );
  const productCard = ` <div class="swiper-slide card__container product-card appended">
  <div class="">
    <div class="card__top__section overflow-hidden loading-img" data-load="false">
      <figure class="mb-0 w-100" >
        <img
          src=""
          data-src="${product.images[0]}"    
          class="item-image"
              />
        <div
          class="discount-label  position-absolute top-0 ms-2"
        >
          <span>${product.discount}% OFF</span>
        </div>
        <div class="sold-out font-1 top-50 start-50">Sold Out</div>

        <figcaption class="d-flex flex-column">
          <div
            class="rounded-circle position-absolute top-0 w-100 text-center start-0 chevron"
          >
            <i class="fa-solid fa-chevron-down"></i>
          </div>

          <a
            class="button buy-btn txt-green w-100 border-0 bg-white text-center"
            href="#"
            data-id=${product._id}
            ><span>Buy Now</span></a
          >
          <div class="item-url mb-3 mb-md-0 mt-3">
            <button
              class="bg-transparent fs-5 item-url-link rounded-circle"
              title="Share URL"
              data-bs-toggle="modal"
              data-bs-target="#share-url"
              data-id="${product._id}"
            >
              <i
                class="fa-solid fa-link px-2 rounded-circle"
              ></i></button
            ><button
              class="bg-transparent fs-5 item-url-qr ms-2 rounded-1"
              title="Scan QR code"
              onclick="generateQRCode()"
              data-bs-toggle="modal"
              data-bs-target="#qrcode"
              data-id="${product._id}"
            >
              <i class="fa-solid fa-qrcode px-2"></i>
            </button>
          </div>
        </figcaption>
      </figure>
      <div
        class="card__top__section__icons mt-2 d-flex flex-column special-action-btns"
      >
        <button
          type="button"
          class="me-2 me-md-0"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title="Add to WishList"
          data-id="${product._id}"
         
        >
          <i class="bx bx-heart"></i>
        </button>

        <button
          type="button"
          class="quick-view-btn me-2 me-md-0"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title="Quick View"
          onclick="quickView(event)"
          data-category="grains"  
           data-id="${product._id}"     
        >
          <i class="bx bx-search-alt"></i>
        </button>
      </div>
    </div>
    <div class="card__body__section">
      <h3 class="item-name h6">
        <span> ${product.name}</span>
      </h3>
    </div>
    <div>
      <div
        class="d-flex justify-content-between border-top border-1 align-item-center"
      >
        <div class="rating-section">
          <div class="rating fs-7">
           <span>${getStarRating(product.rating)}</span>
          </div>
          <span class="fs-7"><span> ${product.rating} out of 5</span></span>
        </div>
        <div class="item-price align-items-center">
          <div class=" text-success old-price"
            ><del>₦ ${product.price}</del></div
          >
          <div class="d-block fs-6 ms-2 text-success new-price"
        
            ><span>₦ ${sellingPrice.toLocaleString()} </span></div
          >
        </div>
      </div>
      <div class="buttons text-center border-top border-1">
        <a
          class="button add txt-green w-100 border-0"
          href="#"
                     
          data-id="${product._id}"
          ><span>Add to Cart</span></a
        >
      </div>
    </div>
  </div>
</div>`;
return productCard;
}
function toggleLoader(){
  const Loader = document.querySelector(".loader1");
  if(Loader.classList.contains("d-none")){
    Loader.classList.remove("d-none");
  }else{
  Loader.classList.add("d-none")
  }

}

function showLoader(){
  const Loader = document.querySelector(".loader1");
  Loader.classList.remove("d-none");

}
function hideLoader(){
  const Loader = document.querySelector(".loader1");
  Loader.classList.add("d-none");

}
function populateSpecialOffers1(result){
  if (result.message === "success") {
    console.log(result);

    let products;
    const skeletonEls = document.querySelectorAll(
      ".so-swiper .swiper-slide.placeholder"
    );
    let domProducts = document.querySelectorAll(
      ".so-swiper .swiper-slide.appended"
    );
    for (const property in result) {
      if (Array.isArray(result[property])) {
        products = result[property];
      }
    }
    SpecialOffersSwiper.allowSlideNext = true;
  
    
    const productWrapper = document.querySelector(
      ".so-swiper .swiper-wrapper"
    );

    domProducts.forEach((productItem) => {
      productWrapper.removeChild(productItem);
    });
    let i = 0;

    for (let product of products) {
    

      let productCard = generateProductCard(product);

      SpecialOffersSwiper.appendSlide(productCard);

      SpecialOffersSwiper.update();
      domProducts = document.querySelectorAll(
        ".so-swiper .swiper-slide.appended"
      );

      loadImages(domProducts[i]);
      checkLabels(domProducts[i], product);
      i++;

      const tooltips = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );

      tooltips.forEach((tooltip) => new bootstrap.Tooltip(tooltip));
      // loadActualImages();
    }
    setTimeout(() => {
      skeletonEls.forEach((skeletonEl) => {
        productWrapper.removeChild(skeletonEl);
      });
      SpecialOffersSwiper.scrollbar.enable()
      SpecialOffersSwiper.update();
      hideLoader();
    }, 300);
   
  }
}
function populateSpecialOffers2(result){
  console.log(result, 980);
  if (result.message === "success") {
    const productBlock = document.querySelector(".so-items2");
    const placeholderProduct = productBlock.querySelector(".swiper-slide.placeholder")
    const productWrapper = productBlock.querySelector(
      ".swiper-wrapper"
    );

  

    productWrapper.removeChild(placeholderProduct);
    const products = result.newProducts;
    for (let product of products) {
      let productCard = generateProductCard2(product);
      SpecialOffersSwiper2.appendSlide(productCard);
  

      const loadingContent = productBlock.querySelectorAll("[data-load]:not(.loading-img)");
      loadingContent.forEach(content=>{
        content.setAttribute("data-load", "true");
      })
      SpecialOffersSwiper2.update();

    }

    const  domProducts = productBlock.querySelectorAll(".swiper-slide.appended");
    console.log(domProducts)
    // let i = 0;
    // domProducts.forEach(card=>{
    //  loadImages(card);
    //  checkLabels(card, products[i])
    //  console.log(products[i]) ;
    //  i++;
    // })
    for(let i = 0; i < domProducts.length; i++){
      loadImages(domProducts[i]);
      checkLabels(domProducts[i], products[i])
    }
    console.log("1006");

  }else{
    console.log("1006");
  }
}
function getProduct(endpoint, populateFunc ) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
 
  const url = `https://elehaus-backend.onrender.com/api/products/${endpoint}`;
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      populateFunc(result);
     
    })
    .catch((error) => {
      console.log("error", error);
    });
}
function changeTabsContent(endpoint) {
 toggleLoader();
  getProduct(endpoint,populateSpecialOffers1);
}
window.addEventListener("DOMContentLoaded", () => {
  const endpoint = "newproducts";
    
      getProduct(endpoint,populateSpecialOffers1);
});
window.addEventListener("DOMContentLoaded", () => {
  const endpoint = "newproducts";
    
      getProduct(endpoint,populateSpecialOffers2);
      console.log("1`034")
});



window.addEventListener("DOMContentLoaded", () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const getProductsURL =
    "https://elehaus-backend.onrender.com/api/products/discounts";

  fetch(getProductsURL, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const products = result.discountedProducts;
      const ProductWrapper = document.querySelector(
        ".ftd-swiper .swiper-wrapper"
      );
      const placeholderProducts = document.querySelectorAll(
        ".ftd-swiper .placeholder"
      );
      placeholderProducts.forEach((productItem) => {
        productItem.style.display = "none";
      });
      products.forEach((product) => {
        const discountPrice = Math.floor(
          ((100 - product.discount) / 100) * product.price
        );

        let productCard = `

        <div
          class="">
          <div
          class="mygrid">
        
         
            <a href="#" class="position-relative d-block">
              <div class="z-3 image-container loading-img" data-load="false">
                <img
                  src=""
                  class="w-80 d-block item-image"
                  data-src="${product.images[0]}"
                />
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  class="product-action-btn me-sm-2 me-md-0 fnt1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Add to WishList"
                  data-id="${product._id}"
                >
                  <i class="bx bx-heart"></i>
                </button>
        
                <button
                  type="button"
                  class="product-action-btn quick-view-btn me-sm-2 me-md-0 action-view-btn fnt1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Quick View"
                  onclick="quickView(event)"
                  data-id="${product._id}"
                  data-category="${product.category}"
                >
                  <i class="bx bx-search-alt"></i>
                </button>
              </div>
              <div class="item-label">
                <div class="ftd-discount discount-label position-absolute top-0 left-0 mt-1">${product.discount}% OFF</div>
                <div class="sold-out  top-50 start-50">Sold Out</div>
              </div>
            </a>
         
        
          <div class="position-relative pt--sm-2 pt-1  px-1 px-sm-2 pb-xl-5 pb-4">
            <div class="head-wrapper">
              <div class="d-flex justify-content-between">
                <h3 class="">
                  <a href="#" class="text-decoration-none txt-orange  d-block">
                    ${product.name}
                  </a>
                </h3>
                <div
                  class="rounded-circle d-flex mt-1 justify-content-center"
                  title="Featured"
                >
                  <i class="fa-solid fa-star fs-6 text-black"></i>
                </div>
              </div>
              <div class="d-flex align-items-end">
                <div class="rating lh-1  align-bottom ">${getStarRating(product.rating)}</div>
                <div class="reviews lh-1 ms-2  txt-gray  align-bottom">
                  <span
                    >(${product.review.length}<span class=" d-none d-sm-inline d-md-none d-lg-inline"
                      > review${ product.review.length > 1 ? "s" : "" }</span
                    >)</
                  >
                </div>
              </div>
            </div>
            <div class="item-price d-flex flex-column  my-1">
              <div class="old-price">
                <del aria-hidden="true"
                  ><bdi
                    ><span class="">₦</span>${product.price.toLocaleString()}</bdi
                  ></del
                >
              </div>
              <div class="new-price  txt-green">
                <bdi><span class="">₦</span>${discountPrice.toLocaleString()}</bdi>
              </div>
            </div>
            <div class="item-url mb-2 mb-md-0">
              <button
                class="bg-transparent  item-url-link rounded-circle"
                title="Share URL"
                data-bs-toggle="modal"
                data-bs-target="#share-url"
                data-id="${product._id}"
              >
                <i class="fa-solid fa-link px-2 rounded-circle"></i></button
              ><button
                class="bg-transparent  item-url-qr ms-3 rounded-1"
                title="Scan QR code"
                onclick="generateQRCode()"
                data-bs-toggle="modal"
                data-bs-target="#qrcode"
                data-id="${product._id}"
              >
                <i class="fa-solid fa-qrcode px-2"></i>
              </button>
            </div>
            <div class="w-100 position-absolute bottom-0 start-0 item-buttons">
              <button
                class="col-5 py-2 px-0 bg-transparent txt-green ws-nowrap"
                data-id="${product._id}"
              >
                Buy</button
              ><button
                class="col-7 py-2 bg-pry text-white px-0 ws-nowrap"
                data-id="${product._id}"
              >
               
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        </div>
        
        `;
        

        const productElement = document.createElement("div");
       productElement.classList.add("swiper-slide", "border", "border-2", "rounded-3");
        productElement.innerHTML = productCard;
        ProductWrapper.appendChild(productElement);
        loadImages(productElement);
        const discountLabel = productElement.querySelector(".discount-label");
        const oldPrice = productElement.querySelector(".old-price");
        if (product.discount === 0 || product.discount === null) {
          discountLabel.style.display = "none";
          oldPrice.style.visibility = "hidden";
        } else {
          discountLabel.style.display = "block"; // Show the discount label for other values of discount
          oldPrice.style.visibility = "visible";
        }
       
       
        // const soldOut = productElement.querySelector(".sold-out");
        // if (product.isAvailable === true) {
        //   soldOut.style.display = "none";
        // } else {
        //   soldOut.style.display = "block";
        // }
        featuredSwiper.update();
        // Add this JavaScript to handle the loading of actual images

        // loadActualImages();

        const tooltips = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );

        tooltips.forEach((tooltip) => new bootstrap.Tooltip(tooltip));
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
});

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

Popper.createPopper(redHotPepper, tooltip, {
  placement: "left",
});

// function loadActualImages() {
//   const images = document.querySelectorAll(".item-image[data-src]");

//   images.forEach((image) => {
//     const imageUrl = image.getAttribute("data-src");
//     const actualImage = new Image();

//     actualImage.onload = function () {
//       image.src = imageUrl;
//       image.style.objectFit = "cover";
//       image.classList.remove("w-80");
//       image.setAttribute("data-loaded", "true");
//       image.classList.add("loaded-img");
//       const imgContainer = image.parentNode;
//       if (imgContainer) {
//         imgContainer.classList.remove("shimmer", "z-3");
//       } // Mark the image as loaded
//     };

//     actualImage.src = imageUrl;
//   });
// }
function loadImages(parentEl) {
  const imgBox = parentEl.querySelector(`[data-load="false"].loading-img`);

  const image = imgBox.querySelector(".item-image");
  
  const imageUrl = image.getAttribute("data-src");
 
  
  const actualImage = new Image();
  actualImage.onload = function () {
    image.src = imageUrl;
    imgBox.setAttribute("data-load", "true");
    image.removeAttribute("data-src");
  };
  actualImage.src = imageUrl;
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const getProductsURL =
    "https://elehaus-backend.onrender.com/api/products/newproducts";

  fetch(getProductsURL, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      const products = result.newProducts;
      const ProductWrapper = document.querySelector(
        ".on-sale-swiper .swiper-wrapper"
      );
      const placeholderProducts = document.querySelectorAll(
        ".on-sale-swiper .swiper-slide"
      );
      placeholderProducts.forEach((productItem) => {
        productItem.style.display = "none";
      });

      products.forEach((product) => {
        const discountPrice = Math.floor(
          ((100 - product.discount) / 100) * product.price
        );

        let productCard = `

        <div class="row">
        <div class="col-12 col-md-6 px-0">

            <a href="#" class="position-relative d-block">
              <div class="shimmer z-3 image-container">
                <img
                  src="https://i0.wp.com/tamhouston.com/wp-content/uploads/2022/06/TAM-LOGO-Remodel-02@2x.png?resize=750%2C412&amp;ssl=1"
                  class="w-80 d-block item-image"
                  data-src="${product.images[0]}"
                  loading="lazy"
                />
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  class="product-action-btn "
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Add to WishList"
                  data-id="${product._id}"
                >
                  <i class="bx bx-heart"></i>
                </button>

                <button
                  type="button"
                  class="product-action-btn quick-view-btn action-view-btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Quick View"
                  onclick="quickView(event)"
                  data-id="${product._id}"
                  data-category="${product.category}"
                >
                  <i class="bx bx-search-alt"></i>
                </button>
              </div>
              <div class="item-label position-absolute top-0 left-0">
                <div class="ftd-discount discount-label">
                  ${product.discount}% OFF
                </div>
                <div class="sold-out">Sold out</div>
              </div>
            </a>
        </div>
        <div class="col-12 col-md-6 position-relative pt-2 px-4 px-md-2 pb-5">
        <div class="">
          <div class="head-wrapper">
            <h3>
              <a href="#" class="text-decoration-none txt-orange fs-5">
                ${product.name}
              </a>
            </h3>

            <div class="d-flex align-items-center">
              <div class="rating lh-1 fs-5"></div>
              <div class="reviews lh-1 ms-2 txt-gray fs-7">
                <i>${product.review.length}</i>
              </div>
            </div>
          </div>
          <div class="item-price d-flex flex-column me-2">
            <div class="old-price">
              <del aria-hidden="true"
                ><bdi
                  ><span class="">₦</span>${product.price.toLocaleString()}</bdi
                ></del
              >
            </div>
            <div class="new-price fs-4 txt-green">
              <bdi><span class="">₦</span>${discountPrice.toLocaleString()}</bdi>
            </div>
          </div>
          <div class="item-url mb-0">
            <button
              class="bg-transparent fs-5 item-url-link rounded-circle"
              title="Share URL"
              data-bs-toggle="modal"
              data-bs-target="#share-url"
              data-id="${product._id}"
            >
              <i class="fa-solid fa-link px-2 rounded-circle"></i></button
            ><button
              class="bg-transparent fs-5 item-url-qr ms-2 rounded-1"
              title="Scan QR code"
              onclick="generateQRCode()"
              data-bs-toggle="modal"
              data-bs-target="#qrcode"
              data-id="${product._id}"
            >
              <i class="fa-solid fa-qrcode px-2"></i>
            </button>
          </div>
          <div class="w-100 row position-absolute bottom-0 start-0">
            <button
              class="col-6 py-2 px-0 bg-transparent txt-green ws-nowrap"
              data-id="${product._id}"
            >
              Buy Now</button
            ><button
              class="col-6 py-2 bg-pry text-white px-0 ws-nowrap"
              data-id="${product._id}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
        </div>
      </div>

`;

        const productElement = document.createElement("div");
        productElement.classList.add(
          "swiper-slide",
          "product-item",
          "border-1",
          "border",
          "overflow-hidden",
          "rounded-3"
        );
        productElement.setAttribute("data-id", product._id);
        productElement.innerHTML = productCard;
        productElement.classList.add("on-sale-populated");
        console.log("child about to be appended");
        ProductWrapper.appendChild(productElement);
        const discountLabel = productElement.querySelector(".discount-label");
        const oldPrice = productElement.querySelector(".old-price");
        if (product.discount === 0 || product.discount === null) {
          discountLabel.style.display = "none";
          oldPrice.style.visibility = "hidden";
        } else {
          discountLabel.style.display = "block"; // Show the discount label for other values of discount
          oldPrice.style.visibility = "visible";
        }
        const ratingElement = document.querySelectorAll(
          " .on-sale-populated .rating"
        );
        ratingElement.forEach((ratingEl) => {
          ratingEl.innerHTML = getStarRating(product.rating);
        });

        const soldOut = productElement.querySelector(".sold-out");
        if (product.isAvailable === true) {
          soldOut.style.display = "none";
        } else {
          soldOut.style.display = "block";
        }

        // Add this JavaScript to handle the loading of actual images

        // loadActualImages();

        const tooltips = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );

        tooltips.forEach((tooltip) => new bootstrap.Tooltip(tooltip));
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
  // Get the product list container element
});
// Function to load actual images once they are available
function copyLink() {
  // Get the input field that holds the link
  const linkInput = document.getElementById("productLink");
  const copyURLbtn = document.querySelector(".copy-url");
  const shareURLInput = document.querySelector(".share-url-input");

  // Select the link's text
  linkInput.select();
  linkInput.setSelectionRange(0, 99999); // For mobile devices
  shareURLInput.classList.remove("deselect");
  // Copy the selected text to the clipboard using the Clipboard API
  navigator.clipboard
    .writeText(linkInput.value)
    .then(() => {
      // alert("Link copied to clipboard!");
      copyURLbtn.textContent = "Copied";
      setTimeout(() => {
        copyURLbtn.textContent = "Copy Link";

        shareURLInput.classList.add("deselect");
        console.log(shareURLInput);
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy link:", err);
    });
}

function generateQRCode() {
  const link = "https://example.com/product123";
  const qrcodeContainer = document.getElementById("qrcode-container");
  const logoUrl =
    "https://i0.wp.com/tamhouston.com/wp-content/uploads/2022/06/TAM-LOGO-Remodel-02@2x.png?resize=750%2C412&amp;ssl=1";

  qrcodeContainer.innerHTML = "";
  // Create a new QRCode instance
  const qrcode = new QRCode(qrcodeContainer, {
    text: link,
    width: 200,
    height: 200,
  });
}
(function () {
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
  const signUpForm = document.getElementById("sign-up-form");
  signUpForm.addEventListener("submit", (event) => {
    signUp(event);
  });
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
      console.log("slide working");
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
    const passwordInput = document.getElementById("sign-in-password");
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
    const tabs = document.querySelectorAll(".tab-content");

    function showTabFromHash() {
      const hash = window.location.hash;
      const targetTab = document.querySelector(hash);

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
      console.log("satisfied");
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

  const signUpName = document.getElementById("sign-up-name");
  signUpName.onchange = validateName;
  function validateName() {
    const nameInput = document.getElementById("sign-up-name");
    const nameRegex = /^[A-Za-z\s'-]{2,30}$/;
    const nameErrMsg = document.querySelector(".nameCheck");
    if (!nameRegex.test(nameInput.value)) {
      nameErrMsg.style.display = "block";
      return false;
    } else {
      nameErrMsg.style.display = "none";
      return true;
    }
  }

  function validateFields() {
    validSignUpEmail();
    validateName();
    validatePassword();
    checkMet();
    if (validSignUpEmail() && validateName() && validatePassword()) {
      log("Inputs field correct");
    } else {
      Swal.fire({
        icon: "warning",
        text: "One or More Inputs are not Valid",
        confirmButtonColor: "var(--dark-green)",
      });
    }
  }

  function displaySpinner(event) {
    if (event) {
      const getSpin = event.target.querySelector(".spinner");
      getSpin.style.display = "inline-block";
    } else {
      const getSpin = document.querySelector(".spinner");
      getSpin.style.display = "inline-block";
    }
  }
  function hideSpinner(event) {
    if (event) {
      const getSpin = event.target.querySelector(".spinner");
      getSpin.style.display = "none";
    } else {
      const getSpin = document.querySelector(".spinner");
      getSpin.style.display = "none";
    }
  }
  function signUp(event) {
    event.preventDefault();
    displaySpinner(event);
    validateFields();

    const getName = document.querySelector("#sign-up-name").value;
    const getEmail = document.querySelector("#sign-up-email").value;
    const getPassword = document.querySelector("#sign-up-password").value;
    const getConfirmPassword = document.querySelector("#confirmPass").value;
    if (
      getName === "" ||
      getEmail === "" ||
      getPassword === "" ||
      getConfirmPassword === ""
    ) {
      Swal.fire({
        icon: "warning",
        text: "All Inputs Fields are Required",
        confirmButtonColor: "var(--dark-green)",
      });
      hideSpinner(event);
      return;
    }
    if (getConfirmPassword !== getPassword) {
      Swal.fire({
        icon: "warning",
        text: "Passwords do not match",
        confirmButtonColor: "var(--dark-green)",
      });
      hideSpinner(event);
      return;
    }
    const signFormData = {
      name: getName,
      email: getEmail,
      password: getPassword,
    };

    const signMethod = {
      method: "POST",
      body: JSON.stringify(signFormData),
      headers: {
        "content-Type": "application/json",
      },
    };

    const url = "https://elehaus-backend.onrender.com/api/users";
    fetch(url, signMethod)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "success") {
          Swal.fire({
            icon: "success",
            text: `${result.message}`,
            confirmButtonColor: "#var(--dark-green)",
          });
          hideSpinner(event);
          // setTimeout(() => {
          //   location.href = "index.html";
          // }, 5000);
        } else {
          Swal.fire({
            icon: "info",
            text: "Registration Unsuccessful!",
            confirmButtonColor: "#2D85DE",
          });
        }
      })
      .catch((error) => console.log(error));
  }
})();
