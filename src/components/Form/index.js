import TextField from "../TextField";
import DropDown from "../Dropdown";
import Button from "../Button";
import './Form.css';

const atributos = ['Strength', 'Agility', 'Inteligence'];

const Form = () => {
    return (
        <div className="row gx-0 mt-4 alinhamento margem">
            <div className="col-3">
                <h3 className="mb-2">Preencha os campos</h3 >
                <form className="form-control border border-dark-subtle">
                    <TextField label='Nome' placeholder='Phantom Assassin'/>
                    <TextField label='Função' placeholder='Hard Carry'/>
                    <TextField label='Imagem'/>
                    <DropDown atributos={atributos} label='Atributos'/>
                    <Button texto='Avançar'/>
                </form>
            </div>
        </div>
    )
}

export default Form;