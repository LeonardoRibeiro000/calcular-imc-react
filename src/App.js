import Banner from './componentes/Banner';
import Formulario from './componentes/Formulário';
import {useState} from 'react';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
      </header>
      <div>
        <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>
      </div>
    </div>
  );
}

export default App;
