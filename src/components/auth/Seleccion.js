import React, { useState } from 'react'
import { SeleccionLogin } from './SeleccionLogin';
import { SeleccionRegister } from './SeleccionRegister';

export const Seleccion = () => {

      
    const [active, setActive] = useState(0);
    const handleClick = (event) => { 
        setActive(parseInt(event.target.id))
    }
  
    return (
    <div className="content">
        <div className="content__tabs">
            <div className={(active === 0) ? "active active-left" : "active active-right"}></div>
            <button className={(active === 0) ? "btn btn-pos" : "btn btn-alter"} id={0} onClick={handleClick}>Ingreso</button>
            <button className={(active === 1) ? "btn btn-pos" : "btn btn-alter"} id={1} onClick={handleClick}>Registro</button>
        </div>
        <div className="content__selection">
            {active === 0 ? <SeleccionLogin /> : <SeleccionRegister />}
        </div>
    </div>
  )
}
