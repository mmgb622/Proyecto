import React from 'react';

// Opciones
const nombreMoneda = {
    c: 'Colones',
    d: 'Dolares'
  };

class CampoMoneda extends React.Component {
    constructor(props) {
        super(props);
        this.ejecutarCambios = this.ejecutarCambios.bind(this);
        //this.state = {monto: ''};
      }
    
      ejecutarCambios(e) {
        //this.setState({monto: e.target.value});
        this.props.ejecutarCambioMonto(e.target.value);
      }
    
      render() {
        //const monto = this.state.monto;
        const monto = this.props.monto;
        const tipo = this.props.tipo;
        return (
        <div>
            <fieldset>
            <legend>Monto en {nombreMoneda[tipo]}:</legend>
            <input value={monto}
                   onChange={this.ejecutarCambios} />
          </fieldset>
        </div>
          
        );
      }
  }
  
export default CampoMoneda;
