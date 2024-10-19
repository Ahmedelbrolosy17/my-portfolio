import {
    multi,
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
    figma,
    restaurant,
    e_commerce,
    threejs,
    gpt,
    logo,
  } from "../assets";
  
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
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "Freelancer",
      icon: multi,
    },
    {
      title: "enthusiastic  Backend Developer",
      icon: backend,
    },
    {
      title: "multilingual",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const projects = [
    {
      name: "Restaurant",
      description:
        "a single-page website connected to back-end server, allows users make reservation, with features like online ordering and secure payment processing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/Ahmedelbrolosy17/restaurant-front",
      live_link:"https://restaurant-front-one.vercel.app/",
      icon: reactjs,
      iconBg: "#E6DEDD",
    },
    {
      name: "gpt showcase",
      description:
        "a single-page website introduces the features, reviews, and overall purpose of the website apis.Fully responsive with Interactive elements and Engaging animations",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vanilla css",
          color: "green-text-gradient",
        },
        {
          name: "react-router",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/Ahmedelbrolosy17/project-gpt3",
      live_link:"https://gpt3-pro.surge.sh/",
      icon: reactjs,
      iconBg: "#E6DEDD",
    },
    {
      name: "E-commerce app",
      description:
        "an online store offering various types of products, Filtering products based on their category or cost, Adding and removing aproduct from the cart.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: e_commerce,
      source_code_link: "https://github.com/Ahmedelbrolosy17/E-commerce-app",
      live_link:"https://e-commerce-app-two-phi.vercel.app/",
      icon: reactjs,
      iconBg: "#E6DEDD",
    },
  ];
  
  export { services, technologies, projects };