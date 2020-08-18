import React from 'react'
import cardsStyles from './cards.module.scss'
import mock96x96 from '../../assets/images/mock96x96.png'

const Cards = () => {
  return (
    <section className={cardsStyles.section}>
        <div className="text-center text-bold-700 text-large">Dolor sint exercitation commodo magna</div>
        <div className={cardsStyles.content}>
          <div className={cardsStyles.item}>
            <div className="mb-1">
              <img src={mock96x96} className={cardsStyles.logo} />
            </div>
            <div className="text-medium">
              Ipsum amet mollit anim sint cillum.
            </div>
          </div>
          <div className={cardsStyles.item}>
            <div className="mb-1">
              <img src={mock96x96} className={cardsStyles.logo} />
            </div>
            <div className="text-medium">
              Ipsum amet mollit anim sint cillum.
            </div>
          </div>
          <div className={cardsStyles.item}>
            <div className="mb-1">
              <img src={mock96x96} className={cardsStyles.logo} />
            </div>
            <div className="text-medium">
              Ipsum amet mollit anim sint cillum.
            </div>
          </div>
        </div>
    </section>
  )
}

export default Cards