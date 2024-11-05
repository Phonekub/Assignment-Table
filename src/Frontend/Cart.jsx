import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CatalogFilter.css';
import { Link } from 'react-router-dom';

const addCart = () => {

    const [cart,setCart]=useState([]);
    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/cart');
                setCart(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchItems();
    }, []);

    return (
        <div>
            <h2>Frome Cart</h2>
            <div className="catalog-filter">
                    {cart.map(item => (
                        <div key={item._id} className="item-card" onClick={() => handleClick(item._id)}>
                            <img src={item.img} alt={item.name} className="item-image" />   
                            <h3>Name: {item.name}</h3>
                            <p>Type: {item.type}</p>
                            <p>Pric: {item.price}</p>
                            {/* {item.img && ( */}
                                {/* <Link to={`/detail/${item._id}`} title="Detail"> */}
                                {/* </Link> */}
                            {/* )} */}


                        </div>
                    ))}
                </div>
        </div>
    );
};

export default addCart;
