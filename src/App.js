import './App.css';
import Book from './book'; 
import data from './llibres.json';

function App() {

  const listLlibres = data.map(llibre =>
         <div>
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
