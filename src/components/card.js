function Card({ id, title, img }) {
    return (
        <div className='conteneur'>
            <div className="imgcard">
              <div src={img}></div>
                <h5>{title}</h5>
            </div>
        </div>


        //onclick = {id}
    )
}
export default Card