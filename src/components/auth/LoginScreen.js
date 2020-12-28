import React from 'react'
import { Descripcion } from './Descripcion'
import { Seleccion } from './Seleccion'

export const LoginScreen = () => {
    return (
        <div className="container">
            <section className="main">
                <Descripcion />
                <Seleccion />
            </section>
        </div>
    )
}
