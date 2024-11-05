import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Detail.css"

const Detail = ({ petDetail }) => {
    const { id } = useParams(); // Get the ID from the URL
    const [pet, setPet] = useState(null); // State for the fetched pet data
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPet = async () => {
            if (id) { // If there's an ID, fetch the specific pet
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
                <div className="detail-container">
                <h2>{pet.name}</h2>
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
            );
        } else {
            return <h2>Loading pet details...</h2>;
        }
    }

    // If no ID, display all pets from petDetail
    return (
        <div>
            <h2>All Pets</h2>
            {petDetail.map(pet => (
                <div key={pet.id}>
                    <h3>{pet.name}</h3>
                    <img src={pet.img} alt={pet.name} style={{ width: '200px', height: '200px' }} />
                    <p>Price: ${pet.price}</p>
                    <p>Age: {pet.age} years</p>
                    <p>Gender: {pet.gender}</p>
                    <p>Weight: {pet.weight} lbs</p>

                    <button onClick={() => handleAddToCart(pet)}>Add to Cart</button>
                    <button onClick={() => handleBuy(pet)}>Buy</button>
                    
                    <Link to={`/detail/${pet.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default Detail;
