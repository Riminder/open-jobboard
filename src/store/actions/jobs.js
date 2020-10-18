import * as actionTypes from './types'
import axios from '../../utils/axios'
import { buildQueryString } from '../../utils/utils'


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
        const url = buildQueryString('jobs/searching', payload)
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