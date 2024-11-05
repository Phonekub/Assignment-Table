// import React, { useState, useEffect } from "react";
// // const petDetail = [ 
// //     { id: 0, name: "Corgi", price: 30000, age: 2, gender: "Male", weight: 20, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pembroke_Corgi_Image_001.jpg/1280px-Pembroke_Corgi_Image_001.jpg" },
// //     { id: 1, name: "Poodle", price: 50000, age: 4, gender: "Female", weight: 30, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Standard_poodle_apricot.jpg/1024px-Standard_poodle_apricot.jpg" },
// //     { id: 2, name: "Chihuahua", price: 32900, age: 2, gender: "Female", weight: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Degaen.jpg/220px-Degaen.jpg" },
// //     { id: 3, name: "Pug", price: 54000, age: 5, gender: "Male", weight: 14, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fawn_pug_2.5year-old.JPG/1280px-Fawn_pug_2.5year-old.JPG" },
// //     { id: 4, name: "Syberian Husky", price: 99900, age: 5, gender: "Female", weight: 30, img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Siberian-husky.jpg" },
// //     { id: 5, name: "Shiba", price: 46900, age: 3, gender: "Male", weight: 30, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/640px-Taka_Shiba.jpg" }
// // ];
// export default function Detail() {
    
//     if (id) {
//         // Convert the ID to a number and find the corresponding pet
//         const petId = parseInt(id, 10);
//         const pet = petDetail.find(p => p.id === petId);

//         // Check if the pet exists
//         if (!pet) {
//             return <h2>Pet not found!</h2>;
//         }

//         return (
//             <div>
//                 <h2>{pet.name}</h2>
//                 <img src={pet.img} alt={pet.name} style={{ width: '300px', height: 'auto' }} />
//                 <p>Price: ${pet.price}</p>
//                 <p>Age: {pet.age} years</p>
//                 <p>Gender: {pet.gender}</p>
//                 <p>Weight: {pet.weight} lbs</p>
//             </div>
//         );
//     }
//     return (
//         <div>
//             {petDetail.map(pet => (
//                 <div key={pet.id}>
//                     <img src={pet.img} alt={pet.name} style={{ width: '200px', height: 'auto' }} />
//                     <h3>{pet.name}</h3>
//                     <p>Price: {pet.price} Baht</p>
//                     <p>Age: {pet.age} years</p>
//                     <p>Gender: {pet.gender}</p>
//                     <p>Weight: {pet.weight} lbs</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({ petDetail }) => {
    // Get the ID from the URL
    const { id } = useParams();

    // Check if an ID was provided
    if (id) {
        // Convert the ID to a number and find the corresponding pet
        const petId = parseInt(id, 10);
        const pet = petDetail.find(p => p.id === petId);

        // Check if the pet exists
        if (!pet) {
            return <h2>Pet not found!</h2>;
        }

        return (
            <div>
                <h2>{pet.name}</h2>
                <img src={pet.img} alt={pet.name} style={{ width: '300px', height: 'auto' }} />
                <p>Price: ${pet.price}</p>
                <p>Age: {pet.age} years</p>
                <p>Gender: {pet.gender}</p>
                <p>Weight: {pet.weight} lbs</p>
            </div>
        );
    }

    // If no ID, display all pets
    return (
        <div>
            <h2>All Pets</h2>
            {petDetail.map(pet => (
                <div key={pet.id}>
                    <h3>{pet.name}</h3>
                    <img src={pet.img} alt={pet.name} style={{ width: '100px', height: 'auto' }} />
                    <p>Price: ${pet.price}</p>
                    <p>Age: {pet.age} years</p>
                    <p>Gender: {pet.gender}</p>
                    <p>Weight: {pet.weight} lbs</p>
                </div>
            ))}
        </div>
    );
};

export default Detail;
