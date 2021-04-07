const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", function (ev) {
    this.classList.toggle("open");
  });
  panel.addEventListener("transitionend", function (ev) {
    if (ev.propertyName.includes("flex")) {
      ev.srcElement.classList.toggle("open-active");
    }
  });
});
