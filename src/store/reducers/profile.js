import  * as actionTypes from '../actions/types'
import { updateObject } from '../../utils/utils';


const initialState = {
    profile: {},
}


const addProfileRequest = (state, action) => {
    return updateObject( state, {
        profile: { r: true, payload: state.profile }
    });
}

const addProfileSuccess = (state, action) => {
    return updateObject( state, {
        profile: { s: true, payload: action.profile }
    });
}

const addProfileFail = (state, action) => {
    return updateObject( state, {
        profile: { f: true }
    });

}

const profileReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PROFILE_REQUEST: return addProfileRequest( state, action );
        case actionTypes.ADD_PROFILE_SUCCESS: return addProfileSuccess( state, action );
        case actionTypes.ADD_PROFILE_FAIL: return addProfileFail( state, action );
        default: return state;
    }
};

export default profileReducer;