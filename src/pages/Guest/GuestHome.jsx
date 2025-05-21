import Navbar from "../../components/Navbar";
import HeroSection from "../../pages/Guest/HeroSection";
import About from "../../pages/Guest/About";
import TopProduct from "../../pages/Guest/TopProduct";
import Testimoni from "../../pages/Guest/Testimoni";
// import Ketersediaan from "../../pages/Guest/Ketersediaan";
import Footer from "../../components/Footer";

const GuestHome = () => {
  return (
    
     <>
      <HeroSection />
      <About />
      <TopProduct />
      <Testimoni />
      {/* <Ketersediaan/> */}
    </>
    
  );
};

export default GuestHome;