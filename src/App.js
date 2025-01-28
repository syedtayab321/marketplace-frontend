import './App.css';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Landing-Page/LandingPage";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
        </Routes>
    </>
  );
}

export default App;
