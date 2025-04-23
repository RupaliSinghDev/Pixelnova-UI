// components/hero.js

export function createHero({ title, subtitle, buttonText, onClick, backgroundImage }) {
    const section = document.createElement('section');
    section.className = 'hero';
    section.style.backgroundImage = `url(${backgroundImage})`;
  
    const overlay = document.createElement('div');
    overlay.className = 'hero-overlay';
  
    const content = document.createElement('div');
    content.className = 'hero-content';
  
    const h1 = document.createElement('h1');
    h1.textContent = title;
  
    const p = document.createElement('p');
    p.textContent = subtitle;
  
    const btn = document.createElement('button');
    btn.textContent = buttonText;
    btn.className = 'hero-btn';
    btn.addEventListener('click', onClick);
  
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(btn);
  
    overlay.appendChild(content);
    section.appendChild(overlay);
  
    return section;
  }
  