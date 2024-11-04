import React, { useState } from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const MenubarWithSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        alert(`Searching for: ${searchQuery}`);
    };

    return (
        <nav className="menubar">
            <h1 className="logo">Pet Shop</h1>
            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            <ul className="menu">
                <li><Link to="/home">Home</Link></li>
                {/* <li><a href="/about">About</a></li> */}
                {/* <li><a href="/services">Services</a></li> */}
                {/* <li><a href="/contact">Contact</a></li> */}
                <div className="icons">
                    <a href="/cart" title="Cart"><i className="fas fa-shopping-cart"></i></a>
                    <a href="/settings" title="Settings"><i className="fas fa-cog"></i></a>
                </div>
            </ul>
        </nav>
    );
};

export default MenubarWithSearch;
