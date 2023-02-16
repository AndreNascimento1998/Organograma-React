import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
    const [dados, setDados] = useState([]);

    const novosDadosRecebidos = (dado) => {
        setDados([...dados, dado])
    }

    return (
        <div className="App">
            <Banner />
            <Form dadoNovo={valor => novosDadosRecebidos(valor)}/>
        </div>
    );
}

export default App;
