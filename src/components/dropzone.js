import React from 'react'
import dropzoneStyles from './dropzone.module.scss'
import logo from '../assets/images/file_upload.svg'
const Dropzone = (props) => {
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
          <div className="button">
            Matcher Nos offres        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropzone;