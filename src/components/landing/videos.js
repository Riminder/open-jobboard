import React from 'react'
import videosStyles from './videos.module.scss'
import mock350x450 from '../../assets/images/mock350x450.png'

const Videos = () => {
  return (
    <section className={videosStyles.section}>
      <div className="text-center text-bold-700 text-large">Dolor sint exercitation commodo magna</div>
      <div className={videosStyles.content}>
        <div className={videosStyles.img}>
          <img alt="mock 16" src={mock350x450} className={`${videosStyles.img} mb-1`}/>
          <div className="text-medium text-bold-700 text-center">Adipisicing cupidata</div>
        </div>
        <div className={videosStyles.img}>
          <img alt="mock 17" src={mock350x450} className={`${videosStyles.img} mb-1`}/>
          <div className="text-medium text-bold-700 text-center">Adipisicing cupidata</div>
        </div>
        <div className={videosStyles.img}>
          <img alt="mock 18" src={mock350x450} className={`${videosStyles.img} mb-1`}/>
          <div className="text-medium text-bold-700 text-center">Adipisicing cupidata</div>
        </div>
      </div>
    </section>
  )
}

export default Videos