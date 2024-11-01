import React from 'react';
import './style.css';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
  return (     
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container d-md-flex flex-row justify-content-end">
            
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/blog'}>Blog</Link>
                    </li>
                    {/*
                    <li className="nav-item">
                        <Link className="nav-link" to={'/skills'}>Skills</Link>
                    </li>
                    */}
                    <li className="nav-item">
                        <Link className="nav-link" to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar-start" aria-controls="navbar-start" aria-expanded="false"
            aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>

    </nav>
  )
}

export default Navbar