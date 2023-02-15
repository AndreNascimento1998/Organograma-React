import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button type='submit' className="btn btn-primary mt-4">{props.children}</button>
        </div>
    )
}

export default Button;