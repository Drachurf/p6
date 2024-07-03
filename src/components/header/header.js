import {NavLink} from 'react-router-dom';
import imgKasa from '../../../src/images/Vector.png';

export default function Header(){
    return (
        <nav className="menu">
            <div className='titre'>K<img className='logokasa' src={imgKasa} alt="Logo kasa" />sa</div>
            <div className='boxNav' >
                <ul className='nav'>
                    {/* isActive permet de passer du CSS si l'élémet est activé ou non*/}
                    <li><NavLink to="/" className={({isActive}) =>(isActive ? "activeLink" : undefined )}>Accueil</NavLink></li>
                    <li><NavLink to="/apropos" className={({isActive}) =>(isActive ? "activeLink" : undefined )}>A Propos</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) =>(isActive ? "activeLink" : undefined )}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}