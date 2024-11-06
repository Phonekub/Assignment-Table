import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Detail.css"

const Detail = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPet = async () => {
            if (id) {
                try {
                    const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
                    setPet(response.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchPet();
    }, [id]);

    const handleAddToCart = async () => {
            await axios.post(`http://127.0.0.1:5000/cart/${id}`);
            navigate("/home");
    };

    const handleBuy = async () => {
            await axios.post(`http://127.0.0.1:5000/cart/${id}`);
            navigate("/cart");
    };

    if (id) {
        if (pet) {
            return (
                <div className='detail-container'>
                    <div className="detail-rectangle">
                        <h2>{pet.name}</h2><br></br>
                        <img src={pet.img} alt={pet.name} className="detail-image" />
                        <p className="detail-info">Price: ${pet.price}</p>
                        <p className="detail-info">Age: {pet.age} years</p>
                        <p className="detail-info">Gender: {pet.gender}</p>
                        <p className="detail-info">Detail: {pet.detail}</p>
        
                        <div className="detail-buttons">
                            <button onClick={handleAddToCart}>Add to Cart</button>
                            <button onClick={handleBuy}>Buy</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h2>Loading pet details...</h2>;
        }
    }
};

export default Detail;
