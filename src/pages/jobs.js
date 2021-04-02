import React, { useState, useEffect } from 'react'
import { useMedia } from 'react-media';
import { connect } from "react-redux"
import { fetchJobs } from "../store/actions/jobs"
import { addProfile, removeProfile } from "../store/actions/profile"

import ErrorMessage from '../components/common/errorMessage'

import Layout from '../components/layout'
import '../styles/main.scss'
import Dropzone from '../components/dropzone'
import SearchBox from '../components/jobs/searchBox'
import Filters from '../components/jobs/filters'
import JobList from '../components/jobs/jobList'
import SEO from "../components/seo"
import Pagination from '../components/jobs/pagination'
import togglerIcon from '../assets/images/toggler.svg'


const Jobs = props => {
	const [isSearchBoxShown, setIsSearchBoxShown] = useState(false)
	const [checked, setChecked] = useState(props.boardFilters?.useAgent)
	
	useEffect(() => {
		props.fetchJobs(props.boardFilters)
	}, [])

	useEffect(() => {
		setChecked(props.boardFilters?.useAgent)
	}, [props.boardFilters])
	
	

	// useEffect(() => {
	// 	props.fetchJobs(props.boardFilters)
	// }, [props.profile])

	const GLOBAL_MEDIA_QUERIES = {
	small: "(max-width: 599px)",
	medium: "(min-width: 600px) and (max-width: 1199px)",
	large: "(min-width: 1200px)"
	}
	const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES })
	const profileKey = props.profileParsing.key
	const isDesktopOrLaptop = matches.large

	const ChangeCheckboxHandler = value => {
		let boardFilters = {...props.boardFilters}
		if(value) {
		  boardFilters = {...boardFilters, sortBy: 'scoring', orderBy: 'desc'}
		} else {
		  boardFilters = {...boardFilters, sortBy: 'searching', orderBy: 'desc'}
		}
		setChecked(value)
		props.fetchJobs({...boardFilters, useAgent: value })
	}

	return (
		<Layout profileKey={profileKey} profileParsing={props.profileParsing} jambotron>
			<SEO title="HrFlow.ai demo job board" />
			<div className="container">
				<div className="col-33 col-offers">
					<div className="card">
						<Dropzone
							removeProfile={props.removeProfile}
							addProfile={props.addProfile}
							profile={props.profile}
							redirectTojobs={true}
							file={props.file}
						/>
					</div>
					{(isDesktopOrLaptop || isSearchBoxShown) && (
						<div className="card search-box">
							{props.file && props.file.fileName && (
								<div className="recommandation-wrapper">
									Offres recommandées
									<div className="toggle-switch">
									<input
										type="checkbox"
										className="toggle-switch-checkbox"
										name="toggleSwitch"
										id="toggleSwitch"
										checked={checked}
										onChange={e => ChangeCheckboxHandler(e.target.checked)}
									/>
									<label className="toggle-switch-label" htmlFor="toggleSwitch">
										<span className="toggle-switch-inner" />
										<span className="toggle-switch-switch" />
									</label>
									</div>
								</div>
							)}
							<SearchBox
								boardFilters={props.boardFilters}
								fetchJobs={props.fetchJobs}
							/>
							<button onClick={() => setIsSearchBoxShown(false)} className="button" style={{width: '100%', padding: '1rem'}}>
								FERMER
							</button>
						</div>
					)}
				</div>
				<div className="col-67">
					<div className="filters">
            			<Filters
							boardFilters={props.boardFilters}
							fetchJobs={props.fetchJobs}
							scoringChecked={checked}
						/>
          			</div>
					<div className="jobs">
						{props.jobs?.r && (
							<div className="jobs"><div className="loader"></div></div>
						)}
						{props.jobs?.s && (
							<>
								{props.jobs.payload.meta.total > 0 && props.file && props.profile.payload && props.profile.payload.info && props.profile.payload.info.first_name ? (
									<h3 className="mb-1">Bonjour {props.profile.payload.info.first_name}, Nous avons trouvé {props.jobs.payload.meta.total} offres d'emploi pour votre profil</h3>
								)
								:
								(
									<h3 className="mb-1">{props.jobs.payload.meta.total} offres trouvées </h3>
								)
								}
								{ props.jobs.payload.meta.total > 0 ? 
									(
										<JobList
											jobs={props.jobs.payload.jobs}
											profile={props.profile}
										/>
									) : 
									(
										<ErrorMessage message="Votre recherche n'a pas été fructueuse." submessage="Vous pouvez réessayer en ajustant vos critères." />
									)
								}
							</>
						)}
						{props.jobs?.f && (
							<ErrorMessage message="Votre recherche n'a pas été fructueuse." submessage="Vous pouvez réessayer en ajustant vos critères." />
						)}
					</div>
					{props.jobs?.s && (
						<Pagination meta={props.jobs?.payload?.meta} boardFilters={props.boardFilters} fetchJobs={props.fetchJobs} />
					)}
				</div>
				{!isDesktopOrLaptop && (
					<div className="search-box-toggler" onClick={() => setIsSearchBoxShown(true) }>
						<img src={togglerIcon} />
					</div>
				)}
			</div>
		</Layout> 
	)
}

const mapStateToProps = state => ({
	jobs: state.jobs.jobs,
	queryObject: state.jobs.queryObject,
	boardFilters: state.jobs.boardFilters,
	profile: state.profile.profile,
	profileParsing: state.profile.profileParsing,
	file: state.profile.file,
  })

export default connect(mapStateToProps, { fetchJobs, addProfile, removeProfile })(Jobs)