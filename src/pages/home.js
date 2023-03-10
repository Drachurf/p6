fetch('logement.json')
  .then(response => response.json())
  .then(data => {
    // Accéder aux ids des annonces
    const title = data.map(logement => logement.title);
    console.log(title);

    const ids = data.map(logement => logement.id);
    console.log(ids);

  })
  .catch(error => console.error(error));

function Home(){
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