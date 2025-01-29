import React from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { FaCarBattery, FaCogs, FaTachometerAlt, FaCar, FaLightbulb, FaOilCan, FaTruckPickup, FaToolbox } from "react-icons/fa";

const categories = [
  { name: "Brakes & Rotors", icon: FaTachometerAlt },
  { name: "Engine Parts", icon: FaCogs },
  { name: "Tires & Wheels", icon: FaCar },
  { name: "Suspension & Steering", icon: FaTruckPickup },
  { name: "Batteries", icon: FaCarBattery },
  { name: "Lighting & Electronics", icon: FaLightbulb },
  { name: "Oil & Fluids", icon: FaOilCan },
  { name: "Exterior Accessories", icon: FaToolbox },
];

const CategoriesPage = () => {
  const textColor = useColorModeValue("gray.700", "gray.100");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.100", "gray.700");
  const cardShadow = useColorModeValue("0 4px 6px rgba(0, 0, 0, 0.1)", "0 4px 6px rgba(0, 0, 0, 0.4)");

  return (
    <Box
      maxW="1400px"
      mx="auto"
      py={10}
      px={6}
      bgGradient="linear(to-br, #1c1c1c, #2a2a2a)"
      minH="100vh"
      color="white"
    >
      <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" textAlign="center" mb={10}>
        Explore Our Categories
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
        {categories.map((category, index) => (
          <Box
            key={index}
            bg={cardBg}
            borderRadius="lg"
            overflow="hidden"
            boxShadow={cardShadow}
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              bg: cardHoverBg,
            }}
            cursor="pointer"
            p={6}
            textAlign="center"
          >
            <Icon as={category.icon} w={20} h={20} color="teal.400" mb={4} />
            <VStack spacing={2}>
              <Text fontSize="xl" fontWeight="bold" color={textColor}>
                {category.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Discover premium-quality {category.name.toLowerCase()}.
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CategoriesPage;
