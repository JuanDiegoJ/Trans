import React from 'react'
import { useForm } from '../../hooks/useForm'
import { startLogin } from '../../actions/auth'
import { useDispatch } from 'react-redux'

export const SeleccionLogin = () => {

    const dispatch = useDispatch()

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        username: 'Juan_Diego',
        password: 'Jd970306'
    })

    const { username, password } = formLoginValues

    const handleLogin = (e) => {
        e.preventDefault()

        dispatch( startLogin(username, password) )
    }

    return (
        <div className="seleccion">
            <h3>Inicio de Sesión</h3>
            <form className="form" onSubmit={ handleLogin }>
                <input 
                    type="text" 
                    className="form__fields" 
                    placeholder="Usuario" 
                    name="username"
                    value={ username }
                    onChange={ handleLoginInputChange }
                    required
                />
                <input 
                    type="password" 
                    className="form__fields" 
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleLoginInputChange }
                    required
                />
                <br/>
                <br/>
                <button type="submit" className="btn-submit">Iniciar</button>
            </form>
        </div>
    )
}
