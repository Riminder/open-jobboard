import React, { useState, useEffect } from 'react'
import { Checkbox } from 'react-input-checkbox'
import OutsideClickHandler from 'react-outside-click-handler'
import 'react-input-checkbox/lib/react-input-checkbox.min.css'

import ModalStyles from './modal.module.scss'



const Modal = (props) => {
  const [isConsentOwner, setIsConsentOwner] = useState(false)
  const [isConsentController, setIsConsentController] = useState(false)
  useEffect(() => {
    if (!isConsentOwner) {
      setIsConsentController(false)
    }
  }, [isConsentOwner])

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
                  Elit occaecat adipisicing nisi aliquip veniam eiusmod pariatur. 
                  Eiusmod nisi ex culpa veniam voluptate incididunt culpa consequat proident. 
                  Ut deserunt mollit nulla qui anim. Irure deserunt ullamco quis aute cillum sit commodo 
                  sit laboris. Dolor irure voluptate id cupidatat ipsum.
                  Occaecat tempor nisi laboris consectetur nostrud culpa irure labore est ex. 
                  Velit cupidatat anim sit officia est veniam eiusmod magna Lorem duis eiusmod 
                  officia non. Elit consectetur anim commodo officia cupidatat. Cillum anim aute eiusmod irure qui.
                  Aute laboris irure laboris sunt sit enim non ullamco cupidatat excepteur veniam.
                  Dolore labore magna voluptate adipisicing ullamco mollit. Magna et culpa Lorem veniam est id laborum.
                  Sint aliquip velit quis dolor do magna. Voluptate irure occaecat nulla ea nisi voluptate enim duis sit ea esse aute.
                  Ex nulla tempor proident culpa elit culpa esse reprehenderit nisi velit. Nulla laboris officia laborum enim aliqua.
                </div>
                <div className={ModalStyles.actions}>
                  <div className={ModalStyles.controls}>
                    <div className={ModalStyles.control}>
                      <Checkbox 
                        theme="fancy-checkbox"
                        value={isConsentOwner}
                        onChange={() => setIsConsentOwner(!isConsentOwner)}
                      >
                        In sunt magna consequat ex esse consectetur dolor irure est sunt dolor non ex fugiat.
                      </Checkbox>
                    </div>
                    <div className={ModalStyles.control}>
                      <Checkbox 
                        theme="fancy-checkbox"
                        value={isConsentController}
                        onChange={() => setIsConsentController(!isConsentController)}
                        disabled={!isConsentOwner}
                      >
                        Ipsum nisi labore do excepteur cupidatat eiusmod esse ex.
                      </Checkbox>
                    </div>
                  </div>
                  <div className={ModalStyles.buttons}>
                    <button className="button button--light">ANNULER</button>
                    <button
                      className="button ml-1"
                      onClick={() => props.postProfile(isConsentController)}
                      disabled={props.profile?.r || !isConsentOwner}
                    >
                      {props.profile?.r ? <span className="loader"></span> : 'CONFIRMER'}
                    </button>
                  </div>
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