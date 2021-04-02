import React, {useCallback, useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Media from 'react-media'
import {useDropzone} from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'


import Modal from '../common/modal'
import cloudLogo from '../../assets/images/cloud.svg'
import plusLogo from '../../assets/images/plus.svg'
import clippedStyles from './dropSection.module.scss'
import girlImg from '../../assets/images/girl.png'
import boyImg from '../../assets/images/boy.png'
import times from '../../assets/images/times.svg'
import bridgeImg from '../../assets/images/bridge.png'


const DropSection = (props) => {
  const [isShownRight, setIsShownRight] = useState(true)
  const [isShownLeft, setIsShownLeft] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [profileFile, setProfileFile] = useState("");
  const [device, setDevice] = useState("mobile")

  useEffect(() => {
    if(props.profile?.s) {
      setModalIsOpen(false)
      swal({
        title: "Title success",
        text: "Message success!",
        icon: "success",
      });
      // Swal.fire({
      //   title: 'Vérifie ta boite mail.',
      //   html: 'Tu viens de recevoir un message de la part d\'ENGIE.',
      //   type: 'success',
      //   confirmButtonColor: '#00aaff',
      // });
    }
    if(props.profile.f) {
      swal(
        {
         type: 'error',
         title: 'Oops...',
         text: 'Message error',
        }
       )
    }
  }, [props.profile])
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setModalIsOpen(true)
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
      setProfileFile(file)
    })
    
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})
  const postProfile = (consentController) => {
    props.addProfile({file: profileFile, consent: consentController, redirect: true})
  }

  const leftClassContent = isShownLeft ? [clippedStyles.left__content, clippedStyles.content__shown] : [clippedStyles.left__content]
  const leftClassHover = isShownLeft ? [clippedStyles.left__content] : [clippedStyles.left__content_hovered, clippedStyles.hover__shown]

  return (
    <>
      <section className={clippedStyles.clipped}>
        <Media
          queries={{ large: "(min-width: 1200px)" }}
          defaultMatches={{ large: device === 'desktop' && props.isDesktopOrLaptop === 'desktop' }}
          render={() => 
            <div className={clippedStyles.bridge}>
              <img src={bridgeImg} />
            </div>
          }
        />
        <Media
          queries={{ mobile: "(max-width: 1200px)" }}
          defaultMatches={{ mobile: device === 'mobile' && props.isDesktopOrLaptop === 'mobile' }}
          render={() => 
            <div className={clippedStyles.heading_mobile}>
              <div className="text-extra-large"><span className="text-bold-600">BPI group</span> vous accompagne</div>
              <div className="text-extra-large text-bold-600">vers un nouvel avenir professionnel</div>
              <div className={clippedStyles.bridge_mobile}>
                <img src={bridgeImg} className={clippedStyles.bridge_mobile_img} />
              </div>
            </div>
          }
        />

        <Media
          queries={{ large: "(min-width: 1200px)" }}
          defaultMatches={{ large: device === 'desktop' && props.isDesktopOrLaptop === 'desktop' }}
          render={() => 
            <div className={clippedStyles.left}
            onMouseEnter={() => setIsShownLeft(false)}
            onMouseLeave={() => setIsShownLeft(true)}
            role="textbox"
            tabIndex="-1"
          >
            <div className={leftClassContent.join(' ')}>
              <div className={clippedStyles.heading}>
                <div className="text-extra-large">Dolore occaecat dolore consequat deserunt mollit deserunt laboris </div>
                <div className="text-medium">Ut Lorem anim minim consectetur aliquip nulla est anim </div>
              </div>
              <div className={[clippedStyles.shape,clippedStyles.shape__justified].join(' ')}>
                <img src={girlImg} alt="Jumping girl" />
                <span className={clippedStyles.shape__text}>With Resume</span>
              </div>
            </div>
            <div className={leftClassHover.join(' ')} {...getRootProps()}>
              <input {...getInputProps()} />
              <div className={clippedStyles.dropping}>
                <div className={clippedStyles.cloud_row}>
                    <img src={cloudLogo} />
                    <img src={cloudLogo} />
                    <img src={cloudLogo} />
                    <img src={cloudLogo} />
                </div>
                <div className={clippedStyles.cloud_row}>
                  <div className={clippedStyles.cloud_col}>
                      <img src={cloudLogo} />
                      <img src={cloudLogo} />
                  </div>
                  
                    <div className={clippedStyles.dropzone} >
                      <span className="text-large bold">
                          Glisse ton CV
                      </span>
                      <div id="dropzone">
                      
                      </div>
                      <div className={clippedStyles.dashed}>
                        <div className={clippedStyles.logo_wrapper}>
                          <img src={plusLogo} alt="plus" />
                        </div>
                      </div>
                    </div>
                    <img src={cloudLogo} />
                </div>
                <div className="drop-message">et laisse la magie opérer</div>
                <div className={clippedStyles.cloud_row}>
                  <img src={cloudLogo} />
                  <img src={cloudLogo} />
                  <img src={cloudLogo} />
                </div>
              </div>
            </div>
          </div>
        }/>

        <Media
          queries={{ mobile: "(max-width: 1200px)" }}
          defaultMatches={{ mobile: device === 'mobile' && props.isDesktopOrLaptop === 'mobile' }}
          render={() => 
            <div className={clippedStyles.left}
              onMouseEnter={() => setIsShownLeft(false)}
              onMouseLeave={() => setIsShownLeft(true)}
              role="textbox"
              tabIndex="-1"
            >
              <div className={[clippedStyles.left__content_hovered, clippedStyles.hover__shown].join(' ')} {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={clippedStyles.dropping}>
                  <div className={clippedStyles.cloud_row_mobile}>
                      <div className={clippedStyles.dropzone} >
                        <span className="text-large text-bold-600">
                          Glissez votre CV
                        </span>
                        <div id="dropzone">
                        
                        </div>
                        <div className={clippedStyles.dashed}>
                          <div className={clippedStyles.logo_wrapper}>
                            <img src={plusLogo} alt="plus" />
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="drop-message text-large text-bold-600">et le tour est joué</div>
                </div>
              </div>
            </div>
          }
        />

          <Media
            queries={{ large: "(min-width: 1200px)" }}
            defaultMatches={{ large: device === 'desktop' && props.isDesktopOrLaptop === 'desktop'}}
            render={() => 
            <div
              className={clippedStyles.right}
              onMouseEnter={() => setIsShownRight(false)}
              onMouseLeave={() => setIsShownRight(true)}
              role="textbox"
              tabIndex="-2"
            >
              { isShownRight ? (
                  <div className={clippedStyles.right__content}>
                    <div className={clippedStyles.heading}>
                    </div>
                    <div className={clippedStyles.shape}>
                      <img src={boyImg} alt="Jumping boy" />
                      <span className={clippedStyles.shape__text}>Without Resume</span>
                    </div>
                  </div>
                )
                :
                (
                  <Link to="/jobs" className={clippedStyles.right__content_hovered}>
                    <span className={clippedStyles.row}>
                      <img src={times} alt="times 1" />
                      <img src={times} alt="times 2" />
                      <img src={times} alt="times 3" />
                    </span>
                    <span className={`${clippedStyles.row} text-large text-bold-700 text-right`}>
                      Trop pressé
                    </span>
                    <span className={clippedStyles.row}>
                      <img src={times} alt="times 4" />
                      <img src={times} alt="times 5" />
                      <img src={times} alt="times 6" />
                      <img src={times} alt="times 7" />
                    </span>
                    <span className={`${clippedStyles.row} text-large text-right`}>
                      Accède à nos offres <FontAwesomeIcon className="icon-right" icon={faLongArrowAltRight} />
                    </span>
                    <span className={clippedStyles.row}>
                      <img src={times} alt="times 8" />
                      <img src={times} alt="times 9" />
                      <img src={times} alt="times 10" />
                      <img src={times} alt="times 11" />
                    </span>
                  </Link>
                )
              }
            </div>
            } 
          />
          <Media
            queries={{ mobile: "(max-width: 1200px)" }}
            defaultMatches={{ mobile: device === 'mobile' && props.isDesktopOrLaptop === 'mobile' }}
            render={() => 
              <div className={clippedStyles.content_mobile}>
                <div className="text-extra-large"><span className="text-bold-600">Trop pressé</span></div>
                <Link to="/jobs" className="button button-large">Accédez à nos offres <FontAwesomeIcon className="icon-right" icon={faLongArrowAltRight} /></Link>
              </div>
            }
          />      
        <Modal 
          toggleModal={setModalIsOpen}
          modalIsOpen={modalIsOpen}
          postProfile={postProfile}
          profile={props.profile}
        />
      </section>
    </>
  )
}

export default DropSection;