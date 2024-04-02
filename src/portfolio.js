/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chinmayee Pendyala",
  title: "Hola! This is Chinmayee",
  subTitle: emoji(
    "A crazy Full Stack developer proficient in Java, Spring, Microservices, and Angular technologies. Skilled at creating and executing scalable techniques. Excited in sharing this expertise with innovative development teams."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sgHKMRup1xkPoa_lLBSoAw3oHe3dRbQq/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chinmayee86/",
  linkedin: "https://www.linkedin.com/in/chinmayeependyala-889ba51a3/",
  gmail: "chinmayeependyala@gmail.com",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate Full Stack Developer wanting to explore every Tech Stack",
  skills: [
    emoji(
      "⚡ Construct extremely interactive front end or user interfaces for your web applications."
    ),
    emoji(
      "⚡ Employ Spring MVC with Spring Boot to create J2EE apps and RESTful web services."
    ),
    emoji(
      "⚡ Strong understanding of key Java concepts such as Stream APIs, collections, exception handling, multithreading."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MySQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Central missouri",
      logo: require("./assets/images/ucm.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "Jan 2023 - Present",
      desc: "Enriched my academic experience by learning about cutting-edge technologies like Machine Learning, Artificial Intelligence, and Big data, as well as a wide range of computer science courses like algorithms, compiler design, database systems, and operating systems with a 3.8CGPA."
    },
    {
      schoolName: "SRKR Engineering College",
      logo: require("./assets/images/srkr.jpeg"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "July 2017 - Aug 2021",
      desc: "Ranked top 10% in the program. Expertise in algorithms and data structures, as well as knowledge of computer networking, web technologies, operating systems, and software development processes. Gained a solid grasp of numerous subjects, laying the groundwork for a well-rounded skill set."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend/Server side Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Database",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    },
    {
      Stack: "Java",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Digital Specialist Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.png"),
      date: "Aug 2021 – Jan 2023",
      desc: "Worked on developing annuity website for a Venerable client company, formerly known as INGUS",
      descBullets: [
        "Developed landing pages, dashboards, and online applications using Java, Spring Microservices for the backend,Angular, and NodeJS for the frontend.",
        "Server-side logic, database connections, and RESTful APIs were designed and implemented to provide seamless dataflow and application operation.",
        "Angular and NodeJS were utilized to design and construct UI pages for responsive and interactive online applications.",
        "Played a significant role in all stages of the full-stack Agile development process, from gathering requirements to deploying an application on the AWS cloud infrastructure.",
        "Improved query execution and safeguarded data integrity by managing complex database procedures with SQL.",
        "Made use of Git for version control in a productive manner, enabling group code-writing while maintaining track of changes throughout the development cycle."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Sri Maharshi Consultancies",
      companylogo: require("./assets/images/maharshi.jpeg"),
      date: "Jul 2019 – Jul 2021",
      descBullets: [
        "Engaged in the LENDING MASTER project, an application for tracking loans granted to Microfinance firms incorporating JDBC, Java, JSON, JSP, MYSQL, and Eclipse.",
        "Employed JSP to produce interactive and dynamic front-end experiences, while enabling seamless JSON-based data interchange between the client and server for efficient communication and integration.",
        "Demonstrated expertise in the back-end with JDBC, facilitating robust database connectivity and management in various projects."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "My journey through the coursework",
  projects: [
    {
      projectName:
        "Vehicle Surveillance At Parking Spaces of Gated Society and Business Complexes",
      projectDesc:
        "Utilized an Automated Number Plate Recognition (ANPR) system for meticulous vehicle log management within a Residential Complex or Gated Society. Employed CCTV footage as input for a sophisticated Machine Learning algorithm to extract vehicle numbers. Engineered a streamlined process involving image acquisition, plate recognition, segmentation, and character identification. Developed a dynamic front-end interface with JavaServer Pages (JSP), CSS, and Bootstrap for enhanced user experience. Implemented JDBC for robust data connectivity, seamlessly integrating MySQL for efficient data handling and analysis.",
      footerLink: [
        {
          name: "Github Repository (Coming soon)",
          url: "https://github.com/chinmayee86"
        }
      ]
    },
    {
      projectName:
        "Implementation of AR for Digital Classrooms and VR for Entertainment",
      projectDesc:
        "Developed a sophisticated digital classroom application facilitating instructors to seamlessly project videos onto a live screen through tailored picture cards. Integrated ORB-based image recognition to discern pivotal elements within the picture cards, subsequently enabling a meticulous comparison with a pre-existing database to seamlessly integrate videos, frame by frame, within the masked area of the real environment utilizing OpenCV. Furthermore, crafted an entertaining application enabling users to showcase a cartoon image extracted from a designated episode scene, which is then seamlessly projected onto the screen in its entirety for recreational purposes.",
      footerLink: [
        {
          name: "Check out the code",
          url: "https://github.com/chinmayee86/ARFYP"
        }
      ]
    },
    {
      projectName: "Hand Gesture Controlled Virtual Calculator",
      projectDesc:
        "Crafted an advanced hand gesture recognition system leveraging extensive feature repositories and gesture labels, enabling real-time detection for demonstrating a virtual calculator. Implemented the Mediapipe framework to collect data for nineteen hand gestures, facilitating the creation of a virtual calculator with basic mathematical operations. Utilized palm detection and hand landmark models within Mediapipe to identify hands and estimate 21 hand knuckle coordinates, pivotal for the hand gesture recognition system. Subsequently, integrated OpenCV to materialize the virtual calculator.",
      footerLink: [
        {
          name: "Check out the code",
          url: "https://github.com/chinmayee86/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 9137623029",
  email_address: "chinmayeependyala@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
