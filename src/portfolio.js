/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Keya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Keya Patel Portfolio",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Keya Patel",
  logo_name: "KeyaPatel",
  nickname: "Software Engineer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1QSC8RmSXB63OPppFzkiKfH3hsow3YbsE/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/keyap22",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/keyap2000",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/keya-patel2000/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kpate142@asu.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Developed multiple fully-functional full stack projects in MERN Stack, Django",
        "⚡ Creating application backend in Node, Express, Django & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platform",
        "⚡ Storing files in S3 bucket, creating APIs in AWS using API Gateway and dealing with lambda functions along with integration of databases",
        "⚡ Validating mobile number using Firebase along with deployment and storing data in its database",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "AWS S3 Bucket",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "AWS API Gateway",
          fontAwesomeClassname: "logos:aws-api-gateway",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "AWS Lambda function",
          fontAwesomeClassname: "logos:aws-lambda",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/kpatel161997/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "L. D. College of Engineering",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "ldce_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, MPI, AI etc.",
        "⚡ Apart from this, I have done courses on Data Mining, Data Visualization, Data Science, Cloud Computing and Big Data Analytics.",
        "⚡ I have worked on multiple projects during the curriculum like ecommerce website using Django. We created Dashboard using D3.js. Along with that, I maintained my CGPA by having 3.71 on a scale of 4.0.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Arizona State University",
      subtitle: "M.S. in Software Engineering",
      logo_path: "asu_logo.png",
      alt_name: "Arizona State University",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Software Engineering which correspond to Software Requirements and Specifications, Foundations of Software Engineering, Software Verification Validation and Testing etc.",
        "⚡ Apart from this, I am doing part-time job as a Tutor. As part of it, I have worked on creating new games in Unity and creating a new programming language in Prolog.",
        "⚡ I was selected for NAmU American Scholarship Grad which is offered to outstanding freshmen as they pursue academic excellence at ASU.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Big Data",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/MD6N4DK2VZWC",
      alt_name: "Coursera",
      color_code: "#8C151599",
    },
    {
      title: "MATLAB Onramp Course",
      subtitle: "- MathWorks",
      logo_path: "mathworks.png",
      certificate_link:
        "https://drive.google.com/file/d/1CDt8cTPdf8abopn8C5wo1Et0tFsRIL9X/view",
      alt_name: "mathworks",
      color_code: "#1F70C199",
    },
    {
      title: "Google Analytics For Beginners",
      subtitle: "- Google Analytics",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CFz0yBrTcbOCH0oWbI-ptwH-O6Jl752z/view",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have accomplished two internships as MERN Stack and Software Developer. I love organising events and that is why I am also involved with many social service communities as a volunteer, tutor and coordinator in multiple events while pursuing my bachelor's degree.",
  header_image_path: "image_for_work_experience.png",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Odoo Inc.",
          company_url: "https://www.odoo.com/",
          logo_path: "odoo_logo.png",
          duration: "June 2023 - August 2023",
          location: "Buffalo, NY",
          description:
            "I am working on adding Google and Apple Pay using authorize.net payment provider. The project involve enabling express checkout checkbox to be able to use Google and Apple pay payment options. I am currently developing and executing JavaScript code to seamlessly integrate Google/Apple Pay API into Odoo’s e-commerce platform. We built a streamlined payment processing system that automatically creates a purchase record upon completion, and seamlessly navigates from the payment page to the confirmation page.",
          color: "#0879bf",
        },
        {
          title: "MERN Stack Intern",
          company: "Unnati Informatics LLP.",
          company_url: "http://unnatiinformatics.com/",
          logo_path: "unnati_logo.jpeg",
          duration: "January 2022 - April 2022",
          location: "Ahmedabad, Gujarat",
          description:
            "We created an interactive system with the ability to authorize, validate and manage visitors, generate reports in PDF format, and support staff attendance tracking. We built a secure data storage system for visitors’ data by integrating Rest APIs with MongoDB’s Compass and Firebase databases. We also integrated ReCaptcha verification & email/mobile number validation features across applications for heightened security levels and greater usability.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "ASU Tutor | Success Coach",
          company: "Arizona State University",
          company_url: "https://www.asu.edu/",
          logo_path: "asu_logo.png",
          duration: "November 2022 - Present",
          location: "Tempe, Arizona",
          description:
            "I assist middle and high school students with problem-solving for Mathematics, English, Social Studies, and Physics that may arise in their lectures or assignments. I was also a part of the Summer Bridge Program where we try to make middle school students coming to high school comfortable with the high school temperature.",
          color: "#4285F4",
        },
        {
          title: "NSS Volunteer",
          company: "National Service Scheme Club",
          company_url: "https://ldce.ac.in/clubs/nss",
          logo_path: "nss_logo.jpeg",
          duration: "September 2018 - September 2021",
          location: "Ahmedabad, Gujarat",
          description:
            "I coordinated the 10-member team and ran weekly meetings to oversee progress in the work assigned, which led to the successful launch of a kho-kho game in the sports meet 2019.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Applications using MERN Stack or cloud provider like AWS.",
  avatar_image_path: "projects.png",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "keya-pic.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Node, Cloud and Full stack Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "1260 E University Dr, Tempe, AZ - 85281",
    locality: "Tempe",
    country: "US",
    region: "Arizona",
    postalCode: "85281",
    streetAddress: "1260 E University Dr",
    avatar_image_path: "address.png",
    location_map_link: "https://goo.gl/maps/qiCgNLQZXpMUU8kT8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
