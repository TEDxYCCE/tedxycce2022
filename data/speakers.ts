import getPhotoURL from "../utils/getPhotoURL";

interface speaker {
  name: string;
  title: string;
  shortDesc: string;
  desc: string;
  photo: string;
}

export const speakersData: speaker[] = [
  {
    name: "Drishti Sharma",
    title: "Prominent Journalist",
    shortDesc:"Confident Professional Reporter with accurate and widespread knowledge and fact-backed news reporting.",
    desc: "Drishti Sharma, from Nagpur , Maharashtra is one among the most prominent journalist. She is currently the Reporter at The Free Media. The way she projects out the topics of concern and discuss the reportage is exemplary. The conversation she holds with the citizens from microscale to colossal highlights with accurately widespread knowledge is worth admirable. With a great Professionalism and confidence, she has reasonably created a noble change.",
    photo: getPhotoURL("1", true),
  },
  {
    name: "Mrs Shilpa Agrawal",
    title: "VIA Marketing Head & Mrs India Globe 2005",
    shortDesc:"First Woman to Head Vidarbha Industries Association's Marketing Forum, 2005 Mrs India. ",
    desc: "Mrs Shilpa Agrawal,  known to be well known industrialist and many beauty contest winner. She is currently the first woman to head the Vidharbha Industries Association's marketing forum. Also awarded as Mrs India Globe 2015.Shilpa was also selected for Mrs Universe among various  industrialist of the region award'.\
    She has her believe in perseverance as well as following one's true dreams and passion.\
    Also participated in National's Women's Parliament as a mentor.\
    Her journey, how she excel and still is exploring, also her life was not always sparkling and shining, she overcame depression, her vision, her way to lead life will definitely bring change in everyone's vision.",
    photo: getPhotoURL("1", true),
  },
  {
    name: "Mithilesh Vazalwar",
    title: "Champion Coffee Roaster & National Level Badminton Player",
    shortDesc:"He is the Founder of Corridor Seven Coffee Roasters and National Level Badminton Player.",
    desc: "He is an ardent personality with an extremely innovative ideas and perception who believes &quot; making the perfect cup of coffee is a science &quot; . He is the Founder of Corridor Seven Coffee Roasters and an outstanding National Level Badminton Player. He belongs to the small number of Q Graders in India, professional cuppers who are accredited by the Coffee Quality Institute (CQI), an international non-profit that works towards improving the quality of coffee produced globally and is certified by Melbourne-based Veneziano Coffee Roasters. He is the First Indian AeroPress Champion and the 1st to have represented India at the World AeroPress Championship (W.A.C.), Seoul, South Korea, competing among Coffee Brewer Champions from over 50 Nations.",
    photo: getPhotoURL("1", true),
  },
  {
    name: "Sarvjeet Soni",
    title: "Consultant and Psychology Researcher",
    shortDesc:"Psychology Consultant and Biotechnology Researcher, Founder and CEO of a self-help channel called \"PsychoSarva\"",
    desc: "Sarvjeet Soni is a consultant, he consulted several successful persons and solved their problems, he has a nice set of psychological knowledge, and he is a student of biotechnology, he lived in Madhya Pradesh, India. He is the founder and CEO of a self-help channel called &quot; psychosarva &quot;. He was researching on Swami Vivekananda for 2 years, before writing this book. YOU CAN VISIT PSYCHOSARVA YOUTUBE CHANNEL FOR MORE VALUABLE CONTENT.",
    photo: getPhotoURL("1", true),
  },
  {
    name: "Prachi Tehlan",
    title: "Athelete and Actress",
    shortDesc:"Actress, Indian Netball and Basketball Player, famous by the name \"Queen of the Court\". She has worked in Punjabi and Malayalam Films.",
    desc: "Prachi Tehlan is an Indian netball and basketball player, and an actress.Also known as \" Queen of The Court\"  & \"Lass of The Rings\".She Worked in Panjabi and malayalam films and was also a part of TV serial and many short films.Awarded as Sports Women of the Year 2010 by Jesus and Mary College and recognized as a Sports Achiever in Delhi University Achievers List. Many award winner Prachi Tehlan is inspiration of every girl out there. She is leading example of how one can be unstoppable and achieve everything in life",
    photo: getPhotoURL("1", true),
  },
  {
    name: "Jared Forsyth",
    title: "Software Engineer",
    shortDesc:"",
    desc: "This is my description dosto. My hun jiyan, mehu bada takarvar. Mera gala hai bohot surila!",
    photo: getPhotoURL("1", true),
  },
  
];
