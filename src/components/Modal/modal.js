export function createModal(content) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        ${content}
      </div>`;
    modal.querySelector(".close").onclick = () => modal.remove();
    return modal;
  }
  