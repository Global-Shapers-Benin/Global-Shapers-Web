// src/components/Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    {/* main content will stretch to fill */}
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
