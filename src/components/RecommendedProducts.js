// src/components/RecommendedProducts.js
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ProductCard from './ProductCard';
import { fetchProducts } from '../services/fakeStoreApi';

const RecommendedProducts = ({ userId }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const loadRecommendedProducts = async () => {
      try {
        const data = await fetchProducts();
        setRecommendedProducts(data.slice(0, 4)); // Example: Fetch first 4 products
      } catch (error) {
        console.error('Failed to load recommended products:', error);
      }
    };

    loadRecommendedProducts();
  }, [userId]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Recommended for You</h3>
      <Row gutter={[16, 16]}>
        {recommendedProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecommendedProducts;
