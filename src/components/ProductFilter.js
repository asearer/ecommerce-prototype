// src/components/ProductFilter.js
import React from 'react';
import { Slider, Checkbox, Row, Col } from 'antd';

const ProductFilter = ({ onFilterChange }) => {
  return (
    <div>
      <h3>Filter by Price</h3>
      <Slider
        range
        defaultValue={[0, 1000]}
        max={2000}
        onChange={(value) => onFilterChange({ price: value })}
      />
      <h3>Filter by Category</h3>
      <Row>
        <Col span={12}>
          <Checkbox onChange={(e) => onFilterChange({ category: 'electronics' })}>
            Electronics
          </Checkbox>
        </Col>
        <Col span={12}>
          <Checkbox onChange={(e) => onFilterChange({ category: 'fashion' })}>
            Fashion
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default ProductFilter;
