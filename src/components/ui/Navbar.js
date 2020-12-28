import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { startLogout } from '../../actions/auth'
// import { eventLogout } from '../../actions/events'

export const Navbar = () => {
    const {name} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    // const handleLogout = () => {
    //     dispatch(startLogout())
    //     dispatch(eventLogout())
    // }
    return (
        <>
            <header className="header">
                <img className="header__img"/>
            </header>
        </>
    )
}
