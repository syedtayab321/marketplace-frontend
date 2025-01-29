import React, {useState} from "react";
import { Box} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import SellerHomePage from "./SellerHomePage";
import TopBar from "../../components/TopBar";
import OrdersPage from "../Orders/OrderManagement";
import ProductsPage from "../Listings/ProductListings";
import CategoriesPage from "../Categories/Category";
import CustomersPage from "../Customers/CustomerPage";
import SalesReportPage from "../Sales/SalesReport";
import ReviewsPage from "../Reviews/ReviewsPage";

const SellerDashboard = () => {
     const [selectedSection, setSelectedSection] = useState('home');
     const handleSelect = (section) => {
        setSelectedSection(section);
      };
  return (
      <>
        <Box display="flex">
          <Sidebar onselect={handleSelect} />
          <Box ml={{ base: 0, md: '250px' }} p={5} width="100%">
            <TopBar/>
              {selectedSection === 'home' && <SellerHomePage/>}
              {selectedSection === 'orders' && <OrdersPage/>}
              {selectedSection === 'products' && <ProductsPage/>}
              {selectedSection === 'categories' && <CategoriesPage/>}
              {selectedSection === 'customers' && <CustomersPage/>}
              {selectedSection === 'sales-reports' && <SalesReportPage/>}
              {selectedSection === 'reviews' && <ReviewsPage/>}
          </Box>
        </Box>
      </>
  );
};

export default SellerDashboard;