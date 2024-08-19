import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import ProductList from './components/ProductList';

const App = () => (
  <Router>
    <AppHeader />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  </Router>
);

export default App;




