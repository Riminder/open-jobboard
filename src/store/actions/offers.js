import * as actionTypes from './types';
import axios from '../../utils/axios';

export const fetchOffersRequest = () => {
    return {
        type: actionTypes.FETCH_OFFERS_REQUEST,
    };
};

export const fetchOffersSuccess = (offers) => {
    return {
        type: actionTypes.FETCH_OFFERS_SUCCESS,
        offers,
    };
};

export const fetchOffersFail = () => {
    return {
        type: actionTypes.FETCH_OFFERS_FAIL,
    };
};

export const fetchOffers = () => {
    return dispatch => {
        dispatch(fetchOffersRequest());
        axios.get( 'jobs/searching')
            .then( res => {
                const fetchedOffers = [];
                for ( let key in res.data ) {
                    fetchedOffers.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOffersSuccess(fetchedOffers));
            } )
            .catch( err => {
                dispatch(fetchOffersFail(err));
            } );
    };
};