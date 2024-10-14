import { SiMongodb, SiPostman, SiExpress, SiGooglecloud } from "react-icons/si";
import { FaReact, FaHtml5, FaBootstrap, FaLinux } from "react-icons/fa";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";

export const navbarSections = [
  { name: "About", href: "#about-me-section" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export const technologiesUsed = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <RiJavascriptFill />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <TbBrandReactNative />, name: "React Native" },
  { icon: <DiNodejs />, name: "Node js" },
  { icon: <SiExpress />, name: "Express js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <RiNextjsFill />, name: "Next js" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <FaLinux />, name: "Linux" },
  { icon: <SiGooglecloud />, name: "Google Cloud" },
];
