import React, { useState } from "react";
import {Box, Button, IconButton, Input, Table, Thead, Tbody, Tr, Th, Td,
  HStack, Badge, useColorModeValue, Tooltip, Text } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaEye } from "react-icons/fa";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Brake Pads", price: "$100", category: "Brakes", brand: "Brembo", stock: 20, status: "Available" },
    { id: 2, name: "Engine Oil", price: "$50", category: "Lubricants", brand: "Castrol", stock: 15, status: "Available" },
    { id: 3, name: "Air Filter", price: "$30", category: "Filters", brand: "Bosch", stock: 0, status: "Out of Stock" },
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p={6} maxW="1400px" mx="auto" boxShadow="lg" borderRadius="md">
      <HStack justify="space-between" mb={6}>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          width={{ base: "100%", md: "40%" }}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="sm"
          leftIcon={<FaSearch />}
        />
        <Button leftIcon={<FaPlus />} colorScheme="teal" _hover={{ bg: "teal.600" }}>
          Add Product
        </Button>
      </HStack>

      <Table variant="simple" colorScheme="teal" boxShadow="md">
        <Thead>
          <Tr bg="teal.500">
            <Th color="white">Product Name</Th>
            <Th color="white">Category</Th>
            <Th color="white">Brand</Th>
            <Th color="white">Price</Th>
            <Th color="white">Stock</Th>
            <Th color="white">Status</Th>
            <Th color="white">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredProducts.map((product) => (
            <Tr key={product.id}>
              <Td fontWeight="bold">{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>{product.brand}</Td>
              <Td fontWeight="bold">{product.price}</Td>
              <Td>
                {product.stock > 0 ? (
                  <Text color="green.500" fontWeight="bold">{product.stock} in stock</Text>
                ) : (
                  <Text color="red.500" fontWeight="bold">Out of stock</Text>
                )}
              </Td>
              <Td>
                <Badge colorScheme={product.status === "Available" ? "green" : "red"}>
                  {product.status}
                </Badge>
              </Td>
              <Td>
                <HStack spacing={2}>
                  <Tooltip label="View Details" fontSize="sm">
                    <IconButton icon={<FaEye />} colorScheme="gray" aria-label="View" />
                  </Tooltip>
                  <Tooltip label="Edit Product" fontSize="sm">
                    <IconButton icon={<FaEdit />} colorScheme="blue" aria-label="Edit" />
                  </Tooltip>
                  <Tooltip label="Delete Product" fontSize="sm">
                    <IconButton icon={<FaTrash />} colorScheme="red" aria-label="Delete" />
                  </Tooltip>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductsPage;
