import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import swal from 'sweetalert'

import dropzoneStyles from './dropzone.module.scss'
import logo from '../assets/images/file_upload.svg'
import Modal from '../components/common/modal'

const Dropzone = (props) => {
  const [profileFile, setProfileFile] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if(props.profile?.s) {
      setModalIsOpen(false)
      swal({
        title: "Title success",
        text: "Message success!",
        icon: "success",
      });
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
    props.addProfile(profileFile, consentController)
  }
  return (
    <>
      <div className={dropzoneStyles.dropzone}>
        <div className={dropzoneStyles.dropzone__content}>
          <div className={dropzoneStyles.dropzone__inner} {...getRootProps()}>
          <input {...getInputProps()} />
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
      <Modal 
        toggleModal={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        postProfile={postProfile}
        profile={props.profile}
      />
    </>
  )
}

export default Dropzone;