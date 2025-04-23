export function createDropdown({ label = "Select", options = [], onSelect = () => {} }) {
  const container = document.createElement("div");
  container.className = "dropdown";

  const button = document.createElement("button");
  button.className = "dropdown-toggle";
  button.setAttribute("aria-haspopup", "true");
  button.setAttribute("aria-expanded", "false");

  // Add label + arrow span
  button.innerHTML = `${label} <span class="arrow">▼</span>`;

  const list = document.createElement("ul");
  list.className = "dropdown-menu";

  options.forEach(option => {
    const item = document.createElement("li");
    item.textContent = option;
    item.className = "dropdown-item";
    item.addEventListener("click", () => {
      button.innerHTML = `${option} <span class="arrow">▼</span>`;
      button.setAttribute("aria-expanded", "false");
      onSelect(option);
      list.classList.remove("show");
    });
    list.appendChild(item);
  });

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = list.classList.toggle("show");
    button.setAttribute("aria-expanded", isExpanded);
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      list.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
    }
  });

  container.appendChild(button);
  container.appendChild(list);
  return container;
}
