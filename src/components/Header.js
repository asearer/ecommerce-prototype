
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';

const Header = () => (
  <Box
    as="header"
    bg="gray.100"
    color="gray.800"
    p={4}
    boxShadow="0 4px 8px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(255, 255, 255, 0.3)"
    borderRadius="md"
  >
    <Flex align="center" justify="space-between" wrap="wrap">
      <Heading size="lg" mb={{ base: 2, md: 0 }}>
        E-Commerce Prototype
      </Heading>
      <Flex>
        <Button as={Link} to="/" colorScheme="blue" variant="link" mr={4}>
          Home
        </Button>
        <Button as={Link} to="/cart" colorScheme="blue" variant="link" mr={4}>
          Cart
        </Button>
        
        <Button as={Link} to="/profile" colorScheme="blue" variant="link">
          Profile
        </Button>
      </Flex>
    </Flex>
  </Box>
);

export default Header;







