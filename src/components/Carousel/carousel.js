export function createCarousel() {
  const images = [
    "https://placehold.co/600x300/000000/FFFFFF.png?text=First",
    "https://placehold.co/600x300/333333/FFFFFF.png?text=Second",
    "https://placehold.co/600x300/666666/FFFFFF.png?text=Third"
  ];

  if (!Array.isArray(images) || images.length === 0) {
    throw new Error("Image array must contain at least one image.");
  }

  const container = document.createElement("div");
  container.className = "carousel";

  const img = document.createElement("img");
  img.src = images[0];
  img.className = "carousel-image";
  container.appendChild(img);

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "carousel-dots";

  let currentIndex = 0;
  let interval;

  const updateSlide = (index) => {
    currentIndex = index;
    img.src = images[currentIndex];

    // Update dots
    dotsContainer.querySelectorAll("span").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  };

  // Create dots
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => {
      clearInterval(interval); // Stop auto-slide on manual selection
      updateSlide(i);
      autoSlide(); // Restart auto-slide
    };
    dotsContainer.appendChild(dot);
  });

  container.appendChild(dotsContainer);
  updateSlide(0);

  const autoSlide = () => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide(currentIndex);
    }, 3000); // every 3 seconds
  };

  autoSlide();
  return container;
}
