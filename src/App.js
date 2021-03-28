import './App.css';
import Book from './components/book'; 
import data from './sample/llibres.json';

/* Ejercicio terminado */
function App() {

  const listLlibres = data.map(llibre => 
         <div key={llibre.id}>
          <Book titol={llibre.title} autor={llibre.author} />
         </div>
  );
  
    return(
        <div className="App">
            { listLlibres }
        </div>
      )
  }

export default App;
