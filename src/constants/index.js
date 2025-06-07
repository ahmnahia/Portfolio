import { SiMongodb, SiPostman, SiExpress } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaBootstrap,
  FaLinux,
  FaWordpress,
} from "react-icons/fa";
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

import appleTvUpdateDeskAr from "@/assets/workScreenshots/apple-tv-update-desk-ar.png";
import appleTvUpdateDeskEn from "@/assets/workScreenshots/apple-tv-update-desk-en.png";
import appleTvUpdateMobAr from "@/assets/workScreenshots/apple-tv-update-mob-ar.png";
import appleTvUpdateMobEn from "@/assets/workScreenshots/apple-tv-update-mob-en.png";


// portfolio imports
import portfolioHero from "@/assets/personalScreenshots/portfolio/hero.png";
import portfolioProjects from "@/assets/personalScreenshots/portfolio/projects.png";
import portfolioAbout from "@/assets/personalScreenshots/portfolio/about.png";
import portfolioContact from "@/assets/personalScreenshots/portfolio/contact.png";
import portfolioMessageSent from "@/assets/personalScreenshots/portfolio/messagesent.png";
import portfolioFullScreenDesk from "@/assets/personalScreenshots/portfolio/fullscreen-desk.png";
import portfolioFullScreenMob from "@/assets/personalScreenshots/portfolio/fullscreen-mob.png";

// mysnippetboard imports
import mysnippetboardHero from "@/assets/personalScreenshots/mySnippetBoard/hero.png";
import mysnippetboardFeatures from "@/assets/personalScreenshots/mySnippetBoard/features.png";
import mysnippetboardHowToUse from "@/assets/personalScreenshots/mySnippetBoard/howToUse.png";
import mysnippetboardFullscreenDesk from "@/assets/personalScreenshots/mySnippetBoard/fullscreen-desk.png";
import mysnippetboardFullscreenMob from "@/assets/personalScreenshots/mySnippetBoard/fullscreen-mob.png";
import mysnippetboardFullscreenApp from "@/assets/personalScreenshots/mySnippetBoard/fullscreen-app.png";
import mysnippetboardapp1 from "@/assets/personalScreenshots/mySnippetBoard/app-1.png";
import mysnippetboardapp2 from "@/assets/personalScreenshots/mySnippetBoard/app-2.png";
import mysnippetboardapp3 from "@/assets/personalScreenshots/mySnippetBoard/app-3.png";

export const navbarSections = [
  { name: "About", href: "#about-me" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const technologiesUsed = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <RiJavascriptFill />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <TbBrandReactNative />, name: "React Native" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaLinux />, name: "Linux" },
];

export const PROJECT_CATEGORIES = { PERSONAL: "Personal", WORK: "Work" };

export const projects = [
  {
    title: "MySnippetBoard",
    images: [
      mysnippetboardHero,
      mysnippetboardFeatures,
      mysnippetboardHowToUse,
      mysnippetboardapp1,
      mysnippetboardapp2,
      mysnippetboardapp3,
    ],
    fullScreenImages: [mysnippetboardFullscreenDesk, mysnippetboardFullscreenMob, mysnippetboardFullscreenApp],
    chips: [PROJECT_CATEGORIES.PERSONAL, "Next.js"],
    description:
      "I created MySnippetBoard in my free time  to improve my web development skills while building something useful. It helps users organize code snippets efficiently.",
    stack: [
      { icon: <FaReact />, name: "React" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      { icon: <RiNextjsFill />, name: "Next.js" },
    ],
    githubLink: "https://github.com/ahmnahia/my-snippet-board",
    link: "https://mysnippetboard.xyz/",
  },
  {
    title: "Portfolio",
    images: [
      portfolioHero,
      portfolioAbout,
      portfolioProjects,
      portfolioContact,
      portfolioMessageSent,
    ],
    fullScreenImages: [portfolioFullScreenDesk, portfolioFullScreenMob],
    chips: [PROJECT_CATEGORIES.PERSONAL, "Next.js"],
    description:
      "My personal portfolio website, built using Next.js to showcase my work and skills in web development.",
    stack: [
      { icon: <FaReact />, name: "React" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      { icon: <RiNextjsFill />, name: "Next.js" },
    ],
    githubLink: "https://github.com/ahmnahia/Portfolio",
  },
  {
    title: "Give More With Ooreedoo",
    images: [
      { image: giveMoreDeskEn, device: "desk", lang: "EN" },
      { image: giveMoreDeskAr, device: "desk", lang: "AR" },
      { image: giveMoreMobEn, device: "mob", lang: "EN" },
      { image: giveMoreMobAr, device: "mob", lang: "AR" },
    ],
    chips: [PROJECT_CATEGORIES.WORK, "HTML/CSS"],
    stack: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
    showDisabledLink: true,
  },
  {
    title: "Smart WIFI",
    images: [
      { image: smartWifiDeskEn, device: "desk", lang: "EN" },
      { image: smartWifiDeskAr, device: "desk", lang: "AR" },
      { image: smartWifiMobEn, device: "mob", lang: "EN" },
      { image: smartWifiMobAr, device: "mob", lang: "AR" },
    ],
    chips: [PROJECT_CATEGORIES.WORK, "HTML/CSS"],
    stack: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <RiJavascriptFill />, name: "JavaScript" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, JavaScript, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
    link: "https://www.ooredoo.qa/web/en/business/smart-wi-fi/",
  },
  {
    title: "Apple Business Manager",
    images: [
      { image: appleBusiManagerDeskEn, device: "desk", lang: "EN" },
      { image: appleBusiManagerDeskAr, device: "desk", lang: "AR" },
      { image: appleBusiManagerMobEn, device: "mob", lang: "EN" },
      { image: appleBusiManagerMobAr, device: "mob", lang: "AR" },
    ],
    chips: [PROJECT_CATEGORIES.WORK, "HTML/CSS"],
    stack: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
    link: "https://www.ooredoo.qa/web/en/business/ict-solutions/apple-business-manager/",
  },
  {
    title: "Apple TV Update",
    images: [
      { image: appleTvUpdateDeskEn, device: "desk", lang: "EN" },
      { image: appleTvUpdateDeskAr, device: "desk", lang: "AR" },
      { image: appleTvUpdateMobEn, device: "mob", lang: "EN" },
      { image: appleTvUpdateMobAr, device: "mob", lang: "AR" },
    ],
    chips: [PROJECT_CATEGORIES.WORK, "HTML/CSS"],
    stack: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
    description:
      "Transformed Figma designs —intended for mobile users— into a responsive website using HTML, CSS, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
    link: "https://www.ooredoo.qa/web/en/apple-tv-update/",
  },
  {
    title: "SDN Connect",
    images: [
      { image: sdnconnectDeskEn, device: "desk", lang: "EN" },
      { image: sdnconnectDeskAr, device: "desk", lang: "AR" },
      { image: sdnconnectMobEn, device: "mob", lang: "EN" },
      { image: sdnconnectMobAr, device: "mob", lang: "AR" },
    ],
    chips: [PROJECT_CATEGORIES.WORK, "HTML/CSS"],
    stack: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
    link: "https://www.ooredoo.qa/web/en/business/local-connectivity/sdn-connect/",
  },
  {
    title: "Upgrade To 5G",
    images: [
      { image: upgradeTo5gDeskEn, device: "desk", lang: "EN" },
      { image: upgradeTo5gDeskAr, device: "desk", lang: "AR" },
      { image: upgradeTo5gMobEn, device: "mob", lang: "EN" },
      { image: upgradeTo5gMobAr, device: "mob", lang: "AR" },
    ],
    chips: [PROJECT_CATEGORIES.WORK, "HTML/CSS"],
    stack: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
    description:
      "Transformed Figma designs into a responsive website using HTML, CSS, and Bootstrap, ensuring the content was accurate, well-structured, and SEO-friendly in both Arabic and English, and finalized the deployment using WordPress.",
    link: "https://www.ooredoo.qa/web/en/upgrade-to-5g/",
  },
];
