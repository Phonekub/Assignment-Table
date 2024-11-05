import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
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
                
                 {cart.map(item => (
                        <div>
                            <div key={item._id} className="card">
                            
                                    <img src={item.img} alt={item.name}  />
                                    <div className="details">
                                        <h3>Name :</h3>
                                        <p>{item.name}</p>
                                        <p className='space'></p>
                                        <h3>Type : </h3>
                                        <p>{item.type}</p>
                                        <p className='space'></p>
                                        <h3>Price : </h3>
                                        <p>{item.price}</p>
                                    </div>
            
                            </div>

                        </div>
                    ))}
                    
        </div>
    );
};

export default addCart;
