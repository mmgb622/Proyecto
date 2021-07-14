import React, { useState } from 'react';
import './Hooks.css';

export function HookEstado() {

  const [contador, setContador] = useState(0);

  while (contador>=25) {
      return ( <p>Ha adquirido un código de promoción de 25%</p>
      )
  }
  
  return (
    <div>
        <h4>! LLUVIA DE PROMOCIONES ¡</h4>
      <p>Has clickeado el botón {contador} veces</p>
      
      <button className="btn" onClick={() => setContador(contador + 1)}>
        Clickeame!
      </button>
    </div>
  );
}
