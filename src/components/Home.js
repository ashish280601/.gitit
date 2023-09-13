import React, { useState } from "react";
import Monthly from "./pages/monthly";
import Yearly from "./pages/yearly";
// import Payment from "./pages/Payment";
import "./styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [plans] = useState([
    { option: "Mobile" },
    { option: "Basic" },
    { option: "Standard" },
    { option: "Premium" },
  ]);

  const [months] = useState([
    {
      title: "Monthly price",
      mobile: "Rs 100",
      basic: "Rs 200",
      standard: "Rs 500",
      premium: "Rs 700",
    },
    {
      title: "Video quality",
      mobile: "Good",
      basic: "Good",
      standard: "Better",
      premium: "Best",
    },
    {
      title: "Resolution",
      mobile: "480p",
      basic: "480p",
      standard: "1080p",
      premium: "4k+HDR",
    },
    {
      title: "Devices you can use to watch",
      mobile: "Phone",
      basic: "Phone",
      standard: "Phone",
      premium: "Phone",
    },
    {
      mobile: "Tablet",
      basic: "Tablet",
      standard: "Tablet",
      premium: "Tablet",
    },
    {
      basic: "Computer",
      standard: "Computer",
      premium: "Computer",
    },
    {
      basic: "TV",
      standard: "TV",
      premium: "TV",
    },
  ]);

  const [years] = useState([
    {
      title: "Monthly price",
      mobile: "Rs 1000",
      basic: "Rs 2000",
      standard: "Rs 5000",
      premium: "Rs 7000",
    },
    {
      title: "Video quality",
      mobile: "Good",
      basic: "Good",
      standard: "Better",
      premium: "Best",
    },
    {
      title: "Resolution",
      mobile: "480p",
      basic: "480p",
      standard: "1080p",
      premium: "4k+HDR",
    },
    {
      title: "Devices you can use to watch",
      mobile: "Phone",
      basic: "Phone",
      standard: "Phone",
      premium: "Phone",
    },
    {
      mobile: "Tablet",
      basic: "Tablet",
      standard: "Tablet",
      premium: "Tablet",
    },
    {
      basic: "Computer",
      standard: "Computer",
      premium: "Computer",
    },
    {
      basic: "TV",
      standard: "TV",
      premium: "TV",
    },
  ]);

  const navigate = useNavigate();

  function handleSubmit(){
    navigate('/payment');
  }

  const useToggle = (initialState) => {
    const [toggleValue, setTogglevalue] = useState(initialState);

    const toggler = () => {
      setTogglevalue(!toggleValue);
    };
    return [toggleValue, toggler];
  };

  const [toggle, setToggle] = useToggle();

  return (
    <div className="homepage">
      <h2>Choose the right plan for you</h2>
      <input id="switch" type="checkbox" onClick={setToggle}/>
      <label htmlFor="switch">
        <span className="toggle-option">Monthly</span>
        <span className="toggle-option">Yearly</span>
      </label> 
      {toggle ? (
        <Yearly plans={plans} years={years} submit={handleSubmit}/>
      ) : (
        <Monthly plans={plans} months={months} submit={handleSubmit}/>
      )}

      
    </div>
  );
}
