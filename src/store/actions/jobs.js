import * as actionTypes from './types'
import axios from '../../utils/axios'
import { buildQueryString, rangeDateToIsoDate } from '../../utils/utils'

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


export const fetchJobRequest = () => {
    return {
        type: actionTypes.FETCH_JOB_REQUEST,
    };
};

export const fetchJobSuccess = (job) => {
    return {
        type: actionTypes.FETCH_JOB_SUCCESS,
        job,
    };
};

export const fetchJobFail = () => {
    return {
        type: actionTypes.FETCH_JOB_FAIL,
    };
};

export const postDocumentParsingRequest = () => {
    return {
        type: actionTypes.POST_DOCUMENT_PARSING_REQUEST,
    };
};

export const postDocumentParsingSuccess = (documentParsing) => {
    return {
        type: actionTypes.POST_DOCUMENT_PARSING_SUCCESS,
        documentParsing,
    };
};

export const postDocumentParsingFail = () => {
    return {
        type: actionTypes.POST_DOCUMENT_PARSING_FAIL,
    };
};

export const postDocumentRevealingRequest = () => {
    return {
        type: actionTypes.POST_DOCUMENT_REVEALING_REQUEST,
    };
};

export const postDocumentRevealingSuccess = (documentRevealing) => {
    return {
        type: actionTypes.POST_DOCUMENT_REVEALING_SUCCESS,
        documentRevealing,
    };
};

export const postDocumentRevealingFail = () => {
    return {
        type: actionTypes.POST_DOCUMENT_REVEALING_FAIL,
    };
};

export const fetchJobs = (payload) => {
    return (dispatch, getState) => {
        dispatch(fetchJobsRequest());
        let location = {}
        const profileKey = getState('')?.profile?.profile?.payload?.key || null;
        const locationGeo = payload.locations.filter(location => location.checked === true);
        if (locationGeo.length > 0) {
            location = {
                lat: payload.locations.filter(location => location.checked === true)[0].lat,
                lng: payload.locations.filter(location => location.checked === true)[0].lng
            }
        }
        const queryObject = {
            board_keys: [process.env.BOARD_KEY],
            agent_key: process.env.AGENT_KEY,
            tags_included: [payload.types || [], payload.categories || []],
            name: payload.jobs.filter(job => job.checked === true)[0]?.text || '',
            limit: 10,
            page: payload.page || 1,
            sort_by: payload.sortBy || 'searching',
            order_by: payload.orderBy || 'asc',
            location_distance: payload.location_distance || 70,
            location_geopoint: location,
            use_agent: payload.useAgent ? 1 : 0,
            profile_key: profileKey || null,
            source_key: process.env.SOURCE_KEY,
            text_keywords: payload.skills.enabled.map(skill => skill),
            totalPage : 0,
            status: true,
            // date_range_min: rangeDateToIsoDate(payload.date_range_min)
        }
        dispatch(updateBoardFilters(payload));
        const url = buildQueryString(`jobs/${payload.useAgent ? 'scoring' : 'searching'}`, queryObject)
        axios.get(url)
            .then( res => {
                const jobs = res.data.data.jobs
                if(res.data.data && res.data.data.predictions && res.data.data.predictions.length) {
					const scores = res.data.data.predictions;
					jobs.forEach((job, index) => {
						job.score = scores[index][1];
					});
                }
                const fetchedJobs = {jobs: jobs, meta: res.data.meta}
                dispatch(fetchJobsSuccess(fetchedJobs));
                localStorage.setItem('jobs', JSON.stringify({payload: fetchedJobs}))

            } )
            .catch( err => {
                dispatch(fetchJobsFail(err));
            } );
    };
};

export  const postDocumentParsing = (payload) => {
    return dispatch => {
        dispatch(postDocumentParsingRequest());
        const description = payload.summary || ''

        const data = { text: description}
        const url = `document/parsing`
        axios.post(url, data)
            .then( res => {
                dispatch(postDocumentParsingSuccess(res.data.data));
            } )
            .catch( err => {
                dispatch(postDocumentParsingFail(err));
            } );
    };
};

export  const postDocumentRevealing = (payload) => {
    return dispatch => {
        dispatch(postDocumentRevealingRequest());
        const description = payload.summary || ''
        const data = { text: description }
        const url = `document/revealing`
        axios.post(url, data)
            .then( res => {
                const data = res.data.data.splice(0, 3)                
                dispatch(postDocumentRevealingSuccess(data));
            } )
            .catch( err => {
                dispatch(postDocumentRevealingFail(err));
            } );
    };
};

export const fetchJob = (payload) => {
    return dispatch => {
        dispatch(fetchJobRequest());
        const queryObject = {
            board_key: process.env.BOARD_KEY,
            key: payload.jobKey
        }
        const url = buildQueryString(`job/indexing`, queryObject)
        axios.get(url)
            .then( res => {
                dispatch(fetchJobSuccess(res.data.data));
                dispatch(postDocumentParsing(res.data.data))
                dispatch(postDocumentRevealing(res.data.data))
            } )
            .catch( err => {
                dispatch(fetchJobFail(err));
            } );
    };
};