import './CardTeams.css';

const CardTeams = (props) => {

    return(
        <div>
            <h3>{props.dadosHeroi.funcao}</h3>
            <img height='150px' width='150px' alt={props.dadosHeroi.nome} src={props.dadosHeroi.imagem}/>
                <h5 className='p-1' style={{backgroundColor:props.corH5}}>{props.dadosHeroi.nome}</h5> 
            <div className="card-img-overlay">
            </div>
        </div>
    )
}

export default CardTeams;