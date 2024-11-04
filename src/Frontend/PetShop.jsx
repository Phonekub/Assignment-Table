import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menubar from "./Menubar";
// import Home from "./Home"; // แก้ไขให้ถูกต้อง
// import About from "./About"; // ต้องตรวจสอบให้แน่ใจว่าใช้ไฟล์ที่ถูกต้อง
// import Services from "./Services"; // แก้ไขเส้นทางถ้าจำเป็น
// import Contact from "./Contact"; // แก้ไขเส้นทางถ้าจำเป็น
import Cart from "./Cart"; // เพิ่มถ้าคุณมีหน้า Cart
import Setting from "./Setting"; // เพิ่มถ้าคุณมีหน้า Settings
import Backend from "./Backend";
import Home from "./Home";
import Detail from "./Detail";

// const petDetail = [
//     { id: 0, name: "Corgi", price: 30000, age: 2, gender: "Male", weight: 20, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pembroke_Corgi_Image_001.jpg/1280px-Pembroke_Corgi_Image_001.jpg" },
//     { id: 1, name: "Poodle", price: 50000, age: 4, gender: "Female", weight: 30, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Standard_poodle_apricot.jpg/1024px-Standard_poodle_apricot.jpg" },
//     { id: 2, name: "Chihuahua", price: 32900, age: 2, gender: "Female", weight: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Degaen.jpg/220px-Degaen.jpg" },
//     { id: 3, name: "Pug", price: 54000, age: 5, gender: "Male", weight: 14, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fawn_pug_2.5year-old.JPG/1280px-Fawn_pug_2.5year-old.JPG" },
//     { id: 4, name: "Syberian Husky", price: 99900, age: 5, gender: "Female", weight: 30, img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Siberian-husky.jpg" },
//     { id: 5, name: "Shiba", price: 46900, age: 3, gender: "Male", weight: 30, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/640px-Taka_Shiba.jpg" }
// ];

function App() {
    return (
        <Router>
            <Menubar />
            <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} /> */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/backend" element={<Backend />} />
                {/* <Route path="/detail/id:" element={<Detail petDetail={petDetail}/>} /> */}
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </Router>

    );
}

export default App;
