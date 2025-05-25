import styled from "styled-components";

export const SkillsWrapper = styled.section`
  padding: 40px 0; /* Vertical padding, horizontal handled by rows if needed or keep 0 */
  background-color: #2a2a2a; /* A distinct, dark background color */
  color: #fff;
  overflow: hidden; /* Crucial for hiding overflowing skill items */
  position: relative; /* Ensures it's a containing block for absolute positioning if needed */

  h2 {
    /* Optional: If you want a title for the skills section */
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #fff;
  }
`;

export const SkillRowWrapper = styled.div`
  width: 100%; /* Ensure the wrapper takes full width */
  /* This wrapper can be used if additional styling per row container is needed */
`;

export const SkillRow = styled.div`
  display: flex;
  white-space: nowrap; /* Prevents items from wrapping to the next line */
  /* The motion.div will handle the actual animation */
  will-change: transform; /* Performance hint for the browser */
`;

export const SkillItem = styled.div`
  background-color: #4f4f4f; /* Background for the skill badges */
  color: #e0e0e0; /* Text color for the badges */
  padding: 10px 20px;
  margin: 10px; /* Space between skill items */
  border-radius: 20px; /* Rounded corners for a "tag" or "badge" look */
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  white-space: nowrap; /* Ensure text within an item doesn't wrap */
  /* Add a subtle hover effect if desired */
  &:hover {
    background-color: #007bff; /* Example hover color - primary blue */
    color: #fff;
  }
`;
