import { Link } from "react-router-dom";
import karate from "../Images/undraw_yoga_yy99.svg";

export function Home() {
  return (
    <div className="home-container">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Learn">Learn</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Summary">Summary</Link>
      </nav>
      <div className="illustration-container">
        <img
          src={karate}
          alt="Karate Illustration"
          className="illustration"
        />
      </div>
    </div>
  );
}
