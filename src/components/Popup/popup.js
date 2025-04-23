export function createPopup(message, options = {}) {
    const { type = "info", duration = 3000 } = options;
  
    const popup = document.createElement("div");
    popup.className = `popup popup-${type}`;
    popup.textContent = message;
  
    document.body.appendChild(popup);
  
    // Auto remove popup after duration
    setTimeout(() => {
      popup.classList.add("fade-out");
      popup.addEventListener("transitionend", () => {
        popup.remove();
      });
    }, duration);
  
    return popup;
  }
  