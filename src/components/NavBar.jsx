import './style.css'

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
            <button>Get Started</button>
        </div>
    )
}

export default NavBar;