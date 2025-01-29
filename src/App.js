import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Landing-Page/LandingPage";
import { Box } from "@chakra-ui/react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {SellerLoginPage, SellerSignupPage} from "./Seller-Portal/pages/Auth/SellerAuth";
import SellerDashboard from "./Seller-Portal/pages/Dashboard/SellerDashboard";
import ProductListings from "./Seller-Portal/pages/Listings/ProductListings";

function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/seller-signup" element={<SellerSignupPage />} />
        <Route path="/seller-login" element={<SellerLoginPage />} />
        <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
        <Route path='/seller-product-listing' element={<ProductListings/>}/>
      </Routes>
    </Box>
  );
}

export default App;