import Images from '.';

export interface Course {
  image: HTMLImageElement;
  name: string;
  description: string;
  eligibility: string;
  learnings: {
    intro: string;
    listings: string;
  };
  conclusion: string;
}

type Review = {
  comment: String;
  name: String;
  image: HTMLImageElement;
  course?: String;
};

export const courses: Course[] = [
  {
    name: 'Computer Appreciation',
    image: Images[8],

    description: `The "Computer Appreciation" course provides a comprehensive intro to the world of computers and digital technology. Participants will gain a practical understanding of computer hardware, software, and essential applications. From basic computer operation to file management and online communication, this course covers a wide spectrum of topics aimed at building confidence and competence in computer usage.`,

    eligibility:
      "This course is open to individuals of all backgrounds and experience levels. Whether you're a student, a professional, a senior citizen, or simply someone curious about computers, you're welcome to join. No prior computer knowledge is required, making it suitable for absolute beginners and those seeking to refresh their skills.",

    learnings: {
      intro: `In today's digital age, computer literacy is not just an asset; it's a fundamental necessity. The "Computer Appreciation" course is designed to empower individuals with the foundational knowledge and skills required to navigate and utilize computers effectively. Whether you're a newcomer to the digital world or looking to enhance your existing computer skills, this course will equip you with the essential know-how to thrive in our increasingly technology-driven society.`,
      listings:
        'Computer Fundamentals: Gain insights into the core components of a computer, including hardware and software, and understand how they work together. Operating Systems: Learn how to navigate popular operating systems (e.g., Windows or macOS) and perform basic tasks like file management and customization. Productivity Software: Explore essential productivity applications, such as word processing, spreadsheets, and presentation software, to enhance your personal and professional tasks. Internet and Email: Discover the online world, including web browsing, email communication, and online safety practices. Digital Communication: Familiarize yourself with instant messaging, social media, and video conferencing tools to stay connected with friends, family, and colleagues. Troubleshooting: Develop problem-solving skills to address common computer issues and perform basic maintenance.',
    },

    conclusion:
      'By the end of this course, you will have the confidence and competence to use computers effectively in various personal and professional contexts. Whether you aim to enhance your employability, stay connected with loved ones, or simply become more self-reliant in the digital age, this course will empower you to achieve your goals.',
  },

  {
    name: 'Web development',

    image: Images[4],

    description:
      "This comprehensive Web Development course covers the fundamentals and advanced aspects of web development, including front-end and back-end technologies. You will learn how to create responsive, visually appealing websites and web applications using industry-standard tools and techniques. Whether you're a beginner or an experienced coder looking to expand your skills, this course will empower you to build web solutions effectively.",

    eligibility:
      'This course is open to individuals of all levels, including beginners with little to no coding experience and experienced developers seeking to broaden their skill set. A basic understanding of computer operations and a passion for web technologies are beneficial but not mandatory.',

    learnings: {
      intro:
        'Welcome to our Web Development course, where you will embark on an exciting journey to become a proficient web developer. In this rapidly evolving digital age, the ability to create dynamic and user-friendly websites is a valuable skill. This course is designed to equip you with the knowledge and tools needed to excel in the world of web development.',
      listings:
        'Front-End Development: Gain proficiency in HTML, CSS, and JavaScript to create interactive and visually appealing user interfaces. Back-End Development: Learn server-side scripting languages (such as Python or Node.js) and database management to create dynamic web applications. Responsive Design: Master the art of designing websites that adapt seamlessly to various screen sizes and devices. Web Development Frameworks: Explore popular frameworks like React, NextJS, TailwindCSS, BootstrapCSS, NestJS, MongoDB, Mongoose, PostgreSQL, Ruby on Rail to streamline development and enhance productivity. Version Control: Learn how to use Git for collaborative coding and version control. Web Security: Understand best practices for securing web applications and protecting user data. Web Hosting and Deployment: Explore hosting options and deploy your projects online for public access.',
    },

    conclusion:
      "Upon completion of this course, you will have the skills and confidence to create professional-quality websites and web applications. Whether you're pursuing a career as a web developer, looking to build your portfolio, or aiming to enhance your current skill set, this course will set you on the path to success in the fast-paced world of web development.",
  },

  {
    name: 'Digital marketing',

    image: Images[3],

    description:
      'Our Digital Marketing course is a deep dive into the multifaceted realm of digital marketing. You will gain a holistic understanding of digital marketing strategies, from search engine optimization (SEO) and social media marketing to content creation, email marketing, and data analytics. This course equips you with the practical know-how to create and execute effective digital marketing campaigns that reach and engage your target audience.',

    eligibility:
      'This course is open to individuals from various professional backgrounds, including marketing professionals, entrepreneurs, business owners, and anyone interested in harnessing the power of digital marketing to achieve their goals. No prior digital marketing experience is required; however, a basic understanding of marketing concepts and online platforms is beneficial.',

    learnings: {
      intro:
        'Welcome to our Digital Marketing course, a comprehensive program designed to empower you with the knowledge and skills required to thrive in the dynamic world of digital marketing. In this course, we will explore the latest trends, strategies, and tools that drive success in the digital landscape.',
      listings:
        'Digital Marketing Fundamentals: Understand the core principles of digital marketing, including its role in the modern business landscape.Search Engine Optimization (SEO): Learn how to optimize your website and content for better visibility on search engines, driving organic traffic. Social Media Marketing: Master the art of leveraging social media platforms to build brand presence, engage with audiences, and drive conversions. Content Strategy: Develop compelling content that resonates with your target audience and supports your marketing objectives. Email Marketing: Create effective email marketing campaigns to nurture, leads and maintain customer relationships. Pay-Per-Click (PPC) Advertising: Learn to create and manage paid advertising campaigns on platforms like Google Ads and Facebook Ads. Analytics and Data Interpretation: Utilize data-driven insights to refine your marketing strategies and measure campaign effectiveness.',
    },

    conclusion:
      'Upon completion of this course, you will be well-equipped to navigate the rapidly evolving field of digital marketing. Whether you aim to advance your career, promote your business, or enter the digital marketing industry, this course provides the tools and knowledge you need to succeed in the digital era.',
  },

  {
    name: 'Mobile development',

    image: Images[5],

    description:
      'Our Mobile Development course is designed to provide participants with a comprehensive understanding of mobile app development for both iOS and Android platforms. Whether you are a beginner or an experienced developer, this course will equip you with the knowledge and practical skills needed to design, build, and launch mobile applications.',

    eligibility:
      'This course is open to individuals from diverse backgrounds, including aspiring app developers, software engineers, web developers, and entrepreneurs. While no prior coding experience is required, a basic understanding of programming concepts will be beneficial. This course is for anyone with a passion for creating innovative mobile experiences.',

    learnings: {
      intro:
        "Welcome to our Mobile Development course, where we explore the dynamic and ever-evolving world of creating mobile applications. This course is your gateway to mastering the skills required to develop cutting-edge mobile apps that cater to the needs of today's tech-savvy users.",
      listings:
        'Fundamentals of Mobile App Development: Explore the basics of mobile app development, including app architecture, user interfaces, and navigation. Programming Languages: Gain proficiency in programming languages such as Swift (for iOS) and Java/Kotlin (for Android). User Experience (UX) Design: Learn the principles of designing user-friendly and visually appealing mobile interfaces. API Integration: Understand how to integrate APIs to access data and services for your mobile app. Testing and Debugging: Master the art of testing and debugging your mobile applications to ensure they run smoothly. Deployment and App Stores: Discover the process of deploying your app to app stores like Apple App Store and Google Play. Cross-Platform Development: Explore cross-platform development tools like Flutter or React Native for building apps that work on multiple platforms.',
    },

    conclusion:
      'Upon completing this course, you will have the skills and confidence to embark on a successful career in mobile app development. Whether you dream of creating your own startup app or joining a mobile development team, this course will empower you to turn your ideas into functional, user-friendly mobile applications.',
  },

  {
    name: 'UIUX design',

    image: Images[0],

    description:
      'Our UX / UI Design course is a comprehensive journey into the art and science of creating exceptional digital experiences. It covers the entire spectrum of UX / UI design, from understanding user behavior to translating ideas into visually stunning interfaces. Participants will gain proficiency in industry - standard tools and techniques that are essential for success in this dynamic field.',

    eligibility:
      "This course is open to individuals with diverse backgrounds, including designers, developers, marketers, and anyone interested in shaping the digital world. No prior experience in UX/UI design is required. All that's needed is a passion for user-centric design and a desire to create engaging digital solutions.",

    learnings: {
      intro:
        'Foundations of UX/UI: Understand the principles and theories behind effective UX/UI design, including user research, information architecture, and usability.',

      listings:
        'User-Centered Design: Learn to empathize with users, conduct user research, and translate insights into design solutions that prioritize user needs and preferences. UI Design Aesthetics: Master the art of creating visually appealing interfaces, covering topics such as color theory, typography, and layout design. Interaction Design: Design interactive elements, animations, and transitions that enhance user engagement and overall satisfaction. Prototyping Tools: Become proficient in industry-standard prototyping tools like Sketch, Figma, and Adobe XD. Responsive Design: Create designs that adapt seamlessly to various screen sizes and devices, ensuring a consistent user experience across platforms.',
    },

    conclusion:
      'Upon completing this course, you will have the knowledge and skills required to excel in the exciting field of UX/UI design. Whether you are looking to start a new career, enhance your existing skillset, or simply explore your creative side, this course will empower you to create user-friendly and visually appealing digital interfaces.',
  },

  {
    name: 'Graphic design',

    image: Images[6],

    description:
      "Our Graphic Design course is meticulously crafted to provide participants with a comprehensive understanding of graphic design fundamentals. Whether you're a budding artist, a marketing enthusiast, or a seasoned designer seeking to refine your skills, this course is tailored to meet your needs.",

    eligibility:
      "This course is open to individuals from all backgrounds, from beginners with no prior design experience to intermediate designers looking to enhance their skills. A passion for creativity and an eagerness to learn are all that's required to embark on this exciting journey.",

    learnings: {
      intro:
        "Welcome to our Graphic Design course, a creative journey that will enable you to master the art of visual communication. In this course, we'll explore the world of graphic design, covering essential principles, tools, and techniques to empower you as a proficient graphic designer.",
      listings:
        'Design Principles: Explore the core principles of graphic design, including layout, composition, typography, and color theory. Adobe Creative Suite: Gain proficiency in industry-standard design software such as Photoshop, Illustrator, and InDesign. Visual Branding: Learn to create cohesive visual identities for brands, including logos, branding guidelines, and marketing collateral. Digital Design: Master the art of creating digital assets, including web graphics, social media visuals, and interactive designs. Print Design: Acquire skills in designing for print media, including brochures, posters, and packaging. Typography: Develop a deep understanding of typography, its history, and its application in design. Image Editing: Learn advanced image editing techniques to enhance and manipulate visuals effectively. Portfolio Development: Create a professional design portfolio showcasing your skills and projects, setting you up for success in the design industry.',
    },

    conclusion:
      'By the end of this course, you will possess the knowledge and skills needed to excel as a graphic designer. Whether you aspire to work as a freelance designer, contribute to marketing and advertising efforts, or simply want to unleash your creative potential, this course will empower you to communicate visually with impact.',
  },

  {
    name: 'Product management',

    image: Images[1],

    description:
      'Our Product Management course is a comprehensive program tailored to individuals aspiring to become proficient product managers or enhance their existing skills in this field.Throughout the course, you will delve into essential topics such as product strategy, market research, cross - functional collaboration, user - centered design, agile methodologies, and stakeholder management.This holistic approach will equip you with the expertise needed to drive successful product innovations.',

    eligibility:
      'This course is open to a diverse audience, including aspiring product managers, entrepreneurs, business analysts, engineers, marketing professionals, and anyone eager to delve into the world of product management. While no specific prerequisites are required, having a basic understanding of business concepts and a passion for innovation will be advantageous.',

    learnings: {
      intro:
        'Welcome to our Product Management course, a transformative learning experience that will empower you with the skills and knowledge to thrive in the dynamic world of product management. This course is designed to provide you with a comprehensive understanding of the product development lifecycle, strategic thinking, market analysis, and effective leadership within the context of modern product management.',
      listings:
        'Product Strategy and Vision: Craft a compelling product vision and strategy aligned with organizational goals and market trends. Market Research and Analysis: Conduct effective market research, identify customer needs, and evaluate market opportunities to guide product decisions. Product Development Lifecycle: Gain insights into the product development process, covering ideation, conceptualization, launch, and post-launch phases. Cross-Functional Collaboration: Master the art of communication and collaboration with cross-functional teams, including engineering, design, and marketing. User-Centered Design: Understand user-centered design principles and techniques to create products that meet and exceed user expectations. Product Metrics and Analytics: Utilize key performance indicators (KPIs) and analytics to measure product success and make informed, data-driven decisions. Agile and Scrum Methodologies: Familiarize yourself with agile and Scrum methodologies to efficiently manage product development and adapt to changing requirements. Stakeholder Management: Develop skills in managing stakeholders, including customers, executives, and development teams, to ensure product success.',
    },

    conclusion:
      'Upon completion of this course, you will possess the knowledge and skills necessary to excel in the competitive field of product management. Whether you aspire to lead successful product development efforts, enhance your existing career, or drive innovation within your organization, this course will empower you to do so effectively. Join us on this educational journey and become a proficient product manager capable of making a significant impact on the products and services of tomorrow.',
  },

  {
    name: 'Data science',

    image: Images[2],

    description:
      'This introductory course is designed to provide participants with a solid foundation in data science principles and techniques. You will delve into the key components of data science, including data analysis, machine learning, and data visualization. Throughout the program, you will gain hands-on experience with data tools and programming languages commonly used in the field.',

    eligibility:
      'This course is open to individuals from a wide range of backgrounds, including students, professionals, and anyone interested in harnessing the power of data. No prior experience in data science is required. Basic knowledge of mathematics and statistics is beneficial but not mandatory. A curious mind and a passion for problem-solving are the primary prerequisites.',

    learnings: {
      intro:
        "Welcome to the world of data science! In this course, you will embark on an exciting journey to explore the fundamentals of data science and acquire essential skills that are highly sought after in today's data-driven world. Data science is at the forefront of innovation and decision-making across various industries, and this course will serve as your gateway into this dynamic field.",
      listings:
        'Data Collection and Cleaning: Learn how to gather and preprocess data for analysis, ensuring its quality and reliability. Data Analysis: Develop skills in exploratory data analysis (EDA) and statistical analysis to extract valuable insights from data. Machine Learning: Explore the fundamentals of machine learning, including supervised and unsupervised learning, and apply machine learning algorithms to real-world problems. Data Visualization: Master data visualization techniques to effectively communicate your findings and insights to stakeholders. Python Programming: Gain proficiency in the Python programming language, a vital tool for data science. Practical Projects: Apply your knowledge through hands-on projects, solving real-world data science challenges.',
    },

    conclusion:
      'By the end of this course, you will be well-equipped with the foundational knowledge and practical skills needed to start your journey in data science. Whether you aim to pursue a career in data analysis, machine learning, or simply want to leverage data to make better decisions in your current role, this course will empower you to confidently work with data and extract meaningful insights.',
  },

  {
    name: 'Cybersecurity',

    image: Images[7],

    description:
      'This comprehensive Cybersecurity Fundamentals course delves into the core concepts and best practices of cybersecurity. Participants will gain insights into the latest threats and vulnerabilities facing organizations and individuals alike, and learn how to defend against them. From understanding the basics of encryption to mastering incident response strategies, this course covers a wide range of topics crucial for anyone interested in cybersecurity.',

    eligibility:
      'This course is open to individuals from various backgrounds, including IT professionals, system administrators, network engineers, business professionals, and anyone interested in cybersecurity. While no specific prerequisites are required, a basic understanding of computer systems and networks is beneficial.',

    learnings: {
      intro:
        "In today's digitally connected world, the importance of cybersecurity cannot be overstated. This Cybersecurity Fundamentals course is designed to provide participants with a solid foundation in cybersecurity principles, practices, and techniques. Whether you are new to the field or seeking to enhance your existing knowledge, this course will equip you with the skills necessary to protect digital assets, mitigate risks, and contribute to the growing field of cybersecurity.",
      listings:
        'Cybersecurity Fundamentals: Gain a solid understanding of core cybersecurity concepts, including confidentiality, integrity, and availability (CIA). Threat Landscape: Explore the current threat landscape, including malware, social engineering, and insider threats, to better understand the risks facing organizations. Security Controls: Learn about essential security controls, such as access control, authentication, and encryption, to protect sensitive data  Incident Response: Develop incident response strategies and learn how to effectively respond to and recover from cybersecurity incidents. Network Security: Understand network security principles, including firewalls, intrusion detection systems, and secure configurations. Security Policies and Compliance: Explore the importance of security policies, procedures, and compliance standards in maintaining a secure environment.',
    },

    conclusion:
      "Upon completing this course, participants will be well-equipped to navigate the complex and ever-evolving landscape of cybersecurity. Whether you aim to pursue a career in cybersecurity, enhance your organization's security posture, or simply stay informed about digital threats, this course provides a solid foundation for success.",
  },

  {
    name: 'Smartphone graphics design',
    image: Images[9],

    description: `The "Graphic Design on Mobile Phone" course is designed to empower individuals to become proficient graphic designers using their smartphones or tablets. Participants will explore a range of mobile design applications and techniques, enabling them to create visually captivating graphics for personal projects, social media, or professional endeavors. From basic design principles to advanced mobile editing tools, this course covers it all.`,

    eligibility:
      "This course welcomes participants of all backgrounds, whether you're a budding artist, a social media enthusiast, a small business owner, or anyone interested in graphic design. No prior design experience is required, and the course is tailored to beginners looking to harness the creative potential of their mobile devices.",

    learnings: {
      intro: `In an era where creativity knows no boundaries, the "Graphic Design on Mobile Phone" course opens the doors to unleash your artistic potential right from your fingertips. With the power of mobile technology, you can now create stunning graphics, illustrations, and designs on the go. This course is your gateway to mastering the art of graphic design using just your mobile device, making design accessible to everyone, everywhere.`,
      listings:
        'Design Fundamentals: Learn the core principles of graphic design, including layout, color theory, typography, and composition. Mobile Design Apps: Explore a variety of mobile design applications, such as Adobe Spark, Canva, Procreate, and more, to create stunning visuals. Image Editing: Master photo editing techniques on your mobile device, including retouching, filters, and special effects. Vector Graphics: Create scalable and customizable vector graphics using mobile tools for logos, icons, and illustrations. Typography: Enhance your understanding of fonts, text manipulation, and typography design for impactful visuals. Social Media Graphics: Craft eye-catching graphics tailored for social media platforms to boost your online presence.',
    },

    conclusion:
      'By the end of this course, you will have the skills and confidence to embark on your graphic design journey using your mobile device as a powerful creative tool. Whether you want to create stunning visuals for personal projects, enhance your social media presence, or explore graphic design as a potential career path, this course will equip you with the knowledge and techniques to achieve your goals.',
  },
];

export const reviews: Review[] = [
  {
    comment:
      "Finally, a course that lives up to its claims! It's been a game-changer for me. I'm so impressed with how well it works.",
    name: 'Joseph D',
    image: Images[10],
    course: 'Computer Appreciation',
  },

  {
    comment:
      "This course exceeded my expectations. It's reliable, efficient, and has simplified my daily routine. I'm one satisfied customer!",
    name: 'Kolawole M',
    image: Images[11],
  },

  {
    comment:
      "I was skeptical at first, but this course proved me wrong. It's been a fantastic addition to my life, and I'm thrilled with the results.",
    name: 'Moses E',
    image: Images[12],
  },

  {
    comment:
      "Kudos to the makers of this course! It's rare to find something that delivers on its promises. I'm genuinely impressed and grateful.",
    name: 'Samuel O',
    image: Images[13],
  },
];

export const coursesCom = [
  {
    image: Images[0],
    title: 'UI & UX DESIGN',
    rating: 5,
    student: 308,
  },
  {
    image: Images[4],
    title: 'WEB DEVELOPMENT',
    rating: 5,
    student: 590,
  },
  {
    image: Images[2],
    title: 'DATA SCIENCE',
    rating: 5,
    student: 207,
  },
  {
    image: Images[3],
    title: 'DIGITAL MARKETING',
    rating: 5,
    student: 190,
  },
  {
    image: Images[7],
    title: 'CYBER SECURITY',
    rating: 5,
    student: 300,
  },
];

export const metrics = [
  {
    courses: 25,
    students: 30000,
    instructors: 50,
    certified: 185,
  },
];

export const blogs = [
  {
    id: '16hsjdhysya',
    image: Images[3],
    title: 'Crushinng web development like a pro',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretiu',
    user: {
      username: 'Zule zoo',
      image: Images[3],
    },
    views: 12,
  },
  {
    id: '12hsjdhysya',
    image: Images[2],
    title: 'How to develop your learning skills',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretiu',
    user: {
      username: 'Jinsing lau',
      image: Images[2],
    },
    views: 8,
  },
  {
    id: '10ihsjdhysya',
    image: Images[14],
    title: 'The art of learnning how to learn',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretiu',
    user: {
      username: 'Christine Bennard',
      image: Images[14],
    },
    views: 2,
  },
];

export const Discuss = [
  {
    id: '12jsoaisoia',
    image: Images[14],
    title: 'Great Responsibility',
    username: 'Peter Pan',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 23,
  },
  {
    id: '34jsoaisoia',
    image: Images[14],
    title: 'Im worried about you',
    username: 'Ben Amoura',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 17,
  },
  {
    id: '56jsoaisoia',
    image: Images[14],
    title: 'You dad had plennty of them - flaws',
    username: 'Jim the writer',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 0,
  },
  {
    id: '78jsoaisoia',
    image: Images[14],
    title:
      'Some confusing and really really long ttile Im interested in seing how it displays',
    username: 'Check Title',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 2,
  },
  {
    id: '23jsoaisoia',
    image: Images[14],
    title: 'Overcoming academic fears',
    username: 'Jinsing lau',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 20,
  },
  {
    id: '45jsoaisoia',
    image: Images[14],
    title: 'Overcoming academic fears',
    username: 'Jinsing lau',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 8,
  },
  {
    id: '67jsoaisoia',
    image: Images[14],
    title: 'Overcoming academic fears',
    username: 'Jinsing lau',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 4,
  },
  {
    id: '89jsoaisoia',
    image: Images[14],
    title: 'Overcoming academic fears',
    username: 'Jinsing lau',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 9,
  },
  {
    id: '01jsoaisoia',
    image: Images[14],
    title: 'Overcoming academic fears',
    username: 'Jinsing lau',
    description:
      'Embracing Challenges: Overcoming academic fear begins with changing your perspective on challenges. Rather than viewing difficult subjects as obstacles, consider them as opportunities for growth. Approach each academic hurdle with the mindset that every struggle is a chance to learn and improve. Embracing challenges gradually transforms fear into a catalyst for personal and academic development. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
    likes: 356,
    comments: 101,
    views: 1,
  },
];

export const Commenta = [
  {
    id: 'jsoaisoia',
    image: Images[14],
    name: 'Anderson craig',
    desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsu',
    views: 10,
  },
  {
    id: 'yaiahysu',
    image: Images[14],
    name: 'Anderson craig',
    desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsu',
    views: 7,
  },
  {
    id: 'bjhksoaoa',
    image: Images[14],
    name: 'Anderson craig',
    desc: 'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsu',
    views: 2,
  },
];
