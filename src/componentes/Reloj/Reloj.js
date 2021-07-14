import React from 'react';
import './Reloj.css'

class Reloj extends React.Component {
    constructor(props){
        super(props); 
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerId = setInterval(
            ()=>this.iteracion(),
            1000
        );
    }

    iteracion(){
        this.setState(
            {date: new Date()}
        );
    }
    render(){
        return (
            <div>
                <h4>Tiempo actual de la pagina:_ {this.state.date.toLocaleTimeString()}.</h4>
                <p>Recuerde que el horario de atencion es de 8:30am a 9:00pm</p>
            </div>
        );   
    }
}

export default Reloj;