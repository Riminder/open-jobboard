import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase, faFileAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './jobList.module.scss'

const JobList = (props) => {
  return (
    <div className={styles.jobs}>
      {
        props.jobs.map(job => {
          const name = job.name
          const location = job.location.text
          const company = job.tags.filter(tag => tag.name === 'company')[0].value
          const category = job.tags.filter(tag => tag.name === 'category')[0].value
          const type = job.tags.filter(tag => tag.name === 'type')[0].value
          return (
            <div className="card" key={job.key}>
              <div className={styles.job}>
                <div className={styles.job__info}>
                  <div className={styles.job__info_company}>
                    {company}
                  </div>
                  <div className={styles.job__info_title}>
                    {name}
                  </div>
                  <div className={styles.job__info_details}>
                    <span className={styles.details__item}>
                      <FontAwesomeIcon className="icon-left" icon={faMapMarkerAlt} />
                      {location}
                    </span>
                    <span className={styles.details__item}>
                      <FontAwesomeIcon className="icon-left" icon={faBriefcase} />
                      {category}
                    </span>
                    <span className={styles.details__item}>
                      <FontAwesomeIcon className="icon-left" icon={faFileAlt} />
                      {type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default JobList;