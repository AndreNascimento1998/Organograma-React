import './TextField.css';

const TextField = () => {
    return (
        <div className="row alinhamento">
            <div className="col-3 p-0">
                <div className="form-floating cor-letra">
                    <input 
                        type="text" 
                        className="form-control form-control-sm border border-dark-subtle"
                        id="floatingInput" 
                        placeholder="name@example.com" 
                     />
                    <label className='font-label'>Email address</label>
                </div>
            </div>
        </div>
    )
}

export default TextField;