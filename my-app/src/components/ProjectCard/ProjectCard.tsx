import React from "react";
import * as S from "./ProjectCard.styles";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <S.CardWrapper href={projectUrl} target="_blank" rel="noopener noreferrer">
      <S.CardImage src={imageUrl} alt={`${title} project image`} />
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
      <S.ViewMorePrompt>Click to view more</S.ViewMorePrompt>
    </S.CardWrapper>
  );
};

export default ProjectCard;
