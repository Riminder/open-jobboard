import  * as actionTypes from '../actions/types'

const initialState = {
    offers: [],
    skills: [],
}

const addSkill = (state, action) => {
    const skills = state.push(action.skill);
    return {...state, skills }
}

const offersReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_SKILL: return addSkill( state, action );
        default: return state;
    }
};

export default offersReducer;