import React from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed
import femaleProfilePic from "../Images/femaleprofilepic.jpeg";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Exercise",
            data: [3, 4, 5, 3, 6, 7, 5],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 8,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
        tooltip: {
            mode: "index",
            intersect: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                color: "#ddd",
            },
        },
    },
};

export function Profile() {
    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #ffffff;
                        color: #000000;
                        font-family: Arial, sans-serif;
                    }
                `}
            </style>

            {/* Navigation Bar */}
            <nav
                className="nav-links"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px 40px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    position: "fixed",
                    top: "0",
                    zIndex: "1000",
                    width: "1100px", // Adjust to span the full width of the page
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

            <div
                style={{
                    display: "grid",
                    gridTemplateRows: "auto auto 1fr auto",
                    gridTemplateColumns: "1fr 3fr",
                    height: "100vh",
                    gap: "20px",
                    marginTop: "100px",
                    paddingTop: "70px", // To account for the fixed navigation bar
                }}
            >
                {/* Header */}
                {/* <header
                    style={{
                        gridColumn: "1 / -1",
                        padding: "20px",
                        backgroundColor: "#e9ecef",
                        textAlign: "center",
                        marginLeft: "135px",
                        width: "1060px"
                    }}
                >
                    <h1 style={{ fontSize: "36px", fontWeight: "bold", margin: 0 }}>My Profile</h1>
                </header> */}

                {/* Main Content */}
                <main
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "20px",
                        padding: "20px",
                    }}
                >
                    {/* Profile Picture and Info */}
                    <div
                        style={{
                            backgroundColor: "#f8f9fa",
                            padding: "90px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={femaleProfilePic}
                            alt="Profile"
                            style={{
                                borderRadius: "50%",
                                width: "150px",
                                height: "150px",
                                marginBottom: "20px",
                            }}
                        />
                        <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "10px" }}>
                            Cookie Kulkarni
                        </h2>
                        <p style={{ fontSize: "16px", textAlign: "center", color: "#666" }}>
                            contact@trainHer.co
                        </p>
                    </div>

                    {/* XP and Details */}
                    <div
                        style={{
                            backgroundColor: "#f8f9fa",
                            padding: "100px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "20px",
                                marginBottom: "10px",
                                textAlign: "center",
                            }}
                        >
                            My XP
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: "20px",
                            }}
                        >
                            <span style={{marginRight: "10px"}}>8</span>
                            <progress
                                value="80"
                                max="100"
                                // style={{
                                //     flexGrow: 1,
                                //     margin: "0 10px",
                                //     height: "8px",
                                //     appearance: "none",
                                //     borderRadius: "4px",
                                //     //backgroundColor: "#005FFF",
                                // }}
                            ></progress>
                            <span style={{marginLeft: "10px"}}>9</span>
                        </div>
                        <button
                            style={{
                                backgroundColor: "#005FFF",
                                color: "#fff",
                                border: "none",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                width: "100%",
                                marginTop: "20px",
                            }}
                        >
                            Logout
                        </button>
                    </div>

                    {/* Graph */}
                    <div
                        style={{
                            backgroundColor: "#f8f9fa",
                            padding: "120px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "300px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "20px",
                                marginBottom: "10px",
                                textAlign: "center",
                            }}
                        >
                            Weekly Progress
                        </h2>
                        <Line data={data} options={options} />
                    </div>
                </main>

                {/* Footer */}
                {/* <footer
                    style={{
                        gridColumn: "1 / -1",
                        textAlign: "center",
                        marginTop: "80px",
                        padding: "20px",
      
                        backgroundColor: "#e9ecef",
                        borderTop: "2px solid #ddd",
                    }}
                >
                    <p style={{ fontSize: "14px", color: "#666" }}>© 2025 AccuYoga</p> */}
                {/* </footer> */}
            </div>
        </>
    );
}
