import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
// import LineGradient from "./components/LineGradient";
import Slider from "./scenes/Carousel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Experience from "./scenes/Experience";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-[900px] mb-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}>
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <div className="App mt-20 bg-gray-100 w-[100vw] h-[73vh]">
        <Slider />
      </div>
      {/* <LineGradient /> */}

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}>
          <Experience />
        </motion.div>
      </div>

      <div className=" w-[100vw]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
