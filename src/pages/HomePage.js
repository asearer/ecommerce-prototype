// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/fakeStoreApi';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load products:', error);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <Spin size="large" style={{ display: 'block', margin: 'auto' }} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;


