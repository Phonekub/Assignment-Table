import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menubar from "./Menubar";
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
                <Route path="/cart" element={<Cart />} />
                <Route path="/favs" element={<Fav />} />
                <Route path="/backend" element={<Backend />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </Router>

    );
}

export default App;
