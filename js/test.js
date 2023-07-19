function changePageTitle(pageTitle) {
  const formTitle = document.querySelector("h1.form-title");

  formTitle.textContent = pageTitle;
}
function pageReload() {
  const pagemodal = document.querySelector(".pagemodal");
  pagemodal.style.display = "block";
  setTimeout(() => (pagemodal.style.display = "none"), 800);
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
    // setTimeout(() => {
    //   location.reload();
    // }, 1000);
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

    // setTimeout(() => {
    //   location.reload();
    // }, 1000);
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
  let tabs = document.querySelectorAll(".tab-content");

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
