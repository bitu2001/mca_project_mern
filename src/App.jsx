import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Home from "./Components/Home";
import Notification from "./Components/Notification";

function App() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
    });
  } else {
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
