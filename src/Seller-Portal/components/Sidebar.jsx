import React, { useState } from "react";
import {Box, VStack, IconButton, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Text, Divider, Button, Image, useBreakpointValue} from "@chakra-ui/react";
import { FaBars, FaSignOutAlt,} from "react-icons/fa";
import logo from "./../assets/images/logo.png";
import {
  MdShoppingCart,
  MdMessage,
  MdAccountCircle,
  MdRateReview,
  MdDashboard,
  MdDirectionsCar,
  MdPeople, MdAssessment, MdCategory, MdSettings
} from "react-icons/md";

const Sidebar = ({ onselect }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeItem, setActiveItem] = useState("home");

const navitems = [
  { text: 'Dashboard', icon: MdDashboard, link: "home" },
  { text: 'Products', icon: MdDirectionsCar, link: "products" },
  { text: 'Categories', icon: MdCategory, link: "categories" },
  { text: 'Orders', icon: MdShoppingCart, link: "orders" },
  { text: 'Customers', icon: MdPeople, link: "customers" },
  { text: 'Sales Reports', icon: MdAssessment, link: "sales-reports" },
  { text: 'Messages', icon: MdMessage, link: "messages" },
  { text: 'Reviews', icon: MdRateReview, link: "reviews" },
  { text: 'Profile', icon: MdAccountCircle, link: "profile" },
  { text: 'Settings', icon: MdSettings, link: "settings" },
];

  const handleClick = (link) => {
    setActiveItem(link);
    onselect(link);
  };

  return (
    <Box>
      {isMobile && (
        <IconButton
          icon={<FaBars />}
          onClick={onOpen}
          aria-label="Open Sidebar"
          position="fixed"
          top="20px"
          left="20px"
          zIndex="1000"
          colorScheme="blackAlpha"
        />
      )}

      {!isMobile && (
        <Box
          width="270px"
          height="100vh"
          bg="black"
          color="white"
          position="fixed"
          top="0"
          left="0"
          padding="20px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          overflowY="auto"
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <Box textAlign="center" mb={6}>
            <Image src={logo} alt="Logo" mx="auto" mb={2} />
          </Box>

          <VStack spacing={6} align="flex-start">
            {navitems.map((item, index) => (
                <Button
                  className={`provider-menu-items ${activeItem === item.link ? 'activelink' : ''} bg-black text-white hover:bg-gray-800`}
                  key={index}
                  onClick={() => handleClick(item.link)}
              >
                  <item.icon size={22} className="text-white" />
                  <Text ml={3} className="text-white">{item.text}</Text>
              </Button>

            ))}
          </VStack>

          <Divider borderColor="gray.600" my={4}/>
          <Button
              colorScheme="blackAlpha"
              variant="outline"
              onClick={() => alert("Logging out")}
            display="flex"
            alignItems="center"
            w="full"
            _hover={{ bg: "gray.800" }}
          >
            <FaSignOutAlt size={20} /> <Text ml={3}>Logout</Text>
          </Button>
        </Box>
      )}

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} align="flex-start" mt={8}>
              {navitems.map((item, index) => (
                <Button
                  className={`provider-menu-items ${activeItem === item.link ? 'activelink' : ''} bg-black text-white hover:bg-gray-800`}
                  key={index}
                  onClick={() => handleClick(item.link)}>
                  <item.icon size={22} className="text-white" />
                  <Text ml={3} className="text-white">{item.text}</Text>
              </Button>

            ))}
              <Button
                colorScheme="blackAlpha"
                variant="outline"
                onClick={() => alert("Logging out")}
                display="flex"
                alignItems="center"
                w="full"
                _hover={{ bg: "gray.800" }}
              >
                <FaSignOutAlt size={20} /> <Text ml={3}>Logout</Text>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;