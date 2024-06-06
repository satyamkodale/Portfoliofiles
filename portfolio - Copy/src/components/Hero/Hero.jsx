import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import heroImgWithLaptop from "../../assets/hero with laptop.png";
import heroImgWithGlasses from "../../assets/hero with glasses.png";

import leetcodeLight from "../../assets/leetcode.png";
import leetcodeDark from "../../assets/leetcode-white (1).png";

import AboutMenuItem from "./AboutMenuItem";
import subheadingsData from "./subheadingsData";
import AboutSubheading from "./AboutSubheading";

import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

import { useState, useEffect } from "react";
import personalIconLight from "../../assets/moebius-triangle.png";
import educationIconLight from "../../assets/upgrade.png";
import careerIconLight from "../../assets/triple-corn.png";
import emailBlack from "../../assets/mail-black.jpg";
import emailLight from "../../assets/mail-white.jpg";

import styles2 from "../Hero/aboutMenuStyles.module.css";

import personalIconBlack from "../../assets/moebius-triangle-black.png";
import educationIconBlack from "../../assets/upgrade-black.png";
import careerIconBlack from "../../assets/triple-corn-black.png";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === "light" ? leetcodeLight : leetcodeDark;
  const emailIcon = theme === "light" ? emailBlack : emailLight;
  const heroImg = theme === "light" ? heroImgWithGlasses : heroImgWithLaptop;

  const personalIcon =
    theme === "light" ? personalIconBlack : personalIconLight;
  const educationIcon =
    theme === "light" ? educationIconBlack : educationIconLight;
  const careerIcon = theme === "light" ? careerIconBlack : careerIconLight;

  console.log(themeIcon, twitterIcon, githubIcon, linkedinIcon, theme);
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [activeSubheading, setActiveSubheading] = useState(1);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setActiveSubheading(1);
  };

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading);
  };

  const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
  const activeMenuTitle = menuItems[activeMenuItem - 1];
  const activeMenuIcon =
    activeMenuTitle === "PERSONAL"
      ? personalIcon
      : activeMenuTitle === "EDUCATION"
      ? educationIcon
      : careerIcon;

  const subheadings = subheadingsData[activeMenuItem];

  const titles = [
    "Full Stack Developer",
    "Programmer",
    "Backend Enthusiastic",
    "Problem Solver",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingTimeout = setTimeout(() => setIsTyping(false), 2000); // Typing animation duration
    const changeTitleTimeout = setTimeout(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setIsTyping(true);
    }, 3000); // Total duration of animation and pause

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(changeTitleTimeout);
    };
  }, [titleIndex]);

  return (
    <section id="hero" className={styles.outer}>
      <div className={styles.container1}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.heroImg}
            alt="Profile picture of Satyam "
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.h1hero}>
            Satyam
            <br />
            Kodale
          </h1>
          <h2 className={`${styles.h2hero} ${isTyping ? styles.typing : ""}`}>
            {titles[titleIndex]}
          </h2>

          <span>
            <a href="mailto:satyamkodale@gmail.com" target="_blank">
              <img
                src={emailIcon}
                className={styles.spanImg}
                id={styles.leetcode}
                alt="Linkedin icon"
              />
            </a>
            <a
              href="https://x.com/VIPERSATYAMx?t=nUkPKMQEdDszc3ajHUXBgQ&s=08"
              target="_blank"
            >
              <img
                src={twitterIcon}
                className={styles.spanImg}
                alt="Twitter icon"
              />
            </a>
            <a href="https://github.com/satyamkodale" target="_blank">
              <img
                src={githubIcon}
                className={styles.spanImg}
                alt="Github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/satyam-kodale-78475a227"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                className={styles.spanImg}
                alt="Linkedin icon"
              />
            </a>
            <a href="https://leetcode.com/satyamkodale24" target="_blank">
              <img
                src={leetcodeIcon}
                className={styles.spanImg}
                id={styles.leetcode}
                alt="Linkedin icon"
              />
            </a>
          </span>
          <a
            href="https://drive.google.com/file/d/1f1482MpX690RCvgsFUO1AoyIVUBwLdMD/view"
            download
          >
            <button className="hover">Resume</button>
          </a>
          {/* <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p> */}
        </div>
      </div>

      <div className={styles2.outer1}>
        <div className={styles2.menu}>
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => handleMenuItemClick(index + 1)}
              className={`${styles2.item} ${
                activeMenuItem === index + 1 ? styles2.active : ""
              }`}
            />
          ))}
        </div>
        <div className={styles2.subContainer}>
          <div className={styles2.iconTitleContainer}>
            <img
              src={activeMenuIcon}
              alt={activeMenuTitle}
              className={styles2.icon}
            />
            <h3>{activeMenuTitle}</h3>
          </div>
          {subheadings.map((subheading, index) => (
            <AboutSubheading
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index + 1}
              onClick={() => handleSubheadingClick(index + 1)}
              menuItem={activeMenuItem}
              // Concatenate the dynamic class name correctly
              className={`${styles2.subContainer}-${activeMenuItem} ${
                activeSubheading === index + 1 ? styles2.activeSubheading : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
