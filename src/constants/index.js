import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import nextjs from '../assets/tech/nextjs.png'
  import prisma from '../assets/tech/prisma.png'
  import firebase from '../assets/tech/firebase.png'
  import mt from '../assets/company/mt.png'


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full",
      icon: web,
    },
    {
      title: "Stack",
      icon: mobile,
    },
    {
      title: "MERN",
      icon: backend,
    },
    {
      title: "Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Prisma",
      icon: prisma,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "Front End Developer",
      company_name: "Trangla Innovations Pvt Ltd",
      icon: mt,
      iconBg: "#ffffff",
      date: "August 2022 - May 2024",
      points: [
        "Involved in various SDLC phases such as requirement gathering, data modeling, analysis,architecture design, and development, creatingdynamic web applications using React JS,JavaScript, PrimeReact, and Material UI.",
        "Worked with business users to understand needs,Consumed RESTful APIs and translated UI/UXdesigns into code using HTML5 and CSS3, while employing Agile methodologies",
        "Optimized front-end performance by implementing code-splitting techniques and lazy loading, reducing initial load times by 30%.",
        "Developed RESTful APIs using Node.js and Express, facilitating seamless data exchange between the client and server.",
        "Participated in performance analysis, design,development, and testing, and utilized Reactcomponents, state, props, forms, events, routers,and hooks.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Application",
      description:
        "An eCommerce application is a digital platform enabling users to browse, purchase, and manage orders of products online with features like secure payments, user authentication, and personalized recommendations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rohit0o07/newreactecommerce2024.git",
    },
    {
      name: "Real Estate Application",
      description:
        "Real Estate is the best place to find your next perfect place to live.We have a wide range of properties for you to choose from.",
        tags:[
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/rohit0o07/abode-realEstateApp",
    }
,
    {
      name: "NetFlix Clone",
      description:"A comprehensive travel booking platform that allows users to watch videos and offers curated recommendations for popular movies",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/rohit0o07/netflix-clone.git",
    }
  ,
  // {
  //   name: "Hoverex ",
  //   description:"A comprehensive travel booking platform that allows users to watch videos and offers curated recommendations for popular movies",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image:meta,
  //   source_code_link: "https://github.com/rohit0o07/hoverex/tree/master",
  // }

]
  
  export { services, technologies, experiences, testimonials, projects };