import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  HStack,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FaSearch, FaEye, FaCheckCircle, FaTrash } from "react-icons/fa";

const orders = [
  { id: "#12345", customer: "John Doe", amount: "$150.00", status: "Pending" },
  { id: "#12346", customer: "Jane Smith", amount: "$200.00", status: "Completed" },
  { id: "#12347", customer: "Mike Johnson", amount: "$320.00", status: "Cancelled" },
  { id: "#12348", customer: "Emily Davis", amount: "$410.00", status: "Pending" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "green";
    case "Pending":
      return "yellow";
    case "Cancelled":
      return "red";
    default:
      return "gray";
  }
};

const OrdersPage = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const boxShadow = useColorModeValue("lg", "2xl");
  const tableHeadBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading
        mb={6}
        textAlign="center"
        fontSize="3xl"
        bgGradient="linear(to-r, blue.400, cyan.400)"
        bgClip="text"
      >
        Order Management
      </Heading>

      {/* Search Bar */}
      <InputGroup maxW="500px" mx="auto" mb={6}>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaSearch} color="gray.500" />
        </InputLeftElement>
        <Input type="text" placeholder="Search orders..." borderRadius="lg" boxShadow="md" />
      </InputGroup>

      <Box overflowX="auto" boxShadow={boxShadow} borderRadius="lg" p={4} bg={bgColor}>
        <Table variant="simple">
          <Thead bg={tableHeadBg}>
            <Tr>
              <Th>Order ID</Th>
              <Th>Customer</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr
                key={order.id}
                _hover={{ bg: "gray.50", transition: "0.2s ease-in-out", transform: "scale(1.02)" }}
              >
                <Td fontWeight="bold">{order.id}</Td>
                <Td>{order.customer}</Td>
                <Td>{order.amount}</Td>
                <Td>
                  <Badge
                    colorScheme={getStatusColor(order.status)}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    {order.status}
                  </Badge>
                </Td>
                <Td textAlign="center">
                  <HStack spacing={3} justify="center">
                    <Tooltip label="View Details" hasArrow>
                      <Button leftIcon={<FaEye />} colorScheme="blue" size="sm" variant="outline">
                        View
                      </Button>
                    </Tooltip>
                    <Tooltip
                      label={
                        order.status === "Pending"
                          ? "Confirm Order"
                          : "Completed & Cancelled Orders Cannot Be Confirmed"
                      }
                      hasArrow
                    >
                      <Button
                        leftIcon={<FaCheckCircle />}
                        colorScheme="green"
                        size="sm"
                        variant="solid"
                        isDisabled={order.status !== "Pending"}
                      >
                        Confirm
                      </Button>
                    </Tooltip>
                    <Tooltip label="Delete Order" hasArrow>
                      <Button leftIcon={<FaTrash />} colorScheme="red" size="sm" variant="ghost">
                        Delete
                      </Button>
                    </Tooltip>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default OrdersPage;
