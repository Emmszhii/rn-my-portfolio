function About() {
  const skills = [
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "CSS",
  ];

  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        I'm a full-stack developer who enjoys creating both web and mobile
        applications. I'm currently learning React Native and cross-platform
        development.
      </p>

      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>Resources</h2>
      <p>
        I learned React from the{" "}
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          official React documentation
        </a>
        . It's a great place to start!
      </p>
    </div>
  );
}

export default About;
