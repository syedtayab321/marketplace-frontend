import './App.css';
import {Routes} from "react-router-dom";
import SellerRoutes from "./Seller-Portal/routes/AppRoutes";

function App() {
  return (
    <>
       <Routes>
            <SellerRoutes/>
       </Routes>
    </>
  );
}

export default App;
