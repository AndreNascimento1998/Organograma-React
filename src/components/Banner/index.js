import './Banner.css';

function Banner () {
    return (
    <div className='card pad'>
        <img
            src="./image/banner.jpg" 
            alt="Banner principal" 
            className='img-fluid banner '
         />
        <div className='card-img-overlay'>
            <div className='row cor banner'>
                <div className='col letras'>
                    <h3>Lista de Picks</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner;