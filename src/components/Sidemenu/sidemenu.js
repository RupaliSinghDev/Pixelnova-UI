export function createSideMenu({ items = [], title = "Menu" }) {
  const wrapper = document.createElement("div");
  wrapper.className = "sidemenu-wrapper";

  const menu = document.createElement("div");
  menu.className = "sidemenu";

  const heading = document.createElement("h2");
  heading.textContent = title;
  menu.appendChild(heading);

  const list = document.createElement("ul");
  items.forEach(item => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = item.label;
    link.href = item.href || "#";
    li.appendChild(link);
    list.appendChild(li);
  });

  menu.appendChild(list);
  wrapper.appendChild(menu);

  // Toggle Button
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "sidemenu-toggle";
  toggleBtn.textContent = "☰";

  toggleBtn.onclick = () => {
    wrapper.classList.toggle("open");

    const isOpen = wrapper.classList.contains("open");
    toggleBtn.textContent = isOpen ? "✕" : "☰";
    toggleBtn.classList.toggle("inside", isOpen);
  };

  wrapper.appendChild(toggleBtn);
  return wrapper;
}
