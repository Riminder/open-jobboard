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

