import styled from "styled-components";

export const ViewMorePrompt = styled.p`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  font-size: 0.9rem;
  color: #007bff; /* Or any color that fits your theme */
  margin-top: auto; /* Pushes it to the bottom if CardWrapper is flex-column */
  text-align: center;
`;

export const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 0; /* Removed margin, will be handled by slick-slide padding */
  width: 300px; /* Fixed width for consistent card size in carousel */
  min-height: 350px; /* Adjust as needed, ensures consistent card height */
  text-decoration: none;
  color: inherit;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out; /* Removed transform from here */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    /* transform: scale(1.05); */ /* Removed hover scale to avoid conflict with slick-center scale */

    ${ViewMorePrompt} {
      opacity: 1;
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px; /* Adjust as needed */
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
  background-color: #f0f0f0; /* Placeholder color if image is missing */
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #666;
  flex-grow: 1; /* Allows description to take available space */
  margin-bottom: 10px; /* Space before the view more prompt */
`;
