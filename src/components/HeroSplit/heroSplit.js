export function createHeroSplit({ title, subtitle, buttonText, onClick, imageUrl }) {
  const container = document.createElement("div");
  container.className = "hero-split";

  const textContainer = document.createElement("div");
  textContainer.className = "hero-text";

  const titleEl = document.createElement("h1");
  titleEl.textContent = title;

  const subtitleEl = document.createElement("p");
  subtitleEl.textContent = subtitle;

  const button = document.createElement("button");
  button.className = "hero-btn";
  button.textContent = buttonText;
  button.onclick = onClick;

  textContainer.append(titleEl, subtitleEl, button);

  const imageContainer = document.createElement("div");
  imageContainer.className = "hero-image";
  
  const image = document.createElement("img");
  image.src = imageUrl;
  
  imageContainer.appendChild(image);
  container.append(textContainer, imageContainer);

  return container;
}
