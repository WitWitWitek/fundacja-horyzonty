import AboutUs from "./components/AboutUs/AboutUs";
import Homeview from "./components/Homeview/Homeview";

export enum navColorVersion {
  blue = "blue",
  white = "white",
}

export default function Home() {
  return (
    <>
      <Homeview navColorVersion={navColorVersion.white} />
      <AboutUs navColorVersion={navColorVersion.blue} />
    </>
  );
}
