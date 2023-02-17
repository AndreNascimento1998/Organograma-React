import TextField from "../TextField";
import DropDown from "../Dropdown";
import Button from "../Button";
import './Form.css';
import { useState } from "react";


const Form = (props) => {

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [atributosValor, setAtributos] = useState('');

    const aoSalvar = (e) =>{
        e.preventDefault();
        props.dadoNovo({
            nome: nome,
            funcao,
            imagem,
            atributosValor
        })
    }

    return (
        <div className="row gx-0 mt-4 alinhamento margem">
            <div className="col-3">
                <h3 className="mb-2 letra-titulo">Cadastre seus hérois</h3 >
                <form onSubmit={aoSalvar} className="form-control border border-dark-subtle">
                    <TextField 
                        obrigatorio={true} 
                        label='Nome'
                        placeholder='Phantom Assassin'
                        valor={nome}
                        aoAlterado={val => setNome(val)}
                    />
                    <TextField 
                        obrigatorio={true}
                        label='Função' 
                        placeholder='Hard Carry'
                        valor={funcao}
                        aoAlterado={valor => setFuncao(valor)}
                    />
                    <TextField 
                        label='Imagem'
                        valor={imagem}
                        placeholder='http://...'
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <DropDown 
                        aoAlterado={targetValueDaOutraPagina => setAtributos(targetValueDaOutraPagina)}
                        valor={atributosValor}
                        obrigatorio={true}
                        atributos={props.atributos} 
                        label='Atributos'
                     />
                    <Button> 
                        Avançar
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Form;