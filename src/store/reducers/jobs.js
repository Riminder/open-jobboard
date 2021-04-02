import  * as actionTypes from '../actions/types'
import { updateObject } from '../../utils/utils';


let queryObject = {}
let boardFilters = {}
let jobs = {}
if (typeof window !== 'undefined') {
    queryObject = localStorage.getItem('queryObject') || {
        board_keys: [process.env.BOARD_KEY],
        agent_key: process.env.AGENT_KEY,
        tags_included: [[], []],
        name: "",
        limit: 10,
        page: 1,
        sort_by: 'searching',
        order_by: 'asc',
        location_distance: 70,
        location_geopoint: {},
        use_agent: 0,
        profile_key: '',
        source_key: process.env.SOURCE_KEY,
        text_keywords: [],
        totalPage : 0,
        status: false,
    }

    boardFilters = JSON.parse(localStorage.getItem('boardFilters')) || {
        skills: {enabled: [], disabled: []},
        languages: {enabled: [], disabled: []},
        jobs: [],
        locations: [],
        categories: [],
        types: [],
        orderBy: 'desc',
        sortBy: 'searching',
        useAgent: false,
        page: 0,
        loction_distance: 70,
        date_range_min: '1w'
    }

    jobs = JSON.parse(localStorage.getItem('jobs')) || []
}



const initialState = {
    job: {},
    jobs: jobs,
    queryObject,
    boardFilters: boardFilters,
    documentParsing: {},
    documentRevealing: {}
}


const updateBoardFilters = (state, action) => {
    localStorage.setItem('boardFilters', JSON.stringify(action.boardFilters))
    return updateObject(state, { 
        boardFilters: action.boardFilters,
    })
}

const fetchJobsRequest = (state, action) => {
    return updateObject( state, {
        jobs: { r: true, payload: state.jobs }
    });
}

const fetchJobsSuccess = (state, action) => {
    return updateObject( state, {
        jobs: { s: true, payload: action.jobs }
    });
}

const fetchJobsFail = (state, action) => {
    return updateObject( state, {
        jobs: { f: true }
    });
}


const fetchJobRequest = (state, action) => {
    return updateObject( state, {
        job: { r: true, payload: {} }
    });
}

const fetchJobSuccess = (state, action) => {
    return updateObject( state, {
        job: { s: true, payload: action.job }
    });
}

const fetchJobFail = (state, action) => {
    return updateObject( state, {
        job: { f: true }
    });
}

const postDocumentParsingRequest = (state, action) => {
    return updateObject( state, {
        documentParsing: { r: true, payload: state.documentParsing }
    });
}

const postDocumentParsingSuccess = (state, action) => {
    return updateObject( state, {
        documentParsing: { s: true, payload: action.documentParsing }
    });
}

const postDocumentParsingFail = (state, action) => {
    return updateObject( state, {
        documentParsing: { f: true }
    });
}

const postDocumentRevealingRequest = (state, action) => {
    return updateObject( state, {
        documentRevealing: { r: true, payload: state.documentRevealing }
    });
}

const postDocumentRevealingSuccess = (state, action) => {
    return updateObject( state, {
        documentRevealing: { s: true, payload: action.documentRevealing }
    });
}

const postDocumentRevealingFail = (state, action) => {
    return updateObject( state, {
        documentRevealing: { f: true }
    });
}

const jobsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_JOBS_REQUEST: return fetchJobsRequest( state, action );
        case actionTypes.FETCH_JOBS_SUCCESS: return fetchJobsSuccess( state, action );
        case actionTypes.FETCH_JOBS_FAIL: return fetchJobsFail( state, action );
        case actionTypes.FETCH_JOB_REQUEST: return fetchJobRequest( state, action );
        case actionTypes.FETCH_JOB_SUCCESS: return fetchJobSuccess( state, action );
        case actionTypes.POST_DOCUMENT_PARSING_REQUEST: return postDocumentParsingRequest( state, action );
        case actionTypes.POST_DOCUMENT_PARSING_SUCCESS: return postDocumentParsingSuccess( state, action );
        case actionTypes.POST_DOCUMENT_PARSING_FAIL: return postDocumentParsingFail( state, action );
        case actionTypes.POST_DOCUMENT_REVEALING_REQUEST: return postDocumentRevealingRequest( state, action );
        case actionTypes.POST_DOCUMENT_REVEALING_SUCCESS: return postDocumentRevealingSuccess( state, action );
        case actionTypes.POST_DOCUMENT_REVEALING_FAIL: return postDocumentRevealingFail( state, action );
        case actionTypes.FETCH_JOB_FAIL: return fetchJobFail( state, action );
        case actionTypes.UPDATE_BOARD_FILTERS: return updateBoardFilters( state, action );
        default: return state;
    }
};

export default jobsReducer;