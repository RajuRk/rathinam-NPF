const courses = [
   {
     id: 1,
     course_specific: "Engineering",
     course_name: "AGRICULTURAL ENGINEERING",
     course_content: "Agricultural engineering is the area of academic concentration and appeal of engineering science and designs principles for agriculture purposes as well as to ensure sustainability of natural and renewable resources."
   },
   {
    id: 2,
    course_specific: "Engineering",
    course_name: "APPLIED ELECTRONICS",
    course_content: "Applied Electronics is a modern branch of engineering which distributes with the application of existing or known scientific knowledge"
  },
  {
    id: 3,
    course_specific: "Engineering",
    course_name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
    course_content: "Artificial Intelligence and Data Science directs the students to obtain technical skills in having real-time applications."
  },
  {
    id: 4,
    course_specific: "Engineering",
    course_name: "BIO-METRICS AND CYBER SECURITY",
    course_content: "Bio-metrics and cyber security mentions the work of utilizing biological features for digital authentication and access control."
  },
  {
    id: 5,
    course_specific: "Engineering",
    course_name: "BIOMEDICAL ENGINEERING",
    course_content: "Biomedical Engineering is the approach of engineering principles and systems to solve medical and biological problems."
  },
  {
    id: 6,
    course_specific: "Engineering",
    course_name: "BIOTECHNOLOGY",
    course_content: "Biotechnology is the controlled and intended manipulation of biological systems for the efficient manufacture or organizing of useful products."
  },
  {
    id: 7,
    course_specific: "Engineering",
    course_name: "COMPUTER SCIENCE AND ENGINEERING",
    course_content: "Computer Science and Engineering consists of scientific and engineering features of computing."
  },
  {
    id: 8,
    course_specific: "Engineering",
    course_name: "ELECTRONICS AND COMMUNICATION ENGINEERING",
    course_content: "Electronics and Communication Engineering is a control of engineering that includes developing and testing electronic circuits and communication devices."
  },
  {
    id: 9,
    course_specific: "Engineering",
    course_name: "FOOD BIOTECHNOLOGY",
    course_content: "Food biotechnology is the approach of modern biotechnological techniques to produce and refining of food products as well as food ingredients and food additives."
  },
  {
    id: 10,
    course_specific: "Engineering",
    course_name: "INFORMATION TECHNOLOGY",
    course_content: "Information Technology is to acquire knowledge of computers to meet day-to-day business needs and move your career in the IT industry."
  },
  {
    id: 11,
    course_specific: "Engineering",
    course_name: "MECHANICAL ENGINEERING",
    course_content: "Mechanical Engineering is the approach of the principles and problem-solving techniques of engineering from design to manufacturing to the arena of commercial dealings for any item."
  },
  {
    id: 12,
    course_specific: "Engineering",
    course_name: "MEDICAL ELECTRONICS",
    course_content: "Medical electronics is the learning of the design, mechanics and software development of the devices utilized for diagnostic purposes in the medical sector."
  },
];

var userDate = document.querySelector('box-card');

document.getElementById('news-slider').innerHTML = courses.map(user => `
        <div class="post-slide" key=${user.id}>
        <div class="post-img">
        <img src="img/course.jpg" alt="">
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