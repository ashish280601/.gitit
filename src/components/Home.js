import React, { useState } from "react";
import Monthly from "./pages/monthly";
import Yearly from "./pages/yearly";
import "./styles/home.css";

export default function Home() {
  const [plans] = useState([
    { option: "Mobile" },
    { option: "Basic" },
    { option: "Standard" },
    { option: "Premium" },
  ]);

  const [subscribes] = useState([
    {
      title: "Monthly price",
      mobile: "Rs" + " " + 100,
      basic: "Rs" + " " + 200,
      standard: "Rs" + " " + 500,
      premium: "Rs" + " " + 700,
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

  const [buttons, setButtons] = useState([{data:"Monthly"},{data:"Yearly"}])

  const useToggle = (initialState) => {
    const [toggleValue, setTogglevalue] = useState(initialState);

    const toggler = () => { setTogglevalue(!toggleValue)};
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle();

  return (
    <div className="homepage">
      <h2>Choose the right plan for you</h2>
      <input  id="switch" type="checkbox" onClick={setToggle} />
      <label for="switch">
        <span className="toggle-option">Monthly</span>
        <span className="toggle-option">Yearly</span>
      </label>
      {
            toggle ? <Yearly
                        plans={plans}
                        subscribes={subscribes}
                        /> 
                        :
                        <Monthly
                         plans={plans}
                         subscribes={subscribes}
                        />
        }
    </div>
  );
}
