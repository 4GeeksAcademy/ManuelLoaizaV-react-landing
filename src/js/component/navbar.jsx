import React from 'react';

// TODO:
// - Align nav items to the right in lg size.
// - Make hamburger white.
export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand mb-0 text-white h1" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-supported-content" aria-controls="navbar-supported-content" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-supported-content">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};
