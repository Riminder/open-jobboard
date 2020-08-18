import React from 'react'
import figuresStyles from './figures.module.scss'
import mock96x96 from '../../assets/images/mock96x96.png'

const Figures = () => {
  return (
    <section className={figuresStyles.section}>
      <div className="text-center text-bold-700 text-large">Dolor sint exercitation commodo magna</div>
      <div className={figuresStyles.content}>
        <div className={figuresStyles.item}>
          <img src={mock96x96} alt="mock 12" className={figuresStyles.logo} />
          <div className={figuresStyles.details}>
            <div className="text-extra-large text-bold-700 text-gradient">
              XXXXX
            </div>
            <div className="text-medium text-gradient">
              Ipsum amet
            </div>
            <div className="text-small">
              Irure enim esse commodo nulla irure aute 
              eiusmod eiusmod laboris et. Id ea laboris eu aliquip 
              consectetur sunt fugiat fugiat aliqua deserunt sit fugiat.
            </div>
          </div>
        </div>
        <div className={figuresStyles.item} style={{ marginTop: '2rem' }}>
          <img src={mock96x96} alt="mock 13" className={figuresStyles.logo} />
          <div className={figuresStyles.details}>
            <div className="text-extra-large text-bold-700 text-gradient">
              XXXXX
            </div>
            <div className="text-medium text-gradient">
              Ipsum amet
            </div>
            <div className="text-small">
              Irure enim esse commodo nulla irure aute 
              eiusmod eiusmod laboris et. Id ea laboris eu aliquip 
              consectetur sunt fugiat fugiat aliqua deserunt sit fugiat.
            </div>
          </div>
        </div>
        <div className={figuresStyles.item} style={{ marginTop: '5rem' }}>
          <img src={mock96x96} alt="mock 14" className={figuresStyles.logo} />
          <div className={figuresStyles.details}>
            <div className="text-extra-large text-bold-700 text-gradient">
              XXXXX
            </div>
            <div className="text-medium text-gradient">
              Ipsum amet
            </div>
            <div className="text-small">
              Irure enim esse commodo nulla irure aute 
              eiusmod eiusmod laboris et. Id ea laboris eu aliquip 
              consectetur sunt fugiat fugiat aliqua deserunt sit fugiat.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Figures