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

import giveMoreDeskAr from "@/assets/workScreenshots/give-more-desk-ar.png";
import giveMoreDeskEn from "@/assets/workScreenshots/give-more-desk-en.png";
import giveMoreMobAr from "@/assets/workScreenshots/give-more-mob-ar.png";
import giveMoreMobEn from "@/assets/workScreenshots/give-more-mob-en.png";

import sdnconnectDeskAr from "@/assets/workScreenshots/sdnconnect-desk-ar.png";
import sdnconnectDeskEn from "@/assets/workScreenshots/sdnconnect-desk-en.png";
import sdnconnectMobAr from "@/assets/workScreenshots/sdnconnect-mob-ar.png";
import sdnconnectMobEn from "@/assets/workScreenshots/sdnconnect-mob-en.png";

import smartWifiDeskAr from "@/assets/workScreenshots/smart-wifi-desk-ar.png";
import smartWifiDeskEn from "@/assets/workScreenshots/smart-wifi-desk-en.png";
import smartWifiMobAr from "@/assets/workScreenshots/smart-wifi-mob-ar.png";
import smartWifiMobEn from "@/assets/workScreenshots/smart-wifi-mob-en.png";

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
    title: "Give More With Ooreedoo",
    images: {
      desk: { en: giveMoreDeskEn, ar: giveMoreDeskAr },
      mob: { en: giveMoreMobEn, ar: giveMoreMobAr },
    },
    chips: ["Work", "Static"],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, jQuery, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
  },
  {
    title: "Smart WIFI",
    images: {
      desk: { en: smartWifiDeskEn, ar: smartWifiDeskAr },
      mob: { en: smartWifiMobEn, ar: smartWifiMobAr },
    },
    chips: ["Work", "Static"],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, jQuery, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
  },
  {
    title: "Apple Business Manager",
    images: {
      desk: { en: appleBusiManagerDeskEn, ar: appleBusiManagerDeskAr },
      mob: { en: appleBusiManagerMobEn, ar: appleBusiManagerMobAr },
    },
    chips: ["Work", "Static"],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, jQuery, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
    link: "https://www.ooredoo.qa/web/en/business/ict-solutions/apple-business-manager/",
  },
  {
    title: "SDN Connect",
    images: {
      desk: { en: sdnconnectDeskEn, ar: sdnconnectDeskAr },
      mob: { en: sdnconnectMobEn, ar: sdnconnectMobAr },
    },
    chips: ["Work", "Static"],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, jQuery, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
  },
  {
    title: "Upgrade To 5G",
    images: {
      desk: { en: upgradeTo5gDeskEn, ar: upgradeTo5gDeskAr },
      mob: { en: upgradeTo5gMobEn, ar: upgradeTo5gMobAr },
    },
    chips: ["Work", "Static"],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, jQuery, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
  },
];
