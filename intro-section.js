const featuresBtn = document.querySelector(".features");
const companyBtn = document.querySelector(".company");
const learnBtn = document.querySelector(".learn");
const hamburgerBtn = document.querySelector(".hamburger");

featuresBtn.addEventListener("click", () => {
  const featuresDropdownBtn = document.querySelector(".features-dropdown");
  featuresDropdownBtn.classList.toggle("active");
});

companyBtn.addEventListener("click", () => {
  const companyDropdownBtn = document.querySelector(".company-dropdown");
  companyDropdownBtn.classList.toggle("active");
});

hamburgerBtn.addEventListener("click", () => {
  const menuSidebar = document.querySelector(".menu-items");
  const sidebarBg = document.querySelector(".sidebar-bg");

  hamburgerBtn.classList.toggle("hb-active");
  menuSidebar.classList.toggle("sidebar-active");
  sidebarBg.classList.toggle("bg-active");
});
