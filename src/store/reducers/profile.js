import  * as actionTypes from '../actions/types'
import { updateObject } from '../../utils/utils';

let profile = {}
let profileParsing = {}
let file = {}
if(typeof window !== 'undefined') {
    profile = {payload: JSON.parse(localStorage.getItem('profile'))} || {}
    profileParsing = JSON.parse(localStorage.getItem('profile')) || {}
    file = JSON.parse(localStorage.getItem('file')) || {}
}


const initialState = {
    profile,
    profileParsing: {},
    file,
}


const addProfileRequest = (state, action) => {
    return updateObject( state, {
        profile: { post: true, r: true, payload: state.profile }
    });
}

const addProfileSuccess = (state, action) => {
    return updateObject( state, {
        profile: { post: true, s: true, payload: action.profile },
        file: JSON.parse(action.file)
    });
}

const addProfileFail = (state, action) => {
    return updateObject( state, {
        profile: { post: true, f: true }
    });
}


const putProfileRequest = (state, action) => {
    return updateObject( state, {
        profile: { put: true, r: true, payload: state.profile }
    });
}

const putProfileSuccess = (state, action) => {
    return updateObject( state, {
        profile: { put: true, s: true, payload: action.profile }
    });
}

const putProfileFail = (state, action) => {
    return updateObject( state, {
        profile: { put: true, f: true }
    });
}

const editProfileConsentRequest = (state, action) => {
    return updateObject( state, {
        profileParsing: { edit: true, r: true, payload: state.profile }
    });
}

const editProfileConsentSuccess = (state, action) => {
    return updateObject( state, {
        profileParsing: { edit: true, s: true, payload: action.profile }
    });
}

const editProfileConsentFail = (state, action) => {
    return updateObject( state, {
        profileParsing: { edit: true, f: true, payload: state.profile }
    });
}

const getProfileRequest = (state, action) => {
    return updateObject( state, {
        profileParsing: { r: true, payload: state.profile }
    });
}

const getProfileSuccess = (state, action) => {
    return updateObject( state, {
        profileParsing: { s: true, payload: action.profile }
    });
}

const getProfileFail = (state, action) => {
    return updateObject( state, {
        profileParsing: { f: true, payload: state.profile }
    });
}

const removeProfile = (state, action) => {
    return updateObject( state, {
        profileParsing: {},
        profile: {},
        file: {}
    })
}

const profileReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PROFILE_REQUEST: return addProfileRequest( state, action );
        case actionTypes.ADD_PROFILE_SUCCESS: return addProfileSuccess( state, action );
        case actionTypes.ADD_PROFILE_FAIL: return addProfileFail( state, action );
        
        case actionTypes.PUT_PROFILE_REQUEST: return putProfileRequest( state, action );
        case actionTypes.PUT_PROFILE_SUCCESS: return putProfileSuccess( state, action );
        case actionTypes.PUT_PROFILE_FAIL: return putProfileFail( state, action );
        
        case actionTypes.EDIT_PROFILE_CONSENT_REQUEST: return editProfileConsentRequest( state, action );
        case actionTypes.EDIT_PROFILE_CONSENT_SUCCESS: return editProfileConsentSuccess( state, action );
        case actionTypes.EDIT_PROFILE_CONSENT_FAIL: return editProfileConsentFail( state, action );

        case actionTypes.GET_PROFILE_REQUEST: return getProfileRequest( state, action );
        case actionTypes.GET_PROFILE_SUCCESS: return getProfileSuccess( state, action );
        case actionTypes.GET_PROFILE_FAIL: return getProfileFail( state, action );
        
        case actionTypes.REMOVE_PROFILE: return removeProfile( state, action );
        default: return state;
    }
};

export default profileReducer;