import { useEffect, useState } from "react";
import BestAppartment from "./components/BestAppartment/BestAppartment";
import BestDeal from "./components/BestDeal/BestDeal";
import Contact from "./components/Contact/Contact";
import Counters from "./components/Counters/Counters";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Properties from "./components/Properties/Properties";
import Slider from "./components/Slider/Slider";
import SubHeader from "./components/SubHeader/SubHeader";
import VideoView from "./components/VideoView/VideoView";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(true);
    };

    window.addEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <SubHeader />
          <NavBar />
          <Slider />
          <BestAppartment />
          <VideoView />
          <Counters />
          <BestDeal />
          <Properties />
          <Contact />
          <Footer />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
