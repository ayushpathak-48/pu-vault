export interface TimeTableCell {
  id: number;
  label?: string;
  professor?: string | string[];
  classroom?: string;
  lab?: string[];
  cellClassName?: string;
  row_span?: number;
  col_span?: number;
  mca?: {
    label: string;
    classroom?: string;
    cellClassName?: string;
    professor?: string | string[];
    lab?: string[];
    row_span?: number;
    col_span?: number;
  };
  msc_it?: {
    label: string;
    professor?: string | string[];
    classroom?: string;
    cellClassName?: string;
    lab?: string[];
    row_span?: number;
    col_span?: number;
  };
}
export type TimeTableRow = TimeTableCell[];
export type TimetableData = TimeTableRow[];

export const sem3TimeTable = [
  // Divison A
  {
    id: 1,
    title: "Division A",
    division_key: "div_a",
    data: [
      [
        {
          id: 1,
          label: "Lecture No.",
        },
        {
          id: 2,
          label: "Lecture Timing",
        },
        {
          id: 3,
          label: "Monday",
        },
        {
          id: 4,
          label: "Tuesday",
        },
        {
          id: 5,
          label: "Wednesday",
        },
        {
          id: 6,
          label: "Thursday",
        },
        {
          id: 7,
          label: "Friday",
        },
        {
          id: 8,
          label: "Saturday",
        },
      ],
      // 7:30 : 8:25
      [
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "07:30 TO 08:25",
        },
        {
          id: 3,
          label: "WAD",
          professor: "Ramchandra P",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "WAD",
          professor: "Ramchandra P",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "WAD",
          professor: "Ramchandra P",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "MAD [LAB]",
          professor: ["MJ", "Chaitali Nayka"],
          lab: ["601", "602"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "WAD [LAB]",
          professor: ["Ramchandra P", "Sheeja"],
          lab: ["603", "604"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      //  8:25 : 9:20
      [
        {
          id: 1,
          label: "2",
        },
        {
          id: 2,
          label: "08:25 TO 09:20",
        },
        {
          id: 3,
          label: " MAD",
          professor: "MJ",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "MAD",
          professor: "MJ",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: " Minor Project",
        },
      ],
      // 9:20 TO 9:30
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Short Break (09:20 TO 09:30)",
          col_span: 7,
        },
      ],
      //  9.30 TO 10.25
      [
        {
          id: 1,
          label: "3",
        },
        {
          id: 2,
          label: "09:30 TO 10:25",
        },
        {
          id: 3,
          label: "OSTF-NPTEL",
        },
        {
          id: 4,
          label: "OSTF-NPTEL",
        },
        {
          id: 5,
          label: "Minor Project",
          row_span: 2,
        },
        {
          id: 6,
          label: "Minor Project",
          row_span: 2,
        },
        {
          id: 7,
          label: "ES",
          professor: " Arul Pillai",
          classroom: "607",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          label: " AI [LAB]",
          professor: ["Prachi", "Vijaya"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          lab: ["603", "604"],
          row_span: 2,
        },
      ],
      // 10:25 - 11:20
      [
        {
          id: 1,
          label: "4",
        },
        {
          id: 2,
          label: "10:25 TO 11:20",
        },
        {
          id: 3,
          label: "PULMS Self Learning",
        },
        {
          id: 4,
          label: "ES",
          professor: "DBD",
          classroom: "604",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "PULMS Self Learning",
        },
      ],
      // 11:20 - 12:20
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Lunch Break (11:20 TO 12:20)",
          col_span: 7,
        },
      ],
      // 12:20 - 1:15
      [
        {
          id: 1,
          label: "5",
        },
        {
          id: 2,
          label: "12:20 TO 01:15",
        },
        {
          id: 3,
          label: "AI",
          professor: "Prachi",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "PULMS Self Learning",
        },
        {
          id: 5,
          label: " WAD",
          professor: ["Ramchandra P", "Sheeja"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          lab: ["603", "604"],
          row_span: 2,
        },
        {
          id: 6,
          label: "PULMS Self Learning",
        },
        {
          id: 7,
          label: "MAD [LAB]",
          professor: ["MJ", "Chaitali Nayka"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          lab: ["603", "604"],
          row_span: 2,
        },
        {
          id: 8,
          label: "AI",
          professor: "Prachi",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      //  1:15 - 2:10
      [
        {
          id: 1,
          label: "6",
        },
        {
          id: 2,
          label: "01:15 TO 02:10",
        },
        {
          id: 4,
          label: "Minor Project",
        },
        {
          id: 5,
          label: "AI",
          professor: "Prachi",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "AI",
          professor: "Prachi",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "MAD",
          professor: "MJ",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  // Division B
  {
    id: 1,
    title: "Division B",
    division_key: "div_b",
    data: [
      [
        {
          id: 1,
          label: "Lecture No.",
        },
        {
          id: 2,
          label: "Lecture Timing",
        },
        {
          id: 3,
          label: "Monday",
        },
        {
          id: 4,
          label: "Tuesday",
        },
        {
          id: 5,
          label: "Wednesday",
        },
        {
          id: 6,
          label: "Thursday",
        },
        {
          id: 7,
          label: "Friday",
        },
        {
          id: 8,
          label: "Saturday",
        },
      ],
      // 7:30 : 8:25
      [
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "07:30 TO 08:25",
        },
        {
          id: 3,
          label: "MAD",
          professor: "MJ",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "MAD",
          professor: "MJ",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "ES",
          professor: "DBD",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "Minor Project",
        },
        {
          id: 7,
          label: "MAD [LAB]",
          professor: ["MJ", "Chaitali Nayka"],
          lab: ["601", "602"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],

      //  8:25 : 9:20
      [
        {
          id: 1,
          label: "2",
        },
        {
          id: 2,
          label: "08:25 TO 09:20",
        },
        {
          id: 3,
          label: "WAD",
          professor: "FA",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "WAD",
          professor: "FA",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "WAD",
          professor: "FA",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "ES",
          professor: "DBD",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],

      // 9:20 TO 9:30
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Short Break (09:20 TO 09:30)",
          col_span: 7,
        },
      ],
      //  9.30 TO 10.25
      [
        {
          id: 1,
          label: "3",
        },
        {
          id: 2,
          label: "09:30 TO 10:25",
        },
        {
          id: 3,
          label: "Minor Project",
          row_span: 2,
        },
        {
          id: 4,
          label: "Minor Project",
          row_span: 2,
        },
        {
          id: 5,
          label: "OSTF - NPTEL",
        },
        {
          id: 6,
          label: "OSTF - NPTEL",
        },
        {
          id: 7,
          label: "Library",
        },
        {
          id: 8,
          label: "WAD [LAB]",
          professor: ["FA", "Madhav"],
          lab: ["605", "606"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],

      // 10:25 - 11:20
      [
        {
          id: 1,
          label: "4",
        },
        {
          id: 2,
          label: "10:25 TO 11:20",
        },
        {
          id: 3,
          label: "PULMS Self Learning",
        },
        {
          id: 4,
          label: "AI",
          professor: "Mehul",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "PULMS Self Learning",
        },
      ],
      // 11:20 - 12:20
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Lunch Break (11:20 TO 12:20)",
          col_span: 7,
        },
      ],
      // 12:20 - 1:15
      [
        {
          id: 1,
          label: "5",
        },
        {
          id: 2,
          label: "12:20 TO 01:15",
        },
        {
          id: 3,
          label: "PULMS (Self Learning)",
        },
        {
          id: 4,
          label: "PULMS (Self Learning)",
        },
        {
          id: 5,
          label: "MAD [LAB]",
          professor: ["MJ", "Chaitali Nayka"],
          lab: ["601", "602"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 6,
          label: "WAD [LAB]",
          professor: ["FA", "Madhav"],
          lab: ["607", "608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "AI [LAB]",
          professor: ["Mehul D", "Megha T"],
          lab: ["607", "608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 8,
          label: "MAD",
          professor: "MJ",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],

      //  1:15 - 2:10
      [
        {
          id: 1,
          label: "6",
        },
        {
          id: 2,
          label: "01:15 TO 02:10",
        },
        {
          id: 3,
          label: "AI",
          professor: "Mehul",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "AI",
          professor: "Mehul",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "AI",
          professor: "Mehul",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  //   Division C
  {
    id: 1,
    title: "Division C",
    division_key: "div_c",
    data: [
      [
        {
          id: 1,
          label: "Lecture No.",
        },
        {
          id: 2,
          label: "Lecture Timing",
        },
        {
          id: 3,
          label: "Monday",
        },
        {
          id: 4,
          label: "Tuesday",
        },
        {
          id: 5,
          label: "Wednesday",
        },
        {
          id: 6,
          label: "Thursday",
        },
        {
          id: 7,
          label: "Friday",
        },
        {
          id: 8,
          label: "Saturday",
        },
      ],
      // 7:30 : 8:25
      [
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "07:30 TO 08:25",
        },
        {
          id: 3,
          mca: {
            // label: "",
          },
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          mca: {
            // label: "",
          },
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "MAD",
          professor: "Jatin",
          classroom: "601",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          mca: {
            label: "WAD [LAB]",
            professor: "Anmol",
            lab: ["611", "612"],
          },
          // col_span: 2,
          msc_it: {},
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          mca: { label: "WAD", professor: "Anmol", classroom: "601" },
          mdc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],

      //  8:25 : 9:20
      [
        {
          id: 1,
          label: "2",
        },
        {
          id: 2,
          label: "08:25 TO 09:20",
        },
        {
          id: 3,
          label: "Minor Project",
        },
        {
          id: 4,
          label: "Minor Project",
        },
        {
          id: 5,
          mca: {
            label: "WAD",
            professor: "Anmol",
            classroom: 601,
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "OSTF - NPTEL",
        },
      ],

      // 9:20 TO 9:30
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Short Break (09:20 TO 09:30)",
          col_span: 7,
        },
      ],
      //  9.30 TO 10.25
      [
        {
          id: 1,
          label: "3",
        },
        {
          id: 2,
          label: "09:30 TO 10:25",
        },
        {
          id: 3,
          label: "Minor Project",
        },
        {
          id: 4,
          label: "MAD [LAB]",
          professor: ["Komal Bharti", "Jatin"],
          lab: ["613", "000"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 5,
          label: "Specialization AI",
          professor: "Praveen",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "MAD [LAB]",
          professor: ["Komal Bharti", "Chaitali Nayka"],
          lab: ["708", "709"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "Specialization AI",
          professor: "Praveen",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          mca: {
            // label: "",
          },
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "302",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],

      // 10:25 - 11:20
      [
        {
          id: 1,
          label: "4",
        },
        {
          id: 2,
          label: "10:25 TO 11:20",
        },
        {
          id: 3,
          mca: {
            label: "WAD",
            professor: "Anmol",
            classroom: 601,
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "MAD",
          professor: "Jatin",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },

        {
          id: 5,
          mca: {
            label: "ES",
            profesor: "DBD",
            classroom: "309",
          },
          msc_it: {
            label: "Internet Of Things",
            professor: "Akanshan Singh",
            classroom: "308",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "603 , 604",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      // 11:20 - 12:20
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Lunch Break (11:20 TO 12:20)",
          col_span: 7,
        },
      ],
      // 12:20 - 1:15
      [
        {
          id: 1,
          label: "5",
        },
        {
          id: 2,
          label: "12:20 TO 01:15",
        },
        {
          id: 3,
          label: "AI [LAB]",
          professor: ["Praveen", "Shikha B"],
          lab: ["601", "602"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 4,
          mca: {
            label: "ES",
            professor: "DBD",
            classroom: 309,
          },
          msc_it: {
            label: "React JS [LAB]",
            professor: "Uma Bharti",
            lab: ["603"],
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 5,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            lab: [605, 606, 607],
          },
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "AI",
          professor: "Praveen",
          classroom: "303",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "MAD",
          professor: "Jatin",
          classroom: "303",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          mca: {
            label: "WAD [LAB]",
            professor: "Anmol",
            lab: ["702", "703"],
          },
          // col_span: 2,
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],

      //  1:15 - 2:10
      [
        {
          id: 1,
          label: "6",
        },
        {
          id: 2,
          label: "01:15 TO 02:10",
        },
        {
          id: 3,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "303 , 304",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "Specialization AI",
          professor: "Praveen",
          classroom: "303",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  //   Divsion D
  {
    id: 1,
    title: "Division D",
    division_key: "div_d",
    data: [
      [
        { id: 1, label: "Lecture No." },
        { id: 2, label: "Lecture Timing" },
        { id: 3, label: "Monday" },
        { id: 4, label: "Tuesday" },
        { id: 5, label: "Wednesday" },
        { id: 6, label: "Thursday" },
        { id: 7, label: "Friday" },
        { id: 8, label: "Saturday" },
      ],
      [
        { id: 1, label: "1" },
        { id: 2, label: "07:30 TO 08:25" },
        {
          id: 3,
          mca: {
            label: "WAD",
            professor: "Anmol",
            classroom: "304",
          },
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          mca: {
            label: "WAD",
            professor: "Anmol",
            classroom: "304",
          },
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "302",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "MAD",
          professor: "HP",
          classroom: "304",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "MAD [LAB]",
          professor: ["HP"],
          lab: ["603", "604"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "ES",
          professor: "DBD",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "2" },
        { id: 2, label: "08:25 TO 09:20" },
        {
          id: 3,
          label: "MAD",
          professor: "HP",
          classroom: "304",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "MAD",
          professor: "HP",
          classroom: "304",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "ES",
          professor: "DBD",
          classroom: "605",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "OSTF - NPTEL",
        },
      ],
      [
        { id: 1, label: "Recess" },
        {
          id: 2,
          label: "Short Break (09:20 TO 09:30)",
          col_span: 7,
        },
      ],
      [
        { id: 1, label: "3" },
        { id: 2, label: "09:30 TO 10:25" },
        {
          id: 3,
          label: "MAD [LAB]",
          professor: ["HP", "Jatin"],
          lab: ["702", "703"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 4,
          label: "Minor",
          row_span: 2,
        },
        {
          id: 5,
          label: "BDA",
          professor: "Sonali Kharade",
          classroom: "601",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          mca: {
            label: "WAD [LAB]",
            professor: ["Anmol", "Nirmit Shah"],
            lab: ["611", "612"],
          },
          // col_span: 2,
          msc_it: {},
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "BDA",
          professor: "Sonali Kharade",
          classroom: "302",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          mca: {},
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "302",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "4" },
        { id: 2, label: "10:25 TO 11:20" },
        {
          id: 3,
          label: "Minor Project",
        },
        {
          id: 4,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "308 , 309",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "603 , 604",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Recess" },
        {
          id: 2,
          label: "Lunch Break (11:20 TO 12:20)",
          col_span: 7,
        },
      ],
      [
        { id: 1, label: "5" },
        { id: 2, label: "12:20 TO 01:15" },
        {
          id: 3,
          label: "BDA [LAB]",
          professor: ["Sonali Kharade", "Vipul Gamit"],
          lab: ["603", "604"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 4,
          mca: {
            label: "WAD [LAB]",
            professor: ["Anmol", "Nirmit Shah"],
            lab: ["607", "608"],
          },
          // col_span: 2,
          msc_it: {},
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          mca: {},
          msc_it: {
            professor: "Akanshan Singh",
            label: "Elective - Internet of Things / STQA [LAB]",
            lab: ["605", "606", "607"],
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 6,
          label: "BDA",
          professor: "Sonali Kharade",
          classroom: "304",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },

        {
          id: 8,
          mca: {
            label: "WAD",
            professor: "Anmol",
            classroom: 307,
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "Library",
        },
      ],
      [
        { id: 1, label: "6" },
        { id: 2, label: "01:15 TO 02:10" },
        {
          id: 3,
          mca: {},
          msc_it: {
            label: "Elective - Internet of Things / STQA [LAB]",
            professor: "Akanshan Singh",
            classroom: "303, 304",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "BDA",
          professor: "Sonali Kharade",
          classroom: "304",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "OSTF - NPTEL",
        },
      ],
    ],
  },
  //   Divison E
  {
    id: 1,
    title: "Division E",
    division_key: "div_e",
    data: [
      [
        { id: 1, label: "Lecture No." },
        { id: 2, label: "Lecture Timing" },
        { id: 3, label: "Monday" },
        { id: 4, label: "Tuesday" },
        { id: 5, label: "Wednesday" },
        { id: 6, label: "Thursday" },
        { id: 7, label: "Friday" },
        { id: 8, label: "Saturday" },
      ],
      [
        { id: 1, label: "1" },
        { id: 2, label: "07:30 to 08:25" },
        {
          id: 3,
          mca: {
            label: "WAD",
            professor: "FA",
            classroom: "305",
          },
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          mca: {
            label: "WAD",
            professor: "FA",
            classroom: "305",
          },
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          mca: {
            label: "WAD",
            professor: "FA",
            classroom: "305",
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          mca: {
            label: "WAD [LAB]",
            professor: ["FA", "Dr. Ramachandra P"],
            lab: ["605", "606"],
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "MAD [LAB]",
          professor: ["HP", "Jatin"],
          lab: ["607", "608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "2" },
        { id: 2, label: "08:25 to 09:20" },
        {
          id: 3,
          label: "Minor Project",
        },
        {
          id: 4,
          label: "Minor Project",
        },
        {
          id: 5,
          label: "MAD",
          professor: "HP",
          classroom: "305",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Short Break" },
        {
          id: 2,
          label: "09:20 TO 9:30",
          col_span: 7,
        },
      ],
      [
        { id: 1, label: "3" },
        { id: 2, label: "09:30 to 10:25" },
        {
          id: 3,
          label: "ES",
          professor: "Arul Pillai",
          classroom: "607",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "ES",
          professor: "Arul Pillai",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "CC",
          professor: "Arun U",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "MAD [LAB]",
          professor: ["HP", "Dampy"],
          lab: ["702", "703"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "CC",
          professor: "Arun U",
          classroom: "305",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "302",
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "4" },
        { id: 2, label: "10:25 to 11:20" },
        {
          id: 3,
          label: "OSTF - NPTEL",
        },
        {
          id: 4,
          label: "MAD",
          professor: "HP",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "OSTF - NPTEL",
        },

        {
          id: 7,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "308 , 309",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "603 , 604",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Recess" },
        {
          id: 2,
          label: "11:20 to 12:20",
          col_span: 7,
        },
      ],
      [
        { id: 1, label: "5" },
        { id: 2, label: "12:20 to 01:15" },
        {
          id: 3,
          label: "CC [LAB]",
          professor: ["Arun U", "Dhruv Shah"],
          lab: ["605", "606"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 4,
          msc_it: {
            label: "React JS [LAB]",
            professor: "Uma Bharti",
            lab: ["603"],
          },
          mca: {},
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            lab: ["605", "606", "607"],
          },
          // col_span: 2,
          mca: {},
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "CC",
          professor: "Arun U",
          classroom: "305",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "MAD",
          professor: "HP",
          classroom: "000",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          mca: {
            label: "WAD [LAB]",
            professor: "FA, Dr. Ramachandra P",
            lab: ["606", "607"],
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "6" },
        { id: 2, label: "01:15 to 02:10" },
        {
          id: 5,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "303 , 304",
            cellClassName: "text-slate-900 dark:!text-gray-300",
          },
        },
        {
          id: 6,
          label: "CC",
          professor: "Arun U",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  // Divsion F
  {
    id: 1,
    title: "Division F",
    division_key: "div_f",
    data: [
      [
        { id: 1, label: "Lecture No." },
        { id: 2, label: "Lecture Timing" },
        { id: 3, label: "Monday" },
        { id: 4, label: "Tuesday" },
        { id: 5, label: "Wednesday" },
        { id: 6, label: "Thursday" },
        { id: 7, label: "Friday" },
        { id: 8, label: "Saturday" },
      ],
      [
        { id: 1, label: "1" },
        { id: 2, label: "07:30 to 08:25" },
        {
          id: 3,
          label: "MAD",
          professor: "RS",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "MAD",
          professor: "RS",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "WAD",
          professor: "Anmol",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "ES",
          professor: "DBD",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "Minor Project",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "2" },
        { id: 2, label: "08:25 to 09:20" },
        {
          id: 3,
          label: "WAD",
          professor: "Anmol",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "WAD",
          professor: "Anmol",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "MAD",
          professor: "RS",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "PULMS(Self Learning)",
        },
      ],
      [
        { id: 1, label: "Short Break" },
        {
          id: 2,
          label: "09:20 TO 9:30",
          col_span: 7,
        },
      ],
      [
        { id: 1, label: "3" },
        { id: 2, label: "09:30 to 10:25" },
        {
          id: 3,
          label: "Library",
        },
        {
          id: 4,
          label: "MAD [LAB]",
          professor: ["RS", "Himanshu Kumar"],
          lab: ["607", "608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },

        {
          id: 5,
          label: "Minor Project",
          row_span: 2,
        },
        {
          id: 6,
          label: "Minor Project",
          row_span: 2,
        },
        {
          id: 7,
          label: "WAD [LAB]",
          professor: ["Anmol", "Nirmit Shah"],
          lab: ["706", "707"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 8,
          label: "MAD [LAB]",
          professor: ["RS", "Himanshu Kumar"],
          lab: ["607, 608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "4" },
        { id: 2, label: "10:25 to 11:20" },
        {
          id: 3,
          label: "ES",
          professor: "DBD",
          classroom: "602",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Recess" },
        {
          id: 2,
          label: "11:20 to 12:20",
          col_span: 7,
        },
      ],
      [
        { id: 1, label: "5" },
        { id: 2, label: "12:20 to 01:15" },
        {
          id: 3,
          label: "OSTF - NPTEL",
        },
        {
          id: 4,
          label: "OSTF - NPTEL",
        },
        {
          id: 5,
          label: "WAD [LAB]",
          professor: ["Anmol", "Nirmit Shah"],
          lab: ["608", "609"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 6,
          label: "CSF [LAB]",
          professor: ["Aniket", "Sohil P"],
          lab: ["709", "710"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "PULMS (Self Learning)",
        },
      ],
      [
        { id: 1, label: "6" },
        { id: 2, label: "01:15 to 02:10" },
        {
          id: 3,
          label: "CSF",
          professor: "Aniket",
          classroom: "304",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "CSF",
          professor: "Aniket",
          classroom: "303",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "CSF",
          professor: "Aniket",
          classroom: "603",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          label: "CSF",
          professor: "Aniket",
          classroom: "602",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  // Division G
  {
    id: 1,
    title: "Division G",
    division_key: "div_g",
    data: [
      [
        { id: 1, label: "Lecture No." },
        { id: 2, label: "Lecture Timing" },
        { id: 3, label: "Monday" },
        { id: 4, label: "Tuesday" },
        { id: 5, label: "Wednesday" },
        { id: 6, label: "Thursday" },
        { id: 7, label: "Friday" },
        { id: 8, label: "Saturday" },
      ],
      [
        { id: 1, label: "1" },
        { id: 2, label: "07:30 to 08:25" },
        {
          id: 3,
          mca: {},
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          mca: {},
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "Minor Project",
        },
        {
          id: 6,
          label: "MAD [LAB]",
          professor: "Jatin",
          lab: ["607, 608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          mca: { label: "WAD [LAB]", professor: ["FA"], lab: ["609, 610"] },
          msc_it: {},
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "2" },
        { id: 2, label: "08:25 to 09:20" },
        {
          id: 3,
          label: "MAD",
          professor: "Jatin",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "MAD",
          professor: "Jatin",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "MAD",
          professor: "Jatin",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Short Break" },
        { id: 2, label: "09:20 TO 9:30", col_span: 7 },
      ],
      [
        { id: 1, label: "3" },
        { id: 2, label: "09:30 to 10:25" },
        {
          id: 3,
          label: "ES",
          professor: "DBD",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "ES",
          professor: "DBD",
          classroom: "301",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "CSF",
          professor: "Lakshman Prasad",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          mca: { label: "WAD [LAB]", professor: "FA", lab: ["706, 707"] },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "CSF",
          professor: "Lakshman Prasad",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "302",
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "4" },
        { id: 2, label: "10:25 to 11:20" },
        {
          id: 3,
          mca: {
            label: "WAD",
            professor: "FA",
            classroom: "601",
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          mca: {
            label: "WAD",
            professor: "FA",
            classroom: "309",
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "Minor Project",
        },
        {
          id: 6,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "308 , 309",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "603 , 604",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Recess" },
        { id: 2, label: "11:20 to 12:20", col_span: 7 },
      ],
      [
        { id: 1, label: "5" },
        { id: 2, label: "12:20 to 01:15" },
        {
          id: 3,
          label: "CSF [LAB]",
          professor: ["Lakshman Prasad Latua, Aesh Gada"],
          lab: ["607, 608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 4,
          mca: {
            label: "WAD [LAB]",
            professor: "FA",
            lab: ["609", "610"],
          },
          // col_span: 2,
          msc_it: {
            label: "React JS [LAB]",
            professor: "Uma Bharti",
            lab: ["603"],
          },
          row_span: 2,
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            lab: ["605", "606", "607"],
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 6,
          label: "CSF",
          professor: "Lakshman Prasad",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "WAD",
          professor: "FA",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          label: " MAD [LAB]",
          professor: "Komal Bharti",
          lab: ["608", "609"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "6" },
        { id: 2, label: "01:15 to 02:10" },
        {
          id: 3,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "303 , 304",
            cellClassName: "text-slate-900 dark:!text-gray-300",
          },
        },
        {
          id: 4,
          label: "CSF",
          professor: "Lakshman Prasad",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  //   Division H
  {
    id: 4,
    title: "Division H",
    division_key: "div_h",
    data: [
      [
        { id: 1, label: "Lecture No." },
        { id: 2, label: "Lecture Timing" },
        { id: 3, label: "Monday" },
        { id: 4, label: "Tuesday" },
        { id: 5, label: "Wednesday" },
        { id: 6, label: "Thursday" },
        { id: 7, label: "Friday" },
        { id: 8, label: "Saturday" },
      ],
      [
        { id: 1, label: "1" },
        { id: 2, label: "07:30 to 08:25" },
        {
          id: 3,
          label: "FSW",
          professor: "Dipti Sharma",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "FSW",
          professor: "Dipti Sharma",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "FSW",
          professor: "Dipti Sharma",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "MAD",
          professor: "Renuka",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "Minor Project",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "2" },
        { id: 2, label: "08:25 to 09:20" },
        {
          id: 3,
          label: "WAD",
          professor: "Himanshu Kumar Yadav",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "WAD",
          professor: "Himanshu Kumar Yadav",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "WAD",
          professor: "Himanshu Kumar Yadav",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "OSTF-NPTEL",
        },
      ],
      [
        { id: 1, label: "Short Break" },
        { id: 2, label: "09:20 TO 9:30", col_span: 7 },
      ],
      [
        { id: 1, label: "3" },
        { id: 2, label: "09:30 to 10:25" },
        {
          id: 3,
          label: "PULMS (Self Learning)",
        },
        {
          id: 4,
          label: "Library",
        },
        {
          id: 5,
          label: "ES",
          professor: "Arul Pillai",
          classroom: "306",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "Minor Project",
          row_span: 2,
        },
        {
          id: 7,
          label: "Library",
        },
        {
          id: 8,
          label: "MAD",
          professor: "Renuka Parmar",
          classroom: "603",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "4" },
        { id: 2, label: "10:25 to 11:20" },
        {
          id: 3,
          label: "ES",
          professor: "Arul Pillai",
          classroom: "607",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "PULMS (Self Learning)",
        },
        {
          id: 5,
          label: "PULMS (Self Learning)",
        },
        {
          id: 6,
          label: "PULMS (Self Learning)",
        },
        {
          id: 7,
          label: "MAD",
          professor: "Renuka Parmar",
          classroom: "603",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Recess" },
        { id: 2, label: "11:20 to 12:20", col_span: 7 },
      ],
      [
        { id: 1, label: "5" },
        { id: 2, label: "12:20 to 01:15" },
        {
          id: 3,
          label: "OSTF - NPTEL",
        },
        {
          id: 4,
          label: "MAD [LAB]",
          professor: ["Renuka Parmar", "Ankit Das"],
          lab: ["611", "612"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 5,
          label: "MAD [LAB]",
          professor: ["Renuka Parmar", "Ankit Das"],
          lab: ["611", "612"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 6,
          label: "WAD [LAB]",
          professor: ["Himanshu Kumar Yadav", "Sheeja"],
          lab: ["611", "612"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "WAD [LAB]",
          professor: ["Himanshu Kumar Yadav", "Sheeja"],
          lab: ["607", "608"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 8,
          label: "FSW [LAB]",
          professor: ["Dipti Sharma", "Sathwik"],
          lab: ["610", "611"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "6" },
        { id: 2, label: "01:15 to 02:10" },
        {
          id: 3,
          label: "FSW",
          professor: "Dipti Sharma",
          classroom: "309",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  //   Divison I
  {
    id: 1,
    title: "Division I",
    division_key: "div_i",
    data: [
      [
        { id: 1, label: "Lecture No." },
        { id: 2, label: "Lecture Timing" },
        { id: 3, label: "Monday" },
        { id: 4, label: "Tuesday" },
        { id: 5, label: "Wednesday" },
        { id: 6, label: "Thursday" },
        { id: 7, label: "Friday" },
        { id: 8, label: "Saturday" },
      ],
      [
        { id: 1, label: "1" },
        { id: 2, label: "07:30 to 08:25" },
        {
          id: 3,
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          mca: {
            label: "WAD",
            professor: "Himanshu Kumar Yadav",
            classroom: "309",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "303",
          },
          mca: {
            label: "WAD",
            professor: "Himanshu Kumar Yadav",
            classroom: "309",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          mca: {
            label: "WAD",
            professor: "Himanshu Kumar Yadav",
            classroom: "309",
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          mca: {
            label: "WAD [LAB]",
            professor: ["Himanshu Kumar Yadav", "Sheeja"],
            lab: ["609", "610"],
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 7,
          label: "MAD [LAB]",
          professor: ["Pritam Samanta", "Gaurav"],
          lab: ["611", "612"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "2" },
        { id: 2, label: "08:25 to 09:20" },

        {
          id: 3,
          label: "MAD",
          professor: "Pritam Samanta",
          classroom: "309",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "MAD",
          professor: "Pritam Samanta",
          classroom: "309",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 5,
          label: "MAD",
          professor: "Pritam Samanta",
          classroom: "309",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Short Break" },
        { id: 2, label: "09:20 TO 9:30", col_span: 7 },
      ],
      [
        { id: 1, label: "3" },
        { id: 2, label: "09:30 to 10:25" },
        {
          id: 3,
          mca: {
            label: "WAD [LAB]",
            professor: ["Himanshu Kumar Yadav", "Sheeja"],
            lab: ["704", "705"],
          },
          msc_it: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 4,
          label: "OSTF - NPTEL",
        },
        {
          id: 5,
          label: "FSW",
          professor: "Deepti",
          classroom: "309",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 6,
          label: "ES",
          professor: "Arul Pillai",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          label: "FSW",
          professor: "Deepti",
          classroom: "606",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 8,
          msc_it: {
            label: "React JS",
            professor: "Uma Bharti",
            classroom: "302",
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "4" },
        { id: 2, label: "10:25 to 11:20" },
        {
          id: 3,
          label: "ES",
          professor: "Arul Pillai",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "Minor Project",
        },
        {
          id: 5,
          label: "Minor Project",
        },
        {
          id: 6,
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "308, 309",
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 7,
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "603, 604",
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
      [
        { id: 1, label: "Recess" },
        { id: 2, label: "11:20 to 12:20", col_span: 7 },
      ],
      [
        { id: 1, label: "5" },
        { id: 2, label: "12:20 to 01:15" },
        {
          id: 3,
          label: "FSW [LAB]",
          professor: ["Deepti", "Ankit Das"],
          lab: ["609", "610", "611"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 4,
          msc_it: {
            label: "React JS [LAB]",
            professor: "Uma Bharti",
            lab: ["603"],
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 5,
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            lab: ["605", "606", "607"],
          },
          mca: {},
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
        {
          id: 6,
          label: "FSW",
          professor: "Deepti",
          classroom: "307",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },

        {
          id: 7,
          label: "OSTF - NPTEL",
        },
        {
          id: 8,
          label: "MAD [LAB]",
          professor: ["Pritam Samanta", "Renuka"],
          lab: ["612", "613"],
          cellClassName: "text-slate-900 dark:!text-gray-300",
          row_span: 2,
        },
      ],
      [
        { id: 1, label: "6" },
        { id: 2, label: "01:15 to 02:10" },
        {
          id: 3,
          mca: {},
          msc_it: {
            label: "Internet Of Things / STQA",
            professor: "Akanshan Singh",
            classroom: "303 , 304",
          },
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
        {
          id: 4,
          label: "FSW",
          professor: "Deepti",
          classroom: "308",
          cellClassName: "text-slate-900 dark:!text-gray-300",
        },
      ],
    ],
  },
  //   Division J
];
