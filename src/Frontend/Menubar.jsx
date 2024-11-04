import React, { useState } from 'react';
import './Menubar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Setting from './Setting'; // นำเข้า Setting


const MenubarWithSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // const [showSettingsPopup, setShowSettingsPopup] = useState(false);
    // const openSettingsPopup = () => {
    //     setShowSettingsPopup(true);
    // };

    // const closeSettingsPopup = () => {
    //     setShowSettingsPopup(false);
    // };

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
                <img src="https://raw.githubusercontent.com/Phonekub/Pet-Shop/refs/heads/main/src/Frontend/png-transparent-logo-petshop-pet-store-removebg-preview.png" alt="Logo" className="logo-image" />
                    <ul className="menu">
                        <li><Link to="/home">Home</Link></li>
                        {/* <li><a href="/about">About</a></li> */}
                        {/* <li><a href="/services">Services</a></li> */}
                        {/* <li><a href="/contact">Contact</a></li> */}
                        <div className="icons">
                            <Link to="/cart" title="Cart"><i className="fas fa-shopping-cart"></i></Link>
                            {/* <Link to="/setting" title="Setting" onClick={openSettingsPopup}><i className="fas fa-cog"></i></Link> */}
                        </div>
                        
                    </ul>
                    {/* {showSettingsPopup && <Setting onClose={closeSettingsPopup} />}  */}
            </nav>
    );
};

export default MenubarWithSearch;
