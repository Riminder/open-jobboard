import React from 'react'
import ModalStyles from './modal.module.scss'
import OutsideClickHandler from 'react-outside-click-handler'

const Modal = (props) => {

  if (props.modalIsOpen) {
    return (
      <div className={ModalStyles.modal__blanket}>
          <OutsideClickHandler
            onOutsideClick={ () => 
              props.toggleModal(false)
            }
          >
            <div className={ModalStyles.modal__container}>
              <div className={ModalStyles.modal__inner}>
                <div className={ModalStyles.text__box}>
                </div>
              </div>
            </div>
        </OutsideClickHandler>
      </div>
    )
  }
  return null
}

export default Modal;