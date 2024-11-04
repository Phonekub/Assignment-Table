import React from 'react';
import './PetCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img 
        src={pet.image} 
        alt={pet.breed} 
        className="pet-card-image" 
      />
      <div className="pet-card-title">{pet.breed}</div>
      <div className="pet-card-stars">★★★★★</div>
      <div className="pet-card-details">
        <div>
          <p>Age: {pet.age}</p>
          <p>Gender: {pet.gender}</p>
          <p>Weight: {pet.weight} kg</p>
        </div>
        <div>
          <p>Pet price: {pet.price}</p>
          <button className="pet-card-button">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
