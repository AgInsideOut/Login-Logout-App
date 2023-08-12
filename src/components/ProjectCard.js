import TypeAdvanced from "./TypeAdvanced";
import styled from "styled-components";

const TypelinearProperty2securi = styled.img`
  position: absolute;
  top: 144px;
  left: 83px;
  width: 140px;
  height: 140px;
`;
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
      <TypeAdvanced />
      <TypelinearProperty2securi
        alt=""
        src="/typelinear-property-2security-property-3lock-password-unlocked.svg"
      />
    </ProjectCardRoot>
  );
};

export default ProjectCard;
