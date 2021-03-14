import React, { useLayoutEffect } from 'react';
import { ModalArea } from './styled';

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {
  const handleOutSideClick = ({ target }) => {
    if (target.id === id) onClose();
  };
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    }
  }, []);
  return (
    <ModalArea id={id} onClick={handleOutSideClick}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </ModalArea>
  );
};

export default Modal;
