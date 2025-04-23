export function createFooter(options = {}) {
  const {
    links = [],
    supportInfo = {},
    copyright =
      "Copyright © 2025 Hartan Library — All rights reserved by Hartan Library",
  } = options;

  const footer = document.createElement("footer");
  footer.className = "footer";

  const container = document.createElement("div");
  container.className = "footer-container";

  // Follow Us column
  const followColumn = document.createElement("div");
  followColumn.className = "footer-column";
  const followHeading = document.createElement("h4");
  followHeading.className = "footer-heading";
  followHeading.textContent = "Follow Us";
  followColumn.appendChild(followHeading);

  const followList = document.createElement("ul");
  followList.className = "footer-links";

  links.forEach((link) => {
    const listItem = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "footer-link";
    listItem.appendChild(a);
    followList.appendChild(listItem);
  });

  followColumn.appendChild(followList);

  // Support column
  const supportColumn = document.createElement("div");
  supportColumn.className = "footer-column";
  const supportHeading = document.createElement("h4");
  supportHeading.className = "footer-heading";
  supportHeading.textContent = "Support";
  supportColumn.appendChild(supportHeading);

  const supportList = document.createElement("ul");
  supportList.className = "footer-support";

  [supportInfo.address, supportInfo.email, supportInfo.phone1, supportInfo.phone2].forEach(
    (item) => {
      if (item) {
        const li = document.createElement("li");
        li.textContent = item;
        supportList.appendChild(li);
      }
    }
  );

  supportColumn.appendChild(supportList);

  container.appendChild(followColumn);
  container.appendChild(supportColumn);
  footer.appendChild(container);

  const bottom = document.createElement("div");
  bottom.className = "footer-bottom";
  bottom.textContent = copyright;
  footer.appendChild(bottom);

  return footer;
}
