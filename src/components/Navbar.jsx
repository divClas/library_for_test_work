import React from "react";
import AdminPanel from "./AdminPanel";
import BookCard from "./books";

import { Routes, Route, Link } from "react-router-dom";

import './../App.css';
const Navbar = () => {
    
    return (
        <header>
            <div className="logo">
                <span>
                    LIBRARY
                </span>
                <ul className="nav">
                    <li><Link to="AdminPanel">Админ</Link></li>
                    <li><Link to="/books">библиотекарь</Link></li>
                    <li><Link to="/Navbar">Главная</Link></li>

                </ul>
            </div>
            <Routes>
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/AdminPanel" element={<AdminPanel />} />
                <Route path="/books" element={<BookCard />} />
            </Routes>
            <div className="presentation"></div>
        </header>
    );
}

export default Navbar;