import React from 'react';
import { useToast, Box, Text } from '@chakra-ui/react';

const ErrorToast = ({ title, description }) => {
  const toast = useToast();

  toast({
    duration: 5000,
    isClosable: true,
    position: 'top',
    render: ({ onClose }) => (
      <Box
        display="flex"
        alignItems="center"
        bg="#dc3545"
        color="white"
        borderRadius="8px"
        p={4}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        onClick={onClose}
        cursor="pointer"
      >
        <Box mr={3}>❌</Box>
        <Box>
          <Text fontWeight="bold">{title}</Text>
          <Text>{description}</Text>
        </Box>
      </Box>
    ),
  });

  return null;
};

export default ErrorToast;
