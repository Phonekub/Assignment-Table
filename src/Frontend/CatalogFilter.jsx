import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatalogFilter = () => {
    const [items, setItems] = useState([]); // สถานะสำหรับเก็บข้อมูลจาก API
    const [filter, setFilter] = useState('all'); // สถานะสำหรับตัวกรอง
    const [loading, setLoading] = useState(true); // สถานะสำหรับแสดงสถานะการโหลด

    // ดึงข้อมูลจาก API เมื่อคอมโพเนนต์ถูกโหลดครั้งแรก
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://api.example.com/items'); // URL ของ API ของคุณ
                setItems(response.data); // กำหนดข้อมูลให้กับ items
                setLoading(false); // เปลี่ยนสถานะการโหลดเมื่อดึงข้อมูลเสร็จ
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // เปลี่ยนสถานะการโหลดแม้มีข้อผิดพลาด
            }
        };
        
        fetchItems();
    }, []);

    // กรองรายการตามตัวกรองที่เลือก
    const filteredItems = items.filter(item => filter === 'all' || item.category === filter);

    return (
        <div>
            <h2>Catalog Filter</h2>

            {/* ปุ่มตัวกรอง */}
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('dog')}>Dog</button>
                <button onClick={() => setFilter('cat')}>Cat</button>
                <button onClick={() => setFilter('bra bra')}>Bra Bra</button>
            </div>

            {/* แสดงสถานะการโหลดหรือรายการที่ผ่านการกรอง */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {filteredItems.map(item => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Category: {item.category}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CatalogFilter;
