import styled from "styled-components";
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
`;
const Footer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base) 0px;
  align-items: center;
  justify-content: space-between;
`;
const Message1 = styled.div`
  align-self: stretch;
  position: relative;
  text-decoration: underline;
  line-height: 24px;
  font-weight: 600;
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: var(--body);
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
  height: 336px;
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
const TypeAdvanced2 = () => {
  return (
    <TypeadvancedRoot>
      <TypeadvancedInner>
        <MessageWrapper>
          <Message>LOGIN</Message>
        </MessageWrapper>
      </TypeadvancedInner>
      <StatePlaceholderIconNo
        displayText="Username"
        statePlaceholderIconNoPosition="relative"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="unset"
        statePlaceholderIconNoTop="unset"
        statePlaceholderIconNoLeft="unset"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="unset"
      />
      <StatePlaceholderIconNo
        displayText="Password"
        statePlaceholderIconNoPosition="relative"
        statePlaceholderIconNoWidth="400px"
        statePlaceholderIconNoMargin="unset"
        statePlaceholderIconNoTop="unset"
        statePlaceholderIconNoLeft="unset"
        statePlaceholderIconNoFlexShrink="0"
        statePlaceholderIconNoZIndex="unset"
      />
      <Footer>
        <StyleLinear
          buttonText="Sign in"
          styleLinearPosition="unset"
          styleLinearBackgroundColor="#d9d9d9"
          styleLinearMargin="unset"
          styleLinearTop="unset"
          styleLinearLeft="unset"
          styleLinearZIndex="unset"
        />
      </Footer>
      <Content>
        <Message1>Forgot password</Message1>
      </Content>
    </TypeadvancedRoot>
  );
};

export default TypeAdvanced2;
