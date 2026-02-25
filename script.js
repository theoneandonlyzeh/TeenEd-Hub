// ================================
// HASH ROUTING SYSTEM
// ================================

function showSection(id) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    section.classList.remove("active", "visible");
    section.style.display = "none";
  });

  const target = document.getElementById(id);

  if (target) {
    target.style.display = "block";

    setTimeout(() => {
      target.classList.add("active", "visible");
    }, 20);

    window.scrollTo(0, 0);
  }
}


// ================================
// HANDLE URL HASH CHANGES
// ================================

function handleRouting() {
  let hash = window.location.hash.replace("#", "");

  if (!hash) {
    hash = "home";
  }

  showSection(hash);
}


// ================================
// INITIAL LOAD
// ================================

window.addEventListener("load", handleRouting);


// ================================
// BACK / FORWARD BUTTON SUPPORT
// ================================

window.addEventListener("hashchange", handleRouting);
