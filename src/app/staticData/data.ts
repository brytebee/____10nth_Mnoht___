import Images from ".";

export interface Course {
  image: HTMLImageElement;
  name: String;
  description: String;
  eligibility: String;
  learnings: {
    intro: String;
    listings: String;
  };
  conclusion: String;
}

export const courses: Course[] = [
  {
    image: Images[0],
    name: "UIUX Design",
    description:
      "This course is designed for individuals who aspire to enter the creative and design industry as designers. It is tailored for those who wish to develop and present their creative ideas for software and computerized devices, addressing real-life interface design challenges in a simple and innovative manner. The course also focuses on acquiring practical expertise in industry-standard software such as Figma and Adobe XD, enabling participants to match the skills of other professionals in the field.",
    eligibility:
      "The course caters not only to beginners but also to experienced individuals seeking to enhance their skills and workflow.",
    learnings: {
      intro:
        "This course will provide a comprehensive understanding of design through a step-by-step approach, offering well-structured and simplified lessons that emphasize clarity and precision. It is enriched with a wide range of resources, materials, examples, and projects to support your learning journey. some of the topics we will cover are listed below",
      listings:
        "Introduction to UI/UX design ,User research ,Information architecture ,Introduction to figma interface ,Wireframing ,Prototyping ,Usability testing ,User interface design ,Ui design effects",
    },
    conclusion:
      "The aim of this course is to help you become more professional. It acknowledges that this journey requires perseverance and steadfastness, but with dedication, you will succeed. By enrolling in this course, you will not only gain valuable knowledge and skills but also receive resources that will continue to support your growth even beyond the course",
  },
  {
    image: Images[1],
    name: "Web Developer",
    description:
      "This course is designed for individuals who aspire to enter the creative and design industry as designers. It is tailored for those who wish to develop and present their creative ideas for software and computerized devices, addressing real-life interface design challenges in a simple and innovative manner. The course also focuses on acquiring practical expertise in industry-standard software such as Figma and Adobe XD, enabling participants to match the skills of other professionals in the field.",
    eligibility:
      "The course caters not only to beginners but also to experienced individuals seeking to enhance their skills and workflow.",
    learnings: {
      intro:
        "This course will provide a comprehensive understanding of design through a step-by-step approach, offering well-structured and simplified lessons that emphasize clarity and precision. It is enriched with a wide range of resources, materials, examples, and projects to support your learning journey. some of the topics we will cover are listed below",
      listings:
        "Introduction to UI/UX design ,User research ,Information architecture ,Introduction to figma interface ,Wireframing ,Prototyping ,Usability testing ,User interface design ,Ui design effects",
    },
    conclusion:
      "The aim of this course is to help you become more professional. It acknowledges that this journey requires perseverance and steadfastness, but with dedication, you will succeed. By enrolling in this course, you will not only gain valuable knowledge and skills but also receive resources that will continue to support your growth even beyond the course",
  },
  {
    image: Images[2],
    name: "Mobile Developer",
    description:
      "This course is designed for individuals who aspire to enter the creative and design industry as designers. It is tailored for those who wish to develop and present their creative ideas for software and computerized devices, addressing real-life interface design challenges in a simple and innovative manner. The course also focuses on acquiring practical expertise in industry-standard software such as Figma and Adobe XD, enabling participants to match the skills of other professionals in the field.",
    eligibility:
      "The course caters not only to beginners but also to experienced individuals seeking to enhance their skills and workflow.",
    learnings: {
      intro:
        "This course will provide a comprehensive understanding of design through a step-by-step approach, offering well-structured and simplified lessons that emphasize clarity and precision. It is enriched with a wide range of resources, materials, examples, and projects to support your learning journey. some of the topics we will cover are listed below",
      listings:
        "Introduction to UI/UX design ,User research ,Information architecture ,Introduction to figma interface ,Wireframing ,Prototyping ,Usability testing ,User interface design ,Ui design effects",
    },
    conclusion:
      "The aim of this course is to help you become more professional. It acknowledges that this journey requires perseverance and steadfastness, but with dedication, you will succeed. By enrolling in this course, you will not only gain valuable knowledge and skills but also receive resources that will continue to support your growth even beyond the course",
  },
];
