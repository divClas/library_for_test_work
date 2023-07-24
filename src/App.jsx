import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import BookCard from './components/books';
import Footer from './components/Footer';
import ClientPanel from './components/ClientPanel';
import AdminPanel from "./components/AdminPanel";
// 3 роли:
//     Администратор:++-
//         Может добавлять, редактировать и удалять пользователей.++-
//     Библиотекарь: ++++
//         Может добавлять и удалять книги.  ++++
//     Клиент: ++++
//         Может видеть список книг; ++++
//         Искать по автору, жанру, издателю. ++++

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <BookCard />
      <AdminPanel />

      {/* <Footer /> */}
    </div>

  );
}

export default App;
