import '../App.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <p className="Logo">BlockIntel</p>
            <div>
                <ul>
                    <li>Blogs</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Features</li>
                </ul>
            </div>
            <Link to="/signup">
                <button style={{ cursor: "pointer" }}>Get Started</button>
            </Link>
        </div>
    )
}

export default NavBar;