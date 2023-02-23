import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
      <h1>Tareas</h1>
        <ListaDeTareas />
      </div>
      <footer>Damián Zabcic</footer>
    </div>
  );
}

export default App;
