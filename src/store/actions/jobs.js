import * as actionTypes from './types'
import axios from '../../utils/axios'
import { BOARD_KEY, AGENT_KEY, SOURCE_KEY, buildQueryString } from '../../utils/utils';


export const  updateBoardFilters = (boardFilters) => {
    return {
        type: actionTypes.UPDATE_BOARD_FILTERS,
        boardFilters,
    };
}

export const fetchJobsRequest = () => {
    return {
        type: actionTypes.FETCH_JOBS_REQUEST,
    };
};

export const fetchJobsSuccess = (jobs) => {
    return {
        type: actionTypes.FETCH_JOBS_SUCCESS,
        jobs,
    };
};

export const fetchJobsFail = () => {
    return {
        type: actionTypes.FETCH_JOBS_FAIL,
    };
};

export const fetchJobs = (payload) => {
    return dispatch => {
        dispatch(fetchJobsRequest());
        const queryObject = {
            board_keys: [BOARD_KEY],
            agent_key: AGENT_KEY,
            tags_included: [[], []],
            name: payload.jobs.filter(job => job.checked === true)[0]?.text || '',
            limit: 10,
            page: 1,
            sort_by: 'searching',
            order_by: 'asc',
            location_distance: 30,
            location_geopoint: "",
            use_agent: 0,
            profile_key: '',
            source_key: SOURCE_KEY,
            text_keywords: payload.skills.enabled.map(skill => skill).concat(payload.languages.enabled.map(language => language)),
            totalPage : 0,
            status: true,
        }
        dispatch(updateBoardFilters(payload));
        const url = buildQueryString('jobs/searching', queryObject)
        axios.get(url)
            .then( res => {
                const fetchedJobs = {jobs: res.data.data.jobs, meta: res.data.meta}
                dispatch(fetchJobsSuccess(fetchedJobs));
            } )
            .catch( err => {
                dispatch(fetchJobsFail(err));
            } );
    };
};