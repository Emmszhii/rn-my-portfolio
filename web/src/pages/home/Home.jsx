import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Portfolio</h1>
      <p className="intro">
        Hi! I'm a developer passionate about building web and mobile
        applications. Explore my work and get in touch!
      </p>
      <div className="home-links">
        <Link to="/about" className="btn">
          Learn About Me
        </Link>
        <Link to="/contact" className="btn">
          Get In Touch
        </Link>
        <Link to="/game" className="btn">
          Play a Game
        </Link>
      </div>
    </div>
  );
}

export default Home;
