import * as actionTypes from './types';
import axios from '../../utils/axios';

export const addProfileRequest = () => {
    return {
        type: actionTypes.ADD_PROFILE_REQUEST,
    };
};

export const addProfileSuccess = (offers) => {
    return {
        type: actionTypes.ADD_PROFILE_SUCCESS,
        offers,
    };
};

export const addProfileFail = () => {
    return {
        type: actionTypes.ADD_PROFILE_FAIL,
    };
};

export const addProfile = (payload) => {
    return dispatch => {
        dispatch(addProfileRequest());
        console.log('payload', payload);
        const fd = new FormData();
        fd.append('file', payload);
        fd.append('source_key', "9e1e9ce19e0b6549538b07620259b9ca4d391340");
        fd.append('sync_parsing', 1);
        axios.post( 'profile/parsing/file', fd)
            .then( res => {
                const fetchedOffers = [];
                for ( let key in res.data ) {
                    fetchedOffers.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(addProfileSuccess(fetchedOffers));
            } )
            .catch( err => {
                dispatch(addProfileFail(err));
            } );
    };
};