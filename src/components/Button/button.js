export function createButton({ text, onClick }) {
    const btn = document.createElement("button");
    btn.className = "button";
    btn.textContent = text;
    btn.onclick = onClick;
    return btn;
  }
  