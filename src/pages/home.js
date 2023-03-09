import imgHome from '../../src/images/IMG.jpg';


export default function Home(){
    return (
        <section>
        <div className="home">
            <img className='imgHome' src={imgHome} alt="falaise"/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className='box'>
        <div className='conteneur'>
            <h5>titre de la location</h5>
        </div>
        <div className='conteneur'>
        <h5>titre de la location</h5>
        </div>
        <div className='conteneur'>
        <h5>titre de la location</h5>
        </div>
        <div className='conteneur'>
        <h5>titre de la location</h5>
        </div>
        <div className='conteneur'>
        <h5>titre de la location</h5>
        </div>
        <div className='conteneur'>
        <h5>titre de la location</h5>
        </div>
        </div>
        </section>
    )
}