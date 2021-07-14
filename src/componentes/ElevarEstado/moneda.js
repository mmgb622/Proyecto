import React from 'react';

class Moneda extends React.Component {
    
    render() {        
        if (this.props.Colones){
            if (this.props.Colones >= 15000) {
                return <div>
                    <b>Por un pago equivalente o mayor a 15000 se la realizara un descuento del 20%.</b>
                    <p>Dicho descuento se vera reflajado en la factura que le hemos enviado al correo electrónico que nos facilito</p>
                </div>
            }
            else
            {
                return <b>No aplican descuentos.</b>;
            }                  
        }
        else
        {
            return <b>Indique un valor por favor.</b>;
        }
    }
  }
  
export default Moneda;
