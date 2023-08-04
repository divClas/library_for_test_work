import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import BookCard from './components/LibraryanPanel';
import ClientPanel from './components/ClientPanel';
import AdminPanel from "./components/AdminPanel";
import Routes from './components/Routes'
import {BrowserRouter} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
