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
                borderRadius: "15px", // Increased from 10px
                boxShadow: "0 3px 15px rgba(0, 0, 0, 0.15)", // Increased shadow size
                width: "1000px", // Increased by 1.5x
                padding: "30px", // Increased by 1.5x
                gap: "30px", // Increased by 1.5x
            }}
        >
            <div style={{ flex: "1", marginRight: "750px" }}>
                <h3 style={{ margin: "0 0 15px 0", fontSize: "27px" }}>{title}</h3>
                <button
                    onClick={onPlayClick}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "15px 30px", // Increased by 1.5x
                        borderRadius: "7.5px",
                        cursor: "pointer",
                        fontSize: "18px",
                    }}
                >
                    Play
                </button>
            </div>
            <img
                src={image}
                alt={title}
                style={{
                    width: "150px", // Increased by 1.5x
                    height: "150px",
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
                    padding: "22.5px 60px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 3px 15px rgba(0, 0, 0, 0.15)",
                    width: "1650px", // Increased by 1.5x
                    position: "fixed",
                    top: "0",
                    zIndex: "1000",
                    boxSizing: "border-box",
                }}
            >
                <h2
                    style={{
                        fontSize: "36px",
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
                        gap: "30px",
                        flexWrap: "nowrap",
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            fontSize: "27px",
                            color: "#1a202c",
                            padding: "7.5px 22.5px",
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/Learn"
                        style={{
                            textDecoration: "none",
                            fontSize: "27px",
                            color: "#1a202c",
                            padding: "7.5px 22.5px",
                        }}
                    >
                        Learn
                    </Link>
                    <Link
                        to="/Profile"
                        style={{
                            textDecoration: "none",
                            fontSize: "27px",
                            color: "#1a202c",
                            padding: "7.5px 22.5px",
                        }}
                    >
                        Profile
                    </Link>
                    <Link
                        to="/Summary"
                        style={{
                            textDecoration: "none",
                            fontSize: "27px",
                            color: "#1a202c",
                            padding: "7.5px 22.5px",
                        }}
                    >
                        Summary
                    </Link>
                </div>
            </nav>

            {/* Content Section */}
            <div
                style={{
                    marginTop: "200px", // Increased margin to account for navbar and spacing
                    backgroundColor: "#FFFFFF",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "30px",
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
                    image={middleBlock}
                    onPlayClick={() => sendMoveToServer("lower_block")}
                />
            </div>
        </>
    );
}
