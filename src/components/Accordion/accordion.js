export function createAccordion(items = []) {
    const container = document.createElement("div");
    container.className = "accordion";
  
    items.forEach(({ title, content }) => {
      const item = document.createElement("div");
      item.className = "accordion-item";
  
      const header = document.createElement("button");
      header.className = "accordion-header";
      header.textContent = title;
  
      const body = document.createElement("div");
      body.className = "accordion-body";
      body.innerHTML = `<p>${content}</p>`;
  
      header.addEventListener("click", () => {
        const isOpen = body.style.maxHeight;
        document.querySelectorAll(".accordion-body").forEach((b) => {
          b.style.maxHeight = null;
          b.style.padding = "0 1rem";
        });
  
        if (!isOpen) {
          body.style.maxHeight = body.scrollHeight + "px";
          body.style.padding = "1rem";
        }
      });
  
      item.appendChild(header);
      item.appendChild(body);
      container.appendChild(item);
    });
  
    return container;
  }
  