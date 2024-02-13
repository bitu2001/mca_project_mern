import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Home from "./Components/Home";
import Notification from "./Components/Notification";
import Login from './Pages/Login'
import Signup from "./Pages/Signup";
function App() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log('lat is'+lat)
      console.log('long is'+long)
    });
  } else {
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
