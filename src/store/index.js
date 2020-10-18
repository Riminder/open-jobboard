import { combineReducers } from 'redux'
import jobsReducer from './reducers/jobs'
import profileReducer from './reducers/profile'

export default combineReducers({ 
    jobs: jobsReducer,
    profile: profileReducer 
})