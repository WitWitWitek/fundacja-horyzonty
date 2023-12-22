import WaveBottom from "./WaveBottom";
import WaveTop from "./WaveTop";

export type WavesType = "footer" | "white" | "blue";

export default function Waves({
  type,
  isBottom,
}: {
  type: WavesType;
  isBottom?: boolean;
}) {
  return isBottom ? <WaveBottom type={type} /> : <WaveTop type={type} />;
}
