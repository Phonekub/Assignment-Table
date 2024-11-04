import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Product() {
    const [product, setProduct] = useState([]);
    const myInputRef1 = React.createRef();
    const myInputRef2 = React.createRef();
    const myInputRef3 = React.createRef();
    const myInputRef4 = React.createRef();
    const myInputRef5 = React.createRef();
        
    useEffect(() => {
        console.log("request to api");
        axios.get("http://127.0.0.1:5000/products")
            .then(response => setProduct(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const showProducts = product.map(item => (
        <tr key={item._id}>
            <td>{item._id}</td>
            <td><img src={item.img} alt={item.name} /></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>{item.gender}</td>
            <td>{item.detail}</td>
        </tr>
    ));
    
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>img</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Type</td> 
                        <td>Gender</td> 
                        <td>Detail</td> 
                        <td>Option</td> 
                    </tr>
                </thead>
                <tbody>{showProducts}</tbody>
            </table>
        </div>
    );
}
