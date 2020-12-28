import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import { crearUsername } from "../helpers/username";

export const startLogin = (username, password) => {

    return async( dispatch ) => {

        const resp = await fetchSinToken( 'login', { username, password }, 'POST' )
        const body = await resp.json();
        
        if (body.ok) {

            localStorage.setItem('token', body.token)
            localStorage.setItem('token-date', new Date().getTime())

            dispatch( login({
                uid: body.uid,
                name: body.username
            }) )

        } else {
            alert(`${body.detail}`)
        }

    }
}

export const startRegister = (first_name , last_name, email, password) => {
    return async( dispatch ) => {

        const username = crearUsername(email)
        const resp = await fetchSinToken( 'registro', { username, email, first_name , last_name, password }, 'POST' )
        const body = await resp.json();
        
        if (body.ok) {

            localStorage.setItem('token', body.token)
            localStorage.setItem('token-date', new Date().getTime())

            dispatch( login({
                uid: body.uid,
                name: body.username
            }) )

        } else {
            alert(`${body.detail}`)
        }

    } 
}

export const startChecking = () => {
    return async( dispatch ) => {

        const resp = await fetchConToken( 'renew' )
        const body = await resp.json();

        console.log(body)
        
        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-date', new Date().getTime())

            dispatch( login({
                uid: body.uid,
                name: body.username
            }) )
        } else {
            console.log(body.detail)
            dispatch( checkingFinish() )
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({
    type: types.authLogin,
    payload: user
})