import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 40px 20px;
  background-color: #f4f7f6; /* A light grey/off-white background */
  text-align: center; /* Center the optional h2 title */

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 30px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centers cards if there's extra space */
  gap: 20px; /* Adds space between cards */
  max-width: 1200px; /* Optional: Max width for the cards area */
  margin: 0 auto; /* Centers the CardsContainer itself if it has a max-width */
`;
