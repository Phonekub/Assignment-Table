import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const pet = petDetail.find((p) => p.id === parseInt(id));

    if (!pet) {
        return <h1>Pet not found</h1>;
    }

    return (
        <div className="pet-card">
            <img src={pet.img} alt={pet.name} className="pet-card-image" />
            <div className="pet-card-title">{pet.name}</div>
            <div className="pet-card-stars">★★★★★</div>
            <div className="pet-card-details">
                <p>Age: {pet.age} years</p>
                <p>Gender: {pet.gender}</p>
                <p>Weight: {pet.weight} kg</p>
                <p>Pet price: {pet.price} Baht</p>
                <button className="pet-card-button">Purchase</button>
            </div>
        </div>
    );
};

export default Detail;



