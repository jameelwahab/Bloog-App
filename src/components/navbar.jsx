import React from "react";
import image from '../image/WhatsApp Image 2024-01-18 at 4.35.16 PM.jpeg'

function Navbar() {
    return (
        <div className="nav-bar-section mb-5 sticky-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={image} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    work
                                    <i class="fa-solid fa-briefcase ms-2"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    services
                                    <i class="fa-solid fa-mug-hot ms-2"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    about
                                    <i class="fa-solid fa-heart ms-2"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex nav-right-content">
                            <button className="blog-button me-4">blog <i class="fa-solid fa-message ms-2"></i></button>
                            <button className="main-btn" type="submit">
                                planner
                                <i class="fa-solid fa-feather-pointed ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
