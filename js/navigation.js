/**
 * Navigation Module — VeKtra Automation
 * Controls floating header behavior, mobile menu drawer, and smooth anchor navigation.
 */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav__toggle");
  const navMobile = document.querySelector(".nav__mobile");
  const header = document.querySelector(".header-floating");

  // Mobile menu toggle
  if (navToggle && navMobile) {
    const toggleMenu = (open) => {
      const willOpen = typeof open === "boolean" ? open : !navMobile.classList.contains("nav__mobile--open");
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navToggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
      navMobile.classList.toggle("nav__mobile--open", willOpen);
      navToggle.classList.toggle("nav__toggle--active", willOpen);
      document.body.classList.toggle("menu-open", willOpen);
    };

    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking any nav link
    const mobileLinks = navMobile.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu(false);
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMobile.classList.contains("nav__mobile--open")) {
        toggleMenu(false);
      }
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (navMobile.classList.contains("nav__mobile--open") && !navMobile.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  // Header background transition and ScrollSpy active nav tracking on scroll
  const sections = [
    document.getElementById("hero"),
    document.getElementById("ai-seo"),
    document.getElementById("services"),
    document.getElementById("web-presence"),
    document.getElementById("case-studies"),
    document.getElementById("process"),
    document.getElementById("faq"),
    document.getElementById("book-call"),
    document.getElementById("cta")
  ];

  const desktopLinks = document.querySelectorAll(".nav__link");
  const mobileLinks = document.querySelectorAll(".nav__mobile-link");

  const updateScrollState = () => {
    // 1. Header background styling
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add("header-floating--scrolled");
      } else {
        header.classList.remove("header-floating--scrolled");
      }
    }

    // 2. Active section tracking (ScrollSpy)
    const scrollPos = window.scrollY + 140; // Offset for floating header
    let currentId = "";

    sections.forEach((sec) => {
      if (!sec) return;
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    if (!currentId && window.scrollY < 250) {
      currentId = "hero";
    }

    desktopLinks.forEach((link) => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      if (targetId && targetId === currentId) {
        link.classList.add("nav__link--active");
      } else {
        link.classList.remove("nav__link--active");
      }
    });

    mobileLinks.forEach((link) => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      if (targetId && targetId === currentId) {
        link.classList.add("nav__mobile-link--active");
      } else {
        link.classList.remove("nav__mobile-link--active");
      }
    });
  };

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();
});
