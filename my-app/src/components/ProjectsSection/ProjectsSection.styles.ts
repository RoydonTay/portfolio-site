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

  /* Styles for the react-slick carousel */
  .slick-slider {
    max-width: 800px; /* Allows space for center and parts of adjacent slides */
    margin: 0 auto; /* Center the slider */
    overflow: visible; /* Important for seeing parts of adjacent slides if slider itself clips */
  }

  .slick-slide {
    padding: 0 15px; /* Spacing between slides */
    box-sizing: border-box;
    opacity: 0.7;
    transform: scale(0.85);
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
    display: flex !important; /* Ensure slides are flex items if they contain flex children */
    justify-content: center; /* Center ProjectCard within the slide */
  }

  .slick-slide > div {
    /* This div is added by react-slick, ensure it allows the card to be centered or fill */
    display: flex;
    justify-content: center;
  }

  .slick-center {
    opacity: 1;
    transform: scale(1);
  }

  /* Style for dots */
  .slick-dots {
    bottom: -30px; /* Adjust position of dots */
  }

  .slick-dots li button:before {
    font-size: 12px; /* Adjust size of dots */
    color: #333; /* Color of dots */
  }

  .slick-dots li.slick-active button:before {
    color: #007bff; /* Color of active dot */
  }

  /* Styles for the slick arrows */
  .slick-prev,
  .slick-next {
    z-index: 1; /* Ensure arrows are above slides */
    width: 40px; /* Custom width */
    height: 40px; /* Custom height */
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px; /* Custom size of the arrow icon */
    color: #333; /* Custom color of the arrow icon */
    opacity: 0.75; /* Slightly transparent */
  }

  .slick-prev {
    left: -35px; /* Adjusted position */
  }

  .slick-next {
    right: -35px; /* Adjusted position */
  }

  /* Hover and focus states for arrows */
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    color: #007bff; /* Change color on hover/focus */
    opacity: 1; /* Fully opaque on hover/focus */
  }
`;
