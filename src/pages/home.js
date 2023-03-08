import imgHome from '../../src/images/IMG.jpg';

export default function Home(){


    return (
        <div className="home">
            <img className='imgHome' src={imgHome} alt="falaise"/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
       
    )
}