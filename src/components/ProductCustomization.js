// src/components/ProductCustomization.js
import React, { useState } from 'react';
import { Select, Row, Col, Button } from 'antd';

const { Option } = Select;

const ProductCustomization = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = () => {
    // Add logic to handle adding the customized product to the cart
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h4>Color:</h4>
          <Select value={selectedColor} onChange={setSelectedColor}>
            {product.colors.map((color) => (
              <Option key={color} value={color}>
                {color}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <h4>Size:</h4>
          <Select value={selectedSize} onChange={setSelectedSize}>
            {product.sizes.map((size) => (
              <Option key={size} value={size}>
                {size}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Button
        type="primary"
        size="large"
        style={{ marginTop: '20px' }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCustomization;
