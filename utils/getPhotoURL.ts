const getPhotoURL = (fileName: string, isPNG?: boolean) =>
  `/images/speakers/${fileName}.${isPNG ? `png` : `jpg`}`;

export default getPhotoURL;
