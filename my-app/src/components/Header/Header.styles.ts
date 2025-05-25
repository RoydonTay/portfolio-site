import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #282c34; /* Placeholder background color */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  position: relative; /* Needed for absolute positioning of BackgroundImageDiv */
  padding: 0 1rem; /* Added horizontal padding */
`;

export const BackgroundImageDiv = styled.div`
  background-color: #4a4a4a; /* Placeholder for background image */
  height: 300px; /* Example height */
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Ensure it's behind the content */
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center; /* Ensured text alignment */
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid white;
`;

export const IntroParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center; /* Ensured text alignment */
`;
