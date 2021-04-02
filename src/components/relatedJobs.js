import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry, faFileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const RelatedJobs = props => (
    props.jobs.map(job => {
      const name = job.name
      const location = job?.location?.text || ''
      const category = job?.tags?.filter(tag => tag.name === 'line_of_business')?.[0]?.value || ''
      const contract = job?.tags?.filter(tag => tag.name === 'contract')?.[0]?.value || ''
      const score = job.score || null

      return (
        <Link to={`/job/?job_key=${job.key}&board_key=${job.board.key}${score ? '&s='+score : ''}`} key={`${job.key}`} className="card mini">
          <h4>{name}</h4>
          {contract && (
            <div className="job-tag">
                <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faFileAlt} /></div>{contract}
            </div>
          )}
          {category && (
            <div className="job-tag">
                <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faIndustry} /></div>{category}
            </div>
          )}
          {location && (
            <div className="job-tag">
                <div className="icon-fixed-width"><FontAwesomeIcon className="icon-left" icon={faMapMarkerAlt} /></div>{location}
            </div>
          )}
        </Link>
      )
    }
  )
)

export default RelatedJobs