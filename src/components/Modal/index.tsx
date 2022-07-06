import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.scss'

interface ModalProps {
  imageUrl: string;
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ imageUrl, isOpen, handleOpen }) => {
  if (isOpen) {
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modalClose} onClick={() => handleOpen(!isOpen)}>X</div>
        <div className={styles.modalBox}>
          <img src={imageUrl} alt="Bg" />
        </div>
      </div>
    );
  }

  return null
}

export default Modal;
