import './TextField.css';

const TextField = (props) => {
    return (
        <div className='mb-4'>
            <label className='font-label'>{props.label}</label>
            <input 
                type="text" 
                className="form-control border border-dark-subtle"
                placeholder={props.placeholder} 
            />
        </div>
                    
                
    )
}

export default TextField;