import {NavLink} from 'react-router-dom';

function Page404(){
    return(
        <div className='page404'>
            <div className="erreur">404</div>
            <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
            <p><NavLink to="/" className="retour">Retourner à la page d'accueil</NavLink></p>
        </div>
    )
}
export default Page404