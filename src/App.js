import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Payment from "./components/pages/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
      {/* <Payment/> */}
    </div>
  );
}

export default App;
