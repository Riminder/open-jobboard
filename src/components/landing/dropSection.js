import React, { useState } from 'react'
import clippedStyles from './dropSection.module.scss'
import girlImg from '../../assets/images/girl.png'
import boyImg from '../../assets/images/boy.png'
import times from '../../assets/images/times.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const DropSection = () => {
  const [isShownRight, setIsShownRight] = useState(true)
  const [isShownLeft, setIsShownLeft] = useState(true)


  return (
    <section className={clippedStyles.clipped}>
      <div className={clippedStyles.left}
        onMouseEnter={() => setIsShownLeft(false)}
        onMouseLeave={() => setIsShownLeft(true)}
      >
        {isShownLeft ? (
            <div className={clippedStyles.left__content}>
              <div className={clippedStyles.heading}>
                <div className="text-extra-large">Dolore occaecat dolore consequat deserunt mollit deserunt laboris </div>
                <div className="text-medium">Ut Lorem anim minim consectetur aliquip nulla est anim </div>
              </div>
              <div className={[clippedStyles.shape,clippedStyles.shape__justified].join(' ')}>
                <img src={girlImg} alt="Jumping girl" />
                <span className={clippedStyles.shape__text}>With Resume</span>
              </div>
            </div>
          ) :
          (
            <div className={clippedStyles.left__content_hovered}>
     
            </div>
          )
        }
      </div>
      <div
        className={clippedStyles.right}
         onMouseEnter={() => setIsShownRight(false)}
        onMouseLeave={() => setIsShownRight(true)}
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
            <div className={clippedStyles.right__content_hovered}>
              <span className={clippedStyles.row}>
                <img src={times} />
                <img src={times} />
                <img src={times} />
              </span>
              <span className={`${clippedStyles.row} text-large text-bold-700 text-right`}>
                Trop pressé
              </span>
              <span className={clippedStyles.row}>
                <img src={times} />
                <img src={times} />
                <img src={times} />
                <img src={times} />
              </span>
              <span className={`${clippedStyles.row} text-large text-right`}>
                Accède à nos offres <FontAwesomeIcon className="icon-right" icon={faLongArrowAltRight} />
              </span>
              <span className={clippedStyles.row}>
                <img src={times} />
                <img src={times} />
                <img src={times} />
                <img src={times} />
              </span>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default DropSection;