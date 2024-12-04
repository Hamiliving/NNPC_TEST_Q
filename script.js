// Mock Questions
const questions = [
    {
      id: 1,
      question: "1. Ronald and Elan are working on an assignment. Ronald takes 6 hours to type 32 pages on a computer, while Elan takes 5 hours to type 40 pages. How much time will they take, working together on two different computers to type an assignment of 110 pages?",
      options: ["7 hours 30 minutes", "8 hours", "8 hours 15 minutes", "8 hours 25 minutes"],
      correct: "8 hours 15 minutes",
    },
    {
      id: 2,
      question: "2. A cricket team consists of 12 players, and a team of 6 members is to be formed. Solve for the following scenarios:Scenario 1: Two specific players (Player A and Player B) are always included in the team. How many different ways can the remaining team of 6 players be formed? Scenario 2: Three specific players (Player X, Player Y, and Player Z) are excluded from the team. How many different ways can the team of 6 players be formed from the remaining players? Choose the correct pair of answers for both scenarios:?",
      options: ["210 and 84", "300 and 126", "120 and 36", "84 and 210"],
      correct: "210 and 84",
    },
    {
      id: 3,
      question: "3. How many meters are in 13 kilometers?",
      options: ["1300 meters", "13000 meters", "130 meters","10000 meters"],
      correct: "13000 meters",
    },

    {
        id: 4,
        question: "4. If the ratio of girls to boys in a class is 2:5 with 40 girls, how many boys are there?",
        options: ["80 boys", "100 boys", "60 boys","50 boys"],
        correct: "100 boys",
      },

      {
        id: 5,
        question: "5. If a father is 4 times as old as his son, and the son is currently 10 years old, how old is the father?",
        options: ["30 years",  "40 years", "20 years  ", "50 years  "],
        correct: "40 years",
      },
      {
        id:6 ,
        question: "6. When shared in ratios of 2:4:6, what is the total number of parts? ",
        options: ["10 parts","12 parts  ","8 parts  ","14 parts  "],
        correct: "10 parts",
      },
    
      {
        id:7 ,
        question: "7. What is the sum of 1/6+3/8?",
        options: ["13/24","15/24","17/24","19/24"],
        correct: "13/24",
      },
      {
        id:8 ,
        question: "8. What is the shape of an egg?",
        options: ["Sphere","Cube","Ellipsoid","Pyramid"],
        correct: "Ellipsoid",
      },
      {
        id:9 ,
        question: "9. Which city was the first capital of Nigeria?",
        options: ["Lokoja ","Abuja","Calabar","Lagos"],
        correct: "Calabar",
      },
      {
        id:10 ,
        question: "10. How many protectorates were in Nigeria by 1900?",
        options: ["1","3","2","4"],
        correct: "2",
      },
      {
        id: 11,
        question: "11. When did the Nigeria Civil War take place? ",
        options: ["1965-1967","1967-1970","1970-1973","1960-1965"],
        correct: "1967-1970",
      },
      {
        id:12 ,
        question: "12. In the statement, The company stopped paying for voluntary services, what is the cause and effect relationship?",
        options: ["Cause: Company stopped paying; Effect: Workers continued volunteering","Cause: Workers stopped volunteering; Effect: Company stopped paying", "Cause: Company stopped paying; Effect: Workers also stopped doing them","Cause: Workers continued volunteering; Effect: Company increased payments"],
        correct: "Cause: Company stopped paying; Effect: Workers also stopped doing them",
      },
      {
        id:13 ,
        question: "13. What do local government workers calling off strike and oil company workers going on strike have in common",
        options: ["They are both caused by economic factors","They have independent causes","They are both related to government policies","They are both influenced by public opinion"],
        correct: "They have independent causes",
      },
      {
        id:14 ,
        question: "14. What has resulted in more suicides by youths according to the statement?",
        options: ["Life being too demanding and stressful","Lack of job opportunities","Increased social media usage","Poor mental health awareness"],
        correct: "Life being too demanding and stressful",
      },
      {
        id:15 ,
        question: "15. Which English question structure does not require a comma before 'and'?",
        options: ["The one with items listed","The one with complex sentences","The one with simple sentences","The one with compound subjects"],
        correct: "The one with items listed",
      },
      {
        id: 16,
        question: "16. What does OPEC stand for?",
        options: ["Organization of Petroleum Exporting Communities","Organization of Petroleum Exporting Countries  ","Organization of Petroleum Energy Company","Organization of Petroleum and Energy Council"],
        correct: "Organization of Petroleum Exporting Countries  ",
      },
      {
        id:17,
        question: "17. Which device is both an input and output device?",
        options: ["Printer","Scanner","DVD ", " Monitor  "],
        correct: "DVD ",
      },
      {
        id:18 ,
        question: "18. What type of network connects different branches in various regions?",
        options: ["Local Area Network (LAN)","Metropolitan Area Network (MAN)","Wide Area Network (WAN)","Regional Area Network (RAN)"],
        correct: "Wide Area Network (WAN)",
      },
      {
        id:19 ,
        question: "19. What is the definition of a wiki?",
        options: ["A site anyone can access freely","A site anyone can add to, delete, or revise","A site for academic research only","A site for government documents only"],
        correct: "A site anyone can add to, delete, or revise",
      },
      {
        id:20 ,
        question: "20. When was ECOWAS formed?",
        options: ["25 May 1975","28 May 1975","28 May 1976","1 June 1975"],
        correct: "28 May 1975",
      },
      {
        id:21 ,
        question: "21. Who was never a regional premier in Nigeria?",
        options: ["Dennis Osadebe","Aminu Kano","Obafemi Awolowo","Ahmadu Bello"],
        correct: "Aminu Kano",
      },
      {
        id:22 ,
        question: "22. Which ethnic group must the governor of a South East state belong to?",
        options: ["Hausa","Yoruba","Igbo","Fulani"],
        correct: "Igbo",
      },
      {
        id:23 ,
        question: "23. In which country is Swahili predominantly spoken?",
        options: ["South Africa","Kenya","Uganda","Tanzania"],
        correct: "Kenya",
      },
      {
        id:24 ,
        question: "24. Is Uganda a Francophone country?",
        options: ["Yes","No","Partially","Only in certain regions"],
        correct: "No",
      },
      {
        id:25 ,
        question: "25. Where is the headquarters of the African Union located?",
        options: ["Nairobi, Kenya","Addis Ababa, Ethiopia","Abuja, Nigeria","Cairo, Egypt"],
        correct: "Addis Ababa, Ethiopia",
      },
      {
        id:26 ,
        question: "26. What is the nationality of the current AfDB president?",
        options: ["Ghanaian","Nigerian","South African"," Kenyan"],
        correct: "Nigerian",
      },

      {
        id:27 ,
        question: "27. Who is the current UN Secretary General?",
        options: ["Ban Ki Moon","Antonio Guterres","Kofi Annan","Boutros Boutros-Ghali"],
        correct: "Antonio Guterres",
      },
      {
        id:28 ,
        question: "28. Who was President of Nigeria in 1979?",
        options: ["Olusegun Obasanjo","Shehu Shagari","Muhammadu Buhari", "Goodluck Jonathan"],
        correct: "Shehu Shagari",
      },
      {
        id:29 ,
        question: "29. What are laws made by local governments called?",
        options: ["Decree","Act","Bye-laws","Edict"],
        correct: "Bye-laws",
      },
      {
        id:30 ,
        question: "30. Who coined the term neo-colonialism?",
        options: ["Nelson Mandela","Kwame Nkrumah","Julius Nyerere","Thomas Sankara"],
        correct: "Kwame Nkrumah",
      },
      {
        id:31 ,
        question: "What does an equidistant triangle have?",
        options: ["Two equal sides","Three equal sides","One right angle","No equal sides"],
        correct: "Three equal sides",
      },
      {
        id:32 ,
        question: "32. What is the head of Nigeria's central bank called?",
        options: ["Chief Justice","Attorney General","Governor","President"],
        correct: "Governor",
      },
      {
        id:33 ,
        question: "33. Who is the chief law officer of Nigeria?",
        options: ["Chief Judge","Attorney General","Senate President","Minister of Justice"],
        correct: "Attorney General",
      },
      {
        id:34 ,
        question: "34. When did the Soviet Union collapse?",
        options: ["November 1991","December 1991","January 1992","August 1991"],
        correct: "December 1991",
      },
      {
        id:35 ,
        question: "35. What has been the major impediment to Nigeria's development since 1960?",
        options: ["Bad leadership","Corruption","Overdependence on crude oil","All of the above"],
        correct: "All of the above",
      },
      {
        id: 36,
        question: "36. What system allows multiple users to use one computer at the same time?",
        options: ["Multi-tasking","Time sharing","Batch processing","Single-user system"],
        correct: "Time sharing",
      },
      {
        id:37,
        question: "37. What is the correct term for three-man committee?",
        options: ["Three-men committee","Three man committee","Three-man committee","Three persons committee"],
        correct: "Three-man committee",
      },
      {
        id:38 ,
        question: "38. Who invented the electric light bulb?",
        options: ["Walter Alan","Thomas Edison","Humphrey Davy","Nikola Tesla"],
        correct: "Humphrey Davy",
      },
      {
        id:39 ,
        question: "39. What type of computer manages network resources?",
        options: ["Super computer","Mainframe computer","Server computer","Personal computer"],
        correct: "Server computer",
      },
    
  {
    id:40 ,
    question: "40. Where is bar code mostly used?",
    options: ["Military","Computer laboratory","Supermarket","Air traffic control"],
    correct: "Supermarket",
  },
  {
    id:41 ,
    question: "41. What part of URL does domain name refer to?",
    options: ["Protocol","Path","Host", "Query"],
    correct: "Host",
  },
  {
    id:42 ,
    question: "42. When did Nigeria become a republic?",
    options: ["1 October 1960","1 October 1963","1 October 1965","1 October 1970"],
    correct: "1 October 1963",
  },
  {
    id:43 ,
    question: "43. How many Local Governments are there in Nigeria?",
    options: ["800","700","774","750"],
    correct: "774",
  },
  {
    id:44 ,
    question: "44. Which country is considered the newest in Africa?",
    options: ["Somalia","South Sudan","Eritrea","Gambia"],
    correct: "South Sudan",
  },
  {
    id: 45,
    question: "45. What is Venezuela known for?",
    options: ["Coffee production","Oil production","Cocoa production","Gold mining"],
    correct: "Oil production",
  },
  {
    id:46 ,
    question: "46. Which statement is not true about Nigeria?",
    options: ["Nigeria is the world's highest oil producer","Nigeria has significant oil reserves","Nigeria is a member of OPEC","Nigeria has a diverse economy"],
    correct: "Nigeria is the world's highest oil producer",
  },
  {
    id:47 ,
    question: "47. Who was the governor-general of Nigeria?",
    options: ["Lord Lugard","Sir Tafawa Balewa","Obafemi Awolowo","Nnamdi Azikiwe"],
    correct: "Lord Lugard",
  },
  {
    id:48 ,
    question: "48. Where is the A.U. headquarters located?",
    options: ["Nairobi","Addis Ababa","Cairo","Lagos"],
    correct: "Addis Ababa",
  },
  {
    id:49 ,
    question: "49. What is the major role of NNPC?",
    options: ["Regulating the banking sector","Regulating the oil sector","Managing education policies","Overseeing telecommunications"],
    correct: "Regulating the oil sector",
  },
  {
    id:50 ,
    question: "50. What is the correct spelling?",
    options: ["Privileges"," Priviledges","Privilages","Priviledges"],
    correct: "Privileges",
  },
  {
    id:51 ,
    question: "51. Which telecommunications company is listed on the NSE (Nigerian Stock Exchange)?",
    options: ["MTN","Glo Telecoms","Airtel Nigeria","Etisalat Nigeria"],
    correct: "MTN",
  },
  {
    id:52 ,
    question: "52. When did Nigeria's first military coup occur?",
    options: ["January 15, 1966","July 29, 1966","October 1, 1960","February 13, 1976"],
    correct: "January 15, 1966",
  },
  {
    id:53 ,
    question: "53. What describes the greenhouse effect?",
    options: ["Climate change phenomenon","Natural weather cycle","Seasonal temperature fluctuation","Ocean current variation"],
    correct: "Climate change phenomenon",
  },
  {
    id: 54,
    question: "54. What was originally designed not to allow processing of data on or from memory?",
    options: ["Spreadsheet software","Database systems","Word processors","Operating systems"],
    correct: "Database systems",
  },
  {
    id:55 ,
    question: "55. What does spool refer to in computing terms?",
    options: ["To print documents directly from memory","To store data temporarily before processing","To send data to multiple devices simultaneously","To backup data automatically"],
    correct: "To store data temporarily before processing",
  },
  {
    id:56 ,
    question: "56. What does WAN stand for?",
    options: ["Wide Area Network","Wireless Area Network","World Area Network","Web Area Network"],
    correct: "Wide Area Network",
  },
  {
    id:57 ,
    question: "57. What type of system is UNIX?",
    options: ["Mobile operating system","Desktop operating system","Server operating system","Embedded operating system"],
    correct: "Server operating system",
  },
  {
    id:58 ,
    question: "58. What do you need to work in an oil company?",
    options: ["Technical skills only","Legal right","Personal connections","Financial backing"],
    correct: "Legal right",
  },
  {
    id:59 ,
    question: "59. How is the internet best defined?",
    options: ["A local network of computers","A global system of connected computers that share information","A collection of websites only","A private communication system"],
    correct: "A global system of connected computers that share information",
  },
  {
    id:60 ,
    question: "60. What is an IP address?",
    options: ["A physical address of an office","The special address of a computer connected to the internet","A postal address for mail delivery","A location identifier for GPS"],
    correct: "The special address of a computer connected to the internet",
  },
  {
    id: 61,
    question: "61. What describes the relationship between a father and grandson?",
    options: ["Sibling relationship","Ancestor-descendant relationship","Cousin relationship","Peer relationship"],
    correct: "Ancestor-descendant relationship",
  },
  {
    id: 62,
    question: "62. What describes the relationship between a father and daughter?",
    options: ["Sibling relationship","Ancestor-descendant relationship","Cousin relationship","Peer relationship"],
    correct: "Ancestor-descendant relationship",
  },

  {
    id:63 ,
    question: "63. What tool helps with different housekeeping tasks like filing and organizing?",
    options: ["Vacuum cleaner","Filing cabinet","Dishwasher","Laundry machine"],
    correct: "Filing cabinet",
  },
  {
    id:64 ,
    question: "64. What does total gross refer to in financial charts?",
    options: ["Total expenses incurred","Total revenue before deductions","Net profit after taxes","Total liabilities"],
    correct: "Total revenue before deductions",
  },

  {
    id:65,
    question: "65. Which of the following is a standard English expression?",
    options: ["He runned fast.","She has gone to the store.","They was happy.","I seen that movie."],
    correct: "She has gone to the store.",
  },
  {
    id: 66,
    question: "66. What year was the NNPC established?",
    options: ["1971", "1977", "1980", "1964"],
    correct: "1977",
  },
{
  id: 67,
  question: "67. Who is responsible for appointing the NNPC Group Managing Director?",
  options: ["The Senate", "The Minister of Petroleum", "The President", "The House of Representatives"],
  correct: "The President",
},
{
  id: 68,
  question: "68. Which of the following is a subsidiary of NNPC?",
  options: ["Chevron Nigeria Limited", "Total Nigeria", "National Petroleum Investment Management Services (NAPIMS)", "Shell Petroleum"],
  correct: "National Petroleum Investment Management Services (NAPIMS)",
},
{
  id: 69,
  question: "69. What is the primary responsibility of the NNPC?",
  options: ["Banking regulation", "Oil exploration and production", "Electricity generation", "Telecommunications"],
  correct: "Oil exploration and production",
},

{
  id: 70,
  question: "70. Which act established the NNPC?",
  options: ["Petroleum Industry Act", "NNPC Act of 1977", "Mineral Act", "Oil Exploration Act"],
  correct: "NNPC Act of 1977",
},
{
id: 71,
    question: "71. Where is the NNPC headquarters located?",
    options: ["Lagos", "Port Harcourt", "Abuja", "Kaduna"],
    correct: "Abuja",
  },
  {
    id: 72,
    question: "72. What does the acronym NNPC stand for?",
    options: ["Nigerian National Petroleum Corporation", "National Nigerian Petroleum Company", "National Nigeria Petroleum Corporation", "Nigerian National Petrol Company"],
    correct: "Nigerian National Petroleum Corporation",
  },
  {
    id: 74,
    question: "74. In which year did Nigeria join OPEC?",
    options: ["1969", "1971", "1975", "1980"],
    correct: "1971",
  },

  {
    id: 75,
    question: "75. What is the function of the Department of Petroleum Resources (DPR) under NNPC?",
    options: ["Oil exploration", "Regulating the oil and gas industry", "Crude oil marketing", "Building refineries"],
    correct: "Regulating the oil and gas industry",
  },
  {
    id: 76,
    question: "76. What is the significance of the Petroleum Industry Act (PIA) to NNPC?",
    options: ["It abolished NNPC", "It restructured NNPC into a limited liability company", "It changed NNPC's logo", "It merged NNPC with another agency"],
    correct: "It restructured NNPC into a limited liability company",
  },
  {
    id: 77,
    question: "77. What does NNPC Retail Limited specialize in?",
    options: ["Oil exploration", "Crude oil exportation", "Marketing of petroleum products", "Building pipelines"],
    correct: "Marketing of petroleum products",
  },
  {
    id: 78,
    question: "78. Which of these is a key export product of NNPC?",
    options: ["Coal", "Crude Oil", "Gold", "Natural Gas"],
    correct: "Crude Oil",
  },
  {
    id: 79,
    question: "79. Which NNPC subsidiary is responsible for pipeline maintenance?",
    options: ["NAPIMS", "NNPC Retail", "Pipeline and Product Marketing Company (PPMC)", "National Gas Company"],
    correct: "Pipeline and Product Marketing Company (PPMC)",
  },
  {
    id: 80,
    question: "80. Which of the following countries is Nigeria’s major crude oil buyer?",
    options: ["China", "United States", "India", "Germany"],
    correct: "India",
  },
  {
    id: 81,
    question: "81. What is the main function of NNPC?",
    options: [
      "To regulate the Nigerian Stock Exchange",
      "To oversee petroleum exploration and distribution",
      "To manage telecommunications infrastructure",
      "To handle agricultural exports",
    ],
    correct: "To oversee petroleum exploration and distribution",
  },
  {
    id: 82,
    question: "82. Where is the NNPC headquarters located?",
    options: ["Abuja", "Lagos", "Port Harcourt", "Kano"],
    correct: "Abuja",
  },
  {
    id: 83,
    question: "83. Which subsidiary of NNPC handles refining of petroleum products?",
    options: [
      "Nigerian Petroleum Development Company (NPDC)",
      "Nigerian Gas Company (NGC)",
      "Petroleum Products Marketing Company (PPMC)",
      "Nigerian Refining Company (NRC)",
    ],
    correct: "Petroleum Products Marketing Company (PPMC)",
  },

  {
    id: 84,
    question: "84. Which of the following refineries is not operated by NNPC?",
    options: ["Kaduna Refinery", "Warri Refinery", "Port Harcourt Refinery", "Dangote Refinery"],
    correct: "Dangote Refinery",
  },
  {
    id: 85,
    question: "85. What is the full meaning of OML in the context of NNPC operations?",
    options: [
      "Oil Mining License",
      "Oil Management Lease",
      "Operational Mining License",
      "Offshore Mining License",
    ],
    correct: "Oil Mining License",
  },

  {
    id: 86,
    question: "86. Which year did Nigeria join OPEC?",
    options: ["1971", "1980", "1967", "1975"],
    correct: "1971",
  },
  {
    id: 87,
    question: "87. What is the role of the Department of Petroleum Resources (DPR) in relation to NNPC?",
    options: [
      "To manage NNPC subsidiaries",
      "To enforce petroleum regulations and standards",
      "To oversee the financial auditing of NNPC",
      "To provide international oil market reports",
    ],
    correct: "To enforce petroleum regulations and standards",
  },

  {
    id: 88,
    question: "88. Which agency is responsible for collecting oil revenues in Nigeria?",
    options: ["NNPC", "Federal Inland Revenue Service", "Central Bank of Nigeria", "Revenue Mobilization Allocation and Fiscal Commission"],
    correct: "NNPC",
  },
  {
    id: 89,
    question: "89. What percentage of Nigeria’s revenue is derived from crude oil?",
    options: ["40%", "60%", "80%", "100%"],
    correct: "80%",
  },
  {
    id: 90,
    question: "90. Which of the following is a major challenge faced by NNPC?",
    options: ["Overregulation", "Oil theft and pipeline vandalism", "Lack of skilled workforce", "Low international oil prices"],
    correct: "Oil theft and pipeline vandalism",
  },

  {
    id: 91,
    question: "91. Which international oil corporation has the highest joint venture with NNPC?",
    options: ["Chevron", "Shell", "ExxonMobil", "Total"],
    correct: "Shell",
  },
  {
    id: 92,
    question: "92. What does NNPC’s Joint Venture (JV) model involve?",
    options: [
      "Sharing oil exploration costs and profits with foreign companies",
      "Exporting refined petroleum products",
      "Domestic oil production without foreign involvement",
      "Collaborating only with Nigerian firms",
    ],
    correct: "Sharing oil exploration costs and profits with foreign companies",
  },

  {
    id: 93,
    question: "93. What is the function of the NNPC Retail Limited?",
    options: [
      "To regulate oil prices",
      "To manage filling stations across Nigeria",
      "To provide oil transportation services",
      "To build new refineries",
    ],
    correct: "To manage filling stations across Nigeria",
  },

  {
    id: 94,
    question: "94. Which of the following is a strategic objective of NNPC?",
    options: [
      "Diversification into agriculture",
      "Achieving self-sufficiency in petroleum products",
      "Reducing dependence on renewable energy",
      "Expanding Nigeria's gold reserves",
    ],
    correct: "Achieving self-sufficiency in petroleum products",
  },

  {
    id: 95,
    question: "95. Which year did Nigeria first discover commercial quantities of crude oil?",
    options: ["1956", "1960", "1973", "1948"],
    correct: "1956",
  },

  {
    id: 96,
    question: "96. What type of crude oil is Nigeria known for producing?",
    options: [
      "Heavy crude",
      "Light and sweet crude",
      "Sulfur-rich crude",
      "Bitumen crude",
    ],
    correct: "Light and sweet crude",
  },
  {
    id: 97,
    question: "97. What does the term 'upstream' refer to in NNPC's operations?",
    options: [
      "Oil refining processes",
      "Exploration and production activities",
      "Petroleum marketing",
      "Gas distribution",
    ],
    correct: "Exploration and production activities",
  },

  {
    id: 98,
    question: "98. What does the 'downstream' sector in NNPC refer to?",
    options: [
      "Oil and gas exploration",
      "Petroleum refining, distribution, and marketing",
      "Gas flaring reduction",
      "Offshore drilling operations",
    ],
    correct: "Petroleum refining, distribution, and marketing",
  },
  {
    id: 99,
    question: "99. Which NNPC subsidiary is primarily involved in gas processing and transmission?",
    options: ["NGC", "PPMC", "NPDC", "DPR"],
    correct: "NGC",
  },
  {
    id: 100,
    question: "100. What is Nigeria's daily crude oil production capacity as of recent estimates?",
    options: ["1.8 million barrels", "2.5 million barrels", "3 million barrels", "4 million barrels"],
    correct: "1.8 million barrels",
  },

  {
    id: 101,
    question: "101. Which Nigerian city hosts the Port Harcourt Refinery?",
    options: ["Port Harcourt", "Warri", "Kaduna", "Lagos"],
    correct: "Port Harcourt",
  },
  {
    id: 102,
    question: "102. What is the full meaning of NLNG?",
    options: [
      "Nigeria Liquefied Natural Gas",
      "Nigeria Limited Natural Gas",
      "Nigerian Liquid Natural Gas",
      "National Liquefied Natural Gas",
    ],
    correct: "Nigeria Liquefied Natural Gas",
  },

  {
    id: 103,
    question: "103. Which of the following is a renewable energy initiative by NNPC?",
    options: [
      "Solar power plants",
      "Nuclear energy exploration",
      "Windmill installation",
      "Hydropower projects",
    ],
    correct: "Solar power plants",
  },

  {
    id: 104,
    question: "104. What year was the Petroleum Industry Act (PIA) signed into law?",
    options: ["2019", "2021", "2020", "2022"],
    correct: "2021",
  },
  {
    id: 105,
    question: "105. What is the full meaning of SWF in Nigerian oil and gas context?",
    options: [
      "Sovereign Wealth Fund",
      "State Wealth Fund",
      "Strategic Wealth Facility",
      "Shared Wealth Foundation",
    ],
    correct: "Sovereign Wealth Fund",
  },
  {
    id: 106,
    question: "106. What does the acronym FAAC stand for in Nigeria?",
    options: [
      "Federal Allocation and Account Commission",
      "Federation Account Allocation Committee",
      "Federal Agency for Account Control",
      "Federation Authority and Allocation Council",
    ],
    correct: "Federation Account Allocation Committee",
  },

  {
    id: 107,
    question: "107. What is the purpose of the Petroleum Industry Act (PIA)?",
    options: [
      "To promote transparency in the oil and gas sector",
      "To ban crude oil exports",
      "To privatize NNPC entirely",
      "To reduce foreign investments",
    ],
    correct: "To promote transparency in the oil and gas sector",
  },

  {
    id: 108,
    question: "108. Which subsidiary is responsible for oil exploration in Nigeria?",
    options: ["NPDC", "NGC", "NLNG", "PPMC"],
    correct: "NPDC",
  },

  {
    id: 109,
    question: "109. Who is the current Group Chief Executive Officer of NNPC Limited?",
    options: [
      "Mallam Mele Kyari",
      "Dr. Ibe Kachikwu",
      "Diezani Alison-Madueke",
      "Timipre Sylva",
    ],
    correct: "Mallam Mele Kyari",
  },

  {
    id: 110,
    question: "110. What is the primary goal of the Nigerian Gas Master Plan?",
    options: [
      "To phase out crude oil production",
      "To increase natural gas utilization",
      "To privatize NNPC subsidiaries",
      "To regulate oil export quotas",
    ],
    correct: "To increase natural gas utilization",
  },
  {
    id: 111,
    question: "111. The NNPC Tower is located in which city?",
    options: ["Abuja", "Lagos", "Port Harcourt", "Kaduna"],
    correct: "Abuja",
  },
  {
    id: 112,
    question: "112. Which of these is a major pipeline managed by NNPC?",
    options: [
      "Trans-Forcados Pipeline",
      "East-West Gas Pipeline",
      "Chad Basin Pipeline",
      "Atlantic Pipeline",
    ],
    correct: "Trans-Forcados Pipeline",
  },
  {
    id: 113,
    question: "113. What percentage of Nigeria’s GDP is contributed by the oil and gas sector?",
    options: ["10%", "15%", "25%", "40%"],
    correct: "10%",
  },
  {
    id: 114,
    question: "114. What type of tax does the NNPC pay to the federal government?",
    options: ["Petroleum Profit Tax", "Value Added Tax", "Income Tax", "Corporate Tax"],
    correct: "Petroleum Profit Tax",
  },
  {
    id: 115,
    question: "115. Which of these is NOT a product refined from crude oil?",
    options: ["Petrol", "Diesel", "Bitumen", "Natural gas"],
    correct: "Natural gas",
  },

  {
    id: 116,
    question: "116. What is Nigeria’s main export destination for crude oil?",
    options: ["Asia", "Europe", "North America", "South America"],
    correct: "Asia",
  },
  {
    id: 117,
    question: "117. What is the major environmental challenge faced by oil-producing communities in Nigeria?",
    options: [
      "Deforestation",
      "Air pollution",
      "Oil spills and land degradation",
      "Flooding",
    ],
    correct: "Oil spills and land degradation",
  },

{
    id: 118,
    question: "118. Which NNPC subsidiary handles oil trading and shipping?",
    options: ["Duke Oil", "NGC", "NPDC", "PPMC"],
    correct: "Duke Oil",
  },

  {
    id: 119,
    question: "119. What is the main goal of Nigeria’s Marginal Oil Field Program?",
    options: [
      "Increase small-scale oil production",
      "Develop renewable energy resources",
      "Reduce oil imports",
      "Increase gas exports",
    ],
    correct: "Increase small-scale oil production",
  },

  {
    id: 120,
    question: "120. Which government agency regulates the petroleum industry in Nigeria?",
    options: [
      "Nigerian Upstream Petroleum Regulatory Commission (NUPRC)",
      "Department of Petroleum Resources (DPR)",
      "Federal Ministry of Petroleum Resources",
      "NNPC Limited",
    ],
    correct: "Nigerian Upstream Petroleum Regulatory Commission (NUPRC)",
  },

  {
    id: 121,
    question: "121. What is the role of the PPMC under NNPC?",
    options: [
      "Oil exploration",
      "Refining and petrochemicals",
      "Pipeline and product marketing",
      "Gas processing",
    ],
    correct: "Pipeline and product marketing",
  },

  {
    id: 122,
    question: "122. The OPEC quota system primarily aims to:",
    options: [
      "Increase global oil prices",
      "Control oil production levels among member countries",
      "Reduce carbon emissions",
      "Encourage the use of renewable energy",
    ],
    correct: "Control oil production levels among member countries",
  },
  {
    id: 123,
    question: "123. Which body oversees joint ventures between NNPC and International Oil Companies?",
    options: ["NNPC Limited", "NUPRC", "Nigerian Content Development Board", "Joint Venture Unit"],
    correct: "NNPC Limited",
  },
  {
    id: 124,
    question: "124. What is the full meaning of SWF in Nigerian oil and gas context?",
    options: [
      "Sovereign Wealth Fund",
      "State Wealth Fund",
      "Strategic Wealth Facility",
      "Shared Wealth Foundation",
    ],
    correct: "Sovereign Wealth Fund",
  },
  {
    id: 125,
    question: "125. What is the primary goal of the Petroleum Equalization Fund (PEF)?",
    options: [
      "Reduce the cost of petrol across Nigeria",
      "Promote transparency in the oil sector",
      "Increase oil exploration in offshore fields",
      "Equalize fuel prices nationwide",
    ],
    correct: "Equalize fuel prices nationwide",
  },

  {
    id: 126,
    question: "126. Which of these is NOT a function of the NNPC?",
    options: [
      "Oil exploration and production",
      "Managing Nigeria’s foreign reserves",
      "Refining petroleum products",
      "Marketing and distribution of petroleum products",
    ],
    correct: "Managing Nigeria’s foreign reserves",
  },

  {
    id: 127,
    question: "127. What year was crude oil first discovered in commercial quantity in Nigeria?",
    options: ["1956", "1960", "1973", "1980"],
    correct: "1956",
  },
  {
    id: 128,
    question: "128. The Brass LNG Project is located in which Nigerian state?",
    options: ["Bayelsa", "Delta", "Rivers", "Cross River"],
    correct: "Bayelsa",
  },
  {
    id: 129,
    question: "129. Which NNPC subsidiary is responsible for the upstream oil and gas sector?",
    options: ["NPDC", "PPMC", "NGC", "NPSC"],
    correct: "NPDC",
  },
  {
    id: 130,
    question: "130. Nigeria joined OPEC in what year?",
    options: ["1961", "1971", "1981", "1991"],
    correct: "1971",
  },
  {
    id: 131,
    question: "131. What does the term 'upstream sector' in oil and gas refer to?",
    options: [
      "Refining petroleum",
      "Marketing petroleum products",
      "Exploration and production",
      "Transportation of crude oil",
    ],
    correct: "Exploration and production",
  },

  {
    id: 132,
    question: "132. Which pipeline transports natural gas from Nigeria to other West African countries?",
    options: [
      "Trans-Atlantic Gas Pipeline",
      "West African Gas Pipeline",
      "Escravos Gas Pipeline",
      "East-West Gas Pipeline",
    ],
    correct: "West African Gas Pipeline",
  },

  {
    id: 133,
    question: "133. What is the full meaning of OPEC?",
    options: [
      "Organization of Petroleum Exporting Countries",
      "Oil Producing and Exporting Companies",
      "Organization of Profitable Energy Corporations",
      "Oil Producing Energy Commission",
    ],
    correct: "Organization of Petroleum Exporting Countries",
  },
  {
    id: 134,
    question: "134. Which of the following is a significant challenge in Nigeria's oil sector?",
    options: [
      "Overproduction of oil",
      "Oil theft and pipeline vandalism",
      "Low global demand for oil",
      "Excessive reliance on renewable energy",
    ],
    correct: "Oil theft and pipeline vandalism",
  },
  {
    id: 135,
    question: "135. The Petroleum Industry Act (PIA) was signed into law in which year?",
    options: ["2018", "2019", "2020", "2021"],
    correct: "2021",
  },
  {
    id: 136,
    question: "136. The Nigerian Gas Company (NGC) is a subsidiary of NNPC responsible for what?",
    options: [
      "Exploration of crude oil",
      "Natural gas development and commercialization",
      "Petroleum refining",
      "Exporting LNG to Europe",
    ],
    correct: "Natural gas development and commercialization",
  },
  {
    id: 137,
    question: "137. Which of these is a key export terminal for Nigerian crude oil?",
    options: ["Bonny Terminal", "Escravos Terminal", "Brass Terminal", "All of the above"],
    correct: "All of the above",
  },

  {
    id: 138,
    question: "138. What is the main purpose of the NNPC Joint Venture partnerships?",
    options: [
      "Increase government revenue from oil",
      "Promote foreign direct investment",
      "Share risks and costs of exploration",
      "All of the above",
    ],
    correct: "All of the above",
  },

  {
    id: 139,
    question: "139. The Nigeria-Morocco Gas Pipeline is designed to transport gas to which destination?",
    options: [
      "Southern Africa",
      "North Africa and Europe",
      "Middle East",
      "Central Africa",
    ],
    correct: "North Africa and Europe",
  },
  {
    id: 140,
    question: "140. Which of these companies is a frequent joint venture partner with NNPC?",
    options: ["Chevron", "Tesla", "Apple", "Boeing"],
    correct: "Chevron",
  },
  {
    id: 141,
    question: "141. Nigeria's proven oil reserves are primarily located in which region?",
    options: ["South-South", "North-East", "North-Central", "South-West"],
    correct: "South-South",
  },

  {
    id: 142,
    question: "142. What is the role of the Nigerian Content Development and Monitoring Board (NCDMB)?",
    options: [
      "Oversee oil export quotas",
      "Promote local participation in the oil sector",
      "Regulate foreign investments",
      "Manage NNPC’s operations",
    ],
    correct: "Promote local participation in the oil sector",
  },

  {
    id: 143,
    question: "143. NNPC’s transformation to NNPC Limited was a result of which law?",
    options: [
      "Petroleum Act",
      "Petroleum Industry Act",
      "Nigerian Oil and Gas Act",
      "Environmental Impact Act",
    ],
    correct: "Petroleum Industry Act",
  },

  {
    id: 144,
    question: "144. What does Nigeria’s Gas Flare Commercialization Program (NGFCP) aim to achieve?",
    options: [
      "Increase gas flaring",
      "Monetize flared gas",
      "Reduce gas imports",
      "Expand LNG export terminals",
    ],
    correct: "Monetize flared gas",
  },
  {
    id: 145,
    question: "145. Nigeria LNG (NLNG) is a joint venture between NNPC and which partners?",
    options: [
      "Shell, Total, and Eni",
      "ExxonMobil and Chevron",
      "BP and Shell",
      "Saudi Aramco and Total",
    ],
    correct: "Shell, Total, and Eni",
  },
  {
    id: 146,
    question: "146. What percentage of Nigeria’s revenue is derived from oil exports?",
    options: ["50%", "40%", "60%", "90%"],
    correct: "90%",
  },
  {
    id: 147,
    question: "147. The NNPC Limited now operates under which framework?",
    options: [
      "A public enterprise",
      "A fully commercial and profit-driven company",
      "A government-dependent corporation",
      "A charitable organization",
    ],
    correct: "A fully commercial and profit-driven company",
  },

  {
    id: 148,
    question: "148. What is the primary goal of the Petroleum Industry Act (PIA) for NNPC?",
    options: [
      "Dissolve NNPC",
      "Make NNPC more efficient and competitive",
      "Privatize all NNPC assets",
      "End foreign partnerships",
    ],
    correct: "Make NNPC more efficient and competitive",
  },
  {
    id: 149,
    question: "149. What does the NNPC’s Crude Oil Marketing Division (COMD) oversee?",
    options: [
      "Oil drilling activities",
      "Exporting crude oil and managing sales",
      "Domestic refining operations",
      "Petroleum subsidy management",
    ],
    correct: "Exporting crude oil and managing sales",
  },
  {
    id: 150,
    question: "150. The Warri Refinery was commissioned in what year?",
    options: ["1975", "1978", "1980", "1982"],
    correct: "1978",
  },

  {
    id: 151,
    question: "151. The PortHarcourt Refinery was commissioned in what year?",
    options: ["1972", "1965", "1980", "1982"],
    correct: "1965",
  },

  {
    id: 152,
    question: "152. The Nigerian government plans to end fuel subsidies by what year?",
    options: ["2024", "2025", "2030", "No set timeline"],
    correct: "2024",
  },


  {
    id: 153,
    question: "153. What is the key purpose of the NNPC's Nigerian Petroleum Development Company (NPDC)?",
    options: [
      "Downstream activities",
      "Upstream exploration and production",
      "Gas distribution to consumers",
      "Importation of refined petroleum products",
    ],
    correct: "Upstream exploration and production",
  },
  {
    id: 154,
    question: "154. NNPC’s Integrated Data Services Limited (IDSL) provides which services?",
    options: [
      "Drilling services",
      "Geophysical and seismic data acquisition",
      "Oil export logistics",
      "Pipeline repairs",
    ],
    correct: "Geophysical and seismic data acquisition",
  },
  {
    id: 155,
    question: "155. Nigeria's largest oil field is located in which area?",
    options: ["Bonga Field", "Agbami Field", "Egina Field", "Forcados Field"],
    correct: "Egina Field",
  },
  {
    id: 156,
    question: "156. What role does the Department of Petroleum Resources (DPR) play in relation to NNPC?",
    options: [
      "Conducts oil exploration",
      "Regulates Nigeria’s oil and gas industry",
      "Owns and manages NNPC assets",
      "Handles crude oil exports directly",
    ],
    correct: "Regulates Nigeria’s oil and gas industry",
  },
  {
    id: 157,
    question: "157. What is the primary focus of NNPC’s Renewable Energy Division?",
    options: [
      "Oil and gas refining",
      "Developing biofuels and alternative energy sources",
      "Expanding crude oil reserves",
      "Improving petroleum subsidy frameworks",
    ],
    correct: "Developing biofuels and alternative energy sources",
  },
  {
    id: 158,
    question: "158. Which Nigerian state houses the Kaduna Refinery?",
    options: ["Kano", "Kaduna", "Katsina", "Zamfara"],
    correct: "Kaduna",
  },
  {
    id: 159,
    question: "159. Which subsidiary of NNPC handles the distribution of refined petroleum products?",
    options: ["NGC", "PPMC", "NPDC", "NNPC Trading"],
    correct: "PPMC",
  },
  {
    id: 160,
    question: "160. The Escravos Gas-to-Liquids (EGTL) project is a joint venture between NNPC and which company?",
    options: ["Chevron", "Shell", "Total", "ExxonMobil"],
    correct: "Chevron",
  },
  {
    id: 161,
    question: "161. The NNPC Towers, its headquarters, is located in which Nigerian city?",
    options: ["Lagos", "Port Harcourt", "Abuja", "Kaduna"],
    correct: "Abuja",
  },
  {
    id: 162,
    question: "162. Nigeria is a major exporter of which type of crude oil?",
    options: ["Light sweet crude", "Heavy sour crude", "Medium sour crude", "Light sour crude"],
    correct: "Light sweet crude",
  },
  {
    id: 163,
    question: "163. Which subsidiary of NNPC is involved in LNG production?",
    options: ["NLNG", "NPDC", "PPMC", "NGC"],
    correct: "NLNG",
  },
  {
    id: 164,
    question: "164. What is a primary concern about Nigeria’s reliance on oil revenues?",
    options: [
      "Price volatility in global oil markets",
      "Environmental degradation",
      "Neglect of other economic sectors",
      "All of the above",
    ],
    correct: "All of the above",
  },
  {
    id: 165,
    question: "165. The 'Deep Offshore and Inland Basin Production Sharing Contract Act' primarily addresses what?",
    options: [
      "Revenue sharing in offshore oil ventures",
      "Pipeline safety regulations",
      "Renewable energy initiatives",
      "Importation of petroleum products",
    ],
    correct: "Revenue sharing in offshore oil ventures",
  },

  {
    id: 166,
    question: "166. What does the Petroleum Equalization Fund (PEF) managed by NNPC do?",
    options: [
      "Subsidizes fuel for consumers",
      "Ensures price uniformity of petroleum products across Nigeria",
      "Oversees oil exploration activities",
      "Regulates environmental standards in the oil industry",
    ],
    correct: "Ensures price uniformity of petroleum products across Nigeria",
  },
  {
    id: 167,
    question: "167. The Brass LNG project is focused on what energy resource?",
    options: ["Crude oil", "Natural gas", "Coal", "Solar energy"],
    correct: "Natural gas",
  },
  {
    id: 168,
    question: "168. What is the significance of OPEC membership for Nigeria?",
    options: [
      "Increases production quotas",
      "Stabilizes oil prices and promotes market cooperation",
      "Restricts Nigeria’s oil exploration",
      "Monitors gas flaring policies",
    ],
    correct: "Stabilizes oil prices and promotes market cooperation",
  },
  {
    id: 169,
    question: "169. Which international pipeline project is NNPC involved in?",
    options: [
      "Trans-Saharan Gas Pipeline",
      "West African Gas Pipeline",
      "Both of the above",
      "None of the above",
    ],
    correct: "Both of the above",
  },
  {
    id: 170,
    question: "170. How does NNPC support Nigeria’s education sector?",
    options: [
      "Provides scholarships to students",
      "Builds schools in oil-producing areas",
      "Funds research in petroleum studies",
      "All of the above",
    ],
    correct: "All of the above",
  },
  {
    id: 171,
    question: "171. What is a major benefit of the Dangote Refinery for NNPC?",
    options: [
      "Improved export capacity",
      "Reduction in fuel importation",
      "Increased crude oil production",
      "Exploration in offshore basins",
    ],
    correct: "Reduction in fuel importation",
  },
  {
    id: 172,
    question: "172. NNPC’s Greenfield Refinery Initiative targets which goal?",
    options: [
      "Replacing old refineries",
      "Building new refineries to boost domestic refining capacity",
      "Exporting petroleum refining technology",
      "Closing offshore oil platforms",
    ],
    correct: "Building new refineries to boost domestic refining capacity",
  },
  {
    id: 173,
    question: "173. The acronym “NNPC” was officially adopted in what year?",
    options: ["1971", "1977", "1980", "1985"],
    correct: "1977",
  },
  {
    id: 174,
    question: "174. The Bonny Light crude oil is known for its:",
    options: [
      "High sulfur content",
      "Low sulfur content and high-quality refining output",
      "Heavy weight and difficulty in extraction",
      "Unsuitability for export markets",
    ],
    correct: "Low sulfur content and high-quality refining output",
  },
  {
    id: 175,
    question: "175. What is a major risk factor for Nigeria’s oil and gas sector?",
    options: [
      "Pipeline vandalism",
      "Global oil price fluctuations",
      "Corruption and poor governance",
      "All of the above",
    ],
    correct: "All of the above",
  },

  {
    id: 176,
    question: "176. In which year was the first oil refinery in Nigeria established?",
    options: [
      "1960",
      "1965",
      "1972",
      "1980",
    ],
    correct: "1965",
  },
  {
    id: 177,
    question: "177. What was the initial refining capacity of the Nigeria Petroleum Refining Company (NPRC)?",
    options: [
      "20,000 barrels per day",
      "38,000 barrels per day",
      "50,000 barrels per day",
      "60,000 barrels per day",
    ],
    correct: "38,000 barrels per day",
  },
  {
    id: 178,
    question: "178. Where was the first oil refinery in Nigeria located?",
    options: [
      "Warri",
      "Alesa Eleme, near Port Harcourt",
      "Kaduna",
      "Lagos",
    ],
    correct: "Alesa Eleme, near Port Harcourt",
  },
  {
    id: 179,
    question: "179. Who were the initial joint venture partners in establishing the Nigeria Petroleum Refining Company (NPRC)?",
    options: [
      "Chevron and Texaco",
      "Nigerian government and ExxonMobil",
      "Shell and British Petroleum",
      "Total and Agip",
    ],
    correct: "Shell and British Petroleum",
  },
  {
    id: 180,
    question: "180. When was the capacity of the Nigeria Petroleum Refining Company increased to 60,000 barrels per day?",
    options: [
      "1965",
      "1970",
      "1972",
      "1985",
    ],
    correct: "1972",
  },
  {
    id: 181,
    question: "181. Who is the current President of Nigeria as of 2024?",
    options: [
      "Muhammadu Buhari",
      "Goodluck Jonathan",
      "Bola Ahmed Tinubu",
      "Yemi Osinbajo",
    ],
    correct: "Bola Ahmed Tinubu",
  },
  {
    id: 182,
    question: "182. Which Nigerian city is hosting the headquarters of the Economic Community of West African States (ECOWAS)?",
    options: [
      "Lagos",
      "Abuja",
      "Port Harcourt",
      "Kano",
    ],
    correct: "Abuja",
  },
  {
    id: 183,
    question: "183. What is the name of the Nigerian currency?",
    options: [
      "Dollar",
      "Cedi",
      "Naira",
      "Rupee",
    ],
    correct: "Naira",
  },
  {
    id: 184,
    question: "184. When was the Nigerian flag first hoisted?",
    options: [
      "1960",
      "1963",
      "1970",
      "1980",
    ],
    correct: "1960",
  },
  {
    id: 185,
    question: "185. Which sector contributes the most to Nigeria’s GDP?",
    options: [
      "Oil and Gas",
      "Agriculture",
      "Manufacturing",
      "Technology",
    ],
    correct: "Agriculture",
  },
  {
    id: 186,
    question: "186. What is the largest river in Nigeria?",
    options: [
      "River Benue",
      "River Niger",
      "River Kaduna",
      "River Cross",
    ],
    correct: "River Niger",
  },
  {
    id: 187,
    question: "187. What is Nigeria’s position in Africa in terms of population size?",
    options: [
      "First",
      "Second",
      "Third",
      "Fourth",
    ],
    correct: "First",
  },
  {
    id: 188,
    question: "188. When was Nigeria admitted to the United Nations?",
    options: [
      "1960",
      "1963",
      "1955",
      "1970",
    ],
    correct: "1960",
  },
  {
    id: 189,
    question: "189. Which Nigerian state is nicknamed 'The Land of Honour and Integrity'?",
    options: [
      "Ekiti",
      "Kano",
      "Lagos",
      "Enugu",
    ],
    correct: "Ekiti",
  },
  {
    id: 190,
    question: "190. Which Nigerian artist recently won a Grammy award?",
    options: [
      "Burna Boy",
      "Wizkid",
      "Davido",
      "Tems",
    ],
    correct: "Tems",
  },

  {
    id: 191,
    question: "191. What is the capital city of Nigeria?",
    options: [
      "Lagos",
      "Abuja",
      "Port Harcourt",
      "Kaduna",
    ],
    correct: "Abuja",
  },
  {
    id: 192,
    question: "192. Which year did Nigeria become a republic?",
    options: [
      "1960",
      "1963",
      "1979",
      "1999",
    ],
    correct: "1963",
  },
  {
    id: 193,
    question: "193. Who was the first President of Nigeria?",
    options: [
      "Nnamdi Azikiwe",
      "Tafawa Balewa",
      "Olusegun Obasanjo",
      "Shehu Shagari",
    ],
    correct: "Nnamdi Azikiwe",
  },
  {
    id: 194,
    question: "194. Which Nigerian state is known as the 'Centre of Excellence'?",
    options: [
      "Lagos",
      "Kano",
      "Abuja",
      "Oyo",
    ],
    correct: "Lagos",
  },
  {
    id: 195,
    question: "195. What is the official language of Nigeria?",
    options: [
      "Yoruba",
      "Hausa",
      "English",
      "Igbo",
    ],
    correct: "English",
  },
  {
    id: 196,
    question: "196. What is the main legislative body in Nigeria called?",
    options: [
      "National Assembly",
      "House of Representatives",
      "Senate",
      "Federal Council",
    ],
    correct: "National Assembly",
  },
  {
    id: 197,
    question: "197. Which Nigerian state is the largest by land area?",
    options: [
      "Lagos",
      "Niger",
      "Kaduna",
      "Borno",
    ],
    correct: "Niger",
  },
  {
    id: 198,
    question: "198. What is the name of the mountain that is Nigeria’s highest point?",
    options: [
      "Obudu Mountain",
      "Chappal Waddi",
      "Shere Hills",
      "Aso Rock",
    ],
    correct: "Chappal Waddi",
  },
  {
    id: 199,
    question: "199. Which of the following is a major cash crop in Nigeria?",
    options: [
      "Wheat",
      "Rice",
      "Cocoa",
      "Corn",
    ],
    correct: "Cocoa",
  },
  {
    id: 200,
    question: "200. What is the primary purpose of the Nigerian National Petroleum Corporation (NNPC)?",
    options: [
      "Regulating oil prices globally",
      "Overseeing Nigeria’s oil and gas operations",
      "Managing international oil imports",
      "Providing subsidies for petroleum products",
    ],
    correct: "Overseeing Nigeria’s oil and gas operations",
  },
  {
    id: 201,
    question: "201. What is the name of Nigeria’s current currency?",
    options: [
      "Dollar",
      "Naira",
      "Cedi",
      "Pound",
    ],
    correct: "Naira",
  },
  {
    id: 202,
    question: "202. Which Nigerian city is known as the 'Coal City'?",
    options: [
      "Enugu",
      "Abuja",
      "Lagos",
      "Calabar",
    ],
    correct: "Enugu",
  },
  {
    id: 203,
    question: "203. In which year did Nigeria gain independence from Britain?",
    options: [
      "1957",
      "1960",
      "1963",
      "1970",
    ],
    correct: "1960",
  },
  {
    id: 204,
    question: "204. Which river is the longest in Nigeria?",
    options: [
      "River Benue",
      "River Kaduna",
      "River Niger",
      "Cross River",
    ],
    correct: "River Niger",
  },
  {
    id: 205,
    question: "205. What is the main export commodity of Nigeria?",
    options: [
      "Cocoa",
      "Crude oil",
      "Palm oil",
      "Groundnuts",
    ],
    correct: "Crude oil",
  },
  {
    id: 206,
    question: "206. Which Nigerian artist won the Grammy Award in 2021?",
    options: [
      "Davido",
      "Wizkid",
      "Burna Boy",
      "Tiwa Savage",
    ],
    correct: "Burna Boy",
  },
  {
    id: 207,
    question: "207. What is the name of the current Nigerian Senate President?",
    options: [
      "Bukola Saraki",
      "Ahmad Lawan",
      "David Mark",
      "Godswill Akpabio",
    ],
    correct: "Godswill Akpabio",
  },
  {
    id: 208,
    question: "208. What is the primary religion in Nigeria?",
    options: [
      "Christianity",
      "Islam",
      "Traditional beliefs",
      "Both Christianity and Islam",
    ],
    correct: "Both Christianity and Islam",
  },
  {
    id: 209,
    question: "209. Which Nigerian state is referred to as the 'Food Basket of the Nation'?",
    options: [
      "Benue",
      "Kano",
      "Kaduna",
      "Ogun",
    ],
    correct: "Benue",
  },
  {
    id: 210,
    question: "210. What is the name of the Nigerian agency responsible for tackling financial crimes?",
    options: [
      "ICPC",
      "EFCC",
      "NDLEA",
      "NIA",
    ],
    correct: "EFCC",
  },
  {
    id: 211,
    question: "211. Who was Nigeria's first Prime Minister after independence?",
    options: [
      "Nnamdi Azikiwe",
      "Tafawa Balewa",
      "Obafemi Awolowo",
      "Ahmadu Bello",
    ],
    correct: "Tafawa Balewa",
  },
  {
    id: 212,
    question: "212. In what year did Nigeria transition to a republic?",
    options: [
      "1960",
      "1963",
      "1979",
      "1999",
    ],
    correct: "1963",
  },
  {
    id: 213,
    question: "213. Who was the military head of state during Nigeria's civil war (1967-1970)?",
    options: [
      "Yakubu Gowon",
      "Aguiyi Ironsi",
      "Olusegun Obasanjo",
      "Murtala Mohammed",
    ],
    correct: "Yakubu Gowon",
  },
  {
    id: 214,
    question: "214. What was the main cause of the Nigerian Civil War?",
    options: [
      "Religious differences",
      "Economic policies",
      "The secession of Biafra",
      "Colonial influence",
    ],
    correct: "The secession of Biafra",
  },
  {
    id: 215,
    question: "215. Who was the first Nigerian president in the Fourth Republic (1999)?",
    options: [
      "Muhammadu Buhari",
      "Olusegun Obasanjo",
      "Goodluck Jonathan",
      "Shehu Shagari",
    ],
    correct: "Olusegun Obasanjo",
  },
  {
    id: 216,
    question: "216. When did Nigeria officially return to democratic rule after military regimes?",
    options: [
      "1979",
      "1993",
      "1999",
      "2003",
    ],
    correct: "1999",
  },
  {
    id: 217,
    question: "217. What was the name of Nigeria’s first political party?",
    options: [
      "National Council of Nigeria and the Cameroons (NCNC)",
      "Action Group (AG)",
      "Nigerian National Democratic Party (NNDP)",
      "Northern People's Congress (NPC)",
    ],
    correct: "Nigerian National Democratic Party (NNDP)",
  },
  {
    id: 218,
    question: "218. Who was Nigeria's first ceremonial president?",
    options: [
      "Tafawa Balewa",
      "Nnamdi Azikiwe",
      "Ahmadu Bello",
      "Herbert Macaulay",
    ],
    correct: "Nnamdi Azikiwe",
  },
  {
    id: 219,
    question: "219. What political system did Nigeria adopt after independence in 1960?",
    options: [
      "Federal system",
      "Unitary system",
      "Confederate system",
      "Parliamentary system",
    ],
    correct: "Parliamentary system",
  },
  {
    id: 220,
    question: "220. Which military ruler announced the transition program to return Nigeria to civilian rule in 1979?",
    options: [
      "Yakubu Gowon",
      "Murtala Mohammed",
      "Olusegun Obasanjo",
      "Ibrahim Babangida",
    ],
    correct: "Olusegun Obasanjo",
  },
  {
    id: 221,
    question: "221. Which Nigerian military leader was overthrown in a coup in 1976?",
    options: [
      "Yakubu Gowon",
      "Murtala Mohammed",
      "Olusegun Obasanjo",
      "Ibrahim Babangida",
    ],
    correct: "Murtala Mohammed",
  },
  {
    id: 222,
    question: "222. In what year did Nigeria gain independence from the United Kingdom?",
    options: [
      "1947",
      "1956",
      "1960",
      "1965",
    ],
    correct: "1960",
  },
  {
    id: 223,
    question: "223. Who was the leader of Nigeria during the 1983 military coup?",
    options: [
      "Olusegun Obasanjo",
      "Muhammadu Buhari",
      "Shehu Shagari",
      "Ibrahim Babangida",
    ],
    correct: "Shehu Shagari",
  },
  {
    id: 224,
    question: "224. What year did Nigeria experience its first military coup?",
    options: [
      "1960",
      "1963",
      "1966",
      "1976",
    ],
    correct: "1966",
  },
  {
    id: 225,
    question: "225. What was the name of the Nigerian military regime that took power in 1985?",
    options: [
      "Babangida regime",
      "Gowon regime",
      "Abacha regime",
      "Shagari regime",
    ],
    correct: "Babangida regime",
  },
  {
    id: 226,
    question: "226. Who was the military head of state during Nigeria’s period of military dictatorship from 1993 to 1998?",
    options: [
      "Olusegun Obasanjo",
      "Sani Abacha",
      "Ibrahim Babangida",
      "Muhammadu Buhari",
    ],
    correct: "Sani Abacha",
  },
  {
    id: 227,
    question: "227. What event led to the end of Nigeria’s First Republic in 1966?",
    options: [
      "A military coup",
      "Economic collapse",
      "A parliamentary crisis",
      "Political corruption",
    ],
    correct: "A military coup",
  },
  {
    id: 228,
    question: "228. Which military leader initiated the Structural Adjustment Program (SAP) in Nigeria?",
    options: [
      "Ibrahim Babangida",
      "Olusegun Obasanjo",
      "Yakubu Gowon",
      "Sani Abacha",
    ],
    correct: "Ibrahim Babangida",
  },
  {
    id: 229,
    question: "229. When did the Nigerian Civil War officially end?",
    options: [
      "1967",
      "1968",
      "1970",
      "1975",
    ],
    correct: "1970",
  },
  {
    id: 230,
    question: "230. Who was the Nigerian leader that established the National Youth Service Corps (NYSC) program?",
    options: [
      "Olusegun Obasanjo",
      "Yakubu Gowon",
      "Muhammadu Buhari",
      "Ibrahim Babangida",
    ],
    correct: "Yakubu Gowon",
  },
  {
    id: 231,
    question: "231. Which Nigerian military leader returned the country to civilian rule in 1999?",
    options: [
      "Olusegun Obasanjo",
      "Ibrahim Babangida",
      "Muhammadu Buhari",
      "Sani Abacha",
    ],
    correct: "Olusegun Obasanjo",
  },
  {
    id: 232,
    question: "232. In what year did Nigeria transition from military to civilian rule after years of military dictatorship?",
    options: [
      "1991",
      "1993",
      "1999",
      "2003",
    ],
    correct: "1999",
  },
  {
    id: 233,
    question: "233. Which Nigerian leader is known for his role in the establishment of the Economic Community of West African States (ECOWAS)?",
    options: [
      "Olusegun Obasanjo",
      "Yakubu Gowon",
      "Shehu Shagari",
      "Goodluck Jonathan",
    ],
    correct: "Yakubu Gowon",
  },
  {
    id: 234,
    question: "234. Which Nigerian leader was in office during the 1983 military coup that ousted the civilian government?",
    options: [
      "Olusegun Obasanjo",
      "Muhammadu Buhari",
      "Shehu Shagari",
      "Ibrahim Babangida",
    ],
    correct: "Shehu Shagari",
  },
  {
    id: 235,
    question: "235. Who was the first Nigerian military leader to be tried and convicted of corruption after leaving office?",
    options: [
      "Olusegun Obasanjo",
      "Ibrahim Babangida",
      "Sani Abacha",
      "Goodluck Jonathan",
    ],
    correct: "Ibrahim Babangida",
  },
  {
    id: 236,
    question: "236. In 2015, which Nigerian president became the first to defeat an incumbent president through democratic elections?",
    options: [
      "Olusegun Obasanjo",
      "Muhammadu Buhari",
      "Goodluck Jonathan",
      "Atiku Abubakar",
    ],
    correct: "Muhammadu Buhari",
  },
  {
    id: 237,
    question: "237. Who was the Nigerian military leader that ordered the assassination of General Murtala Mohammed in 1976?",
    options: [
      "Olusegun Obasanjo",
      "Ibrahim Babangida",
      "Shehu Musa Yar'Adua",
      "Sani Abacha",
    ],
    correct: "Shehu Musa Yar'Adua",
  },
  {
    id: 238,
    question: "238. Which event led to the creation of the Nigerian National Petroleum Corporation (NNPC)?",
    options: [
      "The discovery of oil in the Niger Delta",
      "The nationalization of foreign oil companies",
      "The military coup of 1966",
      "The creation of the Petroleum Trust Fund",
    ],
    correct: "The nationalization of foreign oil companies",
  },
  {
    id: 239,
    question: "239. When did Nigeria hold its first successful presidential election after the end of military rule in 1999?",
    options: [
      "2000",
      "2003",
      "2007",
      "2011",
    ],
    correct: "2003",
  },
  {
    id: 240,
    question: "240. Who was the leader of Nigeria's military government before the return to civilian rule in 1999?",
    options: [
      "Muhammadu Buhari",
      "Sani Abacha",
      "Ibrahim Babangida",
      "Olusegun Obasanjo",
    ],
    correct: "Sani Abacha",
  },
  {
    id: 241,
    question: "241. Which Nigerian military leader annulled the June 12, 1993 presidential election?",
    options: [
      "Olusegun Obasanjo",
      "Ibrahim Babangida",
      "Muhammadu Buhari",
      "Sani Abacha",
    ],
    correct: "Ibrahim Babangida",
  },
  {
    id: 242,
    question: "242. What was the main reason for the Nigerian Civil War (1967-1970)?",
    options: [
      "The discovery of oil in the Niger Delta",
      "Ethnic and political tensions",
      "The failure of military regimes",
      "Religious conflicts",
    ],
    correct: "Ethnic and political tensions",
  },
  {
    id: 243,
    question: "243. Which Nigerian leader is credited with initiating the Nigerian Economic Reforms of the 1980s?",
    options: [
      "Ibrahim Babangida",
      "Olusegun Obasanjo",
      "Goodluck Jonathan",
      "Sani Abacha",
    ],
    correct: "Ibrahim Babangida",
  },
  {
    id: 244,
    question: "244. Which Nigerian military leader was responsible for the introduction of the Structural Adjustment Program (SAP)?",
    options: [
      "Ibrahim Babangida",
      "Sani Abacha",
      "Olusegun Obasanjo",
      "Muhammadu Buhari",
    ],
    correct: "Ibrahim Babangida",
  },
  {
    id: 245,
    question: "245. What year did the Nigerian Civil War officially end?",
    options: [
      "1967",
      "1970",
      "1975",
      "1980",
    ],
    correct: "1970",
  },
  {
    id: 246,
    question: "246. Who was Nigeria's first military Head of State after its independence in 1960?",
    options: [
      "Nnamdi Azikiwe",
      "Yakubu Gowon",
      "Olusegun Obasanjo",
      "Major General Johnson Aguiyi-Ironsi",
    ],
    correct: "Major General Johnson Aguiyi-Ironsi",
  },
  {
    id: 247,
    question: "247. Which Nigerian president was forced to resign after a military coup in 1985?",
    options: [
      "Olusegun Obasanjo",
      "Sani Abacha",
      "Muhammadu Buhari",
      "Shehu Shagari",
    ],
    correct: "Muhammadu Buhari",
  },
  {
    id: 248,
    question: "248. What year did Nigeria gain its independence from the United Kingdom?",
    options: [
      "1960",
      "1957",
      "1959",
      "1963",
    ],
    correct: "1960",
  },
  {
    id: 249,
    question: "249. Which Nigerian leader was in power when Nigeria joined the Organization of Petroleum Exporting Countries (OPEC)?",
    options: [
      "Yakubu Gowon",
      "Olusegun Obasanjo",
      "Muhammadu Buhari",
      "Ibrahim Babangida",
    ],
    correct: "Yakubu Gowon",
  },
  {
    id: 250,
    question: "250. What year did Nigeria transition from a parliamentary system of government to a presidential system?",
    options: [
      "1960",
      "1963",
      "1979",
      "1983",
    ],
    correct: "1979",
  },
  {
    id: 251,
    question: "251. What year was the first personal computer, the Apple I, introduced?",
    options: [
      "1972",
      "1975",
      "1980",
      "1983",
    ],
    correct: "1975",
  },
  {
    id: 252,
    question: "252. Who is known as the father of the modern computer?",
    options: [
      "Charles Babbage",
      "Alan Turing",
      "Bill Gates",
      "Steve Jobs",
    ],
    correct: "Charles Babbage",
  },
  {
    id: 253,
    question: "253. What does the acronym 'HTML' stand for in web development?",
    options: [
      "Hyper Text Machine Language",
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "Hyperlink Text Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    id: 254,
    question: "254. What year was the first iPhone released?",
    options: [
      "2005",
      "2007",
      "2010",
      "2012",
    ],
    correct: "2007",
  },
  {
    id: 255,
    question: "255. What programming language was the first version of Microsoft Windows written in?",
    options: [
      "C",
      "C++",
      "Assembly",
      "Fortran",
    ],
    correct: "Assembly",
  },
  {
    id: 256,
    question: "256. Who founded the technology company Microsoft?",
    options: [
      "Steve Jobs and Steve Wozniak",
      "Bill Gates and Paul Allen",
      "Larry Page and Sergey Brin",
      "Mark Zuckerberg",
    ],
    correct: "Bill Gates and Paul Allen",
  },
  {
    id: 257,
    question: "257. What is the main function of the CPU (Central Processing Unit) in a computer?",
    options: [
      "Store data",
      "Display graphics",
      "Process instructions",
      "Manage internet connections",
    ],
    correct: "Process instructions",
  },
  {
    id: 258,
    question: "258. Which company developed the first commercially successful computer mouse?",
    options: [
      "Apple",
      "IBM",
      "Xerox",
      "Microsoft",
    ],
    correct: "Xerox",
  },
  {
    id: 259,
    question: "259. What is the most common programming language used for web development?",
    options: [
      "Python",
      "JavaScript",
      "Ruby",
      "Java",
    ],
    correct: "JavaScript",
  },
  {
    id: 260,
    question: "260. What is the main purpose of an operating system (OS) in a computer?",
    options: [
      "Manage hardware resources",
      "Play multimedia files",
      "Connect to the internet",
      "Provide security encryption",
    ],
    correct: "Manage hardware resources",
  },
  {
    id: 261,
    question: "261. What does the acronym 'URL' stand for in web technology?",
    options: [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Uniform Retrieval Locator",
      "Universal Retrieval Locator",
    ],
    correct: "Uniform Resource Locator",
  },
  {
    id: 262,
    question: "262. Which company is responsible for the development of the Android operating system?",
    options: [
      "Apple",
      "Google",
      "Microsoft",
      "Samsung",
    ],
    correct: "Google",
  },
  {
    id: 263,
    question: "263. Which technology is used to create virtual machines?",
    options: [
      "Cloud Computing",
      "Blockchain",
      "Hypervisor",
      "3D Printing",
    ],
    correct: "Hypervisor",
  },
  {
    id: 264,
    question: "264. Who invented the World Wide Web?",
    options: [
      "Mark Zuckerberg",
      "Bill Gates",
      "Tim Berners-Lee",
      "Vint Cerf",
    ],
    correct: "Tim Berners-Lee",
  },
  {
    id: 265,
    question: "265. What is the primary function of the DNS (Domain Name System)?",
    options: [
      "Convert website IP addresses to domain names",
      "Secure websites from hackers",
      "Host web servers",
      "Provide internet access to users",
    ],
    correct: "Convert website IP addresses to domain names",
  },
  {
    id: 266,
    question: "266. Which of the following is an open-source operating system?",
    options: [
      "Windows",
      "macOS",
      "Linux",
      "iOS",
    ],
    correct: "Linux",
  },
  {
    id: 267,
    question: "267. In computing, what does the term 'cloud computing' refer to?",
    options: [
      "Remote storage of data and applications over the internet",
      "Storing files on a physical hard drive",
      "Running software exclusively on a local device",
      "Virtual reality in computing",
    ],
    correct: "Remote storage of data and applications over the internet",
  },
  {
    id: 268,
    question: "268. What is the most commonly used web browser?",
    options: [
      "Firefox",
      "Internet Explorer",
      "Google Chrome",
      "Safari",
    ],
    correct: "Google Chrome",
  },
  {
    id: 269,
    question: "269. Which of the following is a popular programming language for data science and machine learning?",
    options: [
      "C#",
      "Python",
      "JavaScript",
      "Swift",
    ],
    correct: "Python",
  },
  {
    id: 270,
    question: "270. What is the main purpose of an SSD (Solid State Drive) in a computer?",
    options: [
      "Store backup files",
      "Increase computer processing power",
      "Store the operating system and programs for faster access",
      "Control input and output devices",
    ],
    correct: "Store the operating system and programs for faster access",
  },

  {
    id: 271,
    question: "271. Which programming language is primarily used for web development to make interactive web pages?",
    options: [
      "Java",
      "C++",
      "JavaScript",
      "Ruby",
    ],
    correct: "JavaScript",
  },
  {
    id: 272,
    question: "272. What does the term 'AI' stand for in computing?",
    options: [
      "Artificial Intelligence",
      "Automated Interface",
      "Advanced Integration",
      "Algorithmic Input",
    ],
    correct: "Artificial Intelligence",
  },
  {
    id: 273,
    question: "273. Which of the following is a version control system commonly used in software development?",
    options: [
      "Docker",
      "Git",
      "MySQL",
      "Jupyter",
    ],
    correct: "Git",
  },
  {
    id: 274,
    question: "274. What is the purpose of the HTTP protocol in web communication?",
    options: [
      "Secure communication over the internet",
      "Requesting and transmitting web pages",
      "Storing files on a server",
      "Running a website's database",
    ],
    correct: "Requesting and transmitting web pages",
  },
  {
    id: 275,
    question: "275. What does 'RAM' stand for in computer hardware?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Reliable Access Memory",
      "Real-time Access Memory",
    ],
    correct: "Random Access Memory",
  },
  {
    id: 276,
    question: "276. What does the acronym 'USB' stand for?",
    options: [
      "Universal Secure Block",
      "Universal Serial Bus",
      "Unified System Bus",
      "Universal Signal Bus",
    ],
    correct: "Universal Serial Bus",
  },
  {
    id: 277,
    question: "277. Which technology allows the creation of virtual machines?",
    options: [
      "Hyper-V",
      "Blockchain",
      "Cloud Computing",
      "Machine Learning",
    ],
    correct: "Hyper-V",
  },
  {
    id: 278,
    question: "278. What is the primary function of an operating system?",
    options: [
      "Perform mathematical calculations",
      "Manage computer hardware and software resources",
      "Encrypt and decrypt data",
      "Control external devices like printers",
    ],
    correct: "Manage computer hardware and software resources",
  },
  {
    id: 279,
    question: "279. Which of the following is a cloud storage service provided by Google?",
    options: [
      "OneDrive",
      "Dropbox",
      "Google Drive",
      "iCloud",
    ],
    correct: "Google Drive",
  },
  {
    id: 280,
    question: "280. What does 'API' stand for in programming?",
    options: [
      "Application Programming Interface",
      "Automated Programming Integration",
      "Access Point Interface",
      "Advanced Process Interface",
    ],
    correct: "Application Programming Interface",
  },
  {
    id: 281,
    question: "281. What is the purpose of an algorithm in computer science?",
    options: [
      "To manage computer hardware",
      "To define the steps to solve a problem",
      "To create web pages",
      "To store data securely",
    ],
    correct: "To define the steps to solve a problem",
  },
  {
    id: 282,
    question: "282. What is the primary function of a database management system (DBMS)?",
    options: [
      "To manage and organize data",
      "To run software applications",
      "To process web requests",
      "To encrypt data for security",
    ],
    correct: "To manage and organize data",
  },
  {
    id: 283,
    question: "283. Which of the following is a commonly used language for web development?",
    options: [
      "Python",
      "HTML",
      "C#",
      "Swift",
    ],
    correct: "HTML",
  },
  {
    id: 284,
    question: "284. What does the term 'cloud computing' refer to?",
    options: [
      "Storing and processing data using remote servers",
      "Running software on personal computers",
      "Programming in the cloud environment",
      "Connecting to the internet through satellite signals",
    ],
    correct: "Storing and processing data using remote servers",
  },
  {
    id: 285,
    question: "285. Which programming language is commonly used for developing iOS applications?",
    options: [
      "Python",
      "Swift",
      "Java",
      "C++",
    ],
    correct: "Swift",
  },
  {
    id: 286,
    question: "286. What is a 'byte' in computer storage?",
    options: [
      "A unit of data consisting of 16 bits",
      "A unit of data consisting of 8 bits",
      "A unit of data consisting of 4 bits",
      "A unit of data consisting of 32 bits",
    ],
    correct: "A unit of data consisting of 8 bits",
  },
  {
    id: 287,
    question: "287. What is the function of a web browser?",
    options: [
      "To execute machine-level code",
      "To display web pages and navigate the internet",
      "To compile programming languages",
      "To manage file storage on a computer",
    ],
    correct: "To display web pages and navigate the internet",
  },
  {
    id: 288,
    question: "288. What is the purpose of encryption in computer security?",
    options: [
      "To convert data into an unreadable format to prevent unauthorized access",
      "To compress data for faster storage",
      "To create backups of important data",
      "To increase the speed of internet connections",
    ],
    correct: "To convert data into an unreadable format to prevent unauthorized access",
  },
  {
    id: 289,
    question: "289. Which of the following is an example of an open-source operating system?",
    options: [
      "Windows",
      "Linux",
      "MacOS",
      "iOS",
    ],
    correct: "Linux",
  },
  {
    id: 290,
    question: "290. What does the acronym 'DNS' stand for in networking?",
    options: [
      "Data Network Security",
      "Domain Name System",
      "Direct Network Service",
      "Distributed Network Server",
    ],
    correct: "Domain Name System",
  },
  {
    id: 291,
    question: "291. Which of the following is a popular cloud storage service?",
    options: [
      "Dropbox",
      "WordPress",
      "Notepad++",
      "MySQL",
    ],
    correct: "Dropbox",
  },
  {
    id: 292,
    question: "292. What is the main function of an operating system?",
    options: [
      "Manage hardware and software resources",
      "Create websites and applications",
      "Encrypt sensitive data",
      "Increase internet speed",
    ],
    correct: "Manage hardware and software resources",
  },
  {
    id: 293,
    question: "293. Which programming language is primarily used for Android app development?",
    options: [
      "Java",
      "Ruby",
      "C++",
      "PHP",
    ],
    correct: "Java",
  },
  {
    id: 294,
    question: "294. What is the role of a compiler in programming?",
    options: [
      "To convert high-level code into machine-readable code",
      "To design user interfaces",
      "To store data on a computer",
      "To debug errors in code",
    ],
    correct: "To convert high-level code into machine-readable code",
  },
  {
    id: 295,
    question: "295. What does HTTP stand for in web development?",
    options: [
      "HyperText Transfer Protocol",
      "High Text Transfer Protocol",
      "HyperText Transaction Protocol",
      "High Traffic Transfer Protocol",
    ],
    correct: "HyperText Transfer Protocol",
  },
  {
    id: 296,
    question: "296. What is a ‘firewall’ in computer networking?",
    options: [
      "A device that speeds up internet connections",
      "A security system that monitors and controls incoming and outgoing network traffic",
      "A program that organizes data storage",
      "A protocol for managing network addresses",
    ],
    correct: "A security system that monitors and controls incoming and outgoing network traffic",
  },
  {
    id: 297,
    question: "297. What is a 'bug' in the context of software development?",
    options: [
      "A hardware malfunction",
      "A flaw or error in the software code",
      "A security vulnerability",
      "A feature that enhances performance",
    ],
    correct: "A flaw or error in the software code",
  },
  {
    id: 298,
    question: "298. What is 'machine learning' in the field of computer science?",
    options: [
      "A method of teaching computers to perform tasks without explicit programming",
      "A technique used to improve internet speeds",
      "A process of creating web pages",
      "A method of programming hardware components",
    ],
    correct: "A method of teaching computers to perform tasks without explicit programming",
  },
  {
    id: 299,
    question: "299. What does the term 'big data' refer to?",
    options: [
      "Small amounts of structured data",
      "Large volumes of data that are difficult to process using traditional methods",
      "Data stored in spreadsheets",
      "Data with no value or use",
    ],
    correct: "Large volumes of data that are difficult to process using traditional methods",
  },
  {
    id: 300,
    question: "300. What is the purpose of 'virtualization' in computing?",
    options: [
      "To increase the physical storage space on a computer",
      "To create virtual versions of hardware, operating systems, or storage resources",
      "To increase internet bandwidth",
      "To improve computer graphics performance",
    ],
    correct: "To create virtual versions of hardware, operating systems, or storage resources",
  }



  ];




  
  // Timer Logic
  let time = 60 * 60; // 60 minutes in seconds
  const timerElement = document.getElementById("timer");
  
  function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (time > 0) {
      time--;
    } else {
      submitTest();
    }
  }
  setInterval(updateTimer, 1000);
  
  // Load Questions
  const questionsContainer = document.getElementById("questions");
  
  questions.forEach((q) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <h3>${q.question}</h3>
      ${q.options
        .map(
          (option) =>
            `<label>
               <input type="radio" name="question-${q.id}" value="${option}"> ${option}
             </label><br>`
        )
        .join("")}
      <div id="feedback-${q.id}" style="color: red; margin-top: 5px;"></div>
    `;
    questionsContainer.appendChild(questionDiv);
  });
  
  // Submit Test and Provide Feedback
  function submitTest() {
    const feedbackDiv = document.getElementById("feedback");
    let score = 0;
    let total = questions.length;
  
    questions.forEach((q) => {
      const selectedOption = document.querySelector(`input[name="question-${q.id}"]:checked`);
      const feedback = document.getElementById(`feedback-${q.id}`);
  
      if (selectedOption) {
        if (selectedOption.value === q.correct) {
          score++;
          feedback.style.color = "green";
          feedback.innerText = "Correct!";
        } else {
          feedback.style.color = "red";
          feedback.innerText = `Incorrect!` ;
        }
      } else {
        feedback.style.color = "red";
        feedback.innerText = "No answer selected!";
      }
    });
  
    feedbackDiv.innerHTML = `
      <h2>Test Feedback</h2>
      <p>Your Score: ${score}/${total}</p>
      <p>Percentage: ${(score / total) * 100}%</p>
      ${
        score === total
          ? "<p>Excellent! You got all the questions right!</p>"
          : "<p>Keep practicing to improve your score!</p>"
      }
    `;
  
    // Disable all inputs after submission
    document.querySelectorAll("input").forEach((input) => (input.disabled = true));
    document.querySelector("button").disabled = true;
  }
  