
import React from 'react';
import logo from '../imagenes/logo1.png'
import './styles/Home.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='Home'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" width="360" height="70" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link " to="/Productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Comida">Comida</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Carrito">Carrito</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/Vestimenta">Vestimenta</Link>
                            </li>
                            <li className="nav-item  d-none d-md-inline logout-button-container">
                                <Link className="nav-link " to="/login">Cerrar Sesión</Link>
                            </li>
                            <li className="d-md-none">
                                <Link className="nav-link" to="/login">Cerrar Sesión</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <svg class="yellow-square" viewBox="0 0 200 655" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="32" width="1616" height="1616" rx="28" ry="28" fill="#ffc107" transform="rotate(-45 200 100)" />
            </svg>
        </div>
    );
}

export default Navbar;
