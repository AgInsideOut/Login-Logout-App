import styled from "styled-components";

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
  z-index: 1;
`;
const Footer = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 451px;
  left: 24px;
  width: 400px;
  z-index: 2;
`;
const Message = styled.b`
  position: relative;
  line-height: 24px;
`;
const Message1 = styled.div`
  position: relative;
  line-height: 24px;
  display: inline-block;
  width: 357px;
  height: 33px;
  flex-shrink: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const MessageParent = styled.div`
  width: 114px;
  height: 57px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TypeadvancedInner = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 218px;
  left: 325px;
  width: 352px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const MessageGroup = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 289px;
  left: 444px;
  width: 114px;
  height: 57px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 4;
`;
const MessageWrapper = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 0px;
  left: 28px;
  width: 269px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const FrameDiv = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 78px;
  left: 353px;
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
  text-align: left;
  font-size: var(--link-size);
  color: var(--black);
  font-family: var(--font-roboto);
`;
const HappySeeing = () => {
  return (
    <TypeadvancedRoot>
      <TypeadvancedChild />
      <TypeadvancedItem />
      <Footer />
      <TypeadvancedInner>
        <MessageParent>
          <Message>FIRST NAME</Message>
          <Message1>FIRST NAME</Message1>
        </MessageParent>
      </TypeadvancedInner>
      <MessageGroup>
        <Message>LAST NAME</Message>
        <Message1>LAST NAME</Message1>
      </MessageGroup>
      <FrameDiv>
        <MessageWrapper>
          <Message>{`HI {USER} HAPPY TO SEE YOU !`}</Message>
        </MessageWrapper>
      </FrameDiv>
    </TypeadvancedRoot>
  );
};

export default HappySeeing;
