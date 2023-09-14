import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Payment from "./components/pages/Payment";
import Success from "./components/pages/Success";
import Cancel from "./components/pages/Cancel";
import { Routes, Route } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      {/* <Payment/> */}
    </div>
  );
}

export default App;
