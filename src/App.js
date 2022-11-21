import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {
  About,
  AccTypes,
  CFD,
  Commodities,
  Contact,
  Forex,
  Home,
  Indices,
  KYC,
  MobileTrader,
  Privacy,
  Risk,
  Security,
  SegreAccounts,
  Signals,
  Terms,
  Trade,
  WebTrader,
} from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trade" element={<Trade />} />
        <Route exact path="/acctypes" element={<AccTypes />} />
        <Route exact path="/segreaccounts" element={<SegreAccounts />} />
        <Route exact path="/webtrader" element={<WebTrader />} />
        <Route exact path="/mobiletrader" element={<MobileTrader />} />
        <Route exact path="/signals" element={<Signals />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/security" element={<Security />} />
        <Route exact path="/commodities" element={<Commodities />} />
        <Route exact path="/indices" element={<Indices />} />
        <Route exact path="/forex" element={<Forex />} />
        <Route exact path="/cfd" element={<CFD />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/risk" element={<Risk />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/kyc" element={<KYC />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
