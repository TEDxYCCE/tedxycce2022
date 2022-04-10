import { ISpeaker } from "../data/speakers";
import Speaker from "./speaker";

interface ISpeakerProps {
  speaker: ISpeaker;
  handleExpand?: (index: number) => void;
}
const SpeakerDetailsView = ({ speaker, handleExpand }: ISpeakerProps) => {
  return (
    <div className="flex h-full w-full justify-center">
      <Speaker detailedView handleExpand={handleExpand} {...speaker} />
    </div>
  );
};

export default SpeakerDetailsView;
