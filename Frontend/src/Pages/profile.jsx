export function Profile() {
    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #ffffff; /* Set body background to white */
                        color: #000000; /* Set text color to black */
                        font-family: Arial, sans-serif;
                    }
                `}
            </style>
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: "auto auto 1fr auto",
                    gridTemplateColumns: "1fr 3fr",
                    height: "100vh",
                    gap: "20px",
                }}
            >
                {/* Navigation Bar */}
                <div
                    style={{
                        gridColumn: "1 / -1",
                        backgroundColor: "#f8f9fa", /* Light background for nav */
                        padding: "10px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "2px solid #ddd", /* Light gray border */
                    }}
                >
                    <h2 style={{ margin: 0, fontSize: "20px" }}>TrainHer</h2>
                    <div style={{ display: "flex", gap: "15px" }}>
                        <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>
                            Home
                        </a>
                        <a href="/Learn" style={{ color: "#007bff", textDecoration: "none" }}>
                            Learn
                        </a>
                        <a href="/Profile" style={{ color: "#007bff", textDecoration: "none" }}>
                            Profile
                        </a>
                        <a href="/Summary" style={{ color: "#007bff", textDecoration: "none" }}>
                            Summary
                        </a>
                    </div>
                </div>

                {/* Header */}
                <header
                    style={{
                        gridColumn: "1 / -1",
                        padding: "20px",
                        backgroundColor: "#e9ecef", /* Light gray header background */
                        textAlign: "center",
                    }}
                >
                    <h1 style={{ fontSize: "36px", fontWeight: "bold", margin: 0 }}>My Profile</h1>
                </header>

                {/* Main Content */}
                <main
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr", // Equal width for both columns
                        gap: "20px",
                        padding: "20px",
                     }}
>
                 {/* Profile Picture and Info */}
                 <div
                      style={{
                         backgroundColor: "#f8f9fa", // Light card background
                         padding: "40px",
                         borderRadius: "10px",
                         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center", // Center the content
                         justifyContent: "center", // Center vertically
                      }}
    >
        <img
            src="https://via.placeholder.com/150"
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
            contact@accuyoga.co
        </p>
    </div>

    {/* XP and Details */}
    <div
        style={{
            backgroundColor: "#f8f9fa",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center content
        }}
    >
        <h2 style={{ fontSize: "20px", marginBottom: "10px", textAlign: "center" }}>My XP</h2>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
            }}
        >
            <span>8</span>
            <progress
                value="80"
                max="100"
                style={{
                    flexGrow: 1,
                    margin: "0 10px",
                    height: "8px",
                    appearance: "none",
                    borderRadius: "4px",
                    backgroundColor: "#ddd",
                }}
            ></progress>
            <span>9</span>
        </div>

        <button
            style={{
                backgroundColor: "#007bff",
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
</main>

                {/* Footer */}
                <footer
                    style={{
                        gridColumn: "1 / -1",
                        textAlign: "center",
                        padding: "20px",
                        backgroundColor: "#e9ecef",
                        borderTop: "2px solid #ddd",
                    }}
                >
                    <p style={{ fontSize: "14px", color: "#666" }}>© 2025 AccuYoga</p>
                </footer>
            </div>
        </>
    );
}
