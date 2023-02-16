import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className='input-group border rounded'>
           <label className='input-group-text border border-dark-subtle'>{props.label}</label>
                <select 
                    value={props.valor} 
                    onChange={e => props.aoAlterado(e.target.value)}
                    required={props.obrigatorio} 
                    className='form-select border border-dark-subtle'
                >
                    {props.atributos.map( (atributo, index) => {
                        return <option key={index}> {atributo}</option>
                    })}
                </select>
        </div>
    )
}

export default Dropdown;