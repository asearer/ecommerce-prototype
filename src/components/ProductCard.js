// src/components/ProductCard.js
import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`}>
    <Card
      hoverable
      style={{ width: 240, margin: '10px' }}
      cover={<img alt={product.title} src={product.image} style={{ height: '300px', objectFit: 'contain' }} />}
    >
      <Meta title={product.title} description={`$${product.price}`} />
    </Card>
  </Link>
);

export default ProductCard;


