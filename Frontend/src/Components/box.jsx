import React from "react";

export function Box({ title, image, onPlayClick, width = "60%", height = "150px" }) {
    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: "#E3F2FD", // Light blue background
                borderRadius: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Left Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginLeft: "50px"}}>
                <p style={{ fontSize: "18px", fontWeight: "bold", color: "#374151" }}>{title}</p>
                <button
                    onClick={onPlayClick}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#1D4ED8",
                        color: "white",
                        borderRadius: "999px",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        borderLeft: "100px"
                    }}
                >
                    ▶
                </button>
            </div>

            {/* Right Section */}
            <img
                src={image}
                alt={title}
                style={{
                    height: "100%",
                    maxHeight: "100%",
                    maxWidth: "40%",
                    objectFit: "contain",
                }}
            />
        </div>
    );
}
