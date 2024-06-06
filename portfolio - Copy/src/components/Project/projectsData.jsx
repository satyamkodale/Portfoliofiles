import projectOne from "../../assets/project1_electro (1).png";
import projectTwo from "../../assets/project2_quiz (2).png";
import projectThree from "../../assets/project3_ecom (1).jpg";

const projects = {
  1: {
    title: "ElectroEase",
    image: projectOne,
    description: (
      <>
        <p>
          - A platform for electronics retailers, streamlining product
          showcasing and sales interactions.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  2: {
    title: "QuizQuest",
    image: projectTwo,
    description: (
      <>
        <p>
          - A platform for interactive quizzes, enhancing engagement and
          knowledge retention.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "TrendWave",
    image: projectThree,
    description: (
      <>
        <p>
          - An online hub for fashion enthusiasts, fostering creativity and
          style exploration.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
