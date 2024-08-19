// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import Checkout from './components/Checkout';

const { Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>asearerdev ©2024</Footer>
    </Layout>
  </Router>
);

export default App;




