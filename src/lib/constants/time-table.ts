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
      // 7:30 : 8:30
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
          label: " AI",
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
          label: "PULMS Self Learning",
        },
      ],
      //  8:30 : 9:30
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
          label: " AI",
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
          label: " AI",
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
          label: " AI",
          professor: "Mehul D",
          classroom: "305",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "Library",
        },
      ],
      // 9:30 TO 9:45
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
      //  9.45 TO 10.45
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
      // 10:45 - 11:45
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
      // 11:45 - 12:45
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
      // 12:45 - 1:35
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
          label: " AI",
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
      //  1:35 - 2:25
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
      //  7:30 - 8:30
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
          professor: "Preeti",
          classroom: "307",
          cellClassName: "text-orange-500",
        },
        {
          id: 4,
          label: "CG LAB",
          professor: [" Preeti, Ghanshyam"],
          lab: ["603", "604"],
          cellClassName: "text-orange-500",
          row_span: 2,
        },
        {
          id: 5,
          label: "DCN",
          professor: "Komal B",
          classroom: "307",
          cellClassName: "text-purple-500",
        },
        {
          id: 6,
          label: "CG",
          professor: "Preeti",
          classroom: "307",
          cellClassName: "text-orange-500",
        },
        {
          id: 7,
          label: "DCN",
          professor: "Komal B",
          classroom: "306",
          cellClassName: "text-purple-500",
        },
        {
          id: 8,
          label: "PULMS Self Learning",
        },
      ],
      //  8:30 - 9:30
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
          label: " AI",
          professor: "Rinkal S.",
          classroom: "307",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: " AI",
          professor: "Rinkal S.",
          classroom: "307",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: " AI",
          professor: "Rinkal S.",
          classroom: "307",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: " AI",
          professor: "Rinkal S.",
          classroom: "306",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "Library",
        },
      ],
      //  9:30 - 9:45
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
      //  9:45 - 10:45
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
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "DCN LAB",
          professor: ["Komal B, Sheeja"],
          lab: ["712", "713"],
          cellClassName: "text-purple-500",
          row_span: 2,
        },
        {
          id: 5,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "Library",
        },
        {
          id: 7,
          label: "AJP LAB",
          professor: ["Rinku, Arun"],
          lab: ["702", "703"],
          cellClassName: "text-red-500",
          row_span: 2,
        },
        {
          id: 8,
          label: "DCN",
          professor: "Komal B.",
          classroom: "307",
          cellClassName: "text-purple-500",
        },
      ],
      // 10:45 - 11:45
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
        },
        {
          id: 4,
          label: "PULMS Self Learning",
        },
        {
          id: 5,
          label: "CDC English & Mathematical Aptitude",
          professor: "Arul P",
          classroom: "603",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "CG",
          professor: "Preeti",
          classroom: "307",
          cellClassName: "text-orange-500",
        },
      ],
      // 11:45 - 12:45
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
      // 12:45 -  1:35
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
          professor: ["Rinku P., Arun U."],
          lab: ["610", "611"],
          cellClassName: "text-red-500",
          row_span: 2,
        },
        {
          id: 4,
          label: " AI Lab",
          professor: ["Rinkal S., Niharika"],
          lab: ["708", "709"],
          cellClassName: "text-[#11131e]",
          row_span: 2,
        },
        {
          id: 5,
          label: "Value Added",
          row_span: 2,
        },
        {
          id: 6,
          label: "AJP",
          professor: "Rinku P.",
          classroom: "307",
          cellClassName: "text-red-500",
        },
        {
          id: 7,
          label: "AJP",
          professor: "Rinku P.",
          classroom: "306",
          cellClassName: "text-red-500",
        },
        {
          id: 8,
          label: "AJP",
          professor: "Rinku P.",
          classroom: "307",
          cellClassName: "text-red-500",
        },
      ],
      // 1:35 - 2:25
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
          label: "Face",
          professor: "Harshad",
          classroom: "304",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "Library",
        },
        {
          id: 8,
          label: "CA",
          professor: "Smarika Rai",
          classroom: "307",
          cellClassName: "text-[#11131e]",
        },
      ],
    ],
  },
  // Division - C
  {
    id: 3,
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
      //  7:30 - 8:30
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
          label: "AJP",
          professor: "Honey",
          classroom: "308",
          cellClassName: "text-red-500",
        },
        {
          id: 4,
          label: "DCN",
          professor: "Sheeja C",
          classroom: "308",
          cellClassName: "text-purple-500",
        },
        {
          id: 5,
          label: "AI",
          professor: "Nirmit Shah",
          classroom: "308",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "AI",
          professor: "Nirmit Shah",
          classroom: "308",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "AJP",
          professor: "Honey",
          classroom: "308",
          cellClassName: "text-red-500",
        },
        {
          id: 8,
          label: "Self Learning",
        },
      ],
      // 8:30 - 9:30
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
          label: "CA",
          professor: "Smarika Rai",
          classroom: "308",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "AJP",
          professor: "Honey",
          classroom: "308",
          cellClassName: "text-red-500",
        },
        {
          id: 5,
          label: "CG",
          professor: "Dampy",
          classroom: "308",
          cellClassName: "text-orange-500",
        },
        {
          id: 6,
          label: "CG",
          professor: "Dampy",
          classroom: "308",
          cellClassName: "text-orange-500",
        },
        {
          id: 7,
          label: "DCN",
          professor: "Sheeja C",
          classroom: "308",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "Library",
        },
      ],
      //  9:30 - 9:45
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
      // 9:45 - 10:45
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
          label: "AI Lab",
          professor: ["Nirmit Shah", "Prachi M."],
          lab: ["706", "707"],
          cellClassName: "text-[#11131e]",
          row_span: 2,
        },
        {
          id: 4,
          label: "Value Added Lab",
          lab: ["708", "709"],
          row_span: 2,
        },
        {
          id: 5,
          label: "AJP Lab",
          professor: ["Honey P.", "Arun U."],
          lab: ["706", "707"],
          cellClassName: "text-red-500",
          row_span: 2,
        },
        {
          id: 6,
          label: "Library",
        },
        {
          id: 7,
          label: "DCN",
          professor: ["Sheeja C.", "Mayank P."],
          lab: ["708", "709"],
          cellClassName: "text-purple-500",
          row_span: 2,
        },
        {
          id: 8,
          label: "DCN",
          professor: "Sheeja C",
          classroom: "308",
          cellClassName: "text-purple-500",
        },
      ],
      // 10:45 - 11:45
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
          professor: "Dampy",
          classroom: "306",
          cellClassName: "text-orange-500",
        },
        {
          id: 4,
          label: "AI",
          professor: "Nirmit Shah",
          classroom: "308",
          cellClassName: "text-[#11131e]",
        },
      ],
      //  11:45 - 12:45
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
      // 12:45 - 1:35
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
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "AJP Lab",
          professor: ["Honey P.", "Arun U."],
          lab: ["712", "713"],
          cellClassName: "text-red-500",
          row_span: 2,
        },
        {
          id: 5,
          label: "CG Lab",
          professor: ["Dampy", "Preeti"],
          lab: ["704", "705"],
          cellClassName: "text-orange-500",
        },
        {
          id: 6,
          label: "PULMS Self Learning",
        },
        {
          id: 7,
          label: "FACE",
          professor: "Harshad",
          classroom: "603",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "CG",
          professor: "Dampy",
          classroom: "308",
          cellClassName: "text-orange-500",
        },
      ],
      // 1:35 - 2:25
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
          label: "CDC English & Mathematical Aptitude",
          professor: "Arul P.",
          classroom: "605",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          label: "CA",
          professor: "Samika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          label: "PULMS Self Learning",
        },
        {
          id: 6,
          label: "CA",
          professor: "Samika Rai",
          classroom: "308",
          cellClassName: "text-[#11131e]",
        },
      ],
    ],
  },
  // Division D
  {
    id: 4,
    title: "Division D [AI]",
    division_key: "div_d",
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
      // 7:30 - 8:30
      [
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "07:30 TO 08:30",
        },
        {
          id: 3,
          label: "AJP",
          professor: "Tanmay",
          classroom: "309",
          cellClassName: "text-red-500",
        },
        {
          id: 4,
          label: "AJP",
          professor: "Tanmay",
          classroom: "309",
          cellClassName: "text-red-500",
        },
        {
          id: 5,
          label: "AJP",
          professor: "Tanmay",
          classroom: "309",
          cellClassName: "text-red-500",
        },
        {
          id: 6,
          label: "DCN LAB",
          professor: ["RamChandran P. ,Sonali Gupta"],
          lab: ["602", "603"],
          cellClassName: "text-purple-500",
          row_span: 2,
        },
        {
          id: 7,
          label: "DCN",
          professor: "RamChandran P.",
          classroom: "309",
          cellClassName: "text-purple-500",
        },
        {
          id: 8,
          label: "PULMS Self Learning",
        },
      ],
      //  8:30 - 9:30
      [
        {
          id: 1,
          label: "2",
        },
        {
          id: 2,
          label: "08:30 TO 09:30",
        },
        {
          id: 3,
          label: "DCN",
          professor: "RamChandran P.",
          classroom: "309",
          cellClassName: "text-purple-500",
        },
        {
          id: 4,
          label: "DCN",
          professor: "RamChandran P.",
          classroom: "309",
          cellClassName: "text-purple-500",
        },
        {
          id: 5,
          label: "Face",
          professor: "Harshad",
          classroom: "309",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "CG",
          professor: "Dampy",
          classroom: "309",
          cellClassName: "text-orange-500",
        },
        {
          id: 7,
          label: "Library",
        },
      ],
      //  9:30 - 9:45
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
      //  9:45 - 10:45
      [
        {
          id: 1,
          label: "3",
        },
        {
          id: 2,
          label: "09:45 TO 10:45",
        },
        {
          id: 3,
          label: "AJP Lab",
          professor: ["Tanmay", "Renuka Parmar"],
          lab: ["702", "703"],
          cellClassName: "text-red-500",
          row_span: 2,
        },
        {
          id: 4,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE",
            professor: "Prachi Mehta",
            classroom: "601",
            cellClassName: "text-[#11131e]",
          },
        },
        {
          id: 5,
          label: "CDC",
          professor: "Arul P",
          classroom: "607",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: " AI",
          professor: "Prachi Mehta",
          classroom: "603",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "AJP Lab",
          professor: ["Tanmay", "Renuka Parmar"],
          lab: ["608", "611"],
          cellClassName: "text-red-500",
          row_span: 2,
        },
        {
          id: 8,
          label: " AI",
          professor: "Prachi Mehta",
          classroom: "309",
          cellClassName: "text-[#11131e]",
        },
        //
      ],
      // 10:45 - 11:45
      [
        {
          id: 1,
          label: "4",
        },
        {
          id: 2,
          label: "10:45 TO 11:45",
        },
        {
          id: 3,
          label: "Library",
        },
        {
          id: 4,
          label: " AI",
          professor: "Prachi Mehta",
          classroom: "604",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 5,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE",
            professor: "Prachi Mehta",
            classroom: "602",
            cellClassName: "text-[#11131e]",
          },
        },
        {
          id: 6,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
      ],
      // 11:45 - 12:45
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
      // 12:45 - 1:35
      [
        {
          id: 1,
          label: "5",
        },
        {
          id: 2,
          label: "12:45 TO 01:35",
        },
        {
          id: 3,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE Lab",
            professor: "Prachi Mehta",
            lab: "708,709,710",
            cellClassName: "text-[#11131e]",
            row_span: 2,
          },
        },
        {
          id: 4,
          label: "AI Lab",
          professor: "Prachi Mehta",
          lab: ["610", "611"],
          cellClassName: "text-[#11131e]",
          row_span: 2,
        },
        {
          id: 5,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "CG Lab",
          professor: ["Dampy, CB"],
          lab: ["609, 612"],
          cellClassName: "text-orange-500",
          row_span: 2,
        },
        {
          id: 8,
          label: " AI",
          professor: "Prachi Mehta",
          classroom: "309",
          cellClassName: "text-[#11131e]",
        },
      ],
      //  1:35 - 2:25
      [
        {
          id: 1,
          label: "6",
        },
        {
          id: 2,
          label: "01:35 TO 02:25",
        },
        {
          id: 3,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE Lab",
            professor: "Prachi Mehta",
            lab: "708,709,710",
            cellClassName: "text-[#11131e]",
            row_span: 2,
          },
        },
        {
          id: 4,
          label: "CG",
          professor: "Dampy",
          classroom: "309",
          cellClassName: "text-orange-500",
        },
        {
          id: 5,
          label: "CG",
          professor: "Dampy",
          classroom: "309",
          cellClassName: "text-orange-500",
        },
      ],
    ],
  },
  // Division E
  {
    id: 5,
    title: "Division E [BDA]",
    division_key: "div_e",
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
      // 07:30 - 08:30
      [
        {
          id: 1,
          label: "1",
        },
        {
          id: 2,
          label: "07:30 TO 08:30",
        },
        {
          id: 3,
          label: "DCN LAB",
          professor: ["Komal B.", "Sheeja"],
          lab: ["606", "607"],
          cellClassName: "text-purple-500",
          row_span: 2,
        },
        {
          id: 4,
          label: "CG",
          professor: "Dampy",
          classroom: "601",
          cellClassName: "text-orange-500",
        },
        {
          id: 5,
          label: "AJP",
          professor: "Dhruv",
          classroom: "601",
          cellClassName: "text-red-500",
        },
        {
          id: 6,
          label: "AJP",
          professor: "Dhruv",
          classroom: "601",
          cellClassName: "text-red-500",
        },
        {
          id: 7,
          label: "AJP LAB",
          professor: ["Dhruv.", "Tanmay"],
          lab: ["602", "603"],
          cellClassName: "text-red-500",
          row_span: 2,
        },
        {
          id: 8,
          label: "PLUMS Self Learning",
        },
      ],
      // 08:30 - 09:30
      [
        {
          id: 1,
          label: "2",
        },
        {
          id: 2,
          label: "08:30 TO 09:30",
        },
        {
          id: 3,
          label: "DCN",
          professor: "Komal B.",
          classroom: "601",
          cellClassName: "text-purple-500",
        },
        {
          id: 4,
          label: "DCN",
          professor: "Komal B.",
          classroom: "601",
          cellClassName: "text-purple-500",
        },
        {
          id: 5,
          label: "CG",
          professor: "Dampy",
          classroom: "601",
          cellClassName: "text-orange-500",
        },
        {
          id: 4,
          label: "Library",
        },
      ],
      // 09:30 - 09:45
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
      // 09:45 - 10:45
      [
        {
          id: 1,
          label: "3",
        },
        {
          id: 2,
          label: "09:45 TO 10:45",
        },
        {
          id: 3,
          label: "BDA Lab",
          professor: ["VG", "Sonali Kharade"],
          lab: ["712", "713"],
          cellClassName: "text-[#11131e]",
          row_span: 2,
        },
        {
          id: 4,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE",
            professor: "Prof. Prachi Mehta",
            classroom: "601",
            cellClassName: "text-[#11131e]",
          },
        },
        {
          id: 5,
          label: "CG Lab",
          professor: ["Dampy, CB"],
          lab: ["613, 709"],
          cellClassName: "text-orange-500",
          row_span: 2,
        },
        {
          id: 6,
          label: "BDA",
          professor: "VG",
          classroom: "306",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "CDC",
          professor: "Arul P",
          classroom: "306",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 8,
          label: "AJP",
          professor: "Dhruv",
          classroom: "601",
          cellClassName: "text-red-500",
        },
      ],
      // 10:45 - 11:45
      [
        {
          id: 1,
          label: "4",
        },
        {
          id: 2,
          label: "10:45 TO 11:45",
        },
        {
          id: 3,
          label: "BDA",
          professor: "VG",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 4,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE",
            professor: "Prof. Prachi Mehta",
            classroom: "602",
            cellClassName: "text-[#11131e]",
          },
        },
        {
          id: 5,
          label: "BDA",
          professor: "VG",
          classroom: "306",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "BDA",
          professor: "VG",
          classroom: "601",
          cellClassName: "text-[#11131e]",
        },
      ],
      // 11:45 - 12:45
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
      // 12:45 - 01:35
      [
        {
          id: 1,
          label: "5",
        },
        {
          id: 2,
          label: "12:45 TO 01:35",
        },
        {
          id: 3,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE Lab",
            professor: "Prachi Mehta",
            lab: "708,709,710",
            cellClassName: "text-[#11131e]",
            row_span: 2,
          },
        },
        {
          id: 4,
          label: "CG Lab",
          professor: ["Dampy", "Preeti"],
          lab: ["606", "607"],
          cellClassName: "text-orange-500",
        },
        {
          id: 5,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "Library",
        },
        {
          id: 7,
          label: "DCN",
          professor: "Komal B.",
          classroom: "303",
          cellClassName: "text-purple-500",
        },
        {
          id: 8,
          label: "AJP Lab",
          professor: ["Dhruv", "Honey"],
          lab: ["601", "602"],
          cellClassName: "text-red-500",
        },
      ],
      // 01:35 - 02:25
      [
        {
          id: 1,
          label: "6",
        },
        {
          id: 2,
          label: "01:35 TO 02:25",
        },

        {
          id: 3,
          label: "AJP Lab",
          professor: ["Dhruv", "Honey"],
          lab: ["606", "607"],
          cellClassName: "text-red-500",
        },
        {
          id: 4,
          mca: {
            label: "Library",
          },
          msc_it: {
            label: "SE",
            professor: "Prof. Prachi Mehta",
            classroom: "607",
            cellClassName: "text-[#11131e]",
          },
        },
        {
          id: 5,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 6,
          label: "CA",
          professor: "Smarika Rai",
          cellClassName: "text-[#11131e]",
        },
        {
          id: 7,
          label: "Face",
          professor: "Harshad",
          classroom: "601",
          cellClassName: "text-[#11131e]",
        },
      ],
    ],
  },
];
