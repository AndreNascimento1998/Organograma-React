import { useState } from 'react';
import './TextField.css';


const TextField = (props) => {
    const [valor, setValor] = useState('');
    
    const aoDigitar = (e) => {
        setValor(e.target.value);
        console.log(valor);
    }

    return (
        <div className='mb-4'>
            <label className='font-label'>{props.label}</label>
            <input 
                onChange={aoDigitar}
                type="text" 
                className="form-control border border-dark-subtle"
                placeholder={props.placeholder}
                required={props.obrigatorio}
                value={valor}
            />
        </div>
                    
                
    )
}

export default TextField;