import { Link } from "react-router-dom";
import karate from "../Images/yoga.svg";

export function Home() {
  return (
    <div
      className="home-container"
      style={{
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        margin: "0 2em", // Uniform margin on both sides
        padding: "0",
        boxSizing: "border-box",
        background: "#ffffff",
        overflowX: "hidden", // Prevent overflow
      }}
    >
      {/* Navbar */}
      <nav
        className="nav-links"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          width: "1100px", // Adjusted for uniform margins
          //marginRight: "5em", // Added left margin to align with the container
          position: "fixed",
          top: "0",
          zIndex: "1000",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            margin: "0",
            color: "#1a202c",
            flexShrink: "0",
          }}
        >
          TrainHer
        </h2>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "nowrap",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#1a202c",
              padding: "5px 15px",
            }}
          >
            Home
          </Link>
          <Link
            to="/Learn"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#1a202c",
              padding: "5px 15px",
            }}
          >
            Learn
          </Link>
          <Link
            to="/Profile"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#1a202c",
              padding: "5px 15px",
            }}
          >
            Profile
          </Link>
          <Link
            to="/Summary"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#1a202c",
              padding: "5px 15px",
            }}
          >
            Summary
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <div
        className="main-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          padding: "150px 0",
          marginTop: "80px",
          boxSizing: "border-box",
        }}
      >
        {/* Text Section */}
        <div
          className="text-container"
          style={{
            width: "50%",
            textAlign: "left",
          }}
        >
          <h1
            style={{
              fontSize: "76px",
              fontWeight: "500",
              margin: "0",
              color: "#1a202c",
              lineHeight: "1.2",
            }}
          >
            Empower Your Body
          </h1>
          <p style={{ fontSize: "22px", margin: "20px 0 30px", color: "#4a5568" }}>
            Start your journey to becoming the best version of yourself with personalized online training.
          </p>
          <button
            style={{
              padding: "15px 40px",
              fontSize: "20px",
              backgroundColor: "#1a202c",
              color: "#ffffff",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2d3748")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1a202c")}
          >
            Train now
          </button>
        </div>

        {/* Image Section */}
        <div
          className="illustration-container"
          style={{
            width: "40%",
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={karate}
            alt="Training Illustration"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
            }}
          />
          {/* Decorative Shapes */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              left: "-40px",
              width: "150px",
              height: "150px",
              backgroundColor: "#f6d365",
              borderRadius: "10px",
              zIndex: "-1",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "-30px",
              right: "-50px",
              width: "200px",
              height: "200px",
              backgroundColor: "#fee2e2",
              borderRadius: "10px",
              zIndex: "-1",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
