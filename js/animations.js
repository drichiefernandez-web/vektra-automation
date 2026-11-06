/**
 * Animations Module
 * Uses IntersectionObserver for scroll-triggered reveal animations.
 */
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach((el) => el.classList.add("fade-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => observer.observe(el));
});

