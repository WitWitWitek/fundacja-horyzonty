import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import FounderOne from "./components/Founders/FounderOne";
import FounderTwo from "./components/Founders/FounderTwo";
import Homeview from "./components/Homeview/Homeview";
import Media from "./components/Media/Media";
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
      <Media navColorVersion={navColorVersion.blue} />
      <Contact navColorVersion={navColorVersion.white} />
    </>
  );
}
