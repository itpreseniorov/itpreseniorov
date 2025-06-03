// VIAC
function toggleInfo(button) {
    const parent = button.closest("li, #navod");
    if (!parent) return;
  
    let info = parent.querySelector(".navod-extra-info, .ponuka-extra-info");
  
    if (info) {
      const isVisible = window.getComputedStyle(info).display !== "none";
      info.style.display = isVisible ? "none" : "block";
  
      // Presná a nemenná vetva podľa typu tlačidla
      if (button.classList.contains("button-navod")) {
        button.textContent = isVisible ? "Zobraziť návod" : "Zatvoriť návod";

      } else {
        button.textContent = isVisible ? "Viac" : "Menej";
      }
    }};

// GALÉRIA
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById('gallery-track');
  const images = track.children;
  const gallery = document.getElementById('gallery-slider');

  // Zdvojenie pre plynulý loop
  const total = images.length;
  for (let i = 0; i < total; i++) {
      const clone = images[i].cloneNode(true);
      track.appendChild(clone);
  }

  // Manuálne posúvanie
  function scrollManual(direction) {
      const scrollAmount = images[0].clientWidth + 20;
      gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  // Globálne, aby fungovalo onclick
  window.scrollManual = scrollManual;

  // Touch ovládanie
  let startX = 0;
  let isDragging = false;

  gallery.addEventListener("touchstart", function(e) {
      startX = e.touches[0].clientX;
      isDragging = true;
  });

  gallery.addEventListener("touchmove", function(e) {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diffX = currentX - startX;

      if (Math.abs(diffX) > 50) {
          scrollManual(diffX > 0 ? -1 : 1);
          isDragging = false;
      }
  });

  gallery.addEventListener("touchend", function() {
      isDragging = false;
  });
}); 