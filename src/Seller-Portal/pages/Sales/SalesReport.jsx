import React from "react";
import {Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Badge, HStack,
    useColorModeValue, useBreakpointValue, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText,
    StatArrow, Tooltip, Input,
} from "@chakra-ui/react";
import { FaDownload, FaPrint, FaSearch } from "react-icons/fa";

const salesData = [
  { id: "#001", date: "2025-01-10", product: "Laptop", quantity: 10, amount: "$1500", status: "Completed" },
  { id: "#002", date: "2025-01-12", product: "Phone", quantity: 5, amount: "$2000", status: "Completed" },
  { id: "#003", date: "2025-01-14", product: "Tablet", quantity: 7, amount: "$1400", status: "Pending" },
  { id: "#004", date: "2025-01-16", product: "Monitor", quantity: 3, amount: "$900", status: "Cancelled" },
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

const SalesReportPage = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const boxShadow = useColorModeValue("lg", "2xl");
  const tableHeadBg = useColorModeValue("gray.100", "gray.700");
  const reportSummaryBg = useColorModeValue("gray.50", "gray.900");

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
        Sales Report
      </Heading>

      {/* Search Bar */}
      <Box mb={6} display="flex" justifyContent="center">
        <HStack spacing={4}>
          <Input
            placeholder="Search by Product ID or Name"
            borderRadius="lg"
            boxShadow="md"
            maxW="500px"
            minW="300px"
          />
          <Button leftIcon={<FaSearch />} colorScheme="blue" variant="outline" size="sm">
            Search
          </Button>
        </HStack>
      </Box>

      {/* Report Summary */}
      <Grid templateColumns={gridTemplateColumns} gap={6} mb={8}>
        <GridItem>
          <Box p={4} bg={reportSummaryBg} boxShadow={boxShadow} borderRadius="lg">
            <Stat>
              <StatLabel>Total Sales</StatLabel>
              <StatNumber>$5,800</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                10% increase
              </StatHelpText>
            </Stat>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={4} bg={reportSummaryBg} boxShadow={boxShadow} borderRadius="lg">
            <Stat>
              <StatLabel>Total Orders</StatLabel>
              <StatNumber>25</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                5% increase
              </StatHelpText>
            </Stat>
          </Box>
        </GridItem>
        <GridItem>
          <Box p={4} bg={reportSummaryBg} boxShadow={boxShadow} borderRadius="lg">
            <Stat>
              <StatLabel>Completed Orders</StatLabel>
              <StatNumber>20</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                15% increase
              </StatHelpText>
            </Stat>
          </Box>
        </GridItem>
      </Grid>

      {/* Sales Data Table */}
      <Box overflowX="auto" boxShadow={boxShadow} borderRadius="lg" p={4} bg={bgColor}>
        <Table variant="simple">
          <Thead bg={tableHeadBg}>
            <Tr>
              <Th>Order ID</Th>
              <Th>Product</Th>
              <Th>Quantity</Th>
              <Th>Amount</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {salesData.map((sale) => (
              <Tr key={sale.id}>
                <Td fontWeight="bold">{sale.id}</Td>
                <Td>{sale.product}</Td>
                <Td>{sale.quantity}</Td>
                <Td>{sale.amount}</Td>
                <Td>{sale.date}</Td>
                <Td>
                  <Badge colorScheme={getStatusColor(sale.status)} px={3} py={1} borderRadius="full" fontSize="sm">
                    {sale.status}
                  </Badge>
                </Td>
                <Td textAlign="center">
                  <HStack spacing={3} justify="center">
                    <Tooltip label="Download Report" hasArrow>
                      <Button leftIcon={<FaDownload />} colorScheme="blue" variant="outline" size="sm">
                        Download
                      </Button>
                    </Tooltip>
                    <Tooltip label="Print Report" hasArrow>
                      <Button leftIcon={<FaPrint />} colorScheme="green" variant="outline" size="sm">
                        Print
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

export default SalesReportPage;
