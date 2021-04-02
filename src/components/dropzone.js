import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import swal from 'sweetalert'

import dropzoneStyles from './dropzone.module.scss'
import logo from '../assets/images/file_upload.svg'
import Modal from '../components/common/modal'
import deleteImage from '../assets/images/delete.svg'
import fileImg from '../assets/images/file.svg'

const Dropzone = (props) => {
  const [profileFile, setProfileFile] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if(props.profile?.s && props.profile?.post) {
      setModalIsOpen(false)
      // swal({
      //   title: "Title success",
      //   text: "Message success!",
      //   icon: "success",
      // });
    }
    if(props.profile?.f && props.profile?.post) {
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

      // reader.onabort = () => console.log('file reading was aborted')
      // reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        
      }
      reader.readAsArrayBuffer(file)
      // console.log('file.name', file.size)
      setProfileFile(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  const postProfile = (consentController) => {
    props.addProfile({file: profileFile, consent: consentController, redirect: props.redirectTojobs})
  }
  return (
    <>
      <div className={dropzoneStyles.dropzone}>
        <div className={dropzoneStyles.dropzone__content}>
          <div className={dropzoneStyles.dropzone__inner} style={{ padding: props.details ? '1.5rem 0' : '1rem 0' }} {...getRootProps()}>
            <input {...getInputProps()} />   
              {!props.details && (
                <img src={logo} className="mb-1" alt="file logo" />
              )}
              <div className="text-medium text-bold-700 text-center" style={{ fontSize: '0.8rem' }}>
                {props.details ? (<span style={{fontSize: '0.825rem'}}>Déposez votre CV</span>) : (<span style={{fontSize: '0.825rem'}}>Glissez/Déposez votre CV</span>)}
              </div>
              {!props.details && (
                <div className={dropzoneStyles.subtitle}>
                  pour
                </div>
              )}
              {!props.details && (
                <div className="button">
                  Matcher Nos offres        
                </div>
              )}

            </div>
            {props.file && props.file.fileName && (
              <div className={dropzoneStyles.blanket}>
                 <span className={dropzoneStyles.icon}>
                   <img src={fileImg} />
                 </span>
                 <div className={dropzoneStyles.file__info}>
                   <span className={dropzoneStyles.file__name}>{props.file.fileName}</span>
                   <span className={dropzoneStyles.file__size}>{(props.file.fileSize/1024).toFixed(2)} Kb</span>
               </div>
                 <button onClick={props.removeProfile} className={dropzoneStyles.circular}>
                   <img src={deleteImage} />
                 </button>
              </div>
            )}
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