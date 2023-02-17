import './Teams.css';
import CardTeams from '../CardTeams';

const Teams = (props) => {


    return (
        <div className='row centro gx-0'>
            <div className='col-9 '>
                <div className='card text-center ' style={{backgroundColor: props.corPrimaria}}>
                    <h1>{props.nome}</h1>
                    <div className='row p-1 text-center borderN'>
                        <div className='col-3'>
                            <div className='card border border-dark' style={{backgroundColor: props.corSecundaria}}>
                                <CardTeams corH5={props.corPrimaria}/>
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Teams;