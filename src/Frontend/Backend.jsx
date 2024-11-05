import React, { useState, useEffect } from "react";
import axios from "axios";
import './Backend.css';

export default function Product() {
    const [product, setProduct] = useState([]);
    const myInputRef1 = React.createRef();
    const myInputRef2 = React.createRef();
    const myInputRef3 = React.createRef();
    const myInputRef4 = React.createRef();
    const myInputRef5 = React.createRef();
    const myInputRef6 = React.createRef();
        
    useEffect(() => {
        console.log("request to api");
        axios.get("http://127.0.0.1:5000/products")
            .then(response => setProduct(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    const onAddProduct = () => {
        const data = {
            name: myInputRef1.current.value,
            price: myInputRef2.current.value,
            img: myInputRef3.current.value,
            type: myInputRef4.current.value,
            detail: myInputRef5.current.value,
            gender: myInputRef6.current.value,
        };
        const names = myInputRef1.current.value;
        const price = myInputRef2.current.value;
        const img = myInputRef3.current.value;
        const type = myInputRef4.current.value;
        const detail = myInputRef5.current.value;
        const gender = myInputRef6.current.value;
        if (names !== "" && price !== "" && img !== "" && type !== "" && detail !== "" && gender !== "") {
            axios.post("http://127.0.0.1:5000/products", data)
                .then(response => {
                    setProduct(response.data);
                });
            myInputRef1.current.value = "";
            myInputRef2.current.value = "";
            myInputRef3.current.value = "";
            myInputRef4.current.value = "";
            myInputRef5.current.value = "";
            myInputRef6.current.value = "";
        }
    };

    const onDelete = (id) => {
        const confirmDelete = window.confirm("Delete ID : " + id);
        if (confirmDelete) {
            axios.delete("http://127.0.0.1:5000/products/" + id)
                .then(response => {
                    setProduct(response.data);
                });
        }
    };

    const onUpdate = (id) => {
        const confirmUpdate = window.confirm("Replace ID : " + id);
        if (confirmUpdate) {
            const newData = {
                name: myInputRef1.current.value || product.find(item => item._id === id).name,
                price: myInputRef2.current.value || product.find(item => item._id === id).price,
                img: myInputRef3.current.value || product.find(item => item._id === id).img,
                type: myInputRef4.current.value || product.find(item => item._id === id).type,
                detail: myInputRef5.current.value || product.find(item => item._id === id).detail,
                gender: myInputRef6.current.value || product.find(item => item._id === id).gender,
            };
            const { name, price, img, type, detail } = newData;
        
            if (name !== "" && price !== "" && img !== "" && type !== "" && detail !== "") {
                axios.put("http://127.0.0.1:5000/products/" + id, newData)
                    .then(response => {
                        setProduct(response.data);
                    })
                    .catch(error => {
                        console.error('Error updating product:', error);
                    });
        
                myInputRef1.current.value = "";
                myInputRef2.current.value = "";
                myInputRef3.current.value = "";
                myInputRef4.current.value = "";
                myInputRef5.current.value = "";
                myInputRef6.current.value = "";
            }
        }
    };

    const showProducts = product.map(item => (
        <tr key={item._id}>
            <td>{item._id}</td>
            <td><img src={item.img} alt={item.name} /></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>{item.gender}</td>
            <td>{item.detail}</td>
            <td>
                <button className="delete" onClick={() => onDelete(item._id)}>Delete</button>&nbsp;&nbsp;
                <button onClick={() => onUpdate(item._id)}>Replace</button>
                </td>
        </tr>
    ));
    
    return (
        <div className="bgb">
            Product Name : <input type="text" name='product_name' ref={myInputRef1} /><br />
            Price : <input type="text" name='product_price' ref={myInputRef2} /><br />
            Link img : <input type="text" name='product_img' ref={myInputRef3} /><br />
            Type : <input type="text" name='product_type' ref={myInputRef4} /><br />
            Detail : <input type="text" name='product_detail' ref={myInputRef5} /><br />
            Gender : <input type="text" name='product_gender' ref={myInputRef6} /><br />
            <button onClick={onAddProduct}>Add</button>
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
