import React from 'react';
import Moneda from './moneda';
import CampoMoneda from './campoMoneda';

function aColones(Dolares) {
  return Dolares * 625.000016
}

function aDolares(Colones) {
  return Colones * 0.0016
}

function convertirMonto(monto, conversion) {
  const campo = parseFloat(monto);
  if (Number.isNaN(campo)) {
    return '';
  }
  const salida = conversion(campo);
  const redondeado = Math.round(salida * 1000) / 1000;
  return redondeado.toString();
}

class Calculadora extends React.Component {
    constructor(props) {
      super(props);
      this.ejecutarCambioColones = this.ejecutarCambioColones.bind(this);
      this.ejecutarCambioDolares = this.ejecutarCambioDolares.bind(this);
      this.state = {monto: '', tipo: 'c'};
    }
  
    ejecutarCambioColones(monto) {
      this.setState({tipo: 'c', monto});
    }
  
    ejecutarCambioDolares(monto) {
      this.setState({tipo: 'd', monto});
    }
      
      render() {
        const tipo = this.state.tipo;
        const monto = this.state.monto;
        const Colones = tipo === 'd' ? convertirMonto(monto, aColones) : monto;
        const Dolares = tipo === 'c' ? convertirMonto(monto, aDolares) : monto;
    
        return (
          <div>
            <CampoMoneda
              tipo="c"
              monto={Colones}
              ejecutarCambioMonto={this.ejecutarCambioColones} />
            <CampoMoneda
              tipo="d"
              monto={Dolares}
              ejecutarCambioMonto={this.ejecutarCambioDolares} />
            <Moneda
              Colones={parseFloat(Colones)} />
          </div>
        );

      }
  }
  
export default Calculadora;
