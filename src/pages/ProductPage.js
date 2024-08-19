// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Spin } from 'antd';
import { fetchProductById } from '../services/fakeStoreApi';

const { Title, Paragraph } = Card;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load product:', error);
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <Spin size="large" style={{ display: 'block', margin: 'auto' }} />;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Card style={{ padding: '20px' }}>
      <Title>{product.title}</Title>
      <img src={product.image} alt={product.title} style={{ width: '100%', maxWidth: '300px' }} />
      <Paragraph>{product.description}</Paragraph>
      <Paragraph>
        <strong>Price: ${product.price}</strong>
      </Paragraph>
      <Button type="primary" size="large">
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductPage;


