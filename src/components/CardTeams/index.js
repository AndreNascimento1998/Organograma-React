import './CardTeams.css';

const CardTeams = (props) => {

    return(
        <div>
            <img height='150px' width='150px' src={props.dadosHeroi.url}/>
                <h5 className='p-1' style={{backgroundColor:props.corH5}}>{props.dadosHeroi.nome}</h5> 
            <div className="card-img-overlay">
            </div>
        </div>
    )
}

export default CardTeams;