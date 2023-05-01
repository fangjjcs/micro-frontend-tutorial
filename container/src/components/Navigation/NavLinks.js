import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Marketing</NavLink>
        </li>
        <li>
            <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
}

export default NavLinks;