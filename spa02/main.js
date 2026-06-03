import { router, navigateTo } from "./router.js";
import { NavBar } from "./components/NavBar.js";

// Initial render
document.getElementById("navbar").innerHTML = NavBar();

// Global navigation handler
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-linked]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

// Enable back/forward navigation
window.addEventListener("popstate", router);

// First load
router();