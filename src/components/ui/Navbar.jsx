import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (     
            <nav className="container-fluid navbar navbar-dark bg-dark">
                <div className="container-fluid">

                    <div className='nav navbar'>

                        <li className='nav-item'>
                            <NavLink 
                                to={'/'} 
                                className='nav-link text-light'
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        
                        <li className='nav-item'>
                            <NavLink 
                                to={'/blog'} 
                                className='nav-link text-light'
                            >
                                Blog
                            </NavLink>
                        </li>    

                        <li className='nav-item'>
                            <NavLink 
                                to={'/contact'}
                                className='nav-link text-light' 
                            >
                                Contact
                            </NavLink>
                        </li>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar