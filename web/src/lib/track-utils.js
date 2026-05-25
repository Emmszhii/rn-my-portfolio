export function trackProjectClick(repo) {
  const key = "portfolio_clicks";

  const existing = JSON.parse(localStorage.getItem(key)) || {};

  existing[repo.name] = {
    count: (existing[repo.name]?.count || 0) + 1,
    lastClicked: new Date().toISOString(),
  };

  localStorage.setItem(key, JSON.stringify(existing));
}

export function getClickStats() {
  return JSON.parse(localStorage.getItem("portfolio_clicks")) || {};
}
