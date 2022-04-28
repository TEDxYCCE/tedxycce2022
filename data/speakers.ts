import { getSpeakerPhotoURL } from "../utils/getPhotoURL";

export interface ISpeaker {
  name: string;
  title: string;
  shortDesc: string;
  desc: string;
  photo: string;
}

export const speakersData: ISpeaker[] = [
  {
    name: "Rohit Shyam Raut",
    title: "Singer and Music Director",
    shortDesc:
      'Rohit is a Singer and Music Director, who is famous by the name "Powerhouse Rohit"',
    desc: 'Indian singer and music director, who primarily works in the Marathi film industry. He is famous by name "Powerhouse Rohit".He was a judge in Marathi "SaReGaMaPa Little Champs ". He  appeared in the Indian singing reality show Indian Idol and was the runner-up of its eleventh season.',
    photo: getSpeakerPhotoURL("0", true),
  },
  {
    name: "Prachi Tehlan",
    title: "Athelete and Actress",
    shortDesc:
      'Actress, Indian Netball and Basketball Player, famous by the name "Queen of the Court". She has worked in Punjabi and Malayalam Films.',
    desc: 'Prachi Tehlan is an Indian netball and basketball player, and an actress. Also known as "Queen of The Court"  & "Lass of The Rings". She has worked in Punjabi and Malayalam films and was also a part of a TV serial and many short films. Awarded as Sports Women of the Year 2010 by Jesus and Mary College and recognized as a Sports Achiever in Delhi University Achievers List. Many award winner Prachi Tehlan is inspiration of every girl out there. She is leading example of how one can be unstoppable and achieve everything in life',
    photo: getSpeakerPhotoURL("7", true),
  },
  {
    name: "Mithilesh Vazalwar",
    title: "Champion Coffee Roaster & National Level Badminton Player",
    shortDesc:
      "He is the Founder of Corridor Seven Coffee Roasters and National Level Badminton Player.",
    desc: "He is an ardent personality with an extremely innovative ideas and perception who believes 'making the perfect cup of coffee is a science'. He is the Founder of Corridor Seven Coffee Roasters and an outstanding National Level Badminton Player. He belongs to the small number of Q Graders in India, professional cuppers who are accredited by the Coffee Quality Institute (CQI), an international non-profit that works towards improving the quality of coffee produced globally and is certified by Melbourne-based Veneziano Coffee Roasters. He is the First Indian AeroPress Champion and the 1st to have represented India at the World AeroPress Championship (W.A.C.), Seoul, South Korea, competing among Coffee Brewer Champions from over 50 Nations.",
    photo: getSpeakerPhotoURL("5", true),
  },
  {
    name: "Renuka Badhe",
    title: "Executive Secretary, European Polar Board",
    shortDesc:
      "Dr. Renuka Badhe currently serves as the Executive Secretary of the European Polar Board, and is based in the Netherlands.",
    desc: "Dr. Renuka Badhe currently serves as the Executive Secretary of the European Polar Board, and is based in the Netherlands. Her background is in economics and public policy, and she holds a PhD on southern ocean phytoplankton physiology. Renuka has worked with a range international organisations on various aspects of polar science, policy and/or strategy development. Her current responsibilities include serving as a Chair of EU-PolarNet project's External Expert Advisory Board, and service on many national and international committees. She is particularly interested in promoting polar research to a wide audience using a variety of traditional and non-traditional communication tools, and projects looking at the interface between governance, science, and policy in the polar regions.",
    photo: getSpeakerPhotoURL("4", true),
  },
  {
    name: "Sarvjeet Soni",
    title: "Consultant and Psychology Researcher",
    shortDesc:
      'Psychology Consultant and Biotechnology Researcher, Founder and CEO of a self-help channel called "PsychoSarva"',
    desc: "Sarvjeet Soni is a consultant, he consulted several successful persons and solved their problems, he has a nice set of psychological knowledge, and he is a student of biotechnology, he lived in Madhya Pradesh, India. He is the founder and CEO of a self-help channel called 'psychosarva'. He was researching on Swami Vivekananda for 2 years, before writing this book. You can visit PSYCHOSARVA YouTube Channel for more valuable content.",
    photo: getSpeakerPhotoURL("6", true),
  },
  {
    name: "Mrs Shilpa Agrawal",
    title: "VIA Marketing Head & Mrs Universe lovely 2017",
    shortDesc:
      "Industrialist and Director of Akash Furnitech Pvt ltd , Mrs Universe lovely 2017. ",
    desc: "Mrs Shilpa Agrawal, known to be well known industrialist and Director of Akash Furnitech Pvt ltd and many beauty contest winner. She is currently the first woman to head the Vidharbha Industries Association's marketing forum. Also awarded as Mrs Universe lovely 2017. Shilpa was also selected for Mrs Universe among various 'industrialist of the region' award.\
    She has her believe in perseverance as well as following one's true dreams and passion.\
    Also participated in National's Women's Parliament as a mentor.\
    Her journey, how she excel and still is exploring, also her life was not always sparkling and shining, she overcame depression, her vision, her way to lead life will definitely bring change in everyone's vision.",
    photo: getSpeakerPhotoURL("3", true),
  },
  {
    name: "Drishti Sharma",
    title: "Prominent Journalist",
    shortDesc:
      "Confident Professional Reporter with accurate and widespread knowledge and fact-backed news reporting.",
    desc: "Drishti Sharma, from Nagpur, Maharashtra is one among the most prominent journalist. She is currently the Reporter at The Free Media. The way she projects out the topics of concern and discuss the reportage is exemplary. The conversation she holds with the citizens from microscale to colossal highlights with accurately widespread knowledge is worth admirable. With a great Professionalism and confidence, she has reasonably created a noble change.",
    photo: getSpeakerPhotoURL("1", true),
  },
  {
    name: "Joy Agrawal",
    title: "Young Innovator",
    shortDesc:
      "Joy Agrawal is a young innovator and a changemaker. He has discovered two asteroids and was also invited as an exhibition partner by IIT Madras.",
    desc: "Joy Agrawal is a young innovator and a changemaker. He has discovered two asteroids and was also invited as an exhibition partner by IIT Madras. He has filed 4 patents and has founded Project Gyan. Under Project Gyan, his aim is to make quality education ubiquitous in rural and tribal parts of India. The flagship project of Project Gyan is quality practical STEM education for all, which has been funded by organizations like Peace First and Vicco Laboratories. He has been recognized by the Futures Egalitarian Ethical Liberal Leaders among the top 150 change makers. He also serves as the President of Community Space One, a group of like-minded people working towards sustainable development goals through space technology. He is also the Chief Operating Officer of frontforumfocus, an organization based in Kenya currently setting up a space laboratory at Kenyatta University.",
    photo: getSpeakerPhotoURL("8", true),
  },
];
