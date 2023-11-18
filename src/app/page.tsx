import AboutUs from "./components/AboutUs/AboutUs";
import Homeview from "./components/Homeview/Homeview";
import Projects from "./components/Projects/Projects";
import { navColorVersion } from "./types";

export default function Home() {
  return (
    <>
      <Homeview navColorVersion={navColorVersion.white} />
      <AboutUs navColorVersion={navColorVersion.blue} />
      <Projects navColorVersion={navColorVersion.white} />
    </>
  );
}
