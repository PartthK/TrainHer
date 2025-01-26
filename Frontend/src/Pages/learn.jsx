import React from "react";
import { Box } from "../Components/box";
import axios from "axios"; // Import axios for API requests
import punchImage from "../Images/punch.png";
import kickImage from "../Images/kick.png";

export function Learn() {
    const sendMoveToServer = (move) => {
        console.log("RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        axios.post("http://localhost:5000/analyze", { move }) // Send the move to the server
            // .then((response) => {
            //     console.log("Server response:", response.data);
            //     alert(response.data.status); // Show the response message
            // })
            // .catch((error) => {
            //     console.error("Error sending data to the server:", error);
            //     alert("Failed to connect to the server.");
            // });
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
                onPlayClick={() => sendMoveToServer("punch")}
                width="1000px"
                height="200px"
            />
            <Box
                title="Kick"
                image={kickImage}
                onPlayClick={() => sendMoveToServer("kick")}
                width="1000px"
                height="200px"
            />
        </div>
    );
}
