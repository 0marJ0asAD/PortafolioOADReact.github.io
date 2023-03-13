import './Estilos/App.css';
import Encabezado from './Componentes/Encabezado';
import Navegación from './Componentes/Navegación';
import Menu from './Componentes/Menu';

function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>

      <Navegación></Navegación>

      <Menu></Menu>
    </div>
  );
}

export default App;
