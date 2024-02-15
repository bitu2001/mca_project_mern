import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Notification from "../Components/Notification";
import Footer from "../Pages/Footer";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { Routes, Route, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const [hideNavbar, setHideNavbar] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);

  React.useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setHideNavbar(true);
      setHideFooter(true);
    } else {
      setHideNavbar(false);
      setHideFooter(false);
    }
  }, [location]);

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;
