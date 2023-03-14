import styled from "styled-components"

const CardImage = styled.img`
    border-radius: 25px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function Card({ id, title, img }) {
    return (
        <div className='conteneur'>{id}
            <CardImage src={img} alt="{title}"/>
                <h5>{title}</h5>
        </div>
    )
}
export default Card