const rippleEls = ["catplaceholder", "catplaceholder2"];
rippleEls.forEach((rippleElement) => {
  const element = document.getElementById(rippleElement);
  element.addEventListener("click", () => {
    rippleEL(rippleElement);
  });
});
function rippleEL(elementID) {
  const ripple = new Ripple();
  ripple.createRipple({
    rippleParentId: elementID,
    foreground: "#ffffff11",
    background: "#00000077",
    time: 7,
    type: "double",
    increaseBy: 2,
  });
}
