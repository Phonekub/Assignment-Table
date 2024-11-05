// import React,{useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';

// // const [pet, setPet] = useState
//     // useEffect(() => {
//     //     const fetchItems = async () => {
//     //         try {
//     //             const response = await axios.get('http://127.0.0.1:5000/products/:id');
//     //             setPet(response.data);
//     //         } catch (error) {
//     //             console.error("Error fetching data:", error);
//     //         }
//     //     };
        
//     //     fetchItems();
//     // }, []);

// const Detail = ({ petDetail }) => {
//     // Get the ID from the URL
//     const { id } = useParams();
//     // Check if an ID was provided
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
//                 <img src={pet.img} alt={pet.name} style={{ width: '300px', height: '300px' }} />
//                 <p>Price: ${pet.price}</p>
//                 <p>Age: {pet.age} years</p>
//                 <p>Gender: {pet.gender}</p>
//                 <p>Weight: {pet.weight} lbs</p>
//             </div>
//         );
//     }

//     // If no ID, display all pets
//     return (
//         <div>
//             <h2>All Pets</h2>
//             {petDetail.map(pet => (
//                 <div key={pet.id}>
//                     <h3>{pet.name}</h3>
//                     <img src={pet.img} alt={pet.name} style={{ width: '200px', height: '200px' }} />
//                     <p>Price: ${pet.price}</p>
//                     <p>Age: {pet.age} years</p>
//                     <p>Gender: {pet.gender}</p>
//                     <p>Weight: {pet.weight} lbs</p>
//                 </div>
//             ))}
//         </div>
//     );

// };
// export default Detail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = ({ petDetail }) => {
    const { id } = useParams(); // Get the ID from the URL
    const [pet, setPet] = useState(null); // State for the fetched pet data

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

    // If an ID is provided and a pet is found, display its details
    if (id) {
        if (pet) {
            return (
                <div>
                    <h2>{pet.name}</h2>
                    <img src={pet.img} alt={pet.name} style={{ width: '300px', height: '300px' }} />
                    <p>Price: ${pet.price}</p>
                    <p>Age: {pet.age} years</p>
                    <p>Gender: {pet.gender}</p>
                    <p>Weight: {pet.weight} lbs</p>
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
                    <Link to={`/detail/${pet.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default Detail;