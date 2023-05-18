import styled from 'styled-components';
import Modal from 'react-modal';

export const Overlay = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50000;
`;
export const ModalStyled = styled.div`
  position: relative;
  max-width: 80vw;
  max-height: 80vh;
`;
export const StyledButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid grey;
  padding: 0px;
  height: 26px;
`;
