import React from 'react'
import Home from './Home.js'
import Product from './Product.js'
import KVP from './KVP.js'
import Navbar from './Navbar.js'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UI from './UI.js'
import IA from './IA.js'
import ID from './ID.js'
import Money from './Money.js'
import Pivot from './Pivot.js'

function App() {
  return (
      <div className="app">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
        </style>
        <Router>
        <Navbar />
            <Routes>
                <Route path="/kvp" element={<KVP />} />
                <Route path="/product" element={<Product />} />
                <Route path="/ui" element={<UI />} />
                <Route path="/ia" element={<IA />} />
                <Route path="/id" element={<ID />} />
                <Route path="/costs_and_revenue" element={<Money />} />
                <Route path="/pivot" element={<Pivot />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
