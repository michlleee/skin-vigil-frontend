import MottoSection from "./motto";
import DetectionSection from "./detectSection";
import HowTo from "./howTo";
import WhoWeAre from "./whoWeAre";
// import UVIndexMap from "../../components/UvIndexMap/UvIndexMap";

function Home(){
  return (
    <>
      <MottoSection />
      <DetectionSection />
      <HowTo />
      <WhoWeAre />
      {/* <UVIndexMap /> */}
    </>
  );
};

export default Home;
