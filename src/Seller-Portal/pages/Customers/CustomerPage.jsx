import React from "react";
import {Box, Heading, Button, Badge, Input, InputGroup,
    InputLeftElement, Icon, HStack, useColorModeValue, Avatar, Text, Grid, GridItem, Flex,
    Tooltip, useBreakpointValue,} from "@chakra-ui/react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const customers = [
  { id: "#101", name: "John Doe", email: "john.doe@example.com", status: "Active" },
  { id: "#102", name: "Jane Smith", email: "jane.smith@example.com", status: "Inactive" },
  { id: "#103", name: "Mike Johnson", email: "mike.johnson@example.com", status: "Active" },
  { id: "#104", name: "Emily Davis", email: "emily.davis@example.com", status: "Active" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "green";
    case "Inactive":
      return "gray";
    default:
      return "blue";
  }
};

const CustomersPage = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const boxShadow = useColorModeValue("lg", "2xl");
  const tableHeadBg = useColorModeValue("gray.100", "gray.700");
  const gridTemplateColumns = useBreakpointValue({ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" });

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading
        mb={6}
        textAlign="center"
        fontSize="3xl"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
      >
        Customer Management
      </Heading>

      {/* Search Bar */}
      <InputGroup maxW="500px" mx="auto" mb={6}>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaSearch} color="gray.500" />
        </InputLeftElement>
        <Input type="text" placeholder="Search customers..." borderRadius="lg" boxShadow="md" />
      </InputGroup>

      {/* Customer Grid */}
      <Grid templateColumns={gridTemplateColumns} gap={6}>
        {customers.map((customer) => (
          <GridItem
            key={customer.id}
            bg={bgColor}
            p={6}
            boxShadow={boxShadow}
            borderRadius="lg"
            transition="0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)", bg: "gray.50" }}
          >
            <Flex direction="column" align="center" justify="center" textAlign="center">
              <Avatar name={customer.name} size="xl" mb={4} />
              <Text fontSize="lg" fontWeight="bold">{customer.name}</Text>
              <Text color="gray.500">{customer.email}</Text>
              <Badge colorScheme={getStatusColor(customer.status)} px={4} py={1} mt={2} borderRadius="full">
                {customer.status}
              </Badge>

              {/* Actions */}
              <HStack spacing={4} justify="center" mt={4}>
                <Tooltip label="View Details" hasArrow>
                  <Button leftIcon={<FaEye />} colorScheme="blue" variant="outline" size="sm">
                    View
                  </Button>
                </Tooltip>
                <Tooltip label="Edit Customer" hasArrow>
                  <Button leftIcon={<FaEdit />} colorScheme="yellow" variant="outline" size="sm">
                    Edit
                  </Button>
                </Tooltip>
                <Tooltip label="Delete Customer" hasArrow>
                  <Button leftIcon={<FaTrash />} colorScheme="red" variant="outline" size="sm">
                    Delete
                  </Button>
                </Tooltip>
              </HStack>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomersPage;
