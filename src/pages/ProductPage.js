// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../services/fakeStoreApi';
import { addToCart } from '../actions/cartActions';
import { Box, Image, Text, Button, Container } from '@chakra-ui/react';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product:', error);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  return (
    <Container maxW="container.sm" p={4}>
      <Box
        borderRadius="md"
        bg="white"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.9)"
        p={4}
      >
        <Image
          src={product.image}
          alt={product.title}
          boxSize="250px"
          mx="auto"
          objectFit="cover"
          borderRadius="md"
        />
        <Box p={4}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">{product.title}</Text>
          <Text mt={2} textAlign="center">{product.description}</Text>
          <Text mt={4} fontSize="lg" fontWeight="bold" textAlign="center">${product.price}</Text>
          <Button
            colorScheme="blue"
            mt={4}
            display="block"
            mx="auto"
            size="md"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;














