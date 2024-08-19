// src/pages/AboutUs.js
import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => (
  <div style={{ padding: '20px' }}>
    <Title>About Us</Title>
    <Paragraph>
      We believe in sustainability and ethical practices. All our products are sourced
      with care for the environment and our workers. Join us in making the world a better place.
    </Paragraph>
  </div>
);

export default AboutUs;
