import React from 'react';

function Aviso(props) {
    if (!props.mostrarAnuncio) {
      return (
        <div>
          <h2>Nuevos productos disponibles!</h2>
          <img className="imgProductos" src={process.env.PUBLIC_URL + '/guia-accesorios-cuidados-para-conejos.jpg'}/>
        </div>
      );
    }
    return null;
  }

class Anuncio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {mostrar: true};
        this.darClick = this.darClick.bind(this);
      }
      darClick() {
        this.setState( state => ({
          mostrar: !state.mostrar
        }));
      }
      render() {
          
        return (
          <div>
            <Aviso mostrarAnuncio={this.state.mostrar} />
            <button className="btn" onClick={this.darClick}>
              {this.state.mostrar ? 'Mostrar anuncio' : 'Ocultar anuncio'}
            </button>
          </div>
        );
      }
}

export default Anuncio;
