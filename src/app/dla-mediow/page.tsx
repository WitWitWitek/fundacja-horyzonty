import Media from "../components/Media/Media";
import Contact from "../components/Contact/Contact";
import { navColorVersion } from "../types";

export default function ForMedia() {
  return (
    <>
      <Media navColorVersion={navColorVersion.blue} />
      <Contact navColorVersion={navColorVersion.white} />
    </>
  );
}
