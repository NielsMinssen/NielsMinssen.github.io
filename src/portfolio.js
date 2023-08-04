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
  username: "Niels Minssen",
  title: "gretting.title",
  subTitle: emoji(
    "Computer science engineer specialized in information system and decision support tools. Curious and eager to learn, I constantly gain new skills to stay up to date."
  ),
  resumeLink:
    require("../src/assets/images/Niels_Minssen.pdf"), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NielsMinssen",
  linkedin: "https://www.linkedin.com/in/nielsminssen/",
  gmail: "niels.minssen@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Data Scientist/Engineer with a hand on this tool palette",
  skills: [
    emoji(
      "📊 Discover insights from Data"
    ),
    emoji("🤖 Develop machine learning models to better the decision making thanks to accurate predictions"),
    emoji(
      "💾 Create and fill Databases as well as managing Data pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python" 
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Apache Hadoop",
      fontAwesomeClassname: "fas fa-republican"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "SAS",
      fontAwesomeClassname: "fab fa-stripe-s"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-star"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-pie"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ISIMA",
      logo: require("./assets/images/Isima.png"),
      subHeader: "College of Engineering in Computer Science",
      duration: "2020 - 2023"
    },
    {
      schoolName: "Sainte Anne",
      logo: require("./assets/images/ste-anne.png"),
      subHeader: "CPGE - Two-year preparatory course for the competitive examination admmission to a French grande ecole",
      duration: "2018 - 2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Python/R", progressPercentage: "80%" },
    { Stack: "SQL", progressPercentage: "90%"},
    { Stack: "Machine learning", progressPercentage: "85%" },
    { Stack: "SGBD", progressPercentage: "85%" },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist/Engineer",
      company: "Credit Agricole",
      companylogo: require("./assets/images/Crédit_Agricole.png"),
      date: "September 2022 - September 2023",
      desc: "WORK-STUDY PROGRAM AT CREDIT AGRICOLE (FRENCH BANK)",
      descBullets: [
        "Creating machine learning models to detect client propency to by a product. (Logistic regression Bagging and xgbost)",
        "Creation of a R-shiny Application to display dynamically clients characteristics"
      ]
    },
    {
      role: "Data Analyst/Scientist",
      company: "French Council : Département de la Charente-Maritime",
      companylogo: require("./assets/images/charente_maritime.png"),
      date: "April 2022 – August 2022",
      desc: "5-MONTH COMPUTER SCIENCE ENGINEERING INTERNSHIP",
      descBullets: [
        "Implemented data enhancement methods such as association rules and mapping to understand population characteristics in child placement and preoccupying reports",
        "Using predictive models, natural language processing, and visualization methods to analyze and highlight individual histories in placements (python and R)"
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
    emoji("With Love for interesting technologies, I love to write and teach others what I have learnt. (in French 🇫🇷)"),
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.awinstall.com/sgbd-nosql-et-si-vous-sautiez-le-pas/",
      title: "SGBD NoSQL, et si vous sautiez le pas ?",
      description: "Contrairement aux systèmes basés sur le SQL (Structured Query Language), les bases de données NoSQL sont conçues pour traiter de grandes quantités de données non structurées et semi-structurées..."
    },
    {
      url: "https://www.awinstall.com/batch-processing-stream-processing-et-lambda-architecture-quelles-differences/",
      title: "Batch Processing, Stream Processing et Lambda Architecture, quelles différences ?",
      description: " Trois architectures dominent le paysage : Batch Processing, Stream Processing et Lambda Architecture. Chacune offre des avantages distincts et répond à des besoins spécifiques en matière de traitement des données..."
    },
    {
      url: "https://www.awinstall.com/apache-kafka-fonctionnement-de-cet-outil-de-traitement-de-flux-de-donnees/",
      title: "Apache Kafka : fonctionnement de cet outil de traitement de flux de données",
      description: "Apache Kafka est une plateforme de streaming d’événements distribuée open-source développée par la Apache Software Foundation..."
    },
    {
      url: "https://www.awinstall.com/web-scraping-avec-python/",
      title: "Web Scraping avec Python",
      description: "Il existe de nombreuses bibliothèques en Python pour le web scraping, mais les plus utilisées sont Beautiful Soup et Requests..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+33 673373911",
  email_address: "niels.minssen@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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

