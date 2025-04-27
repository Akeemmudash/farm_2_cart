export function createRipples() {
  const rippleBtns = document.getElementsByClassName("ripple-btn");
  if (rippleBtns) {
    Array.from(rippleBtns).forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const {
          width: btnWidth,
          height: btnHeight,
          left: btnLeft,
          top: btnTop,
        } = btn.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        const size = Math.max(btnWidth, btnHeight);
        const x = e.clientX - btnLeft - size / 4;
        const y = e.clientY - btnTop - size / 4;

        ripple.classList.add("ripple");
        ripple.style.width = ripple.style.height = `${size / 2}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        btn.appendChild(ripple);
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      })
    );
  }
}
