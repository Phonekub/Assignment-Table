import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatalogFilter.css';
import './Menubar.css';

const CatalogFilter = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState(''); 
    const [selectedItem, setSelectedItem] = useState(null); 

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearchQuery("");
        
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/products');
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchItems();
    }, []);

    const handleClick = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
            setSelectedItem(response.data); // บันทึกข้อมูลของการ์ดที่กด
            console.log(response.data); // ลองแสดงข้อมูลใน console
        } catch (error) {
            console.error("Error fetching item data:", error);
        }
    };

    const filteredItems = items.filter(item => 
        (filter === 'all' || item.type === filter)&&
        (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.type.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="catalog-filter">
                
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search by name or type..." 
                        value={searchQuery} 
                        onChange={handleSearchChange}
                        className="search-form-input"
                    />
                    <button type="submit" className="search-form-button">Clear Search bar</button>
                </form>


                <h2 className="catalog-title">Categories</h2>
                <div className="filter-buttons">
                    <button 
                        onClick={() => setFilter('all')} 
                        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setFilter('dog')} 
                        className={`filter-button ${filter === 'dog' ? 'active' : ''}`}
                    >
                        Dog
                    </button>
                    <button 
                        onClick={() => setFilter('cat')} 
                        className={`filter-button ${filter === 'cat' ? 'active' : ''}`}
                    >
                        Cat
                    </button>
                    <button 
                        onClick={() => setFilter('bird')} 
                        className={`filter-button ${filter === 'bird' ? 'active' : ''}`}
                    >
                        Bird
                    </button>
                </div>
                

                <div className="type">
                    {filteredItems.map(item => (
                        <div key={item._id} className="item-card" onClick={() => handleClick(item._id)}>
                            <h3>{item.name}</h3>
                            <p>Type: {item.type}</p>
                            {item.img && (
                                <img src={item.img} alt={item.name} className="item-image" />
                            )}
                        </div>
                    ))}
                </div>

        </div>
        
    );
};

export default CatalogFilter;

