import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatalogFilter.css';

const CatalogFilter = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/products');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
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

    const filteredItems = items.filter(item => filter === 'all' || item.type === filter);

    return (
        <div className="catalog-filter">
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
                    onClick={() => setFilter('bra bra')} 
                    className={`filter-button ${filter === 'bra bra' ? 'active' : ''}`}
                >
                    Bra Bra
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