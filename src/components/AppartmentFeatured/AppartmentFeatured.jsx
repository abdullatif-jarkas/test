// import Accordion from '../Accordion/Accordion'
import "./AppartmentFeatured.css";
import { data } from "./../../data/accordionData.jsx";
import SectionHeader from "./../SectionHeader/SectionHeader";
import Accordion from "../Accordion/Accordion.jsx";
// import Accordion from "../Accordion/Accordion.jsx";

const AppartmentFeatured = () => {

  return (
    <div className="appartment-featured col">
      <SectionHeader title="| Featured" text="Best Appartment & Sea view" />
      <Accordion data={data}/>
    </div>
  );
};

export default AppartmentFeatured;
