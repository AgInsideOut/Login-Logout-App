import { Property } from "csstype";
import styled from "styled-components";

const Placeholder = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: calc(50% - 12px);
  left: 16px;
  line-height: 24px;
  display: inline-block;
  height: 24px;
`;
const StateplaceholderIconnoRoot = styled.div`position: relative;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 2px solid var(--black);
  box-sizing: border-box;
  width: 320px;
  height: 40px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-size);
  color: var(--dark-gray);
  font-family: var(--body);
  position: ${(p) => p.statePlaceholderIconNoPosition}
  width: ${(p) => p.statePlaceholderIconNoWidth}
  margin: ${(p) => p.statePlaceholderIconNoMargin}
  top: ${(p) => p.statePlaceholderIconNoTop}
  left: ${(p) => p.statePlaceholderIconNoLeft}
  flex-shrink: ${(p) => p.statePlaceholderIconNoFlexShrink}
  z-index: ${(p) => p.statePlaceholderIconNoZIndex}
`;
const StatePlaceholderIconNo = ({
  displayText,
  statePlaceholderIconNoPosition,
  statePlaceholderIconNoWidth,
  statePlaceholderIconNoMargin,
  statePlaceholderIconNoTop,
  statePlaceholderIconNoLeft,
  statePlaceholderIconNoFlexShrink,
  statePlaceholderIconNoZIndex,
}) => {
  return (
    <StateplaceholderIconnoRoot
      statePlaceholderIconNoPosition={statePlaceholderIconNoPosition}
      statePlaceholderIconNoWidth={statePlaceholderIconNoWidth}
      statePlaceholderIconNoMargin={statePlaceholderIconNoMargin}
      statePlaceholderIconNoTop={statePlaceholderIconNoTop}
      statePlaceholderIconNoLeft={statePlaceholderIconNoLeft}
      statePlaceholderIconNoFlexShrink={statePlaceholderIconNoFlexShrink}
      statePlaceholderIconNoZIndex={statePlaceholderIconNoZIndex}
    >
      <Placeholder>{displayText}</Placeholder>
    </StateplaceholderIconnoRoot>
  );
};

export default StatePlaceholderIconNo;
