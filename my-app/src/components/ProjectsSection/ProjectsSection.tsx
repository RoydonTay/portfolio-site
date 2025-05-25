import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ProjectCard, { ProjectCardProps } from "../ProjectCard/ProjectCard";
import * as S from "./ProjectsSection.styles";

const placeholderProjects: ProjectCardProps[] = [
  {
    title: "[Project Title 1]",
    description: `[Detailed description of Project Title 1. This project aimed to solve X by doing Y, utilizing technologies A, B, and C.
    It features D, E, and F functionalities. The development process involved several stages including planning, design, implementation, and testing.
    This placeholder should be replaced with the actual project details and achievements.
    Key challenges included managing state effectively and ensuring cross-browser compatibility.
    The project was completed on schedule and received positive feedback for its user-friendly interface.
    Further improvements could involve adding feature G and optimizing performance for larger datasets.
    This project demonstrates proficiency in [Technology A] and problem-solving skills.]`,
    imageUrl: "https://via.placeholder.com/300x200.png?text=Project+Image+1",
    projectUrl: "https://github.com/yourusername/projectname1"
  },
  {
    title: "[Project Title 2]",
    description: `[This is a placeholder for Project Title 2. It focused on developing a backend API for a mobile application.
    Technologies used were Node.js, Express, and MongoDB. The API handles user authentication, data storage, and real-time updates.
    One of the main goals was to ensure scalability and security of the platform.
    The project involved creating comprehensive API documentation using Swagger.
    Regular testing and code reviews were conducted to maintain high quality.
    This project showcases skills in backend development, API design, and database management.
    Future work could include integrating third-party services and implementing advanced analytics.]`,
    imageUrl: "https://via.placeholder.com/300x200.png?text=Project+Image+2",
    projectUrl: "https://github.com/yourusername/projectname2"
  },
  {
    title: "[Project Title 3]",
    description: `[Project Title 3 is a full-stack web application designed for e-commerce.
    It was built using React for the frontend and Django for the backend, with PostgreSQL as the database.
    Key features include product catalog, shopping cart, user accounts, and an admin dashboard.
    The project emphasized responsive design to ensure a seamless experience across all devices.
    A significant aspect was the integration of a payment gateway and order management system.
    This project helped in honing skills in full-stack development, UI/UX principles, and database design.
    Potential future enhancements include adding a recommendation engine and social media integration.
    It serves as a good example of a complex application from conception to deployment.]`,
    imageUrl: "https://via.placeholder.com/300x200.png?text=Project+Image+3",
    projectUrl: "https://github.com/yourusername/projectname3"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <S.SectionWrapper>
      <Fade triggerOnce={true} duration={1000}>
        <h2>My Projects</h2> {/* Optional: Add a title for the section */}
      </Fade>
      <Slide direction="up" triggerOnce={true} duration={700} cascade damping={0.1}>
        <S.CardsContainer>
          {placeholderProjects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} projectUrl={project.projectUrl} />
          ))}
        </S.CardsContainer>
      </Slide>
    </S.SectionWrapper>
  );
};

export default ProjectsSection;
