const hamburger = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", (e) => {
  let isExpanded = e.currentTarget.getAttribute("aria-expanded");

  if (isExpanded === "false") {
    isExpanded = "true";
    navList.style.visibility = "visible";
  } else {
    isExpanded = "false";
    navList.style.visibility = "hidden";
  }
  hamburger.setAttribute("aria-expanded", isExpanded);
});

// Remove the conditions the event listener sets. Only matters if you are resizing the window.
window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    hamburger.setAttribute("aria-expanded", true);
    navList.style.visibility = "visible";
  } else {
    hamburger.setAttribute("aria-expanded", false);
    navList.style.visibility = "hidden";
  }
});
