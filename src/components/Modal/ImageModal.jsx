import Modal from 'react-modal';
import { Overlay, ModalStyled, StyledButtonClose } from './StyledImageModal';
import { FiX } from 'react-icons/fi';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, image, alt, onClose }) => {
  console.log(image);
  return (
    <Overlay
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image modal"
    >
      <ModalStyled>
        <img src={image} alt={alt} width="100%" />
        <StyledButtonClose onClick={onClose}>
          <FiX size="1.5em" />
        </StyledButtonClose>
      </ModalStyled>
    </Overlay>
  );
};
