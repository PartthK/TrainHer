import React from "react";
import axios from "axios"; // Import axios for API requests
import { Link } from "react-router-dom"; // Import Link for navigation

// Import images
import punchImage from "../Images/punch.png";
import kickImage from "../Images/kick.png";
import upperBlock from "../Images/upper_block.png";
import middleBlock from "../Images/middle_block.png";
import lowerBlock from "../Images/lower_block.png";

// Reusable Box Component
export const Box = ({ title, image, onPlayClick }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f0f8ff",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                width: "1050px",
                padding: "20px",
                gap: "20px",
            }}
        >
            <div style={{ flex: "1", marginRight: "500px"}}>
                <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
                <button
                    onClick={onPlayClick}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Play
                </button>
            </div>
            <img
                src={image}
                alt={title}
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
            />
        </div>
    );
};

// Learn Component
export function Learn() {
    const sendMoveToServer = (move) => {
        console.log(`Sending move to server: ${move}`);
        axios
            .post("http://localhost:5000/analyze", { move }) // Send the move to the server
            .then((response) => {
                console.log("Server response:", response.data);
                alert(`Move sent: ${move}`); // Show success message
            })
            .catch((error) => {
                console.error("Error sending data to the server:", error);
                alert("Failed to connect to the server. Please check if the server is running.");
            });
    };

    return (
        <>
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

            {/* Content Section */}
            <div
                style={{
                    marginTop: "120px", // Account for the fixed navbar height
                    backgroundColor: "#FFFFFF",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Box
                    title="Punch"
                    image={punchImage}
                    onPlayClick={() => sendMoveToServer("punch")}
                />
                <Box
                    title="Kick"
                    image={kickImage}
                    onPlayClick={() => sendMoveToServer("kick")}
                />
                <Box
                    title="Upper Block"
                    image={upperBlock}
                    onPlayClick={() => sendMoveToServer("upper_block")}
                />
                <Box
                    title="Middle Block"
                    image={middleBlock}
                    onPlayClick={() => sendMoveToServer("middle_block")}
                />
                <Box
                    title="Lower Block"
                    image={lowerBlock}
                    onPlayClick={() => sendMoveToServer("lower_block")}
                />
            </div>
        </>
    );
}
