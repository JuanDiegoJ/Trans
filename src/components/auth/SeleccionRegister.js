import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startRegister } from '../../actions/auth'

export const SeleccionRegister = () => {

    const dispatch = useDispatch()

    const [ formRegisterValues, handleRegisterInput ] = useForm({
        first_name: 'Juan Diego',
        last_name: 'Jáuregui Moreno',
        email: 'jdjauregui@curaduria4bogota.com.co',
        password1: 'Jd970306',
        password2: 'Jd970306',
    })

    const { first_name, last_name, email, password1, password2 } = formRegisterValues

    const handleRegister = (e) => {
        e.preventDefault();

        if ( password1 !== password2 ) {
            return alert('Las contraseñas deben ser identicas')
        } else {
            dispatch(startRegister(first_name, last_name, email, password1))
        }
    }

    return (
        <div className="seleccion">
            <h3>Registro de usuario</h3>
            <form className="form" onSubmit={ handleRegister }>
                <input 
                    type="text" 
                    className="form__fields" 
                    placeholder="Nombres"
                    name="first_name"
                    value={first_name}
                    onChange={ handleRegisterInput } 
                    required
                />
                <input 
                    type="text" 
                    className="form__fields" 
                    placeholder="Apellidos"
                    name="last_name"
                    value={last_name}
                    onChange={ handleRegisterInput } 
                    required
                />
                <input 
                    type="email" 
                    className="form__fields" 
                    placeholder="Correo institucional"
                    name="email"
                    value={email}
                    onChange={ handleRegisterInput } 
                    required
                />
                <input 
                    type="password" 
                    className="form__fields" 
                    placeholder="Contraseña"
                    name="password1"
                    value={password1}
                    onChange={ handleRegisterInput } 
                    required
                />
                <input 
                    type="password" 
                    className="form__fields" 
                    placeholder="Repetir contraseña"
                    name="password2"
                    value={password2}
                    onChange={ handleRegisterInput } 
                    required
                />
                <button type="submit" className="btn-submit">Iniciar</button>
            </form>
        </div>
    )
}
