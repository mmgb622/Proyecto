import React from 'react';
import './Eventos.css';

function notificacion(){
    alert("El pago a sido exitoso");
}

class Evento extends React.Component{

    render(){
        return (
            <div>
                <h3>Desea realizar el pago?</h3>
                <button className="btn" onClick={notificacion}>Realizar Pago</button>
            </div>
        );
    }
}

export default Evento;