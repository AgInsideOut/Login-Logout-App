import TypeAdvanced1 from "./TypeAdvanced1";
import styled from "styled-components";

const ProjectCardRoot = styled.div`
  position: relative;
  border-radius: var(--br-8xs);
  border: 1px dashed var(--white);
  box-sizing: border-box;
  width: 488px;
  height: 566px;
  overflow: hidden;
`;
const ProjectCard1 = () => {
  return (
    <ProjectCardRoot>
      <TypeAdvanced1 />
    </ProjectCardRoot>
  );
};

export default ProjectCard1;
