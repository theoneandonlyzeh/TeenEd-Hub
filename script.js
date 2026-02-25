function showSection(id) {
  var sections = document.querySelectorAll(".section");
  var current = null;

  sections.forEach(function(section) {
    if (section.style.display === "block") {
      current = section;
    }
  });

  if (current) {
    current.classList.remove("visible");
  }

  setTimeout(function() {

    sections.forEach(function(section) {
      section.style.display = "none";
      section.classList.remove("active");
      section.classList.remove("visible");
    });

    var target = document.getElementById(id);

    if (target) {
      target.style.display = "block";

      setTimeout(function() {
        target.classList.add("active");
        target.classList.add("visible");
      }, 20);

      window.scrollTo(0, 0);
    }

  }, 300);
}

window.onload = function() {
  var home = document.getElementById("home");
  home.style.display = "block";
  setTimeout(function() {
    home.classList.add("active");
    home.classList.add("visible");
  }, 20);
};
