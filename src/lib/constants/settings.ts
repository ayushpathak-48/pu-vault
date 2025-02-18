import {
  CableCarIcon,
  HardDriveDownloadIcon,
  //  HeartIcon,
  HouseIcon,
  SettingsIcon,
} from "lucide-react";

export const APP_NAME = "Pu Vault";
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
    title: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
  {
    id: 4,
    title: "Softwares",
    href: "/software-links",
    icon: HardDriveDownloadIcon,
  },
  {
    id: 5,
    title: "Time Table",
    href: "/time-table",
    icon: CableCarIcon,
  },
];

export const streams = [
  {
    id: 1,
    stream: "MCA",
    total_semester: 4,
  },
];
