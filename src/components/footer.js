import imgfooter from '../../src/images/Vectorwhite.png';
function Footer(){
    return(
        <div>
            <footer>
            <div className='titrefoot'>K<img className='logoFkasa' src={imgfooter} alt="Logo kasa"/>sa</div>
            <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    )
}
export default Footer