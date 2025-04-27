import { createRipples } from "./createRippleBtn";
import { animate, scroll } from "motion";

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const navbarHeight = navbar.offsetHeight;

  if (scrollY > navbarHeight) {
    animate(
      navbar,
      { backgroundColor: "#80cc99", width: "50vw", transformOrigin: "center" },
      { duration: 0.5 }
    );
  } else {
    animate(
      navbar,
      { backgroundColor: "transparent", width: "100vw" },
      { duration: 0.5 }
    );
  }
});

createRipples();
