const courses = [
   {
     id: 1,
     course_specific: "Engineering",
     course_name: "AGRICULTURAL ENGINEERING",
     course_content: "Agricultural engineering is the area of academic concentration and appeal of engineering science and designs principles for agriculture purposes and to ensure the sustainability of natural and renewable resources.",
     img: "img/agri-be.png"
   },
   {
    id: 2,
    course_specific: "Engineering",
    course_name: "APPLIED ELECTRONICS",
    course_content: "Applied Electronics is a modern branch of engineering that distributes the application of existing or known scientific knowledge.",
    img: "img/aplied-electronics-be.png"
  },
  {
    id: 3,
    course_specific: "Engineering",
    course_name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
    course_content: "Artificial Intelligence and Data Science direct the students to obtain technical skills in having real-time applications.",
    img: "img/ai-be.png"
  },
  {
    id: 4,
    course_specific: "Engineering",
    course_name: "BIO-METRICS AND CYBER SECURITY",
    course_content: "Bio-metrics and cyber security mention utilizing biological features for digital authentication and access control.",
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
    course_content: "Biotechnology is the controlled and intended manipulation of biological systems to manufacture or organize useful products efficiently.",
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
    course_content: "Food biotechnology is the approach of modern biotechnological techniques to produce and refine food products, ingredients, and additives.",
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
    course_content: "Mechanical Engineering is the approach of engineering principles and problem-solving techniques from design to manufacturing to commercial dealings for any item.",
    img: "img/mech-be.png"
  },
  {
    id: 12,
    course_specific: "Engineering",
    course_name: "MEDICAL ELECTRONICS",
    course_content: "Medical electronics is learning the design, mechanics, and software development of the medical sector's devices utilized for diagnostic purposes.",
    img: "img/medical-electronic-be.png"
  },
  {
    id: 13,
    course_specific: "Arts & Science",
    course_name: "B.SC COMPUTER SCIENCE",
    course_content: "B.Sc in Computer Science covers AI, computer systems, security, databases, human-computer interaction, vision, programming, software engineering, bio-informatics, and theory.",
    img: "img/arts/B.SC_COMPUTER_SCIENCE-min.png"
  },
  {
    id: 14,
    course_specific: "Arts & Science",
    course_name: "B.SC INFORMATION TECHNOLOGY",
    course_content: "B.Sc Information Technology is an undergraduate science course dealing with software, databases, and networking designed to impart theoretical and practical knowledge on storing, processing, and managing information securely.",
    img: "img/arts/B.SC_INFORMATION_TECHNOLOGY-min.png"
  },
  {
    id: 15,
    course_specific: "Arts & Science",
    course_name: "B.SC MATHEMATICS",
    course_content: "B.Sc Mathematical Sciences is to develop qualified scientists who can identify, evaluate and solve problems associated with mathematical sciences.",
    img: "img/arts/B.SC_MATHEMATICS-min.png"
  },
  {
    id: 16,
    course_specific: "Arts & Science",
    course_name: "B.SC PSYCHOLOGY",
    course_content: "B.Sc Psychology is a science branch that studies the mind, human behavior, cognition, feelings, and emotions.",
    img: "img/arts/B.SC_PSYCHOLOGY-min.png"
  },
  {
    id: 17,
    course_specific: "Arts & Science",
    course_name: "B.COM ACCA",
    course_content: "B.Com ACCA helps the students finish ACCA professional qualification with little additional training since the curriculum is already integrated or embedded in the B.Com syllabus.",
    img: "img/arts/B.COM_ACCA-min.png"
  },
  {
    id: 18,
    course_specific: "Arts & Science",
    course_name: "B.COM INFORMATION TECHNOLOGY",
    course_content: "B.Com Information Technology includes studying software development, software testing, software engineering, computer networking, web design, databases, and programming.",
    img: "img/arts/B.COM_INFORMATION_TECHNOLOGY-min.png"
  },
  {
    id: 19,
    course_specific: "Arts & Science",
    course_name: "B.A ENGLISH LITERATURE",
    course_content: "B.A in English Literature is a trendy field of study. It will provide a platform for in-depth knowledge about different cultures to improve your writing skills and helps you to grow other career-oriented skills essential for your personal development.",
    img: "img/arts/B.A_ENGLISH_LITERATURE-min.png"
  },
  {
    id: 20,
    course_specific: "Arts & Science",
    course_name: "M.A ENGLISH LITERATURE",
    course_content: "M.A English Literature syllabus and subjects include a variety of topics, including English prose, essays, modernism, American Literature, and literary theory.",
    img: "img/arts/M.A_ENGLISH_LITERATURE-min.png"
  },
  {
    id: 21,
    course_specific: "Arts & Science",
    course_name: "M.A JOURNALISM & MASS COMMUNICATION",
    course_content: "M.A Journalism & Mass Communication is a mass communication professional who can pursue a career as a journalist, actor, radio jockey, video jockey, director, editor, screenwriter, event manager, advertising agent, copywriter, and media planner.",
    img: "img/arts/M.A_JM.png"
  },
  {
    id: 22,
    course_specific: "Arts & Science",
    course_name: "M.SC DATA SCIENCE & BUSINESS ANALYSIS",
    course_content: "M.Sc Data Science & Business Analysis is designed for graduates from various disciplines and experience. It gives you skills in data analytics, computing, and business.",
    img: "img/arts/M.SC_DATA_SCIENCE_BUSINESS_ANALYSIS-min.png"
  },
  {
    id: 23,
    course_specific: "Arts & Science",
    course_name: "M.SC BIO-TECHNOLOGY",
    course_content: "M.Sc Biotechnology is a course that discusses the higher-level application of science in biological and human science, including food technology.",
    img: "img/arts/M.SC_BIO-TECHNOLOGY-min.png"
  },
  {
    id: 24,
    course_specific: "Arts & Science",
    course_name: "M.SC MATHEMATICS",
    course_content: "M.Sc Mathematics is a curated program that covers the intrinsic knowledge of advanced mathematics, including calculus, geometry, algebra, number theory, differential equation, and many more.",
    img: "img/arts/M.sc_maths-min.png"
  },
  {
    id: 25,
    course_specific: "Arts & Science",
    course_name: "MBA SPECIALIZATION IN INTERNATIONAL BUSINESS",
    course_content: "MBA Specialization in International Business covers the fundamentals of business administration, including courses on finance, accounting, marketing, and leadership.",
    img: "img/arts/MBA_SIB-min.png"
  },
  {
    id: 26,
    course_specific: "Arts & Science",
    course_name: "MBA INNOVATION ENTREPRENEURSHIP & VENTURE DEVELOPMENT",
    course_content: "MBA Innovation Entrepreneurship & Venture Development is specially tailored around the start-up ecosystem and builds on Innovation and Growth, the principal pillars for any fledgling enterprise.",
    img: "img/arts/MBA_IEVD.png"
  },
  {
    id: 27,
    course_specific: "Arts & Science",
    course_name: "M.COM COMPUTER APPLICATION",
    course_content: "M.Com Computer Application course is taught as a full-time course and as distance learning. The eligibility criteria for a candidate to pursue this degree are that they should hold a B. Com degree from any registered university which offers this course.",
    img: "img/arts/M.COM_CP-min.png"
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
        </div>
        </div>
`).join('');


function readMore(){
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}