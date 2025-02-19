import { MATERIAL_LINK_BASE_URL } from ".";

export const materials = [
  {
    id: 1,
    subject_name: "ADVANCE JAVA PROGRAMMING",
    syllabus_link: `${MATERIAL_LINK_BASE_URL}/syllabus/advance-java-programming.pdf`,
    notes_link: [
      {
        id: 1,
        title: "Unit-1: Java Database Connectivity",
        href: `${MATERIAL_LINK_BASE_URL}/materials/advance-java/1-jdbc.pdf`,
      },
      {
        id: 2,
        title: "Unit-2: Java Servlets",
        href: `${MATERIAL_LINK_BASE_URL}/materials/advance-java/2-java-servlets.pdf`,
      },
      {
        id: 3,
        title: "Unit-3: Java Server Pages",
        href: `${MATERIAL_LINK_BASE_URL}/materials/advance-java/3-java-server-pages.pdf`,
      },
    ],
  },
];
