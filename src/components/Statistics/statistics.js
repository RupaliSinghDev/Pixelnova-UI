export function createStatistics({ title = "Statistics", stats = [] }) {
    const wrapper = document.createElement("div");
    wrapper.className = "stats-wrapper";
  
    const heading = document.createElement("h2");
    heading.className = "stats-title";
    heading.textContent = title;
    wrapper.appendChild(heading);
  
    const statGrid = document.createElement("div");
    statGrid.className = "stats-grid";
  
    stats.forEach(stat => {
      const card = document.createElement("div");
      card.className = "stat-card";
  
      const value = document.createElement("div");
      value.className = "stat-value";
      value.textContent = stat.value;
  
      const label = document.createElement("div");
      label.className = "stat-label";
      label.textContent = stat.label;
  
      card.appendChild(value);
      card.appendChild(label);
      statGrid.appendChild(card);
    });
  
    wrapper.appendChild(statGrid);
    return wrapper;
  }
  