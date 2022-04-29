import { getPerformerPhotoURL } from "../utils/getPhotoURL";

export interface IPerformer {
  name: string;
  title: string;
  desc: string;
  photo: string;
}

export const performersData: IPerformer[] = [
  {
    name: "Shreya Kharabe Tanksale",
    title: "Playback and Live singer",
    desc: "Since Childhood Shreya completely devoted herself to music. She participated in many contests like SaReGaRe, Lions Club, Nagpur Bhushan etc. She has recorded many Marathi, Hindi, Malayalam and Punjabi songs. Shreya has contributed in Bollywood movies as well",
    photo: getPerformerPhotoURL("2", true),
  },
  {
    name: "Gaurav Tanksale",
    title: "Guitarist",
    desc: "A professional guitarist working as a professional musician since 18 years. Performed for more than 4000 shows. Performed with many celebrity singers. Started media an event management co  in 2012 and carried out more than 15 national conference and other events.",
    photo: getPerformerPhotoURL("1", true),
  },
];
