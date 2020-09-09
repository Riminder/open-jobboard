import { combineReducers } from 'redux';
import offersReducer from './reducers/offers';

export default combineReducers({ 
    data: offersReducer 
})