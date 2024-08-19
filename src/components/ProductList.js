// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/fakeStoreApi';
import { Grid, Box, Image, Text, Button } from '@chakra-ui/react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4} p={4}>
      {products.map((product) => (
        <Box
          key={product.id}
          bg="white"
          borderRadius="md"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.9)"
          p={3}
          transition="all 0.2s"
          _hover={{ boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)", transform: "translateY(-2px)" }}
        >
          <Image src={product.image} alt={product.title} boxSize="150px" objectFit="cover" borderRadius="md" mx="auto" />
          <Box mt={2}>
            <Text fontSize="md" fontWeight="bold" noOfLines={2}>{product.title}</Text>
            <Text color="gray.600" fontSize="sm">${product.price}</Text>
            <Button as={Link} to={`/product/${product.id}`} colorScheme="blue" mt={2} size="sm">
              View Details
            </Button>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductList;









