import {NavLink} from 'react-router-dom';
import imgKasa from '../../src/images/Vector.png';

export default function Menu(){
    return (
        <div className="menu">
            <div className='titre'>K<img className='logokasa' src={imgKasa} alt="Logo kasa" />sa</div>
            <div className='nav'>
                <p><NavLink to="/" className={({isActive}) =>(isActive ? "activeLink" : undefined )}>Acceuil</NavLink></p>
                <p><NavLink to="/apropos" className={({isActive}) =>(isActive ? "activeLink" : undefined )}>A Propos</NavLink></p>
            </div>
        </div>
    )
}