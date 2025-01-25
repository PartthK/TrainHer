import React from "react";
import { Box } from "../Components/box";
import axios from "axios";
import punchImage from "../Images/punch.png";
import kickImage from "../Images/kick.png";

export function Learn() {
    const handleAnalyze = (move) => {
        axios
            .post("http://localhost:5000/analyze", { move })
            .then((response) => {
                console.log(response.data); // Handle success response
                alert(`Move: ${move} - Accuracy: ${response.data.accuracy}%`);
            })
            .catch((error) => {
                console.error("Error analyzing move:", error);
            });
    };

    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px", // Space between boxes
            }}
        >
            <Box
                title="Punch"
                image={punchImage}
                onPlayClick={() => handleAnalyze("punch")}
                width="1000px"
                height="200px"
            />
            <Box
                title="Kick"
                image={kickImage}
                onPlayClick={() => handleAnalyze("kick")}
                width="1000px"
                height="200px"
            />
        </div>
    );
}
