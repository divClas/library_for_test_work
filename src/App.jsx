import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import BookCard from './components/books';
import ClientPanel from './components/ClientPanel';
import AdminPanel from "./components/AdminPanel";

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
      </div>
    </Provider>

  );
}

export default App;
