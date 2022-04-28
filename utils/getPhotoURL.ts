export const getSpeakerPhotoURL = (fileName: string, isPNG?: boolean) =>
  `/images/speakers/${fileName}.${isPNG ? `png` : `jpg`}`;

export const getPerformerPhotoURL = (fileName: string, isPNG?: boolean) =>
  `/images/performers/${fileName}.${isPNG ? `png` : `jpg`}`;
