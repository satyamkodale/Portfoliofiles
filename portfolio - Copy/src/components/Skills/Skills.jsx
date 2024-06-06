import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      {/* <h1 className="sectionTitle">Skills</h1> */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java " />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Springboot" />
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Microservices" />
        <SkillList src={checkMarkIcon} skill="Hibernate" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git & GitHub" />
        <SkillList src={checkMarkIcon} skill="Postman" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill="STS" />
        <SkillList src={checkMarkIcon} skill="Eclipse" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
      </div>
    </section>
  );
}

export default Skills;
