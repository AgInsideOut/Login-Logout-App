import styled from "styled-components";
import StatePlaceholderIconNo from "./StatePlaceholderIconNo";
import StyleLinear from "./StyleLinear";

const TypeadvancedChild = styled.div`
  align-self: stretch;
  z-index: 0;
`;
const TypeadvancedItem = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 29px;
  left: 203px;
  width: 122px;
  z-index: 3;
`;
const Footer = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 451px;
  left: 24px;
  width: 400px;
  z-index: 4;
`;
const Message = styled.b`
  position: relative;
  line-height: 24px;
`;
const MessageWrapper = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 0px;
  left: -34px;
  width: 269px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const TypeadvancedInner = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 78px;
  left: 424px;
  width: 141px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;
const TypeadvancedRoot = styled.div`
  position: absolute;
  top: 19px;
  left: 20px;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 2px solid var(--black);
  box-sizing: border-box;
  width: 760px;
  height: 436px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--body-size);
  color: var(--black);
  font-family: var(--font-roboto);
`;
const TypeAdvanced = () => {
  return (
    <TypeadvancedRoot>
      <TypeadvancedChild />
      <StatePlaceholderIconNo
        displayText="Email"
        statePlaceholderIconNoPosition="absolute"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="0 !important"
        statePlaceholderIconNoTop="155px"
        statePlaceholderIconNoLeft="294px"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="1"
      />
      <StatePlaceholderIconNo
        displayText="Username"
        statePlaceholderIconNoPosition="absolute"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="0 !important"
        statePlaceholderIconNoTop="219px"
        statePlaceholderIconNoLeft="294px"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="2"
      />
      <TypeadvancedItem />
      <Footer />
      <TypeadvancedInner>
        <MessageWrapper>
          <Message>RECOVER YOUR LOGIN DATA</Message>
        </MessageWrapper>
      </TypeadvancedInner>
      <StyleLinear
        buttonText="Submit"
        styleLinearPosition="absolute"
        styleLinearBackgroundColor="#d9d9d9"
        styleLinearMargin="0 !important"
        styleLinearTop="338px"
        styleLinearLeft="615px"
        styleLinearZIndex="6"
      />
    </TypeadvancedRoot>
  );
};

export default TypeAdvanced;
