import './Banner.css';

function Banner () {
    return (
    <div className='card'>
        <img
            src="/image/banner.jpg" 
            alt="Banner principal" 
            className='img-fluid banner '
         />
        <div className='card-img-overlay'>
            <div className='row cor banner'>
                <div className='col letras'>
                    <h1>Pessoas e times </h1>
                    <p>orgazinados em um só lugar</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner;