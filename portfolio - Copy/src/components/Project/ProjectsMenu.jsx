import React, { useState } from "react";
import classNames from "classnames"; // Import classNames library
import projects from "./projectsData";
import styles from "./ProjectMenuStyles.module.css"; // Import module CSS file

const ProjectsMenu = () => {
  const [activeProject, setActiveProject] = useState(1);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={styles[`projectSubContainer-${index + 1}`]}>
        {" "}
        {/* Use module CSS class */}
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} />
        <div>{project.description}</div>
        <div className={styles.linkContainer}>
          {" "}
          {/* Use module CSS class */}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };

  const projectItems = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];

  return (
    <div className={styles.projectMenu}>
      {" "}
      {/* Use module CSS class */}
      <div className={styles.projectItemsContainer}>
        {" "}
        {/* Use module CSS class */}
        {projectItems.map((item, index) => (
          <div
            key={index}
            className={classNames(styles.projectItem, {
              // Use module CSS class and classNames
              [styles.activeProject]: activeProject === index + 1,
            })}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className={styles.projectSubContainer}>
        {" "}
        {/* Use module CSS class */}
        {renderContent([projects[activeProject]])}
      </div>
    </div>
  );
};

export default ProjectsMenu;
