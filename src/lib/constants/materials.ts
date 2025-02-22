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
  {
    id: 2,
    subject_name: "COMPUTER GRAPHICS",
    syllabus_link: `${MATERIAL_LINK_BASE_URL}/syllabus/artificial-intelligence.pdf`,
    notes_link: [
      {
        id: 1,
        title: "Unit-1: Introduction and Basic Drawing Algorithms",
        href: `${MATERIAL_LINK_BASE_URL}/materials/advance-java/1-introduction-and-basic-drawing-algorithms.pdf`,
      },
      {
        id: 2,
        title: "Unit-2.1: Region Filling Algorithms",
        href: `${MATERIAL_LINK_BASE_URL}/materials/advance-java/2.1-region-filling-algorithms.pdf`,
      },
      {
        id: 3,
        title: "Unit-2.2: Two dimensional transformations",
        href: `${MATERIAL_LINK_BASE_URL}/materials/advance-java/2.2-region-filling-algorithms.pdf`,
      },
    ],
  },
  {
    id: 4,
    subject_name: "Data Communication & Networking",
    syllabus_link: `${MATERIAL_LINK_BASE_URL}/syllabus/data-communication-and-networking.pdf`,
    notes_link: [
      {
        id: 1,
        title: "Week 1",
        href: `${MATERIAL_LINK_BASE_URL}/materials/data-communication-and-networking/nptel/week-1.pdf`,
      },
      {
        id: 2,
        title: "Week 2",
        href: `${MATERIAL_LINK_BASE_URL}/materials/data-communication-and-networking/nptel/week-2.pdf`,
      },
      {
        id: 3,
        title: "Week 3",
        href: `${MATERIAL_LINK_BASE_URL}/materials/data-communication-and-networking/nptel/week-3.pdf`,
      },
      {
        id: 4,
        title: "Week 4",
        href: `${MATERIAL_LINK_BASE_URL}/materials/data-communication-and-networking/nptel/week-4.pdf`,
      },
      {
        id: 5,
        title: "Week 5",
        href: `${MATERIAL_LINK_BASE_URL}/materials/data-communication-and-networking/nptel/week-5.pdf`,
      },
    ],
  },
];

export const specializationMaterials = [
  {
    id: 1,
    subject_name: "Artificial Intelligence",
    value: "ai",
    syllabus_link: `${MATERIAL_LINK_BASE_URL}/syllabus/artificial-intelligence.pdf`,
    notes_link: [
      {
        id: 1,
        title: "Unit-1: Introduction",
        href: `${MATERIAL_LINK_BASE_URL}/materials/artificial-intelligence/1-introduction.pdf`,
      },
      {
        id: 2,
        title: "Unit-2: Heuristic Search Techniques",
        href: `${MATERIAL_LINK_BASE_URL}/materials/artificial-intelligence/2-heuristic-search-techniques.pdf`,
      },
      {
        id: 3,
        title: "Unit-3: Problems, Problems Spaces and Search",
        href: `${MATERIAL_LINK_BASE_URL}/materials/artificial-intelligence/3-problems-spaces-and-search.pdf`,
      },
      {
        id: 4,
        title: "Refrence Book: AI Russell Norvig",
        href: `${MATERIAL_LINK_BASE_URL}/materials/artificial-intelligence/reference-book-ai-russell-norving.pdf`,
      },
    ],
  },
];
