
import Loader from "../Loader";
import "./career.css"
import CurrentOpening from "./CurrentOpening";
import Gallery from "./Gallery";
import Heading from "./Heading";
import WhyJoinUs from "./WhyJoinUs";


const Career = () => {
  return (
    <>
     <Loader>
     <div className="font-poppins">
      <Gallery/>
      <WhyJoinUs/>
      <Heading/>
      <CurrentOpening/>
     </div>
     </Loader>
    </>
  );

};

export default Career;
