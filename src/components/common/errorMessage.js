import React from 'react';
import errorImage from '../../assets/images/error-message.svg'
import styles from './errorMessage.module.scss'


const ErrorMessage = (props) => {
    return (
        <div className={styles.error__container}>
            <h4 style={{ textAlign: 'center', marginBottom: '0'}}>{props.message}<br/>{props.submessage}</h4>
            <img src={errorImage} alt="error" />
        </div>
    )
}

export default ErrorMessage;