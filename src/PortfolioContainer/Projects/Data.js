import city from '../../assets/Project/city.png';
import vigilance from '../../assets/Project/vigilance.png';
import fire from '../../assets/Project/fire.png';

export const projects = [
  { 
    title: "Crime Vigilance App",
    para: "Our project aims to help Indian citizens with crimes like theft, rapes, murder etc. It is very simple to use where the citizen will login to CITIZEN app and can report any crime and on the other end police personnel will log into POLICE app.",
    imageSrc: vigilance,
    url2: "https://github.com/sanchi0204/NEETRA",
    id: "1"
  },
  { 
    title: "City Guide",
    para: "Android app which helps users to find the nearby shops or places in the city where the user resides",
    imageSrc: city,
    url2: "https://github.com/Karandeep1390/CityGuide",
    id: "2"
  },
  { 
    title: "Aahar",
    para: "Team Project: The application allows a user to choose their meals for the day, check the menu and report their suggestions and feedback. The details of each user is recorded in the Admin application and food is served as per the orders for efficient management.",
    imageSrc: fire,
    url2: "https://github.com/sanchi0204/AAHAR",
    id:"3"
  },
];

export function getProjects(){
  return projects;
}