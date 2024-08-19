// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => (
  <Header style={{ background: '#fff', padding: 0 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo">
        <Link to="/">E-commerce Prototype</Link>
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/cart">
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: '20px' }} />
            </Badge>
            Cart
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  </Header>
);

export default AppHeader;

