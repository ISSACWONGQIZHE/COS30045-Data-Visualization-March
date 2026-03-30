const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");
const homeLogo = document.getElementById("homeLogo");
const pageStatus = document.getElementById("pageStatus");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function showPage(pageId) {
  pages.forEach(page => {
    page.classList.toggle("active", page.id === pageId);
  });

  navLinks.forEach(link => {
    const isActive = link.dataset.page === pageId;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });

  const prettyName = pageId.charAt(0).toUpperCase() + pageId.slice(1);
  pageStatus.textContent = `Current page: ${prettyName}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    showPage(link.dataset.page);
  });
});

homeLogo.addEventListener("click", () => {
  showPage("home");
});

showPage("home");