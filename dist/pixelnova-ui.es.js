function C(s = []) {
  const l = document.createElement("div");
  return l.className = "accordion", s.forEach(({ title: t, content: c }) => {
    const e = document.createElement("div");
    e.className = "accordion-item";
    const a = document.createElement("button");
    a.className = "accordion-header", a.textContent = t;
    const n = document.createElement("div");
    n.className = "accordion-body", n.innerHTML = `<p>${c}</p>`, a.addEventListener("click", () => {
      const o = n.style.maxHeight;
      document.querySelectorAll(".accordion-body").forEach((r) => {
        r.style.maxHeight = null, r.style.padding = "0 1rem";
      }), o || (n.style.maxHeight = n.scrollHeight + "px", n.style.padding = "1rem");
    }), e.appendChild(a), e.appendChild(n), l.appendChild(e);
  }), l;
}
function v({ text: s, onClick: l }) {
  const t = document.createElement("button");
  return t.className = "button", t.textContent = s, t.onclick = l, t;
}
function g({ title: s, description: l }) {
  const t = document.createElement("div");
  return t.className = "card", t.innerHTML = `<h3>${s}</h3><p>${l}</p>`, t;
}
function f() {
  const s = [
    "https://placehold.co/600x300/000000/FFFFFF.png?text=First",
    "https://placehold.co/600x300/333333/FFFFFF.png?text=Second",
    "https://placehold.co/600x300/666666/FFFFFF.png?text=Third"
  ];
  if (!Array.isArray(s) || s.length === 0)
    throw new Error("Image array must contain at least one image.");
  const l = document.createElement("div");
  l.className = "carousel";
  const t = document.createElement("img");
  t.src = s[0], t.className = "carousel-image", l.appendChild(t);
  const c = document.createElement("div");
  c.className = "carousel-dots";
  let e = 0, a;
  const n = (r) => {
    e = r, t.src = s[e], c.querySelectorAll("span").forEach((d, m) => {
      d.classList.toggle("active", m === e);
    });
  };
  s.forEach((r, d) => {
    const m = document.createElement("span");
    m.className = "dot", m.onclick = () => {
      clearInterval(a), n(d), o();
    }, c.appendChild(m);
  }), l.appendChild(c), n(0);
  const o = () => {
    a = setInterval(() => {
      e = (e + 1) % s.length, n(e);
    }, 3e3);
  };
  return o(), l;
}
function b({ label: s = "Select", options: l = [], onSelect: t = () => {
} }) {
  const c = document.createElement("div");
  c.className = "dropdown";
  const e = document.createElement("button");
  e.className = "dropdown-toggle", e.setAttribute("aria-haspopup", "true"), e.setAttribute("aria-expanded", "false"), e.innerHTML = `${s} <span class="arrow">▼</span>`;
  const a = document.createElement("ul");
  return a.className = "dropdown-menu", l.forEach((n) => {
    const o = document.createElement("li");
    o.textContent = n, o.className = "dropdown-item", o.addEventListener("click", () => {
      e.innerHTML = `${n} <span class="arrow">▼</span>`, e.setAttribute("aria-expanded", "false"), t(n), a.classList.remove("show");
    }), a.appendChild(o);
  }), e.addEventListener("click", (n) => {
    n.stopPropagation();
    const o = a.classList.toggle("show");
    e.setAttribute("aria-expanded", o);
  }), document.addEventListener("click", (n) => {
    c.contains(n.target) || (a.classList.remove("show"), e.setAttribute("aria-expanded", "false"));
  }), c.appendChild(e), c.appendChild(a), c;
}
function N(s = {}) {
  const {
    links: l = [],
    supportInfo: t = {},
    copyright: c = "Copyright © 2025 Hartan Library — All rights reserved by Hartan Library"
  } = s, e = document.createElement("footer");
  e.className = "footer";
  const a = document.createElement("div");
  a.className = "footer-container";
  const n = document.createElement("div");
  n.className = "footer-column";
  const o = document.createElement("h4");
  o.className = "footer-heading", o.textContent = "Follow Us", n.appendChild(o);
  const r = document.createElement("ul");
  r.className = "footer-links", l.forEach((u) => {
    const h = document.createElement("li"), p = document.createElement("a");
    p.href = u.href, p.textContent = u.label, p.target = "_blank", p.rel = "noopener noreferrer", p.className = "footer-link", h.appendChild(p), r.appendChild(h);
  }), n.appendChild(r);
  const d = document.createElement("div");
  d.className = "footer-column";
  const m = document.createElement("h4");
  m.className = "footer-heading", m.textContent = "Support", d.appendChild(m);
  const i = document.createElement("ul");
  i.className = "footer-support", [t.address, t.email, t.phone1, t.phone2].forEach(
    (u) => {
      if (u) {
        const h = document.createElement("li");
        h.textContent = u, i.appendChild(h);
      }
    }
  ), d.appendChild(i), a.appendChild(n), a.appendChild(d), e.appendChild(a);
  const E = document.createElement("div");
  return E.className = "footer-bottom", E.textContent = c, e.appendChild(E), e;
}
function x({ fields: s = [], onSubmit: l }) {
  const t = document.createElement("form");
  t.className = "form", s.forEach((e) => {
    const a = document.createElement("div");
    a.className = "form-group";
    const n = document.createElement("label");
    n.textContent = e.label, n.htmlFor = e.name;
    let o;
    e.type === "select" ? (o = document.createElement("select"), e.options.forEach((r) => {
      const d = document.createElement("option");
      d.value = r, d.textContent = r, o.appendChild(d);
    })) : (o = document.createElement("input"), o.type = e.type), o.name = e.name, o.id = e.name, o.required = e.required || !1, o.placeholder = e.placeholder || "", a.appendChild(n), a.appendChild(o), t.appendChild(a);
  });
  const c = document.createElement("button");
  return c.type = "submit", c.textContent = "Submit", c.className = "form-submit", t.appendChild(c), t.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = {};
    s.forEach((n) => {
      a[n.name] = t.elements[n.name].value;
    }), l(a);
  }), t;
}
function y({ title: s, subtitle: l, buttonText: t, onClick: c, backgroundImage: e }) {
  const a = document.createElement("section");
  a.className = "hero", a.style.backgroundImage = `url(${e})`;
  const n = document.createElement("div");
  n.className = "hero-overlay";
  const o = document.createElement("div");
  o.className = "hero-content";
  const r = document.createElement("h1");
  r.textContent = s;
  const d = document.createElement("p");
  d.textContent = l;
  const m = document.createElement("button");
  return m.textContent = t, m.className = "hero-btn", m.addEventListener("click", c), o.appendChild(r), o.appendChild(d), o.appendChild(m), n.appendChild(o), a.appendChild(n), a;
}
function L({ title: s, subtitle: l, buttonText: t, onClick: c, imageUrl: e }) {
  const a = document.createElement("div");
  a.className = "hero-split";
  const n = document.createElement("div");
  n.className = "hero-text";
  const o = document.createElement("h1");
  o.textContent = s;
  const r = document.createElement("p");
  r.textContent = l;
  const d = document.createElement("button");
  d.className = "hero-btn", d.textContent = t, d.onclick = c, n.append(o, r, d);
  const m = document.createElement("div");
  m.className = "hero-image";
  const i = document.createElement("img");
  return i.src = e, m.appendChild(i), a.append(n, m), a;
}
function w(s) {
  const l = document.createElement("div");
  return l.className = "modal", l.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        ${s}
      </div>`, l.querySelector(".close").onclick = () => l.remove(), l;
}
function F({ brand: s = "Rupali UI", links: l = [] }) {
  const t = document.createElement("nav");
  t.className = "navbar";
  const c = document.createElement("div");
  c.className = "nav-container";
  const e = document.createElement("div");
  e.className = "nav-brand", e.textContent = s;
  const a = document.createElement("button");
  a.className = "nav-toggle", a.innerHTML = "&#9776;", a.setAttribute("aria-label", "Toggle Menu");
  const n = document.createElement("ul");
  return n.className = "nav-links", l.forEach((o) => {
    const r = document.createElement("li"), d = document.createElement("a");
    d.href = o.href || "#", d.textContent = o.label, r.appendChild(d), n.appendChild(r);
  }), a.addEventListener("click", () => {
    n.classList.toggle("show");
  }), c.appendChild(e), c.appendChild(a), c.appendChild(n), t.appendChild(c), t;
}
function k(s, l = {}) {
  const { type: t = "info", duration: c = 3e3 } = l, e = document.createElement("div");
  return e.className = `popup popup-${t}`, e.textContent = s, document.body.appendChild(e), setTimeout(() => {
    e.classList.add("fade-out"), e.addEventListener("transitionend", () => {
      e.remove();
    });
  }, c), e;
}
function H({ items: s = [], title: l = "Menu" }) {
  const t = document.createElement("div");
  t.className = "sidemenu-wrapper";
  const c = document.createElement("div");
  c.className = "sidemenu";
  const e = document.createElement("h2");
  e.textContent = l, c.appendChild(e);
  const a = document.createElement("ul");
  s.forEach((o) => {
    const r = document.createElement("li"), d = document.createElement("a");
    d.textContent = o.label, d.href = o.href || "#", r.appendChild(d), a.appendChild(r);
  }), c.appendChild(a), t.appendChild(c);
  const n = document.createElement("button");
  return n.className = "sidemenu-toggle", n.textContent = "☰", n.onclick = () => {
    t.classList.toggle("open");
    const o = t.classList.contains("open");
    n.textContent = o ? "✕" : "☰", n.classList.toggle("inside", o);
  }, t.appendChild(n), t;
}
function S({ language: s = "html", code: l = "" }) {
  const t = document.createElement("div");
  t.className = "snippet-wrapper";
  const c = document.createElement("pre");
  c.className = `snippet-box language-${s}`;
  const e = document.createElement("code");
  e.textContent = l, c.appendChild(e);
  const a = document.createElement("button");
  return a.className = "snippet-copy-btn", a.textContent = "📋 Copy", a.onclick = () => {
    navigator.clipboard.writeText(l).then(() => {
      a.textContent = "✅ Copied!", setTimeout(() => a.textContent = "📋 Copy", 1500);
    });
  }, t.appendChild(c), t.appendChild(a), t;
}
function A({ title: s = "Statistics", stats: l = [] }) {
  const t = document.createElement("div");
  t.className = "stats-wrapper";
  const c = document.createElement("h2");
  c.className = "stats-title", c.textContent = s, t.appendChild(c);
  const e = document.createElement("div");
  return e.className = "stats-grid", l.forEach((a) => {
    const n = document.createElement("div");
    n.className = "stat-card";
    const o = document.createElement("div");
    o.className = "stat-value", o.textContent = a.value;
    const r = document.createElement("div");
    r.className = "stat-label", r.textContent = a.label, n.appendChild(o), n.appendChild(r), e.appendChild(n);
  }), t.appendChild(e), t;
}
export {
  C as createAccordion,
  v as createButton,
  g as createCard,
  f as createCarousel,
  b as createDropdown,
  N as createFooter,
  x as createForm,
  y as createHero,
  L as createHeroSplit,
  w as createModal,
  F as createNavbar,
  k as createPopup,
  H as createSideMenu,
  S as createSnippet,
  A as createStatistics
};
