const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    items: [
      {
        name: "Java",
        abbr: "Jv",
        icon: `${iconBase}/java/java-original.svg`,
      },
      {
        name: "C++",
        abbr: "C++",
        icon: `${iconBase}/cplusplus/cplusplus-original.svg`,
      },
      {
        name: "HTML/CSS",
        abbr: "HTML",
        icon: `${iconBase}/html5/html5-original.svg`,
      },
      {
        name: "JavaScript",
        abbr: "JS",
        icon: `${iconBase}/javascript/javascript-original.svg`,
      },
      {
        name: "Python",
        abbr: "Py",
        icon: `${iconBase}/python/python-original.svg`,
      },
      {
        name: "SQL",
        abbr: "SQL",
        icon: `${iconBase}/mysql/mysql-original.svg`,
      },
    ],
  },
  {
    id: "frameworks",
    title: "Technologies / Frameworks",
    items: [
      {
        name: "ReactJs",
        abbr: "Rc",
        icon: `${iconBase}/react/react-original.svg`,
      },
      {
        name: "Flutter",
        abbr: "Fl",
        icon: `${iconBase}/flutter/flutter-original.svg`,
      },
      {
        name: "GitHub",
        abbr: "GH",
        icon: `${iconBase}/github/github-original.svg`,
      },
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    items: [
      {
        name: "Azure Fundamentals (AZ-900)",
        abbr: "AZ",
        icon: `${iconBase}/azure/azure-original.svg`,
        featured: true,
      },
      {
        name: "AWS Cloud Practitioner",
        abbr: "AWS",
        icon: `${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
        featured: true,
      },
    ],
  },
];
