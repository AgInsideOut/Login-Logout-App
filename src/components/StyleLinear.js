// import { Property } from "csstype";
import styled from "styled-components";

const Label = styled.div`
  position: relative;
  line-height: 24px;
`;
const StylelinearRoot = styled.div`position: relative;
  border-radius: var(--br-xl);
  background-color: var(--white);
  border: 2px solid var(--black);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs) var(--padding-base);
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--body-small-size);
  color: var(--black);
  font-family: var(--body);
  position: ${(p) => p.styleLinearPosition}
  background-color: ${(p) => p.styleLinearBackgroundColor}
  margin: ${(p) => p.styleLinearMargin}
  top: ${(p) => p.styleLinearTop}
  left: ${(p) => p.styleLinearLeft}
  z-index: ${(p) => p.styleLinearZIndex}
`;
const StyleLinear = ({
  buttonText,
  styleLinearPosition,
  styleLinearBackgroundColor,
  styleLinearMargin,
  styleLinearTop,
  styleLinearLeft,
  styleLinearZIndex,
}) => {
  return (
    <StylelinearRoot
      styleLinearPosition={styleLinearPosition}
      styleLinearBackgroundColor={styleLinearBackgroundColor}
      styleLinearMargin={styleLinearMargin}
      styleLinearTop={styleLinearTop}
      styleLinearLeft={styleLinearLeft}
      styleLinearZIndex={styleLinearZIndex}
    >
      <Label>{buttonText}</Label>
    </StylelinearRoot>
  );
};

export default StyleLinear;
