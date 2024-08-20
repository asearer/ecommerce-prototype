// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice'; // Ensure the correct import path
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Divider,
  Stack,
} from '@chakra-ui/react';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box padding={5} maxW="1200px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Stack spacing={4}>
          {cart.map(item => (
            <Flex
              key={item.id}
              align="center"
              p={4}
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
              boxShadow="md"
              bg="white"
            >
              <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" mr={4} />
              <Box flex="1">
                <Text fontSize="lg" fontWeight="semibold">{item.name}</Text>
                <Text>Price: ${item.price.toFixed(2)}</Text>
                <Text>Quantity: {item.quantity}</Text>
              </Box>
              <Button colorScheme="red" onClick={() => handleRemove(item.id)}>Remove</Button>
            </Flex>
          ))}
          <Divider my={4} />
          <Text fontSize="xl" fontWeight="bold">Total: ${totalAmount.toFixed(2)}</Text>
          <Button colorScheme="teal" mt={4}>Proceed to Checkout</Button>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;


