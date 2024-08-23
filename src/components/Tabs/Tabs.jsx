import { useState } from "react";
import "./Tabs.css";

const Tabs = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  }

  return (
    <ul className="tabs">
      {data.map((item, index) => (
        <li key={index}>
          <button
            className={activeTab == index? "tab active": "tab"}
            onClick={()=>handleClick(index)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
