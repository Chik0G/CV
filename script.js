
// Code for smooth scrolling after clicking navbar items
document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var section = document.querySelector(this.getAttribute("href"));
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

