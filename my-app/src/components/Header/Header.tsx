import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import * as S from "./Header.styles";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.BackgroundImageDiv />
      <Fade triggerOnce={true} duration={1000}>
        <S.Title>[Your Name]</S.Title>
      </Fade>
      <Slide direction="up" triggerOnce={true} duration={1000} delay={300}>
        <S.IntroParagraph>
          [This is a brief introduction about myself. I am passionate about web development and creating intuitive user experiences.
          <br />
          I have experience with various technologies and I am always eager to learn more.
          <br />
          This paragraph is a placeholder and can be updated with actual content later.
          <br />
          Currently exploring new challenges in the tech world.
          <br />
          Looking forward to connecting!]
        </S.IntroParagraph>
      </Slide>
    </S.HeaderContainer>
  );
};

export default Header;
