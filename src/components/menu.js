import {NavLink} from 'react-router-dom';
import imgKasa from '../../src/images/Vector.png';

export default function Menu(){
    return (
        <div className="menu">
            <div className='titre'>K<img className='logokasa' src={imgKasa} alt="Logo kasa" />sa</div>
            <ul>
                <li><NavLink to="/">Acceuil</NavLink></li>
                <li><NavLink to="/apropos">A propos</NavLink></li>
            </ul>
        </div>
    )
}