import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase, faFileAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './jobList.module.scss'

const JobList = (props) => {
  return (
    <div className={styles.jobs}>
      <div className="card">
        <div className={styles.job}>
          <div className={styles.job__info}>
            <div className={styles.job__info_company}>
              Ineo Industrie et Tertiaire Est
            </div>
            <div className={styles.job__info_title}>
              Assistant Responsable d'affaires (H/F)
            </div>
            <div className={styles.job__info_details}>
              <span className={styles.details__item}>
                <FontAwesomeIcon className="icon-left" icon={faMapMarkerAlt} />
                Paris
              </span>
              <span className={styles.details__item}>
                <FontAwesomeIcon className="icon-left" icon={faBriefcase} />
                Business development
              </span>
              <span className={styles.details__item}>
                <FontAwesomeIcon className="icon-left" icon={faFileAlt} />
                Apprenticeship
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className={styles.job}>
          <div className={styles.job__info}>
            <div className={styles.job__info_company}>
              Ineo Industrie et Tertiaire Est
            </div>
            <div className={styles.job__info_title}>
              Assistant Responsable d'affaires (H/F)
            </div>
            <div className={styles.job__info_details}>
              <span className={styles.details__item}>
                <FontAwesomeIcon className="icon-left" icon={faMapMarkerAlt} />
                Paris
              </span>
              <span className={styles.details__item}>
                <FontAwesomeIcon className="icon-left" icon={faBriefcase} />
                Business development
              </span>
              <span className={styles.details__item}>
                <FontAwesomeIcon className="icon-left" icon={faFileAlt} />
                Apprenticeship
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobList;