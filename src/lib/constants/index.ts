import {
  CableCarIcon,
  HardDriveDownloadIcon,
  HouseIcon,
  SquareDashedBottomCode,
  SettingsIcon,
  SquareAsteriskIcon,
  ListTodo,
} from "lucide-react";

export const APP_NAME = "Pu Vault";
export const MATERIAL_LINK_BASE_URL =
  "https://ayushpathak-48.github.io/pu-vault-assets";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: HouseIcon,
  },
  {
    id: 11,
    title: "MCQs",
    href: "/mcqs",
    icon: ListTodo,
  },
  // {
  //   id: 12,
  //   title: "NPTEL Calc",
  //   href: "/nptel-calculator",
  //   icon: Calculator,
  // },
  {
    id: 4,
    title: "Flash Cards",
    href: "/flash-cards",
    icon: SquareAsteriskIcon,
  },
  // {
  //   id: 11,
  //   title: "Youtube Tutorials",
  //   href: "/youtube-tutorials",
  //   icon: MonitorPlay,
  // },
  {
    id: 2,
    title: "Source Codes",
    href: "/code",
    icon: SquareDashedBottomCode,
  },
  {
    id: 3,
    title: "Time Table",
    href: "/time-table",
    hideOnMobile: true,
    icon: CableCarIcon,
  },

  // {
  //   id: 5,
  //   title: "Assignments",
  //   href: "/assignments",
  //   icon: Book,
  // },
  // {
  //   id: 6,
  //   title: "Important Links",
  //   href: "/imp-links",
  //   icon: LinkIcon,
  //   hideOnMobile: true,
  // },
  // {
  //   id: 7,
  //   title: "Interview Questions",
  //   href: "/interview",
  //   hideOnMobile: true,
  //   icon: MessageCircleQuestion,
  // },
  {
    id: 8,
    title: "Softwares",
    href: "/software-links",
    hideOnMobile: true,
    icon: HardDriveDownloadIcon,
  },
  // TT removed
  // {
  //   id: 9,
  //   title: "Attendance Calc",
  //   href: "/attendance-calculator",
  //   hideOnMobile: true,
  //   icon: Calculator,
  // },
  {
    id: 10,
    title: "Settings",
    href: "/settings",
    hideOnMobile: true,
    icon: SettingsIcon,
  },
];

export const courses = [
  {
    id: 1,
    label: "MCA",
    value: "mca",
    semesters: [2, 3],
  },
  {
    id: 2,
    label: "Msc It",
    value: "mscit",
    semesters: [2, 3],
  },
];

export type CourseType = "mca" | "mscit";

export const softwareLinks = [
  {
    id: 1,
    title: "Jar File",
    link: "https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-j-9.1.0.zip",
  },
  {
    id: 8,
    title: "JSON Jar File (FSWD) ",
    link: "https://repo1.maven.org/maven2/org/json/json/20210307/json-20210307.jar",
  },

  {
    id: 2,
    title: "IntelliJ IDE",
    link: "https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows&code=IIC",
  },
  {
    id: 3,
    title: "Netbeans",
    link: "https://www.apache.org/dyn/closer.lua/netbeans/netbeans-installers/25/Apache-NetBeans-25-bin-windows-x64.exe",
  },
  {
    id: 4,
    title: "TomCat Server",
    link: "https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.100/bin/apache-tomcat-9.0.100.exe",
  },
  {
    id: 5,
    title: "MacroMedia Flash",
    link: "https://macromedia-flash-8.en.softonic.com/download",
  },
  {
    id: 6,
    title: "Oracle VirtualBox",
    link: "https://download.virtualbox.org/virtualbox/7.1.6/VirtualBox-7.1.6-167084-Win.exe",
  },
  {
    id: 7,
    title: "Kali Linux",
    link: "https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso",
  },
];

export const specializations = [
  {
    id: 1,
    label: "Artificial Intelligence - I",
    value: "ai",
  },
  {
    id: 2,
    label: "Cyber Security and Forensics - I",
    value: "csf",
  },
  {
    id: 3,
    label: "Full Stack Web Developer - I",
    value: "fswd",
  },
  {
    id: 4,
    label: "Big Data Analytics - I",
    value: "bda",
  },
  {
    id: 5,
    label: "Cloud Computing - I",
    value: "cc",
  },
];

export const divisions = [
  {
    id: 1,
    label: "Division : A (AI)",
    value: "div_a",
    specialization: "ai",
    courses: ["mca"],
  },
  {
    id: 2,
    label: "Division : B (AI)",
    value: "div_b",
    specialization: "ai",
    courses: ["mca"],
  },
  {
    id: 3,
    label: "Division : C (AI)",
    value: "div_c",
    specialization: "ai",
    courses: ["mca"],
  },
  {
    id: 4,
    label: "Division : D (AI)",
    value: "div_d",
    specialization: "ai",
  },
  {
    id: 5,
    label: "Division : E (BDA)",
    value: "div_e",
    specialization: "bda",
  },
  {
    id: 6,
    label: "Division : F (CC)",
    value: "div_f",
    specialization: "cc",
  },
  {
    id: 7,
    label: "Division : G (CSF)",
    specialization: "csf",
    value: "div_g",
  },
  {
    id: 8,
    label: "Division : H (CSF)",
    specialization: "csf",
    value: "div_h",
  },
  {
    id: 9,
    label: "Division : I (CSF)",
    specialization: "csf",
    value: "div_i",
  },
  {
    id: 10,
    label: "Division : J (FSWD)",
    specialization: "fswd",
    value: "div_j",
  },
  {
    id: 11,
    label: "Division : K (FSWD)",
    specialization: "fswd",
    value: "div_k",
  },
];

export const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const impLinks = [
  {
    id: 1,
    title: "Software Engineering",
    href: `${MATERIAL_LINK_BASE_URL}/assignments/se-assignment.pdf`,
  },
  // Succesfully
];
