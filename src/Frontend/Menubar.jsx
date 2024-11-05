import React, { useState } from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const MenubarWithSearch = () => {

    return (
            <nav className="menubar">
                <h1 className="logo">Pet Shop</h1>
                <img src="https://raw.githubusercontent.com/Phonekub/Pet-Shop/refs/heads/main/src/Frontend/png-transparent-logo-petshop-pet-store-removebg-preview.png" alt="Logo" className="logo-image" />
                    <ul className="menu">
                        <li><Link to="/home">Home</Link></li>
                        {/* <li><a href="/about">About</a></li> */}
                        {/* <li><a href="/services">Services</a></li> */}
                        {/* <li><a href="/contact">Contact</a></li> */}
                        <div className="icons">
                            <Link to="/cart" title="Cart"><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                        
                    </ul>
                    
            </nav>
    );
};

export default MenubarWithSearch;
