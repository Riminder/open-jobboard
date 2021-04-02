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
                  <h3>
                    Mention d’information relative au traitement
                    des données personnelles
                  </h3>
                  <p>
                    Avant de vous proposer les offres en adéquation avec votre profil,
                    vous devez lire et accepter les <a href="#" target="_blank">Conditions Générales d’Utilisation</a>
                  </p>
                </div>
                <div className={ModalStyles.actions}>
                  <div className={ModalStyles.controls}>
                    <div className={ModalStyles.control}>
                      <Checkbox 
                        theme="fancy-checkbox"
                        value={isConsentOwner}
                        onChange={() => setIsConsentOwner(!isConsentOwner)}
                      >
                        J'ai lu et j'accepte les <a href="#" target="_blank">Conditions Générales d’Utilisation</a> qui autorisent HrFlow.ai Emploi à conserver mes données personnelles,
                        calculer mon niveau d'adéquation avec les offres et partager mon profil avec les recruteurs du réseau HrFlow.ai Emploi.

                      </Checkbox>
                    </div>
                  </div>
                  <div className={ModalStyles.buttons}>
                    <button
                      className="button button--light"
                      onClick={() => props.toggleModal(false)}
                    >
                      Annuler
                    </button>
                    <button
                      className="button ml-1"
                      onClick={() => props.postProfile(isConsentController)}
                      disabled={props.profile?.r || !isConsentOwner}
                    >
                      {props.profile?.r ? <span className="loader"></span> : 'C’est parti'}
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