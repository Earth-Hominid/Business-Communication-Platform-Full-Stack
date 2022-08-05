import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  StyledModalBody,
  StyledModalHeader,
  IconContainer,
  StyledModalOverlay,
  StyledModal,
  ModalTitle,
} from './Styles';
import { XCircleIcon } from '@heroicons/react/outline';

interface Props {
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  show: boolean;
  title: string;
  children: Array<any>;
}

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <>
      <StyledModalOverlay>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleClose}>
              <IconContainer>
                <XCircleIcon />
              </IconContainer>
            </a>
          </StyledModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalOverlay>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;

// https://devrecipes.net/modal-component-with-next-js/
