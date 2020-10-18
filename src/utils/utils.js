export const BOARD_KEY = '19a24da9f46df8faa87902f33670158b372ae414';
export const AGENT_KEY = '74c386a26c9223b6d900b034ff68b38257aab64f';
export const SOURCE_KEY = '711cbad98bc6be558ff742f3afbfe64c8f868de7';


export const removeOccurrences  = arr =>  {
    return Array.from(new Set(arr.map(a => a.text)))
    .map(text => {
      return arr.find(a => a.text === text)
    })
}

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const  buildQueryString =  (url, queryObject) => {
    let queryString = `${url}?`;
    Object.keys(queryObject).forEach(item => {
        if (typeof queryObject[item] === 'string' || queryObject[item] instanceof String) {
            queryString += `${item}=${queryObject[item]}&`;
        } else {
            queryString += `${item}=${JSON.stringify(queryObject[item])}&`;
        }
    });
    return queryString; 
}

export const checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }

    return isValid;
}
