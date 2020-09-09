import React from 'react'
import { connect } from "react-redux"
import { fetchOffers } from "../store/actions/offers"


import Layout from '../components/layout'
import '../styles/main.scss'
import Dropzone from '../components/dropzone'
import SearchBox from '../components/searchBox'
import Filters from '../components/filters'
import JobList from '../components/jobList'

const Offers = props => {
	return (
		<Layout jambotron>
			<div className="container">
				<div className="col-33">
					<div className="card">
            <Dropzone fetchOffers={props.fetchOffers} offers={props.offers} />
					</div>
					<div className="card">
            <SearchBox />
					</div>
				</div>
				<div className="col-67">
					<div className="filters">
            <Filters />
          </div>
          <div className="offers">
            <JobList />
          </div>
				</div>
			</div>
		</Layout> 
	)
}

const mapStateToProps = state => ({
	offers: state.data.offers,
  })

export default connect(mapStateToProps, { fetchOffers })(Offers)