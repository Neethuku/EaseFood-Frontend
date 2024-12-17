import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Admin Components
import DashboardContent from "./Components/admin/DashboardContent";
import ProductsContent from "./Components/admin/ProductContent";
import AdminSidebar from "./Components/admin/AdminSidebar";

// Common Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import SignupUserPage from "./Pages/SignupUserPage";
import SignupProprietorPage from "./Pages/SignupProprietorPage";

function App() {
  const [originalTitle] = useState("Food Ease");
  const location = useLocation(); // To get the current route

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Please come back! :-(";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [originalTitle]);

  // Check if the current route is an admin route
  const isAdminRoute = ["/dashboard", "/products"].includes(location.pathname);

  return (
    <>
      {/* Conditionally Render Header */}
      {!isAdminRoute && <Header />}

      {/* Main Layout */}
      <div className="flex">
        {/* Conditional Sidebar for Admin Routes */}
        {isAdminRoute && <AdminSidebar />}

        <div className="flex-1">
          <Routes>
            {/* Admin Routes */}
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/products" element={<ProductsContent />} />

            {/* General Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/signup-user" element={<SignupUserPage />} />
            <Route path="/proprietor-signup" element={<SignupProprietorPage />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
