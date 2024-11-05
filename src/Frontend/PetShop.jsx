import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menubar from "./Menubar";
// import Home from "./Home"; // แก้ไขให้ถูกต้อง
// import About from "./About"; // ต้องตรวจสอบให้แน่ใจว่าใช้ไฟล์ที่ถูกต้อง
// import Services from "./Services"; // แก้ไขเส้นทางถ้าจำเป็น
// import Contact from "./Contact"; // แก้ไขเส้นทางถ้าจำเป็น
import Cart from "./Cart"; // เพิ่มถ้าคุณมีหน้า Cart
import Fav from "./Fav"; // เพิ่มถ้าคุณมีหน้า Settings
import Backend from "./Backend";
import Home from "./Home";
import Detail from "./Detail";

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
                <Route path="/favs" element={<Fav />} />
                <Route path="/backend" element={<Backend />} />
                <Route path="/detail/:id" element={<Detail petDetail={petDetail}/>} />
                {/* <Route path="/detail" element={<Detail petDetail={petDetail}/>} /> */}
            </Routes>
        </Router>

    );
}

export default App;
