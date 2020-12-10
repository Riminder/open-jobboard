import  * as actionTypes from '../actions/types'
import { updateObject } from '../../utils/utils';

const queryObject = localStorage.getItem('queryObject') || {
    board_keys: [process.env.BOARD_KEY],
    agent_key: process.env.AGENT_KEY,
    tags_included: [[], []],
    name: "",
    limit: 10,
    page: 1,
    sort_by: 'searching',
    order_by: 'asc',
    location_distance: 30,
          location_geopoint: {},
    use_agent: 0,
    profile_key: '',
    source_key: process.env.SOURCE_KEY,
    text_keywords: [],
    totalPage : 0,
    status: true,
}

const boardFilters = JSON.parse(localStorage.getItem('boardFilters')) || {
    skills: {enabled: [], disabled: []},
    languages: {enabled: [], disabled: []},
    jobs: [],
    locations: [],
    categories: [],
    companies: [],
    orderBy: '',
    sortBy: '',
}

const initialState = {
    jobs: {},
    queryObject,
    boardFilters: boardFilters
}


const updateBoardFilters = (state, action) => {
    localStorage.setItem('boardFilters', JSON.stringify(boardFilters))
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

const jobsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_JOBS_REQUEST: return fetchJobsRequest( state, action );
        case actionTypes.FETCH_JOBS_SUCCESS: return fetchJobsSuccess( state, action );
        case actionTypes.FETCH_JOBS_FAIL: return fetchJobsFail( state, action );
        case actionTypes.UPDATE_BOARD_FILTERS: return updateBoardFilters( state, action );
        default: return state;
    }
};

export default jobsReducer;