import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Learn">Learn</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Summary">Summary</Link>
            </nav>
        </>
    );
}
