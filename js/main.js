/**
 * Main Application Entry Point
 * Initializes core site logic for VeKtra Automation.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle (Dark / Light mode with persistence)
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const updateThemeAria = (isLight) => {
      themeToggle.setAttribute("aria-label", isLight ? "Cambiar a modo noche" : "Cambiar a modo día");
    };

    updateThemeAria(document.documentElement.classList.contains("light"));

    themeToggle.addEventListener("click", () => {
      const isLight = document.documentElement.classList.toggle("light");
      try {
        localStorage.setItem("vektra-theme", isLight ? "light" : "dark");
      } catch (err) {
        console.warn("Could not save theme preference to localStorage", err);
      }
      updateThemeAria(isLight);
    });
  }

  // Update copyright year dynamically
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Dot Matrix Typography Canvas ("Automate. Scale. Succeed." — Image 1)
  const canvas = document.getElementById("footer-matrix-canvas");
  if (canvas) {
    const renderMatrix = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight || 200;
      if (width === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);

      // Create an offscreen buffer to rasterize the text
      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d");

      // Adaptive font sizing based on container width (mobile safe)
      const fontSize = Math.max(16, Math.min(width / 21, 72));
      offCtx.font = `800 ${fontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText("Automate. Scale. Succeed.", width / 2, height / 2 + 10);

      const imgData = offCtx.getImageData(0, 0, width, height).data;
      const isLight = document.documentElement.classList.contains("light");

      const step = Math.max(5, Math.floor(fontSize / 9)); // Dot grid spacing
      const dotRadius = Math.max(1.1, step * 0.22);

      ctx.clearRect(0, 0, width, height);

      for (let y = 6; y < height - 6; y += step) {
        for (let x = 6; x < width - 6; x += step) {
          const idx = (y * width + x) * 4;
          const alpha = imgData[idx + 3];

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

          if (alpha > 70) {
            // Active letter dot (bright / accented)
            ctx.fillStyle = isLight
              ? "rgba(15, 23, 42, 0.55)"
              : "rgba(248, 250, 252, 0.72)";
          } else {
            // Ambient faint background dot
            ctx.fillStyle = isLight
              ? "rgba(0, 0, 0, 0.03)"
              : "rgba(255, 255, 255, 0.04)";
          }
          ctx.fill();
        }
      }
    };

    renderMatrix();
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderMatrix, 120);
    });

    // Re-render when theme changes
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        setTimeout(renderMatrix, 60);
      });
    }
  }

  // Interactive FAQ Accordion (Task 8 - RF-15, RF-16, RF-17)
  const faqItems = document.querySelectorAll("[data-faq-item]");
  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const trigger = item.querySelector(".faq-trigger");
      const content = item.querySelector(".faq-content");
      if (!trigger || !content) return;

      const toggleItem = (open) => {
        const isOpen = typeof open === "boolean" ? open : !item.classList.contains("faq-item--open");

        if (isOpen) {
          // Close other open items for a smooth single-panel accordion experience
          faqItems.forEach((other) => {
            if (other !== item && other.classList.contains("faq-item--open")) {
              const otherTrigger = other.querySelector(".faq-trigger");
              const otherContent = other.querySelector(".faq-content");
              if (otherTrigger && otherContent) {
                other.classList.remove("faq-item--open");
                otherTrigger.setAttribute("aria-expanded", "false");
                otherContent.style.maxHeight = null;
                setTimeout(() => {
                  if (!other.classList.contains("faq-item--open")) {
                    otherContent.hidden = true;
                  }
                }, 350);
              }
            }
          });

          content.hidden = false;
          item.classList.add("faq-item--open");
          trigger.setAttribute("aria-expanded", "true");
          // Calculate natural height dynamically
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          item.classList.remove("faq-item--open");
          trigger.setAttribute("aria-expanded", "false");
          content.style.maxHeight = null;
          setTimeout(() => {
            if (!item.classList.contains("faq-item--open")) {
              content.hidden = true;
            }
          }, 350);
        }
      };

      trigger.addEventListener("click", () => {
        toggleItem();
      });

      // Keyboard accessibility (Enter and Space)
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleItem();
        }
      });
    });

    // Recalculate max-height on window resize if an item is open
    window.addEventListener("resize", () => {
      faqItems.forEach((item) => {
        if (item.classList.contains("faq-item--open")) {
          const content = item.querySelector(".faq-content");
          if (content) {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        }
      });
    });
  }
});

