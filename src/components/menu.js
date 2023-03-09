import {NavLink} from 'react-router-dom';
import imgKasa from '../../src/images/Vector.png';

export default function Menu(){
    return (
        <nav className="menu">
            <div className='titre'>K<img className='logokasa' src={imgKasa} alt="Logo kasa" />sa</div>
            <ul className='nav'>
                <li><NavLink to="/" className={({isActive}) =>(isActive ? "activeLink" : undefined )}>Accueil</NavLink></li>
                <li><NavLink to="/apropos" className={({isActive}) =>(isActive ? "activeLink" : undefined )}>A Propos</NavLink></li>
                </ul>

        </nav>
    )
}