import styled from "styled-components";
import ValuePlaceholder from "./ValuePlaceholder";
import StatePlaceholderIconNo from "./StatePlaceholderIconNo";
import StyleLinear from "./StyleLinear";

const Message = styled.b`
  position: relative;
  line-height: 24px;
`;
const MessageWrapper = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 269px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const TypeadvancedInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
`;
const TypeadvancedChild = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 29px;
  left: 203px;
  width: 122px;
  z-index: 1;
`;
const Footer = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 451px;
  left: 24px;
  width: 400px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base) 0px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 8;
`;
const Message1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 81px;
  left: 24px;
  line-height: 24px;
  z-index: 9;
`;
const TypeadvancedRoot = styled.div`
  position: absolute;
  top: 19px;
  left: 20px;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 2px solid var(--black);
  box-sizing: border-box;
  width: 448px;
  height: 524px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--body-size);
  color: var(--black);
  font-family: var(--font-roboto);
`;
const TypeAdvanced1 = () => {
  return (
    <TypeadvancedRoot>
      <TypeadvancedInner>
        <MessageWrapper>
          <Message>REGISTRATION</Message>
        </MessageWrapper>
      </TypeadvancedInner>
      <TypeadvancedChild />
      <ValuePlaceholder
        valuePlaceholderPosition="absolute"
        valuePlaceholderMargin="0 !important"
        valuePlaceholderTop="72px"
        valuePlaceholderLeft="264px"
        valuePlaceholderFlexShrink="0"
        valuePlaceholderZIndex="2"
      />
      <StatePlaceholderIconNo
        displayText="First name"
        statePlaceholderIconNoPosition="absolute"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="0 !important"
        statePlaceholderIconNoTop="136px"
        statePlaceholderIconNoLeft="24px"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="3"
      />
      <StatePlaceholderIconNo
        displayText="Last name"
        statePlaceholderIconNoPosition="absolute"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="0 !important"
        statePlaceholderIconNoTop="200px"
        statePlaceholderIconNoLeft="24px"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="4"
      />
      <StatePlaceholderIconNo
        displayText="Email"
        statePlaceholderIconNoPosition="absolute"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="0 !important"
        statePlaceholderIconNoTop="264px"
        statePlaceholderIconNoLeft="24px"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="5"
      />
      <StatePlaceholderIconNo
        displayText="Username"
        statePlaceholderIconNoPosition="absolute"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="0 !important"
        statePlaceholderIconNoTop="328px"
        statePlaceholderIconNoLeft="24px"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="6"
      />
      <StatePlaceholderIconNo
        displayText="Password"
        statePlaceholderIconNoPosition="absolute"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="0 !important"
        statePlaceholderIconNoTop="392px"
        statePlaceholderIconNoLeft="24px"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="7"
      />
      <Footer>
        <StyleLinear
          buttonText="Sign up"
          styleLinearPosition="unset"
          styleLinearBackgroundColor="#fff"
          styleLinearMargin="unset"
          styleLinearTop="unset"
          styleLinearLeft="unset"
          styleLinearZIndex="unset"
        />
      </Footer>
      <Message1>DATE OF BIRTH</Message1>
    </TypeadvancedRoot>
  );
};

export default TypeAdvanced1;
