// lib/github.js
export async function fetchGitHubRepos(username) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
    );

    if (!res.ok) throw new Error("GitHub API error");

    const data = await res.json();

    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      updated: repo.updated_at,
      fork: repo.fork,
    }));
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    return [];
  }
}
