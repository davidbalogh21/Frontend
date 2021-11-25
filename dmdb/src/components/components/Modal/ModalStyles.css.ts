import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export const ModalContent = styled.div`
  margin-top: 20vh;
  border-radius: 5px;
  width: 50vw;
  height: 35vh;
  background-color: #fff;
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  padding: 25px;
  font-size: 2em;
  text-align: center;
`;

export const ModalBody = styled.div`
  padding: 10px;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
`;

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

`;