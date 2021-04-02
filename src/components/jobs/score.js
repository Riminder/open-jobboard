import React from 'react'
import styles from './score.module.scss'


const Score = props => {
    let scoreText = ''
    let scoreClass = styles.hidden
    let score = Math.round(props.score * 100, 0)
    if ( score  >= 90 ) {
        scoreText = 'Parfait match'
        scoreClass = styles.perfect
    } else if ( score < 90 && score >= 75 ) {
        scoreText = 'Excellent match'
        scoreClass = styles.excellent
    } else if (score < 75 && score >= 60) {
        scoreText = 'Bon match'
        scoreClass = styles.good
    } else if ( score < 60) {
        scoreText = 'non-recommandé'
        scoreClass = styles.bad
    } 
  return (
    <div className={styles.score}>
        <div  className={[scoreClass, styles.score__container].join(' ')}>
            <div className={styles.score__content}>
                <span className={styles.shape}></span>
                <span className={styles.text}>{scoreText}</span>
            </div>
        </div>
    </div>
  )
}

export default Score;