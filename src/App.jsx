/* eslint-disable no-unused-vars */
import "./App.css";
import axios from "axios";
import Navbarr from "./Navbarr/Navbarr";
import footer from './Footer/Footer'
import About from './About/About'
import Home from "./Home/Home";
import contact from './Contact/Contact'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import ProductDiper from "./ProductDiper/ProductDiper";
import ProductPads from "./ProductPads/ProductPads";
import ProductAdultDiper from "./ProductAdult/ProductAdultDiper";
import Product from "./Product/Product";

function App() {
  return <div>
    <BrowserRouter>
    <Navbarr/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/babydiper" element={<ProductDiper/>} />
      <Route path="/Adultdiper" element={<ProductAdultDiper/>} />
      <Route path="/Pads" element={<ProductPads/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
   
   
    
  </div>
    
}

export default App;
