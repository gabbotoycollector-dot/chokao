document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".chokao-navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".navbar-collapse .nav-link, .navbar-collapse .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navbarChokao");
      const bsCollapse = bootstrap.Collapse.getInstance(menu);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

});