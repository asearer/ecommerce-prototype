// src/components/CustomerProfile.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text, Divider } from '@chakra-ui/react';
import { updateUser } from './userSlice'; // Import your user update action

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    address: user.address,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  return (
    <Box padding={5} maxW="1200px" mx="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Customer Profile</Text>
      
      <Stack spacing={4} mb={6}>
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
          <Text fontSize="lg" fontWeight="semibold" mb={2}>Personal Information</Text>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb={3}>
              <FormLabel>Name</FormLabel>
              <Input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name"
              />
            </FormControl>
            <FormControl id="email" mb={3}>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email"
              />
            </FormControl>
            <FormControl id="address" mb={3}>
              <FormLabel>Address</FormLabel>
              <Input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                placeholder="Your Address"
              />
            </FormControl>
            <Button colorScheme="teal" type="submit">Update Profile</Button>
          </form>
        </Box>
        
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
          <Text fontSize="lg" fontWeight="semibold" mb={2}>Order History</Text>
          {user.orders.length === 0 ? (
            <Text>No orders found.</Text>
          ) : (
            <Stack spacing={3}>
              {user.orders.map((order) => (
                <Box key={order.id} p={3} borderWidth="1px" borderRadius="md" bg="gray.50">
                  <Text fontWeight="bold">Order ID: {order.id}</Text>
                  <Text>Date: {new Date(order.date).toLocaleDateString()}</Text>
                  <Text>Total: ${order.total.toFixed(2)}</Text>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default CustomerProfile;
