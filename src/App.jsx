import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import FAQPage from './pages/FAQPage'
import GarantiPage from './pages/GarantiPage'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import UseGarantiPage from './pages/UseGarantiPage'
import { Navigate } from 'react-router'
import './index.css'
import AboutPage from './pages/AboutPage'




function App() {

  // Bruger useLocation til at få adgang til den aktuelle sti
  const pathname = useLocation();

  // Scroll til toppen af siden, når stien ændres
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Kør effekten, når stien ændres

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produkt" element={<ProductPage />} />
      <Route path="/hudforbedringsgaranti" element={<GarantiPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/om-os" element={<AboutPage />} />
      <Route path="/kontakt-os" element={<ContactPage />} />
      <Route path="/garanti-krav" element={<UseGarantiPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default App
