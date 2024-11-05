import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
import { Link } from 'react-router-dom';

const addCart = () => {

    const [cart,setCart]=useState([]);
    const [total,setTotal]=useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); 
    
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
        axios.delete("http://127.0.0.1:5000/cart/" + id)
        .then(response => {
            setCart(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
    };

    const onDeleteAll = () => {
        axios.delete("http://127.0.0.1:5000/cart")
        .then(response => {
            setCart(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
    };

    const BuyOne = (id) => {
        axios.delete("http://127.0.0.1:5000/cart/" + id)
        .then(response => {
            setCart(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
        setShowPopup(false);
        setSelectedItem(null);
    };

    const BuyAll = () => {
        axios.delete("http://127.0.0.1:5000/cart")
        .then(response => {
            setCart(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
        axios.get("http://127.0.0.1:5000/cart/total")
        .then(response => {
            setTotal(response.data);
        });
        setShowPopup(false);
        setSelectedItem(null);
    };


    const handleBuyClick = (item) => {
        setSelectedItem(item); // เลือกสินค้า
        setShowPopup(true);
    };

    const handleBuyAllClick = () => {
        setSelectedItem(cart); // เลือกสินค้าทั้งหมด
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedItem(null);
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
                                <button className="buy-button" onClick={() => handleBuyClick(item)}>Buy</button>
                            </div>
    
                    </div>

                </div>
            ))}
            <div className='cardtotal'>
                <h3 className='detailtotal'>Total: {total} BTH</h3>
            </div>
            <button className="buy-all-button" onClick={handleBuyAllClick}>Buy All</button>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Confirm Purchase</h2>
                        {selectedItem.length === cart.length ? (
                            <div>

                                <p>Are you sure you want to buy all items? <strong className='t'>{total} </strong></p>
                                <button onClick={closePopup}>Cancel</button>    
                                <button onClick={BuyAll}>Confirm all</button>

                            </div>
                            
                        ) : (
                            <div>

                                <p>Are you sure you want to buy <strong>{selectedItem.name}</strong> for <strong className='t'>{selectedItem.price}</strong> </p>
                                <button onClick={closePopup}>Cancel</button>
                                <button onClick={() => BuyOne(selectedItem._id)}>Confirm one</button>

                            </div>
                            
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default addCart;
