import React from 'react'
import testimonialStyles from './testimonial.module.scss'
import mock600x700 from '../../assets/images/mock600x700.png'

const Testimonial = props => {
  return (
    <section
      className={testimonialStyles.section}
      style={{
        background: props.reversed ? '#f2f2f2' : '',
        flexDirection: props.reversed ? 'row-reverse' : ''
      }}
    >
        <div className={testimonialStyles.content}>
          <div className={`${testimonialStyles.left} ${props.reversed ? '' : 'text-white'}`}>
            <div className="text-large mb-1">
              Proident consectetur occaecat nulla irure veniam ad ex irure in nisi ad.
            </div>
            <div className="text-medium mb-1">
              Occaecat laborum adipisicing enim incididunt sunt velit minim adipisicing laboris labore consequat. 
              Ullamco ad magna aliquip magna id amet culpa exercitation Lorem anim adipisicing anim reprehenderit. 
              Quis exercitation in dolor esse amet.
            </div>
            <div className="text-small mb-1">
              Cillum quis elit id sint tempor proident occaecat et et sunt.
            </div>
          </div>
          <div>
            <img alt="mock 15" className={testimonialStyles.img} src={mock600x700} />
          </div>
        </div>
    </section>
  )
}

export default Testimonial