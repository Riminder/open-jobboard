import { combineReducers } from 'redux'
import offersReducer from './reducers/offers'
import profileReducer from './reducers/profile'

export default combineReducers({ 
    offers: offersReducer,
    profile: profileReducer 
})