import { pictures, title } from 'react';
import React, { useState, useEffect } from 'react';

function Home(){
  const [pictures, setPictures] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch('logement.json')
    .then(response => response.json())
    .then(data => {
      const picturesArray = data.map(logement => logement.pictures[0]);
      setPictures(picturesArray);

      const titleArray = data.map(logement => logement.title);
      setTitle(titleArray);
    })
    .catch(error => console.error(error));
}, []);


  return (
        <section>
        <div className="home">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
          <div className='box'>
            <div className='conteneur'>
            <img className='imghome' src="{pictures}" alt={title}/>
            <h5>{title}</h5>
        </div>
        </div>
        </section>
    )  
}
export default Home
/* function genererAnnonces(annonces) {  
        
        const sectionAnnonces = <div></div>
        sectionAnnonces.innerHTML = ""
            for (let i = 0; i < annonces.length; i++) {
          const annonce = annonces[i];
            //Récupération de l'élément du DOM qui accueillera les fiches + créations balises
            const annonceElement = document.createElement("annonce");
            const imageElement = document.createElement("img");
            imageElement.src = annonce.imageUrl;
            imageElement.crossOrigin = "anonymous";
            imageElement.alt = annonce.title;
            const titreElement = document.createElement("h5");
            titreElement.innerText = annonce.title;
            sectionAnnonces.appendChild(annonceElement);
            annonceElement.appendChild(imageElement);
            annonceElement.appendChild(titreElement); 
            
            console.log(imageElement);
          }
        }genererAnnonces(annonces)*/