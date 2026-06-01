import React,{useEffect} from 'react';
import{BrowserRouter as Router,Routes,Route,useLocation}from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SubsidiaryPage from './pages/SubsidiaryPage';
import InvestorsPage from './pages/InvestorsPage';
import CalculatorPage from './pages/CalculatorPage';
import ApplicationPage from './pages/ApplicationPage';
import ContactPage from './pages/ContactPage';

function ScrollTop(){const{pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}

export default function App(){
  return(
    <Router>
      <ScrollTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/subsidiary/:slug" element={<SubsidiaryPage/>}/>
        <Route path="/investors" element={<InvestorsPage/>}/>
        <Route path="/calculator" element={<CalculatorPage/>}/>
        <Route path="/apply" element={<ApplicationPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
