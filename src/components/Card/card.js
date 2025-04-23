export function createCard({ title, description }) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    return card;
}
  