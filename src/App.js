import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Landing-Page/LandingPage";
import { Box } from "@chakra-ui/react"; // Example: Importing Chakra's Box component
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Box bg="gray.50" minH="100vh"> {/* Using Chakra's Box for layout */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Box>
  );
}

export default App;