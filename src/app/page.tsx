import AboutUs from "./components/AboutUs/AboutUs";
import Homeview from "./components/Homeview/Homeview";
import { navColorVersion } from "./types";

export default function Home() {
  return (
    <>
      <Homeview navColorVersion={navColorVersion.white} />
      <AboutUs navColorVersion={navColorVersion.blue} />
    </>
  );
}
