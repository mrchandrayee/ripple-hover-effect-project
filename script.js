// Restart the ripple animation on each pointer/touch activation.
document.querySelectorAll("[data-ripple]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    button.classList.remove("is-rippling");
    // Force a style recalculation so the CSS animation can restart.
    void button.offsetWidth;
    button.classList.add("is-rippling");
    window.setTimeout(() => button.classList.remove("is-rippling"), 1000);
  });

  button.addEventListener("animationend", () => {
    button.classList.remove("is-rippling");
  });
});
