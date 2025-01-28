import React from 'react';
import MainPage from "./Pages/Main-Page";
import AboutPage from "./Pages/About";
import ServicesPage from "./Pages/Services";
import Footer from "./Pages/Footer";
import AppNavbar from "./Components/Navbar";

const LandingPage = () => (
    <>
        <AppNavbar />
        <MainPage/>
        <AboutPage/>
        <ServicesPage/>
        <Footer/>
    </>
);

export default LandingPage;