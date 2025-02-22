import {
  CableCarIcon,
  HardDriveDownloadIcon,
  //  HeartIcon,
  HouseIcon,
  SettingsIcon,
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
  //   {
  //     id: 2,
  //     title: "Favourites",
  //     href: "/favourites",
  //     icon: HeartIcon,
  //   },
  {
    id: 3,
    title: "Time Table",
    href: "/time-table",
    icon: CableCarIcon,
  },
  {
    id: 4,
    title: "Softwares",
    href: "/software-links",
    icon: HardDriveDownloadIcon,
  },
  {
    id: 5,
    title: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];

export const streams = [
  {
    id: 1,
    stream: "MCA",
    total_semester: 4,
  },
];

export const softwareLinks = [
  {
    id: 1,
    title: "Jar File",
    link: "https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-j-9.1.0.zip",
  },
  {
    id: 2,
    title: "IntelliJ IDE",
    link: "https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows&code=IIC",
  },
  {
    id: 3,
    title: "Netbeans",
    link: "https://dlcdn.apache.org/netbeans/netbeans-installers/24/Apache-NetBeans-24-bin-windows-x64.exe",
  },
  {
    id: 4,
    title: "TomCat Server",
    link: "https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.98/bin/apache-tomcat-9.0.98.exe",
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

export type HomePageTabsType = "materials" | "practicals";
export const homePageTabs: {
  id: number;
  title: string;
  key: HomePageTabsType;
}[] = [
  {
    id: 1,
    title: "Materials",
    key: "materials",
  },
  {
    id: 2,
    title: "Practicals",
    key: "practicals",
  },
  // {
  //   id: 3,
  //   title: "Assignments",
  //   key: "assignments",
  // },
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
    label: "Division : A",
    value: "div_a",
  },
  {
    id: 2,
    label: "Division : B",
    value: "div_b",
  },
  {
    id: 3,
    label: "Division : C",
    value: "div_c",
  },
  {
    id: 4,
    label: "Division : D",
    value: "div_d",
  },
  {
    id: 5,
    label: "Division : E",
    value: "div_e",
  },
  {
    id: 6,
    label: "Division : F",
    value: "div_f",
  },
  {
    id: 7,
    label: "Division : G",
    value: "div_g",
  },
  {
    id: 8,
    label: "Division : H",
    value: "div_h",
  },
  {
    id: 9,
    label: "Division : I",
    value: "div_i",
  },
  {
    id: 10,
    label: "Division : J",
    value: "div_j",
  },
  {
    id: 11,
    label: "Division : K",
    value: "div_k",
  },
];
