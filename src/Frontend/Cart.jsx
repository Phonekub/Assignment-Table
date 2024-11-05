import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
import { Link } from 'react-router-dom';

const addCart = () => {

    const [cart,setCart]=useState([]);
    const [total,setTotal]=useState([]);
    
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

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/cart/total');
                setTotal(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchItems();
    }, []);

    const onDelete = (id) => {
        const confirmDelete = window.confirm("Delete ID : " + id);
        if (confirmDelete) {
            axios.delete("http://127.0.0.1:5000/cart/" + id)
                .then(response => {
                    setProduct(response.data);
                });
        }
    };

    const onDeleteAll = () => {
        axios.delete("http://127.0.0.1:5000/cart")
            .then(response => {
                setProduct(response.data);
            });
    };

    return (
        <div>
            <div className='delete_all'>
                <h1></h1>
                <button className='button_delete1' onClick={onDeleteAll} >Delete All</button>
            </div>
            {cart.map(item => (
                <div>
                    <div key={item._id} className="card">
                    
                            <div className="details">
                                <img src={item.img} alt={item.name} className='img'  />
                                <h3 className='text_in_detail'>Name :</h3>
                                <p>{item.name}</p>
                                <h3 className='text_in_detail'>Type : </h3>
                                <p>{item.type}</p>
                                <h3 className='text_in_detail'>Price : </h3>
                                <p>{item.price}</p>

                                <button className='button_delete' onClick={() => onDelete(item._id)}>delete</button>
                            </div>
    
                    </div>

                </div>
            ))}
            <div className='cardtotal'>
                <h3 className='detailtotal'>Total: {total} BTH</h3>
            </div>
        </div>
    );
};

export default addCart;
