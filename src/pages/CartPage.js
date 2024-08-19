// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { Box, Container, Text, Button, List, ListItem } from '@chakra-ui/react';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []); // Default to an empty array if undefined
  const dispatch = useDispatch();

  return (
    <Container maxW="container.sm" p={4}>
      <Text fontSize="2xl" fontWeight="bold" mt={8} mb={4} textAlign="center">
        Your Cart
      </Text>
      {cartItems.length === 0 ? (
        <Text textAlign="center">Your cart is empty.</Text>
      ) : (
        <List spacing={3}>
          {cartItems.map((item) => (
            <ListItem
              key={item.id}
              p={3}
              borderWidth={1}
              borderRadius="md"
              bg="white"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(255, 255, 255, 0.9)"
              _hover={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)" }}
            >
              <Text fontSize="md" fontWeight="bold">{item.title}</Text>
              <Text color="gray.600" fontSize="sm">${item.price}</Text>
              <Button colorScheme="red" mt={2} size="sm" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default CartPage;






