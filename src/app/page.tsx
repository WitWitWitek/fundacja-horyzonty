import AboutUs from "./components/AboutUs/AboutUs";
import FounderOne from "./components/Founders/FounderOne";
import FounderTwo from "./components/Founders/FounderTwo";
import Homeview from "./components/Homeview/Homeview";
import Projects from "./components/Projects/Projects";
import { navColorVersion } from "./types";

export default function Home() {
  return (
    <>
      <Homeview navColorVersion={navColorVersion.white} />
      <AboutUs navColorVersion={navColorVersion.blue} />
      <Projects navColorVersion={navColorVersion.white} />
      <FounderOne navColorVersion={navColorVersion.blue} />
      <FounderTwo navColorVersion={navColorVersion.white} />
    </>
  );
}
