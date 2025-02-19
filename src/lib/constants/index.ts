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
    title: "Softwares",
    href: "/software-links",
    icon: HardDriveDownloadIcon,
  },
  {
    id: 4,
    title: "Time Table",
    href: "/time-table",
    icon: CableCarIcon,
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
