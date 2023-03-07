import imgHome from '../../src/images/IMG.jpg';

export default function Home(){


    return (
        <div className="home">
            <img className='imgHome' src={imgHome} alt="Logo kasa" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}