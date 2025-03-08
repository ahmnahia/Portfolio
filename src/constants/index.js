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

// carousel images
import upgradeTo5gDeskAr from "@/assets/workScreenshots/upgrade-to-5g-desk-ar.png";
import upgradeTo5gDeskEn from "@/assets/workScreenshots/upgrade-to-5g-desk-en.png";
import upgradeTo5gMobAr from "@/assets/workScreenshots/upgrade-to-5g-mob-ar.png";
import upgradeTo5gMobEn from "@/assets/workScreenshots/upgrade-to-5g-mob-en.png";

import appleBusiManagerDeskAr from "@/assets/workScreenshots/apple-busi-manager-desk-ar.png";
import appleBusiManagerDeskEn from "@/assets/workScreenshots/apple-busi-manager-desk-en.png";
import appleBusiManagerMobAr from "@/assets/workScreenshots/apple-busi-manager-mob-ar.png";
import appleBusiManagerMobEn from "@/assets/workScreenshots/apple-busi-manager-mob-en.png";

export const navbarSections = [
  { name: "About", href: "#about-me-section" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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

export const projects = [
  {
    title: "Upgrade To 5G",
    images: {
      desk: { en: upgradeTo5gDeskEn, ar: upgradeTo5gDeskAr },
      mob: { en: upgradeTo5gMobEn, ar: upgradeTo5gMobAr },
    },
    chips: ["Work", "Static Site"],
    description: "Converted a figma design to a static website using HTML, CSS",
  },
  {
    title: "Apple Business Manager",
    images: {
      desk: { en: appleBusiManagerDeskEn, ar: appleBusiManagerDeskAr },
      mob: { en: appleBusiManagerMobEn, ar: appleBusiManagerMobAr },
    },
    chips: ["Work", "Static Site"],
    description: "Converted a figma design to a static website using HTML, CSS",
  },
];
