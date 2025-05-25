import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import * as S from "./SkillsPanel.styles";

const skillsRow1Source = [
  "React JS",
  "TypeScript",
  "JavaScript ES6+",
  "HTML 5",
  "CSS 3",
  "Next.js",
  "Redux Toolkit",
  "GraphQL API",
  "Jest Testing",
  "Responsive Design"
];
const skillsRow2Source = [
  "Node.js",
  "Express JS",
  "Python Lang",
  "Django FW",
  "MongoDB Atlas",
  "PostgreSQL DB",
  "Docker Cont.",
  "Git VCS",
  "Agile Method",
  "Problem Solving"
];

// Duplicate skills for seamless scrolling effect
const duplicateFactor = 3; // Number of times to repeat the skills array
const skillsRow1 = Array(duplicateFactor).fill(skillsRow1Source).flat();
const skillsRow2 = Array(duplicateFactor).fill(skillsRow2Source).flat();

const SkillsPanel: React.FC = () => {
  return (
    <S.SkillsWrapper>
      <Fade triggerOnce={true} duration={1000}>
        <h2>My Skills</h2>
      </Fade>
      <Slide direction="left" triggerOnce={true} duration={1000} delay={200}>
        <S.SkillRowWrapper>
          <S.SkillRow
            as={motion.div}
            initial={{ x: "0%" }}
            animate={{ x: `-${100 / duplicateFactor}%` }}
            transition={{
              ease: "linear",
              duration: 30, // Adjust duration for speed
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {skillsRow1.map((skill, index) => (
              <S.SkillItem key={`row1-${index}-${skill}`}>{skill}</S.SkillItem>
            ))}
          </S.SkillRow>
        </S.SkillRowWrapper>
      </Slide>

      <Slide direction="right" triggerOnce={true} duration={1000} delay={200}>
        <S.SkillRowWrapper>
          <S.SkillRow
            as={motion.div}
            initial={{ x: `-${100 / duplicateFactor}%` }} // Start from the "end" of the first set
            animate={{ x: "0%" }} // Animate to the beginning
            transition={{
              ease: "linear",
              duration: 30, // Adjust duration for speed
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {skillsRow2.map((skill, index) => (
              <S.SkillItem key={`row2-${index}-${skill}`}>{skill}</S.SkillItem>
            ))}
          </S.SkillRow>
        </S.SkillRowWrapper>
      </Slide>
    </S.SkillsWrapper>
  );
};

export default SkillsPanel;
