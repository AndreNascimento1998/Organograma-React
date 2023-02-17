import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Teams from './components/Teams';

function App() {
    const [dados, setDados] = useState([]);

    const dadosProps = [
        {
            nome: 'Strenght',
            corPrimaria: '#941111',
            corSecundaria: '#c74343',
        },
        {
            nome: 'Agility',
            corPrimaria:'#047208',
            corSecundaria:'#6bd16b'
        },
        {
            nome: 'Inteligence',
            corPrimaria: '#05216e',
            corSecundaria: '#3d5adf'
        }
    ]

    const novosDadosRecebidos = (dado) => {
        setDados([...dados, dado])
        console.log(dado)
    }

    return (
        <div className="App">
            <Banner />
            <Form 
                atributos={dadosProps.map( (dado) => dado.nome)}
                dadoNovo={valor => novosDadosRecebidos(valor)}
            />
        
            {dadosProps.map( (dado, index) => {
                return (
                    <div key={index}>
                        <Teams
                            key={index} 
                            nome={dado.nome} 
                            corPrimaria={dado.corPrimaria} 
                            corSecundaria={dado.corSecundaria}
                            cadatroHerois={dados.filter( dadoFiltro => dadoFiltro.atributosValor === dado.nome)}
                        />
                        <p/>
                    </ div>
                )
            })}
        </div>
    );
}

export default App;
