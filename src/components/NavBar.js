// import Presentation from "./Presentation"

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a className="projects" href="#portfolio" >Projects</a>
                </li>
                <li>
                    <a className="stacks" href="#stack">Stacks</a>
                </li>
                <li>
                    <a className="about-me" href="#about-me">About Me</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar