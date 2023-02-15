const courses = [
   {
     id: 1,
     course_specific: "Engineering",
     course_name: "AGRICULTURAL ENGINEERING",
     course_content: "Agricultural engineering is the area of academic concentration and appeal of engineering science and designs principles for agriculture purposes as well as to ensure sustainability of natural and renewable resources.",
     img: "img/agri-be.png"
   },
   {
    id: 2,
    course_specific: "Engineering",
    course_name: "APPLIED ELECTRONICS",
    course_content: "Applied Electronics is a modern branch of engineering which distributes with the application of existing or known scientific knowledge",
    img: "img/aplied-electronics-be.png"
  },
  {
    id: 3,
    course_specific: "Engineering",
    course_name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
    course_content: "Artificial Intelligence and Data Science directs the students to obtain technical skills in having real-time applications.",
    img: "img/ai-be.png"
  },
  {
    id: 4,
    course_specific: "Engineering",
    course_name: "BIO-METRICS AND CYBER SECURITY",
    course_content: "Bio-metrics and cyber security mentions the work of utilizing biological features for digital authentication and access control.",
    img: "img/bio-metrics-be.png"
  },
  {
    id: 5,
    course_specific: "Engineering",
    course_name: "BIOMEDICAL ENGINEERING",
    course_content: "Biomedical Engineering is the approach of engineering principles and systems to solve medical and biological problems.",
    img: "img/biomedical-be.png"
  },
  {
    id: 6,
    course_specific: "Engineering",
    course_name: "BIOTECHNOLOGY",
    course_content: "Biotechnology is the controlled and intended manipulation of biological systems for the efficient manufacture or organizing of useful products.",
    img: "img/biotechnology-be.png"
  },
  {
    id: 7,
    course_specific: "Engineering",
    course_name: "COMPUTER SCIENCE AND ENGINEERING",
    course_content: "Computer Science and Engineering consists of scientific and engineering features of computing.",
    img: "img/cse-be.png"
  },
  {
    id: 8,
    course_specific: "Engineering",
    course_name: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    course_content: "Electronics and Communication Engineering is a control of engineering that includes developing and testing electronic circuits and communication devices.",
    img: "img/ece-be.png"
  },
  {
    id: 9,
    course_specific: "Engineering",
    course_name: "FOOD BIOTECHNOLOGY",
    course_content: "Food biotechnology is the approach of modern biotechnological techniques to produce and refining of food products as well as food ingredients and food additives.",
    img: "img/food_biology-be.png"
  },
  {
    id: 10,
    course_specific: "Engineering",
    course_name: "INFORMATION TECHNOLOGY",
    course_content: "Information Technology is to acquire knowledge of computers to meet day-to-day business needs and move your career in the IT industry.",
    img: "img/it-be.png"
  },
  {
    id: 11,
    course_specific: "Engineering",
    course_name: "MECHANICAL ENGINEERING",
    course_content: "Mechanical Engineering is the approach of the principles and problem-solving techniques of engineering from design to manufacturing to the arena of commercial dealings for any item.",
    img: "img/mech-be.png"
  },
  {
    id: 12,
    course_specific: "Engineering",
    course_name: "MEDICAL ELECTRONICS",
    course_content: "Medical electronics is the learning of the design, mechanics and software development of the devices utilized for diagnostic purposes in the medical sector.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 13,
    course_specific: "Arts & Science",
    course_name: "B.SC COMPUTER SCIENCE",
    course_content: "B.Sc Computer Science principal areas of study includes artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering, bioinformatics and theory of computing.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 14,
    course_specific: "Arts & Science",
    course_name: "B.SC INFORMATION TECHNOLOGY",
    course_content: "B.Sc Information Technology is an undergraduate science course dealing with software, databases, and networking designed to impart theoretical and practical knowledge on storing, processing and managing information securely.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 15,
    course_specific: "Arts & Science",
    course_name: "B.SC MATHEMATICS",
    course_content: "B.Sc Mathematical Sciences is to develop qualified scientists who can identify, evaluate and solve problems associated with mathematical sciences.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 16,
    course_specific: "Arts & Science",
    course_name: "B.SC PSYCHOLOGY",
    course_content: "B.Sc Psychology is a branch of science that deals with the study of mind, human behaviour, cognition, feelings and emotions.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 17,
    course_specific: "Arts & Science",
    course_name: "B.COM ACCA",
    course_content: "B.Com ACCA helps the students finish ACCA professional qualification without much additional training since the curriculum is already integrated or embedded in the B.Com syllabus.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 18,
    course_specific: "Arts & Science",
    course_name: "B.COM INFORMATION TECHNOLOGY",
    course_content: "B.Com Information Technology includes the study of software development, software testing, software engineering, computer networking, web design, databases and programming.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 19,
    course_specific: "Arts & Science",
    course_name: "B.A ENGLISH LITERATURE",
    course_content: "B.A in English Literature is a trendy field of study. It will provide you with a platform for in-depth knowledge about different cultures to improve your writing skills and helps you to grow other career-oriented skills essential for your personal development.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 20,
    course_specific: "Arts & Science",
    course_name: "M.A ENGLISH LITERATURE",
    course_content: "M.A English Literature syllabus and subjects include a variety of subjects which includes English prose, essays, modernism, American Literature and literary theory.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 21,
    course_specific: "Arts & Science",
    course_name: "M.A JOURNALISM & MASS COMMUNICATION",
    course_content: "M.A Journalism & Mass Communication is a mass communication professional can pursue a career as a journalist, actor, radio jockey, video jockey, director, editor, screenwriter, event manager, advertising agent, copywriter and media planner.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 22,
    course_specific: "Arts & Science",
    course_name: "M.SC DATA SCIENCE & BUSINESS ANALYSIS",
    course_content: "M.Sc Data Science & Business Analysis is designed for graduates from a wide range of disciplines and experience. It gives you skills in data analytics, computing and business. Using sophisticated analytics techniques, including social network visualization and sentiment analysis, and professional software.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 23,
    course_specific: "Arts & Science",
    course_name: "M.SC BIO-TECHNOLOGY",
    course_content: "M.Sc Biotechnology is a course that discusses the higher-level application of science in biological and human science, including food technology.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 24,
    course_specific: "Arts & Science",
    course_name: "M.SC MATHEMATICS",
    course_content: "M.Sc Mathematics is a curate program that covers the intrinsic knowledge of advanced mathematics including calculus, geometry, algebra, number theory, differential equation and many more.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 25,
    course_specific: "Arts & Science",
    course_name: "MBA SPECIALIZATION IN INTERNATIONAL BUSINESS",
    course_content: "MBA Specialization in International Business covers the fundamentals of business administration, including courses on finance, accounting, marketing, and leadership.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 26,
    course_specific: "Arts & Science",
    course_name: "MBA INNOVATION ENTREPRENEURSHIP & VENTURE DEVELOPMENT",
    course_content: "MBA Innovation Entrepreneurship & Venture Development is specially tailored around the start-up ecosystem and builds on Innovation and Growth, the principal pillars for any fledgling enterprise.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 27,
    course_specific: "Arts & Science",
    course_name: "M.COM COMPUTER APPLICATION",
    course_content: "M.Com Computer Application course is taught both as a full-time course and as distance learning. The eligibility criteria for a candidate to pursue this degree are that he/she should hold a B. Com degree from any registered university which offers this course.",
    img: "img/medical-electronic-be.png"
  },
];

var userDate = document.querySelector('box-card');

document.getElementById('news-slider').innerHTML = courses.map(user => `
        <div class="post-slide" key=${user.id}>
        <div class="post-img">
        <img src=${user.img} alt="">
        <a href="#" class="over-layer"><i class="fa fa-link"></i></a>
        </div>
        <div class="post-content">
        <h6 class="post-title">${user.course_specific}</h6>
        <h5 class="post-title">${user.course_name}</h5>
        <p class="post-description">${user.course_content}</p>
        <span class="post-date"></span>
        <a href="#" class="read-more">read more</a>
        </div>
        </div>
`).join('');