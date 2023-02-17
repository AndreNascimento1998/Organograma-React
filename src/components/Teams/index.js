import './Teams.css';
import CardTeams from '../CardTeams';

const Teams = (props) => {

    return (
        props.cadatroHerois.length > 0 && <div className='row centro gx-0'>
            <div className='col-9 '>
                <div className='card text-center ' style={{backgroundColor: props.corPrimaria}}>
                    <h1 className='pb-2' style={{backgroundColor: props.corSecundaria}}>{props.nome}</h1>
                    <div className='row p-1 text-center borderN'>
                        {props.cadatroHerois.map( (cadastroHeroi, index) => {
                            return(
                                <div key={index} className='col-3 mt-2'>
                                    <div className='card border border-dark-subtle' style={{backgroundColor: props.corSecundaria}}>
                                        <CardTeams dadosHeroi={cadastroHeroi} corH5={props.corPrimaria}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Teams;