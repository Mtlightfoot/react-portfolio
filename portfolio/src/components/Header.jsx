import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="row mx-auto col-9 justify-content-center">

            <nav className="mt-3 navbar navbar-expand-lg navbar-light">
                <div className="container-fluid px-4">
                    <h2>Matthew Lightfoot.</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" end>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects-gallery" end>Projects Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" end>Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;