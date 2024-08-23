import "./Properties.css";
import { data } from "./../../data/propertiesData";

import SectionHeader from "../SectionHeader/SectionHeader";
import PropertyCard from "../PropertyCard/PropertyCard";

const Properties = () => {
  return (
    <div className="properties" id="properties">
      <div className="container">
        <SectionHeader
          title="| Properties"
          text="We Provide The Best Property You Like"
        />
        <div className="properties-items">
          {data.map((item, index) => (
            <div className="property-card-container" key={index}>
              <PropertyCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
