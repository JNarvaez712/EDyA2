import React from "react";
import {NavLink} from 'react-router-dom';

const NavComponent = () => {
    return (
        <nav className="navbar">
            <ul className="bav-menu"> 
                <li className="nav-item">
                    <NavLink exact to="/" activeClassName="active" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active" className="nav-link">
                        About
                    </NavLink>
                    <li>
                        <NavLink to="/contact" activeClassName="active" className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                </li>
            </ul>
        </nav>
    )
}

export default NavComponent;