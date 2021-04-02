import React from 'react'
import { Link } from 'gatsby'
import styles from './jobList.module.scss'
import moment from 'moment'
import 'moment/locale/fr' 
import Score from './score'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry, faMapMarkerAlt, faFileAlt, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const JobList = (props) => {
  return (
    <div className="jobs">
      {
        props.jobs.map(job => {
          const name = job.name
          const location = job.location.text
          const company = job.tags.filter(tag => tag.name === 'company')?.[0]?.value
          const category = job.tags.filter(tag => tag.name === 'category')?.[0]?.value
          const type = job.tags.filter(tag => tag.name === 'type')?.[0]?.value
          const description = job.summary
          const profileJobTag = { name: 'application_board_job_key', value: `${process.env.SOURCE_KEY}-${job.key}` }
          const isInterested  = props.profile?.payload?.tags?.filter(tag => JSON.stringify(tag) === JSON.stringify(profileJobTag)).length > 0
          const score = job.score || null
          return (
            <Link to={`/job/?job_key=${job.key}&board_key=${job.board.key}${score ? '&s='+score : ''}`} className={[styles.card, "card"].join(' ')} key={job.key}>
              <div className={styles.job}>
              { (score || isInterested) && (
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                     {score && (
                         <Score
                           score={score}
                         />
                       )}
                       {isInterested && (
                           <div style={{ marginLeft: '1rem', color: '#0af' }}> <FontAwesomeIcon className="icon-left" icon={faStarHalfAlt} />Intéressé(e)</div>
                         )}
                     </div>
                  )
                }
                <div className={styles.job__info}>
                  <div className={styles.job__info_company}>
                    {company}
                  </div>
                  <div className={styles.job__info_title}>
                    {name}
                  </div>
                  <div className={styles.job__info_description}>
                    {description}
                  </div>
                  <div className={styles.job__info_details}>
                    {location && (
                      <span className={styles.details__item}>
                        <FontAwesomeIcon className="icon-left" icon={faMapMarkerAlt} /> {location}
                      </span>
                    )}
                    <span className={styles.details__item}>
                    <FontAwesomeIcon className="icon-left" icon={faIndustry} />
                      {category}
                    </span>
                    <span className={styles.details__item}>
                      <FontAwesomeIcon className="icon-left" icon={faFileAlt} />
                      {type}
                    </span>
                  </div>
                  <div className={styles.more}>
                    <div className={styles.more__content}>
                      Voir l'offre
                    </div>
                  </div>
                  <div className={styles.date}>
                    {moment(job?.created_at).locale('fr').format('DD MMMM YYYY')}
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default JobList;