import React from 'react'
import { Link } from 'gatsby'
import { useMedia } from 'react-media'
import { getSearchParams } from "gatsby-query-params";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux"
import { fetchJob } from "../store/actions/jobs"
import { putProfile, addProfile, removeProfile} from "../store/actions/profile"
import ErrorMessage from "../components/common/errorMessage"


import Layout from '../components/layout'
import JobDetails from '../components/jobDetails'
import '../styles/main.scss'
import SEO from "../components/seo"


const Job = props => {
	// useEffect(() => {
	// 	props.fetchJobs(props.boardFilters)
	// }, [])
	const profileKey = props.profileParsing.key;
    const queryParams = getSearchParams()
	const GLOBAL_MEDIA_QUERIES = {
	small: "(max-width: 599px)",
	medium: "(min-width: 600px) and (max-width: 1199px)",
	large: "(min-width: 1200px)"
	}
	const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES })

	const isDesktopOrLaptop = matches.large
	return (
		<Layout
			profileKey={profileKey}
			profileParsing={props.profileParsing}
			job={props.job}
			jambotron
			details
		>
			<SEO title="HrFlow.ai demo job board" />
			<div className="container">
				<div className="filters back-to-offers">
					<Link to="/" className="text-bold-600">
						Accueil
					</Link> /&nbsp;
					<Link to="/jobs" className="text-bold-600">
						Offres
					</Link> /
					<span className="text-bold-600" style={{ textTransform: "capitalize" }}>
						&nbsp;{props.job && props.job.s && props.job.payload.name.toLowerCase()}
					</span>
				</div>
				{queryParams?.job_key ? (
					<JobDetails
						jobKey={queryParams.job_key}
						fetchJob={props.fetchJob}
						job={props.job}
						profile={props.profile}
						putProfile={props.putProfile}
						addProfile={props.addProfile}
						removeProfile={props.removeProfile}
						file={props.file}
						documentParsing={props.documentParsing}
						documentRevealing={props.documentRevealing}
						score={queryParams.s || null}
						jobs={props.jobs}
					/>
				):
				(
					<div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
						<ErrorMessage message="Aucun résultat trouvé" />
					</div>
				)}
			</div>
		</Layout> 
	)
}

const mapStateToProps = state => ({
	job: state.jobs.job,
	jobs: state.jobs.jobs,
	profile: state.profile.profile,
	file: state.profile.file,
	profileParsing: state.profile.profileParsing,
	documentParsing: state.jobs.documentParsing,
    documentRevealing: state.jobs.documentRevealing,
  })

export default connect(mapStateToProps, { fetchJob, putProfile, addProfile, removeProfile })(Job)