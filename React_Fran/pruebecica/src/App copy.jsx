import logo from './logo.svg';
import './App.css';
import { persona } from './data/heroes';
import { HeroesList } from './components/HeroesList';

function App() {
  return (
    <>
      <div>
        <h1 className='titulo'>Listado de personas</h1>
        <HeroesList></HeroesList>
        <table>
            <tr className='titulos'>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grupo</th>
            </tr>           
            {

              persona.map((militares) => {
                return (
                  <tr className='cnt'>
                    <td>{militares.id}</td>
                    <td>{militares.Nombre}</td>
                    <td>{militares.Apellido}</td>
                    <td>{militares.Grupo}</td>
                  </tr>

                )
              })
            }
        
        </table>
      </div>
    </>
  );
}

export default App;
