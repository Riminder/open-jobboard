import  * as actionTypes from '../actions/types'
import { updateObject } from '../../utils/utils';


let boardFilters = {}
if (typeof window !== 'undefined') {
    boardFilters = JSON.parse(localStorage.getItem('boardFilters')) || {
        skills: {enabled: [], disabled: []},
        languages: {enabled: [], disabled: []},
        jobs: [],
        locations: [],
        categories: [],
        companies: [],
        orderBy: '',
        sortBy: '',
    }
}



const initialState = {
    jobs: {},
    boardFilters
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