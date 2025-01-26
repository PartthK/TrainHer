import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Summary() {
  const [progress, setProgress] = useState(0); // Initial progress state
  const targetProgress = 80; // Target progress (80%)
  const times = [
    { move: "Punch", time: "40 min" },
    { move: "Kick", time: "30 min" },
    { move: "Upper Block", time: "20 min" },
    { move: "Middle BLOCK", time: "25 min" },
    { move: "Lower Block", time: "35 min" },
  ]; // Static times for each move

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= targetProgress) {
        clearInterval(interval); // Stop the animation when target is reached
      } else {
        currentProgress += 1; // Increment progress
        setProgress(currentProgress); // Update progress state
      }
    }, 20); // Speed of animation (20ms per step)
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [targetProgress]);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        background: "white", // Light gray background
        overflowX: "hidden",
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
          width: "1167px", // Full-width navbar
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

      {/* Main Content (Inside 3D Box) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center the content horizontally
          alignItems: "center", // Center the content vertically
          marginTop: "100px", // Add margin to account for fixed navbar height
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px", // Restrict the maximum width of the content
            backgroundColor: "white", // White background for platform
            borderRadius: "20px", // Rounded corners for the platform
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for 3D effect
            padding: "40px",
          }}
        >
          {/* Header */}
          <header
            style={{
              marginBottom: "50px", // Adjust margin for better spacing
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "46px",
                fontWeight: "bold",
                color: "#3E4C59",
              }}
            >
              Well Done!
            </h1>
          </header>

          {/* Main Content */}
          <main>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "40px",
                alignItems: "start",
              }}
            >
              {/* Left Section (Progress Block) */}
              <div
                style={{
                  transform: "translateX(-80px)", // Shift progress block left
                }}
              >
                <div
                  style={{
                    marginBottom: "20px",
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  <svg
                    viewBox="0 0 84 48"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "300px", height: "150px" }}
                  >
                    {/* Background Semi-Circle */}
                    <path
                      d="M 6 42 A 36 36 0 0 1 78 42"
                      fill="none"
                      stroke="#ddd"
                      strokeWidth="5"
                    />
                    {/* Foreground Semi-Circle */}
                    <path
                      d="M 6 42 A 36 36 0 0 1 78 42"
                      fill="none"
                      stroke="#0A6CFF"
                      strokeWidth="5"
                      strokeDasharray="114"
                      strokeDashoffset={114 - (progress / 100) * 114}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "32px",
                        margin: 0,
                        fontWeight: "bold",
                      }}
                    >
                      {progress}%
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "22px",
                    marginBottom: "10px",
                    marginTop: "-50px", // Adjust vertical spacing
                    color: "#7B8794",
                  }}
                >
                  Progress
                </p>
                <h3
                  style={{
                    fontSize: "20px",
                    color: "#7B8794",
                    marginBottom: "30px",
                  }}
                >
                  2 hours left to complete training.
                  <h3
                    style={{
                      fontSize: "20px",
                      color: "#7B8794",
                      marginBottom: "30px",
                    }}
                  >
                    Let's push through!
                  </h3>
                </h3>
                <button
                  style={{
                    backgroundColor: "#0A6CFF",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "15px 30px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Finish
                </button>
              </div>

              {/* Right Section */}
              <div
                style={{
                  textAlign: "left",
                  transform: "translateX(-110px)",
                }}
              >
                {/* Time Spent */}
                <div style={{ marginBottom: "30px" }}>
                  <p
                    style={{
                      fontSize: "32px",
                      marginBottom: "10px",
                      color: "#323F4B",
                    }}
                  >
                    Time Spent
                  </p>
                  <h3
                    style={{
                      fontSize: "24px",
                      marginBottom: "20px",
                      fontWeight: "normal",
                    }}
                  >
                    30m
                  </h3>
                </div>

                {/* Individual Move Scores */}
                <div style={{ marginBottom: "30px" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      marginBottom: "15px",
                      color: "#323F4B",
                    }}
                  >
                    Time Spent on Individual Move
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      fontSize: "18px",
                      margin: 0,
                    }}
                  >
                    {times.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "10px 0",
                          borderBottom: "1px solid #B0E0E6", // Light blue line
                        }}
                      >
                        <span>{item.move}</span>
                        <span>{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
