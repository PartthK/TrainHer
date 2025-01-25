export function Summary() {
    return (
        <div
            style={{
                backgroundColor: "#f",
                color: "#333",
                fontFamily: "Arial, sans-serif",
                height: "100vh", 
                overflow: "hidden", 
                padding: "40px",
                boxSizing: "border-box",
            }}
        >
            {/* Header */}
            <header style={{ marginBottom: "30px", textAlign: "left" }}>
                <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Summary</h1>
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
                    {/* Left Section */}
                    <div>
                        <h2 style={{ fontSize: "32px", color: "#4caf50", marginBottom: "20px" }}>
                            Well Done!
                        </h2>

                        {/* Circular Progress */}
                        <div style={{ marginBottom: "20px" }}>
                            <svg
                                height="150"
                                width="150"
                                viewBox="0 0 36 36"
                                style={{ transform: "rotate(0deg)" }}
                            >
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.9155"
                                    fill="none"
                                    stroke="#ddd"
                                    strokeWidth="3"
                                ></circle>
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.9155"
                                    fill="none"
                                    stroke="#4caf50"
                                    strokeWidth="3"
                                    strokeDasharray="80, 100"
                                    strokeLinecap="round"
                                ></circle>
                                <text
                                    x="18"
                                    y="20.35"
                                    textAnchor="middle"
                                    fontSize="12"
                                    fill="#333"
                                >
                                    80%
                                </text>
                            </svg>
                        </div>

                        <p style={{ fontSize: "18px", marginBottom: "10px" }}>Average Accuracy</p>
                        <h3 style={{ fontSize: "28px", color: "#4caf50", marginBottom: "20px" }}>
                            +867 XP
                        </h3>
                        <button
                        style={{
                            backgroundColor: "#007bff",
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
                    <div style={{ textAlign: "left" }}>
                        {/* Time Spent */}
                        <div style={{ marginBottom: "30px" }}>
                            <p style={{ fontSize: "18px", marginBottom: "5px" }}>Time Spent</p>
                            <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>30m</h3>
                        </div>

                        {/* Individual Asana Scores */}
                        <div style={{ marginBottom: "30px" }}>
                            <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
                                Individual Asana Score
                            </h3>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    fontSize: "18px",
                                    margin: 0,
                                }}
                            >
                                {["Halasana", "Halasana", "Halasana", "Halasana"].map(
                                    (asana, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                padding: "10px 0",
                                                borderBottom: "1px solid #ddd",
                                            }}
                                        >
                                            <span>{asana}</span>
                                            <span>88%</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div
                    style={{
                        marginTop: "40px",
                        textAlign: "center",
                        borderTop: "1px solid #ddd",
                        paddingTop: "20px",
                    }}
                >
                </div>
            </main>
        </div>
    );
}
