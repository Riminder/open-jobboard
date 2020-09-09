import React from 'react'
import dropzoneStyles from './dropzone.module.scss'
import logo from '../assets/images/file_upload.svg'
const Dropzone = (props) => {
  console.log('offers', props.offers)

  return (
    <div className={dropzoneStyles.dropzone}>
      <div className={dropzoneStyles.dropzone__content}>
        <div className={dropzoneStyles.dropzone__inner}>
          <img src={logo} className="mb-1" alt="file logo" />
          <div className="text-medium text-bold-700 text-center">
            Glisse/Dépose ton CV
          </div>
          <div className={dropzoneStyles.subtitle}>
            pour
          </div>
          <div className="button" onClick={props.fetchOffers}>
            Matcher Nos offres        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropzone;