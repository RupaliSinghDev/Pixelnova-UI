export function createNavbar({ brand = "Rupali UI", links = [] }) {
    const nav = document.createElement("nav");
    nav.className = "navbar";
  
    const container = document.createElement("div");
    container.className = "nav-container";
  
    const brandDiv = document.createElement("div");
    brandDiv.className = "nav-brand";
    brandDiv.textContent = brand;
  
    const toggleButton = document.createElement("button");
    toggleButton.className = "nav-toggle";
    toggleButton.innerHTML = "&#9776;";
    toggleButton.setAttribute("aria-label", "Toggle Menu");
  
    const ul = document.createElement("ul");
    ul.className = "nav-links";
  
    links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.href || "#";
      a.textContent = link.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    toggleButton.addEventListener("click", () => {
      ul.classList.toggle("show");
    });
  
    container.appendChild(brandDiv);
    container.appendChild(toggleButton);
    container.appendChild(ul);
    nav.appendChild(container);
  
    return nav;
  }
  