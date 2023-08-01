import React from "react";
import AdminPanel from "./AdminPanel";
import BookCard from "./books";
import ClientPanel from "./ClientPanel";

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
                    <li><Link to="/ClientPanel">Главная</Link></li>

                </ul>
            </div>
            <Routes>
                <Route path="/AdminPanel" element={<AdminPanel />} />
                <Route path="/books" element={<BookCard />} />
                <Route path="/ClientPanel" element={<ClientPanel />} />

            </Routes>
            <div className="presentation"></div>
        </header>
    );
}

export default Navbar;