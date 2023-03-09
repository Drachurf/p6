
export default function Home(){
    return (
        <section>
        <div className="home">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className='box'>
            <div className='conteneur'>
                    <h5>titre de la location</h5>
            </div>
        </div>
        </section>
    )  
}

/* function genererAnnonces(annonces) {  
        
        const conteneur = document.querySelector('.conteneur')
        console.log(conteneur);

        const sectionAnnonces = document.querySelector(".conteneur");
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