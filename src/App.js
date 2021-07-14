import './App.css';
import Reloj from './componentes/Reloj/Reloj';
import Listado from './componentes/Listas/lista';
import Evento from './componentes/Eventos/Evento';
import Anuncio from './componentes/Eventos/EventoCondicional';
import Formulario from './componentes/formularioCliente/formularioCliente';
import Calculadora from './componentes/ElevarEstado/calculadora';
import { HookEstado } from './componentes/Hooks/Hooks';
import {
  BrowserRouter as Router,
  Switch,  Route,  Link,  useLocation
} from "react-router-dom";
import './App.css';


function Inicio(props) {
  return <div>
    <h1>Inicio</h1>
    <p>Este es el inicio</p>
    <Reloj/>
  </div> 

}
function Productos(props) {
  return <div>
    <h2>Productos</h2>
    <p>Aqui se presentan los productos</p>
    <Listado i = "5"/>
    </div>  
}

function Carrito(props) {
 return <div>
   <h2>Carrito</h2>
   <p>Aqui se ven los productos enviados al carrito de compras</p>
   <Anuncio/>
   </div>  
}

function Compra(props) {
  return <div>
    <h2>Compra</h2><p>Aqui se realiza el pago de los productos seleccionados y se lleva un formulario para efectuar la compra</p>
    <Formulario/>
      <h3>Ingrese con cuanto dinero va a cancelar</h3>
      <Calculadora/>
      <Evento/>
    </div> 
}

function PaginaNoEncontrada() {
  let direccion = useLocation();
  return <div><h2>Página No Encontrada</h2><p>No se encontró la página indicada 
    <code>{direccion.pathname}</code></p></div>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/carrito">Carrito</Link>
            </li>
            <li>
              <Link to="/compra">Compra</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/carrito">
            <Carrito />
            <HookEstado/>
          </Route>
          <Route path="/compra">
            <Compra />
          </Route>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="*">
            <PaginaNoEncontrada />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
