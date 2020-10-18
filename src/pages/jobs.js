import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchJobs } from "../store/actions/jobs"


import Layout from '../components/layout'
import '../styles/main.scss'
import Dropzone from '../components/dropzone'
import SearchBox from '../components/jobs/searchBox'
import Filters from '../components/jobs/filters'
import JobList from '../components/jobs/jobList'

const Jobs = props => {
	useEffect(() => {
		props.fetchJobs(props.queryObject);
	}, [])
	console.log('boardFilters', props.boardFilters)
	return (
		<Layout jambotron>
			<div className="container">
				<div className="col-33">
					<div className="card">
            			<Dropzone fetchJobs={props.fetchJobs} jobs={props.jobs} />
					</div>
					<div className="card">
						<SearchBox
							boardFilters={props.boardFilters}
						/>
					</div>
				</div>
				<div className="col-67">
					<div className="filters">
            			<Filters />
          			</div>
					<div className="jobs">
						{props.jobs?.r && (
							<div>Loading...</div>
						)}
						{props.jobs?.s && (
							<JobList jobs={props.jobs.payload.jobs} />
						)}
					</div>
				</div>
			</div>
		</Layout> 
	)
}

const mapStateToProps = state => ({
	jobs: state.jobs.jobs,
	queryObject: state.jobs.queryObject,
	boardFilters: state.jobs.boardFilters,
  })

export default connect(mapStateToProps, { fetchJobs })(Jobs)