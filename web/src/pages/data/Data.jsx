function Data() {
  // Array of project objects to display in the table
  const projects = [
    {
      name: "Portfolio Website",
      tech: "React, Vite",
      status: "Completed",
      year: 2026,
    },
    {
      name: "Greeting App",
      tech: "React Native, Expo",
      status: "Completed",
      year: 2026,
    },
    {
      name: "Weather Dashboard",
      tech: "React, API",
      status: "In Progress",
      year: 2026,
    },
    {
      name: "Task Manager",
      tech: "Node.js, Express",
      status: "Planned",
      year: 2026,
    },
    {
      name: "E-Commerce Store",
      tech: "Next.js, Stripe",
      status: "Planned",
      year: 2026,
    },
  ];

  return (
    <div className="page">
      <h1>My Projects</h1>
      <p>Here's a summary of my recent and upcoming projects:</p>

      {/* HTML table with thead for column headers and tbody for data rows */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Technology</th>
            <th>Status</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.name}>
              <td>{project.name}</td>
              <td>{project.tech}</td>
              <td>{project.status}</td>
              <td>{project.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
