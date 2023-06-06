function Footer() {
    return (
        <div className="footer-basic">
        <footer>
                <div className="social"><a href="https://www.linkedin.com/in/rajae-chelaulau-56952085/"><i className="fa-brands fa-linkedin-in"></i></a><a href="https://www.github.com/rajaeche/"><i className="fa-brands fa-github"></i></a><a href="mailto:rajaeche@gmail.com"><i className="fa-regular fa-envelope"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/home">Home</a></li>
                <li className="list-inline-item"><a href="/projects">Projects</a></li>
                <li className="list-inline-item"><a href="/aboutme">About Me</a></li>
                <li className="list-inline-item"><a href="/terms">Terms</a></li>
                <li className="list-inline-item"><a href="/privacy">Privacy Policy</a></li>
            </ul>
            <p className="copyright">All Rights Reserved © 2023</p>
        </footer>
    </div>
    )
}

export default Footer