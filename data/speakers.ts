import getPhotoURL from "../utils/getPhotoURL";

interface speaker {
  name: string;
  title: string;
  desc: string;
  photo: string;
}

export const speakersData: speaker[] = [
  {
    name: "Jared Forsyth",
    title: "Software Engineer",
    desc: "This is my description dosto. My hun jiyan, mehu bada takarvar. Mera gala hai bohot surila!",
    photo: getPhotoURL("1", true),
  },
];
