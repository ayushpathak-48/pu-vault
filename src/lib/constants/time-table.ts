export const time_table = [
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
      [
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "07.30 TO 08.30",
        },
        {
          id: 3,
          label: "DCN",
          professor: "Sonali Gupta",
          classroom: "305",
          cellClassName: "text-purple-500",
        },
        {
          id: 4,
          label: "Face",
          professor: "Harshad",
          classroom: "305",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: "DCN",
          professor: "Sonali Gupta",
          classroom: "305",
          cellClassName: "text-purple-500",
        },
        {
          id: 6,
          label: "Specialization AI",
          professor: "Mehul D",
          classroom: "305",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "CA",
          professor: " Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "DCN",
          professor: "Sonali Gupta",
          classroom: "305",
          cellClassName: "text-purple-500",
        },
      ],
      [
        {
          id: 1,
          label: "2",
        },
        {
          id: 2,
          label: "08.30 TO 09.30",
        },
        {
          id: 3,
          label: "Specialization AI",
          professor: "Mehul D",
          classroom: "305",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "AJP",
          professor: "Tanmay",
          classroom: "305",
          cellClassName: "text-red-500",
        },
        {
          id: 5,
          label: "Specialization AI",
          professor: "Mehul D",
          classroom: "305",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "AJP",
          professor: "Tanmay",
          classroom: "305",
          cellClassName: "text-red-500",
        },
        {
          id: 7,
          label: "Specialization AI",
          professor: "Mehul D",
          classroom: "305",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "Library",
          cellClassName: "text-sm",
        },
      ],
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Short Break (09:30 TO 09:45)",
          col_span: 7,
        },
      ],
      [
        {
          id: 1,
          label: "3",
        },
        {
          id: 2,
          label: "09.45 TO 10.45",
        },
        {
          id: 3,
          label: "DCN",
          professor: ["Sonali Gupta", "Komal B"],
          lab: ["709", "710"],
          cellClassName: "text-purple-500",
          row_span: 2,
        },
        {
          id: 4,
          label: "CDC ENGLISH & MATHEMATICAL APTITUDE",
          professor: "Arul P",
          classroom: "606",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: "CA",
          professor: " Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "CG",
          professor: "MT",
          classroom: "602",
          cellClassName: "text-orange-500",
        },
        {
          id: 7,
          label: "Value Added",
          cellClassName: "text-[#11131e]",
          row_span: 2,
        },
        {
          id: 8,
          label: "CG",
          professor: "MT",
          classroom: "305",
          cellClassName: "text-orange-500",
        },
      ],
      [
        {
          id: 1,
          label: "4",
        },
        {
          id: 2,
          label: "10.45 TO 11.45",
        },
        {
          id: 3,
          label: "CG",
          professor: "MT",
          classroom: "606",
          cellClassName: "text-orange-500",
        },
        {
          id: 4,
          label: "PULMS Self Learning",
        },
        {
          id: 5,
          label: "AJP",
          professor: "Tanmay",
          classroom: "305",
          cellClassName: "text-red-500",
        },
        {
          id: 6,
          label: "DCN",
          professor: "Sonali Gupta",
          classroom: "305",
          cellClassName: "text-purple-500",
        },
      ],
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Lunch Break (11:45 TO 12:45)",
          col_span: 7,
        },
      ],
      [
        {
          id: 1,
          label: "5",
        },
        {
          id: 2,
          label: "12.45 TO 01.35",
        },
        {
          id: 3,
          label: "Specialization AI",
          professor: ["Mehul D", "Nirmit Shah"],
          cellClassName: "text-[#11131e]",
          lab: ["612", "613"],
          row_span: 2,
        },
        {
          id: 4,
          label: "PULMS Self Learning",
        },
        {
          id: 5,
          label: "AJP",
          professor: ["Mehul D", "Nirmit Shah"],
          cellClassName: "text-[#11131e]",
          lab: ["606", "607"],
          row_span: 2,
        },
        {
          id: 6,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "AJP",
          professor: ["Mehul D", "Nirmit Shah"],
          cellClassName: "text-[#11131e]",
          lab: ["606", "607"],
          row_span: 2,
        },
        {
          id: 8,
          label: "CG",
          professor: ["MT", "CB"],
          cellClassName: "text-orange-500",
          lab: ["603", "604"],
          row_span: 2,
        },
      ],
      [
        {
          id: 1,
          label: "6",
        },
        {
          id: 2,
          label: "01.35 TO 02.25",
        },

        {
          id: 4,
          label: "Library",
        },
        {
          id: 5,
          label: "Library",
        },
      ],
    ],
  },
  // Division B
  {
    id: 2,
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
      [
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "07.30 TO 08.30",
        },
        {
          id: 3,
          label: "CG",
          professor: "Prof. Preeti",
          classroom: "307",
          cellClassName: "text-purple-500",
        },
        {
          id: 4,
          label: "CG LAB",
          professor: "Prof. Preeti, Prof. Ghanshyam",
          lab: ["603", "604"],
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: "DCN",
          professor: "Prof. Komal B",
          classroom: "307",
          cellClassName: "text-purple-500",
        },
        {
          id: 6,
          label: "CG",
          professor: "Prof. Preeti",
          classroom: "307",
          cellClassName: "text-purple-500",
        },
        {
          id: 7,
          label: "DCN",
          professor: "Prof. Komal B",
          classroom: "306",
          cellClassName: "text-purple-500",
        },
        {
          id: 8,
          label: "PULMS Self Learning",
          cellClassName: "text-[#11131e]",
        },
      ],
      [
        {
          id: 1,
          label: "2",
        },
        {
          id: 2,
          label: "08.30 TO 09.30",
        },
        {
          id: 3,
          label: "Specialization AI",
          professor: "Prof. Rinkal S.",
          classroom: "307",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "CG LAB",
          professor: "Prof. Preeti, Dr. Ghanshyam",
          lab: ["603", "604"],
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: "Specialization AI",
          professor: "Prof. Rinkal S.",
          classroom: "307",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "Specialization AI",
          professor: "Prof. Rinkal S.",
          classroom: "307",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "Specialization AI",
          professor: "Prof. Rinkal S.",
          classroom: "306",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "Library",
          cellClassName: "text-sm",
        },
      ],
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Short Break (09:30 TO 09:45)",
          col_span: 7,
        },
      ],
      [
        {
          id: 1,
          label: "3",
        },
        {
          id: 2,
          label: "09.45 TO 10.45",
        },
        {
          id: 3,
          label: "CA",
          professor: "Prof. Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "DCN LAB",
          professor: "Prof. Komal B, Prof. Sheeja",
          lab: ["712", "713"],
          cellClassName: "text-purple-500",
        },
        {
          id: 5,
          label: "CA",
          professor: "Prof. Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "Library",
          cellClassName: "txt-sm",
        },
        {
          id: 7,
          label: "AJP LAB",
          professor: "Prof. Rinku, Prof. Arun",
          lab: ["702", "703"],
          cellClassName: "text-purple-500",
        },
        {
          id: 8,
          label: "DCN",
          professor: "Prof. Komal B.",
          cellClassName: "text-[#11131e]",
        },
      ],
      [
        {
          id: 1,
          label: "4",
        },
        {
          id: 2,
          label: "10.45 TO 11.45",
        },
        {
          id: 3,
          label: "PULMS Self Learning",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "DCN LAB",
          professor: "Prof. Komal B, Prof. Sheeja",
          lab: ["712", "713"],
          cellClassName: "text-purple-500",
        },
        {
          id: 5,
          label: "PULMS Self Learning",
          cellClassName: "text-red-500",
        },
        {
          id: 6,
          label: "CDC English & Mathematical Aptitude",
          professor: "Prof. Arul P",
          classroom: "603",
          cellClassName: "text-purple-500",
        },
        {
          id: 7,
          label: "AJP LAB",
          professor: "Prof. Rinku, Prof. Arun",
          lab: ["702", "703"],
          cellClassName: "text-purple-500",
        },
        {
          id: 8,
          label: "CG",
          professor: "Prof. Preeti",
          classroom: "307",
          cellClassName: "text-purple-500",
        },
      ],
      [
        {
          id: 1,
          label: "Recess",
        },
        {
          id: 2,
          label: "Lunch Break (11:45 TO 12:45)",
          col_span: 7,
        },
      ],
      [
        {
          id: 1,
          label: "5",
        },
        {
          id: 2,
          label: "12.45 TO 01.35",
        },
        {
          id: 3,
          label: "AJP Lab",
          professor: "Prof. Rinku P., Prof. Arun U.",
          lab: ["610", "611"],
          cellClassName: "text-red-500",
        },
        {
          id: 4,
          label: "Specialization AI Lab",
          professor: "Prof. Rinkal S., Prof. Niharika",
          lab: ["708", "709"],
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: "Value Added",
          cellClassName: "txt-sm",
        },
        {
          id: 6,
          label: "AJP",
          professor: "Prof. Rinku P.",
          classroom: "307",
          cellClassName: "text-red-500",
        },
        {
          id: 7,
          label: "AJP",
          professor: "Prof. Rinku P.",
          classroom: "307",
          cellClassName: "text-red-500",
        },
        {
          id: 8,
          label: "AJP",
          professor: "Prof. Rinku P.",
          classroom: "307",
          cellClassName: "text-red-500",
        },
      ],
      [
        {
          id: 1,
          label: "6",
        },
        {
          id: 2,
          label: "01.35 TO 02.25",
        },
        {
          id: 3,
          label: "AJP Lab",
          professor: "Prof. Rinku P., Prof. Arun U.",
          lab: ["610", "611"],
          cellClassName: "text-red-500",
        },
        {
          id: 4,
          label: "Specialization AI Lab",
          professor: "Prof. Rinkal S., Prof. Niharika",
          lab: ["708", "709"],
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: "Value Added",
          cellClassName: "text-sm",
        },
        {
          id: 6,
          label: "Face",
          professor: "Harshad",
          classroom: "304",
          cellClassName: "text-sm",
        },
        {
          id: 7,
          label: "Library",
          cellClassName: "text-sm",
        },
        {
          id: 8,
          label: "CA",
          professor: "Prof. Smarika Rai",
          classroom: "307",
          cellClassName: "text-sm",
        },
      ],
    ],
  },
  //
];
