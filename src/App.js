import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Teams from './components/Teams';

function App() {
    const [dados, setDados] = useState([]);

    const novosDadosRecebidos = (dado) => {
        setDados([...dados, dado])
    }

    return (
        <div className="App">
            <Banner />
            <Form dadoNovo={valor => novosDadosRecebidos(valor)}/>
            <Teams />
        </div>
    );
}

export default App;
