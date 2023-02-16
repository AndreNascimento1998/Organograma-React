import { useState } from 'react';
import './TextField.css';


const TextField = (props) => {
    
    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value);
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
                value={props.valor}
            />
        </div>         
    )
}

export default TextField;