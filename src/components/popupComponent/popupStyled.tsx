import styled from 'styled-components'

const Popup = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin: 100px auto;
  min-height: 356px;
  width: 557px;
  background: #ffffff;
  box-shadow: 0px 3px 14px rgba(74, 58, 255, 0.03),
    0px -2px 4px rgba(20, 20, 43, 0.12), 0px 12px 44px rgba(20, 20, 43, 0.34);
  border-radius: 12px;
`;

const Icon = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 91px;
  margin-top: 20px;
  border-radius: 50%;
  background: ${({ type }) => (type ? '#F4FBF7' : 'rgba(190, 36, 36, 0.05)')};
`;

const Content = styled.div`
  margin-top: 32px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  color: #170F49;
  margin-bottom: 16px;
`;

const Message = styled.div`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #6F6C90;
`;

const ButtonBox = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-evenly;
`;

export { Popup, PopupContent, Icon, Content, Title, Message, ButtonBox }
