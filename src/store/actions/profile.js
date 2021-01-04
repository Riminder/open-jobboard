import { navigate } from 'gatsby';  
import * as actionTypes from './types';
import { updateBoardFilters } from './jobs'
import axios from '../../utils/axios';
import { removeOccurrences } from '../../utils/utils'

export const addProfileRequest = () => {
    return {
        type: actionTypes.ADD_PROFILE_REQUEST,
    };
};

export const addProfileSuccess = (profile) => {
    return {
        type: actionTypes.ADD_PROFILE_SUCCESS,
        profile,
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
        const fd = new FormData();
        fd.append('file', payload);
        fd.append('source_key', process.env.SOURCE_KEY);
        fd.append('sync_parsing', 1);
        axios.post( 'profile/parsing/file', fd)
            .then( res => {
                dispatch(addProfileSuccess(res));
                const profile = res.data.data.profile;
                const parsing = res.data.data.parsing;
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('parsing', JSON.stringify(parsing));
                let experiences = [];
                parsing.experiences.forEach(experience => {
                    experience.title && experiences.push({ text: experience.title, checked: false });
                });
                experiences = removeOccurrences(experiences);
                experiences[0].checked = true;

                let locations = [];
                if(parsing.location.text) {
                    locations.push({
                        text: parsing.location.text,
                        lat: parsing.location.lat,
                        lng: parsing.location.lng
                    })
                }
                parsing.experiences.forEach(experience => {
                    experience.location.text && locations.push({
                        text: experience.location.text,
                        lat: experience.location.lat,
                        lng: experience.location.lng,
                        checked: false
                    })
                });
                locations = removeOccurrences(locations);
                locations[0].checked = true;

                const boardFilters = {
                    skills: {enabled: parsing.skills.map(item => item.name), disabled: [] },
                    languages: {enabled: parsing.languages.map(item => item.name), disabled: [] },
                    jobs: experiences,
                    locations,
                    categories: [],
                    companies: [],
                    orderBy: 'desc',
                    sortBy: 'searching',
                    useAgent: 0
                };

                // localStorage.setItem('boardFilters', JSON.stringify(boardFilters));
                dispatch(updateBoardFilters(boardFilters));
                navigate('/jobs');
            })
            .catch( err => {
                console.log('err', err)
                dispatch(addProfileFail(err));
            } );
    };
};