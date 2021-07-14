import React from 'react';

class Listado extends React.Component{

    constructor(props){
        super(props);
        this.state = {i: this.props.i};
        this.elements = [];

        for(let j = 1; j <= this.state.i; j++){
            this.elements.push(
                <div>
                    <ul>
                        <li key={j.toString()}>Producto {j}</li>
                    </ul>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                <h3>Futuros productos en tienda:</h3>
                {this.elements}
            </div>
        );
    }
}

export default Listado;