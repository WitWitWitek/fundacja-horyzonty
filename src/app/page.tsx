import AboutUs from "./components/AboutUs/AboutUs";
import FounderOne from "./components/Founders/FounderOne";
import FounderTwo from "./components/Founders/FounderTwo";
import Homeview from "./components/Homeview/Homeview";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Homeview />
      <AboutUs />
      <Projects />
      <FounderOne />
      <FounderTwo />
    </>
  );
}
