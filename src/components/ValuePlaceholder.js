import { Property } from "csstype";
import styled from "styled-components";

const Ddmmyy = styled.div`
  position: absolute;
  top: 8px;
  left: 16px;
  line-height: 24px;
  display: inline-block;
  width: 129px;
  height: 24px;
`;
const CalendarIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const ValueplaceholderRoot = styled.div`position: relative;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 2px solid var(--black);
  box-sizing: border-box;
  width: 160px;
  height: 40px;
  overflow: hidden;
  text-align: left;
  font-size: var(--link-size);
  color: var(--dark-gray);
  font-family: var(--link);
  position: ${(p) => p.valuePlaceholderPosition}
  margin: ${(p) => p.valuePlaceholderMargin}
  top: ${(p) => p.valuePlaceholderTop}
  left: ${(p) => p.valuePlaceholderLeft}
  flex-shrink: ${(p) => p.valuePlaceholderFlexShrink}
  z-index: ${(p) => p.valuePlaceholderZIndex}
`;
const ValuePlaceholder = ({
  valuePlaceholderPosition,
  valuePlaceholderMargin,
  valuePlaceholderTop,
  valuePlaceholderLeft,
  valuePlaceholderFlexShrink,
  valuePlaceholderZIndex,
}) => {
  return (
    <ValueplaceholderRoot
      valuePlaceholderPosition={valuePlaceholderPosition}
      valuePlaceholderMargin={valuePlaceholderMargin}
      valuePlaceholderTop={valuePlaceholderTop}
      valuePlaceholderLeft={valuePlaceholderLeft}
      valuePlaceholderFlexShrink={valuePlaceholderFlexShrink}
      valuePlaceholderZIndex={valuePlaceholderZIndex}
    >
      <Ddmmyy>DD/MM/YY</Ddmmyy>
      <CalendarIcon alt="" src="/calendar.svg" />
    </ValueplaceholderRoot>
  );
};

export default ValuePlaceholder;
