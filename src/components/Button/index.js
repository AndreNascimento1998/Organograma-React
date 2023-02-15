import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button type='button' className="btn btn-primary mt-4">{props.texto}</button>
        </div>
    )
}

export default Button;