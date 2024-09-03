import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from './Pages/Home/Home.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useState } from "react";
import Login from "./Components/Login/Login.jsx";

function App() {

  const [showLogin , setShowLogin]=useState(false)
  return (
    <>  
    {showLogin?<Login setShowLogin={setShowLogin} />:<></>} 
    <Router> {/* Use Router here */}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<PlaceOrder/>}/>
          <Route path="/header" element={<Header/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
    </>

  );
}

export default App;