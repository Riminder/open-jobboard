import moment from 'moment';


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


export const  rangeDateToIsoDate =  (rangeDate) => {
    let isoDate = null
    if (rangeDate === '1w') {
        isoDate = moment().endOf('day').subtract(1, 'week');
    } else if (rangeDate === '2w') {
        isoDate = moment().endOf('day').subtract(2, 'week');
    } else if (rangeDate === '3w') {
        isoDate = moment().endOf('day').subtract(3, 'week');
    } else if (rangeDate === '1m') {
        isoDate = moment().endOf('day').subtract(1, 'month');
    } else if (rangeDate === '2m') {
        isoDate = moment().endOf('day').subtract(2, 'month');
    } else if (rangeDate === '3m') {
        isoDate = moment().endOf('day').subtract(3, 'month');
    } else if (rangeDate === '4m') {
        isoDate = moment().endOf('day').subtract(4, 'month');
    } else if (rangeDate === '5m') {
        isoDate = moment().endOf('day').subtract(5, 'month');
    } else if (rangeDate === '6m') {
        isoDate = moment().endOf('day').subtract(6, 'month');
    } else if (rangeDate === '1y') {
        isoDate = moment().endOf('day').subtract(1, 'year');
    } else if (rangeDate === '2y') {
        isoDate = moment().endOf('day').subtract(2, 'year');
    } else if (rangeDate === '3y') {
        isoDate = moment().endOf('day').subtract(3, 'year');
    } else {
        isoDate = moment().endOf('day');
    }

    return isoDate
}

export const detectMobileAndTablet = windowWidth =>
  windowWidth < parseInt("1200px".match(/\d+/gi).join(""))

export const isSSR = typeof window === "undefined"
