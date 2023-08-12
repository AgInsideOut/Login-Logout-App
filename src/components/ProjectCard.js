import HappySeeing from "./HappySeeing";
import Star from "./Star";
import styled from "styled-components";

const ProjectCardRoot = styled.div`
  position: relative;
  border-radius: var(--br-8xs);
  border: 1px dashed var(--white);
  box-sizing: border-box;
  width: 803px;
  height: 484px;
  overflow: hidden;
`;
const ProjectCard = () => {
  return (
    <ProjectCardRoot>
      <HappySeeing />
      <Star />
    </ProjectCardRoot>
  );
};

export default ProjectCard;
