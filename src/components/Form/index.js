import TextField from "../TextField";
import DropDown from "../Dropdown";
import Button from "../Button";
import './Form.css';
import { useState } from "react";


const Form = () => {
    const atributos = ['Strength', 'Agility', 'Inteligence'];

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    
    const aoSalvar = (e) =>{
        e.preventDefault();
        console.log('Deu', nome, funcao);
    }

    return (
        <div className="row gx-0 mt-4 alinhamento margem">
            <div className="col-3">
                <h3 className="mb-2">Preencha os campos</h3 >
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
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <DropDown obrigatorio={true} atributos={atributos} label='Atributos'/>
                    <Button> 
                        Avançar
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Form;