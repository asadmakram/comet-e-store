import { React } from 'react';
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Comet E Store</h1>
            <input type="text" placeholder="Search" className="search" />
            <ul className="nav-links">
                <li><a href="/" >Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/AboutUs">About us</a></li>
            </ul>
        </nav>
    );
}


export default NavBar;