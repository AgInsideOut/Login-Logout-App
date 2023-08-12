import TypeAdvanced2 from "./TypeAdvanced2";
import styled from "styled-components";

const ProjectCardRoot = styled.div`
  position: relative;
  border-radius: var(--br-8xs);
  border: 1px dashed var(--white);
  box-sizing: border-box;
  width: 488px;
  height: 377px;
  overflow: hidden;
`;
const ProjectCard2 = () => {
  return (
    <ProjectCardRoot>
      <TypeAdvanced2 />
    </ProjectCardRoot>
  );
};

export default ProjectCard2;
