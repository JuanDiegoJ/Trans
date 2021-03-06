const baseURL = process.env.REACT_APP_API_URL; 

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseURL }/${ endpoint }/`;

    if ( method === 'GET' ) {
        return fetch( url )
    } else {
        return fetch( url, {
            method,
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }

}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseURL }/${ endpoint }/`;
    const token = localStorage.getItem('token') || ''

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            },
        })
    } else {
        return fetch( url, {
            method,
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify( data )
        })
    }

}

export {
    fetchSinToken,
    fetchConToken
}