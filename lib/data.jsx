import Img1 from "@/public/img/img-1.png"
import Img2 from "@/public/img/img-2.png"
import Img3 from "@/public/img/img-3.png"
import Img4 from "@/public/img/img-4.png"
import Img5 from "@/public/img/img-5.png"
import Link from "next/link"

export const Posts = [
  {
    id: 1,
    images: [Img1, Img2],
    title: "STABLE DIFFUSION BASED IMAGE GENERATOR - CO FOUNDER - 2023.Jul - PRESENT",
    points: [
      {item: <span>📈 1.5Million+ Impressions to Date</span>},
      {item: <span>📊 400k Unique Visitors to Date</span>},
      {item: <span>🧑‍🎨 35k Discord Members</span>},
      {item: <span>💰 $60k USD/Yr In Estimated Revenue</span>},
      {item: <span>📦 Took 2 Months to Ship During My Spare Time</span>}
    ],
    description: `My Spare Time My Responsibilities - Initiating the Project, 100% of UI/UX Design, 40% of System Design, 80% of Frontend Development, 20% of Backend Development, 100% of Marketing`,
    links: [
      {
        name: "Read The Full Story Here",
        href: "#"
      },
      {
        name: "Request Site URL",
        href: "#"
      },
    ]
  },
  {
    id: 2,
    images: [Img2, Img4, Img5],
    title: "BANDIT.BIKE (AFFORDABLE & POWERFUL E-BIKES) - PROJECT LEAD - 2022.JUL - PRESENT",
    points: [
      {item: <span>💸 $1.5M USD in GMV Sold to Date</span>},
      {item: <span>📊 $220k USD In Crowd Fund Revenue on Indiegogo</span>},
      {item: <span>🧑‍🎨 18 E-Bike Models Developed to Date</span>},
      {item: <span>💰 15 Carrying Offline Retailers</span>},
    ],
    description: `My Responsibilities - Initiating the Project, Designing the Brand, Designing the e-Commerce Site, Overseen Development of the Site, Designed the Bike Decals / Color, Overseen Commercial Photoshoots w/ Various Musical Artists, Developed B2B Sales Process, Closed 12 Offline Retailers`,
    links: [
      {
        name: "Website Url",
        href: "#"
      },
      {
        name: "Indiegogo Url",
        href: "#"
      },
      {
        name: "Read The Full Story Here",
        href: "#"
      },
    ]
  },
  {
    id: 3,
    images: [Img3, Img1, Img4, Img5],
    title: "EXXILE TYPE-1 - CONCEPT DESIGN - 2022. JUL - IN DEVELOPMENT",
    points: [
      {item: <span>💸 First Time Dabbling Into Designing Physical Products</span>},
      {item: <span>📊 Created Concept Art Given The Requirements</span>},
      {item: <span>🧑‍🎨 Calculated The Geometry of The Bike</span>},
      {item: <span>💰 Created a Rudimentary Bike Frame Design Using AutoCAD</span>},
      {item: <span>💰 Worked With The Manufacturer To Design & Prototype The Bike</span>}
    ],
    description: ` feel blessed that I was given the privilliage to design such a cool looking e-bike :) `,
    links: [
      {
        name: "Design Showcase",
        href: "#"
      },
      {
        name: "Read The Full Story Here",
        href: "#"
      }
    ]
  },
  {
    id: 4,
    images: [Img4, Img2],
    title: "JOURNEY - LEGAL TOOL FOR STARTUPS WEBAPP - PRODUCT MANAGER",
    points: [
      {
        item: <span>💸 Worked With <Link href={'#'}>Oziel Law</Link> & <Link href={'#'}>Motiv Studio</Link> to Design a Legal Software for Canadian Startup Founders </span>
      },
      {
        item: <span>📊 Worked With The Law Firm to Scope Out The Project Requirements, UI/UX & Brand Design</span>
      },
      {
        item: <span>🧑‍🎨 Worked With The Development Agency to Scope Out ERD & System Architecture</span>
      },
      {
        item: <span>💰 The Project Was Later Cancelled w/ The Purchase of Ownr by a Major Canadian Bank & w/ The</span>
      },
      {
        item: <span>💰 Announcement of <Link href={'#'}>Angel List Incorporation</Link> & <Link href={'#'}>Angel List Equity</Link></span>
      }
    ],
    description: `I learned That Timing & Speed of Execution is Key in Business.`,
    links: [
      {
        name: "Read The Full Story Here",
        href: "#"
      }
    ]
  },
  {
    id: 5,
    images: [Img5, Img1, Img3],
    title: "WEAV - LONG DISTANCE RIDESHARING SERVICE - CO FOUNDER",
    points: [
      {item: <span>💸 I Started This Company When I Was 19Yrs Old</span>},
      {item: <span>📊 I Assembled a Team of 7 People (2 Frontend, 2 Backend, 1 Designer, 1 PM, 1 Growth Marketer)</span>},
      {item: <span>🧑‍🎨 We Created a native iOS App, a native Android App, and a Web App</span>},
      {item: <span>💰 We Operated in the Market for 5 Months With ~600 Monthly Active Drivers and Riders</span>},
      {item: <span>💰 The Project Was Discontinued Due to Low Demand</span>}
    ],
    description: `I learned That Validating Demand is The Primarily Object For Any New Initiatives.`,
    links: [
      {
        name: "UofT Press About Us",
        href: "#"
      },
      {
        name: "Read The Full Story Here",
        href: "#"
      }
    ]
  },
]

export const SkillsData = [
  {
    category: "design",
    skills: [
      {
        name: "Adobe Illustrator",
        expertise: "fluent"
      },
      {
        name: "Adobe Photoshop",
        expertise: "fluent"
      },
      {
        name: "Adobe InDesign",
        expertise: "novice"
      },
      {
        name: "Adobe AfterEffects",
        expertise: "novice"
      },
      {
        name: "Adobe XD",
        expertise: "expert"
      },
      {
        name: "Figma",
        expertise: "expert"
      },
      {
        name: "Autodesk Maya",
        expertise: "novice"
      },
      {
        name: "Autodesk 3DS MAX",
        expertise: "novice"
      },
      {
        name: "Autodesk AutoCAD",
        expertise: "novice"
      },
    ]
  },
  {
    category: "frontend fremworks",
    skills: [
      {
        name: "ReactJs",
        expertise: "expert",
        related: [
          {
            name: "Redux",
            expertise: "fluent",
          },
          {
            name: "Server Side Rending",
            expertise: "novice",
          },
        ]
      },
      {
        name: "Swift",
        expertise: "fluent"
      },
      {
        name: "Android Studio",
        expertise: "novice"
      },
    ]
  },
  {
    category: "backend fremworks",
    skills: [
      {
        name: "NodeJs",
        expertise: "intermdiate",
      },
      {
        name: "ExpressJs",
        expertise: "intermdiate"
      },
      {
        name: "Mongoose",
        expertise: "intermdiate"
      },
      {
        name: "GraphQl",
        expertise: "intermdiate"
      },
    ]
  },
  {
    category: "database",
    skills: [
      {
        name: "Postgres",
        expertise: "intermdiate",
      },
      {
        name: "MongoDB",
        expertise: "intermdiate"
      },
    ]
  },
  {
    category: "server hosting",
    skills: [
      {
        name: "GCP",
        expertise: "intermdiate",
      },
      {
        name: "AWS",
        expertise: "novice"
      },
    ]
  },
  {
    category: "Languages",
    skills: [
      {
        name: "C",
        expertise: "intermdiate",
      },
      {
        name: "C++",
        expertise: "intermdiate"
      },
      {
        name: "Objective C",
        expertise: "intermdiate",
      },
      {
        name: "Python",
        expertise: "fluent"
      },
      {
        name: "Java",
        expertise: "novice",
      },
      {
        name: "JavaScript",
        expertise: "expert"
      },
      {
        name: "TypeScript",
        expertise: "fluent",
      },
      {
        name: "GoLang",
        expertise: "novice"
      },
      {
        name: "SQL/PSQL/SQLite",
        expertise: "intermdiate",
      },
      {
        name: "HTML/CSS",
        expertise: "expert"
      },
    ]
  },
  {
    category: "admin",
    skills: [
      {
        name: "Microsoft Suite",
        expertise: "expert",
      },
      {
        name: "PM Methodologies (Aglie, Waterfall, CI/CD...)",
        expertise: "expert"
      },
      {
        name: "PM Tools (Github, GitLab, Jira...)",
        expertise: "expert"
      },
    ]
  },
]

export const educations = [
  {
    name: "UofT Stats & Computer Science",
    icon: "🏫",
    line: true
  },
  {
    name: "ADU & Computer Science",
    icon: "🏫",
    line: false
  },
]