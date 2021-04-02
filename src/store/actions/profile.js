import { navigate } from 'gatsby'
import moment from 'moment'
import * as actionTypes from './types'
import { updateBoardFilters, fetchJobs } from './jobs'
import axios from '../../utils/axios'
import { removeOccurrences } from '../../utils/utils'
import axiosCatch from '../../utils/axiosCatch'

export const addProfileRequest = () => {
    return {
        type: actionTypes.ADD_PROFILE_REQUEST,
    }
}

export const addProfileSuccess = (profile, file) => {
    return {
        type: actionTypes.ADD_PROFILE_SUCCESS,
        profile,
        file,
    }
}

export const addProfileFail = () => {
    return {
        type: actionTypes.ADD_PROFILE_FAIL,
    }
}

export const putProfileRequest = () => {
    return {
        type: actionTypes.PUT_PROFILE_REQUEST,
    }
}

export const putProfileSuccess = (profile) => {
    return {
        type: actionTypes.PUT_PROFILE_SUCCESS,
        profile,
    }
}

export const putProfileFail = () => {
    return {
        type: actionTypes.PUT_PROFILE_FAIL,
    }
}

export const editProfileConsentRequest = () => {
    return {
        type: actionTypes.EDIT_PROFILE_CONSENT_REQUEST,
    };
};

export const editProfileConsentSuccess = (profile) => {
    return {
        type: actionTypes.EDIT_PROFILE_CONSENT_SUCCESS,
        profile,
    };
};

export const editProfileConsentFail = () => {
    return {
        type: actionTypes.EDIT_PROFILE_CONSENT_FAIL,
    };
};

export const getProfileRequest = () => {
    return {
        type: actionTypes.GET_PROFILE_REQUEST,
    }
}

export const getProfileSuccess = (profile) => {
    return {
        type: actionTypes.GET_PROFILE_SUCCESS,
        profile,
    }
}

export const getProfileFail = () => {
    return {
        type: actionTypes.GET_PROFILE_FAIL,
    }
}

export const removeProfileRequest = () => {
    return {
        type: actionTypes.REMOVE_PROFILE,
    }
}

export const removeProfile = () => {
    return dispatch => {
        localStorage.removeItem('profile')
        localStorage.removeItem('parsing')
        localStorage.removeItem('file')
        const boardFilters = {
            skills: {enabled: [], disabled: []},
            languages: {enabled: [], disabled: []},
            jobs: [],
            locations: [],
            categories: [],
            types: [],
            orderBy: 'desc',
            sortBy: 'searching',
            useAgent: false,
            page: 0,
            loction_distance: 70,
            date_range_min: '1w'
        }
        // continue here
        dispatch(updateBoardFilters(boardFilters))
        dispatch(fetchJobs(boardFilters))
        dispatch(removeProfileRequest())
    }
    
}

export const addProfile = (payload) => {
    return dispatch => {
        dispatch(addProfileRequest())
        const fd = new FormData()
        fd.append('file', payload.file)
        fd.append('source_key', process.env.SOURCE_KEY)
        fd.append('sync_parsing', 1)
        fd.append('consent_algorithmic',
        JSON.stringify({
            'owner': {
              'parsing': true,
              'revealing': false,
              'embedding': false,
              'searching': true,
              'scoring': true,
              'reasoning': true,
            },
            'controller' : {
              'parsing': true,
              'revealing': false,
              'embedding': false,
              'searching': false,
              'scoring': false,
              'reasoning': false,
            }
          })
        )
        axios.post( 'profile/parsing/file', fd)
            .then( res => {
                const fileInfo = JSON.stringify({'fileName': payload.file.name, 'fileSize': payload.file.size })
                dispatch(addProfileSuccess(res.data.data.profile, fileInfo ))
                localStorage.setItem('file', fileInfo)
                const profile = res.data.data.profile
                const parsing = res.data.data.parsing
                localStorage.setItem('profile', JSON.stringify(profile))
                localStorage.setItem('parsing', JSON.stringify(parsing))
                let experiences = []
                parsing.experiences.forEach(experience => {
                    experience.title && experiences.push({ text: experience.title, checked: false })
                })
                experiences = removeOccurrences(experiences)
                if(experiences.length) {
                    experiences[0].checked = false
                }

                let locations = []
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
                })
                locations = removeOccurrences(locations)
                if(locations.length) {
                    locations[0].checked = true
                }

                const boardFilters = {
                    skills: {enabled: [], disabled: parsing.skills.map(item => item.name) },
                    languages: {enabled: [], disabled:  parsing.languages.map(item => item.name) },
                    jobs: experiences,
                    locations,
                    categories: [],
                    types: [],
                    orderBy: 'desc',
                    sortBy: 'scoring',
                    useAgent: true,
                    loction_distance: 70,
                    date_range_min: '1w',
                }
                // localStorage.setItem('boardFilters', JSON.stringify(boardFilters))
                dispatch(updateBoardFilters(boardFilters))
                dispatch(fetchJobs(boardFilters))

                if(payload.redirect) {
                    navigate('/jobs')
                }
            })
            .catch( err => {
                console.log('err', err)
                dispatch(addProfileFail(err))
            } )
    }
}


export const putProfile = (payload) => {
    return dispatch => {
        dispatch(putProfileRequest())
        const newProfile =  {...payload.profile, 'source_key': [process.env.SOURCE_KEY]}

        newProfile.attachments.map(att => {
            att.url = att.public_url
        });

        
        newProfile.experiences.map(exp => {
            exp.date_end = { iso8601: moment(exp.date_end).toISOString() }
            exp.date_start = { iso8601: moment(exp.date_start).toISOString() }
        });

        newProfile.educations.map(edu => {
            edu.date_end = { iso8601: moment(edu.date_end).toISOString() }
            edu.date_start = { iso8601: moment(edu.date_start).toISOString() }
        });
        const tag = {
            name:'application_board_job_key',
            value: `${process.env.SOURCE_KEY}-${payload.jobKey}`
        }
        if(newProfile.tags && newProfile.tags.length > 0) {
            newProfile.tags.push(tag)
        } else {
            newProfile.tags = [tag]
        }
        axios.put('profile/indexing', JSON.stringify(newProfile))
            .then( res => {
                const profile = res.data.data
                dispatch(putProfileSuccess(profile))
                localStorage.setItem('profile', JSON.stringify(profile))
                const fd = new FormData();
                fd.append('source_key', process.env.SOURCE_KEY);
                fd.append('profile_key', payload.profile.key);
                fd.append('board_key', process.env.BOARD_KEY);
                fd.append('job_key', payload.jobKey);

                // here post to workflow catch
                axiosCatch.post('', fd).then(res => console.log('resposne catch', res))
            })
            .catch( err => {
                console.log('err', err)
                dispatch(putProfileFail(err))
            } )
    }
}

export const editProfileConsent = (payload) => {
    return dispatch => {
        dispatch(editProfileConsentRequest());
        let newProfile = {...payload.profile, 'source_key': payload.sourceKey}
        axios.put( 'profile/indexing', JSON.stringify(newProfile))
            .then( res => {
                dispatch(editProfileConsentSuccess(res.data.data));
                localStorage.setItem('profile', JSON.stringify(res.data.data));
                // if(!payload.consent) {
                //     const fd = new FormData();
                //     fd.append('email', res.data.data.info.email || '');
                //     fd.append('profile_key', res.data.data.key);
                //     axiosZapier.post( `/4274830/oqhirl3/`, fd)
                //     .then( res => {
                //     } )
                // }
            } )
            .catch( err => {
                console.log('err', err)
                dispatch(editProfileConsentFail(err));
            } );
    };
};
export const getProfile = (payload) => {
    return dispatch => {
        dispatch(getProfileRequest())
        const sourceKey = payload.sourceKey
        const profileKey = payload.profileKey
        axios.get( `profile/indexing?&key=${profileKey}&source_key=${sourceKey}`)
            .then( res => {
                dispatch(getProfileSuccess(res.data.data))
                localStorage.setItem('profile', JSON.stringify(res.data.data))
            } )
            .catch( err => {
                dispatch(getProfileFail(err))
            } )
    }
}