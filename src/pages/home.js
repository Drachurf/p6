import React, { useState, useEffect } from "react";
import Card from "../../src/components/card.js";
import Banner from "../../src/components/banner.js";
import imgFront from "../../src/images/IMG.jpg";

const titre = "Chez vous, partout et ailleurs"

function Home() {
  const [loading, setLoading] = useState(true); // vérifier les chargements
  const [annonce, setAnnonce] = useState(); // chargement des annonces

  useEffect(() => {
    fetch("logement.json")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAnnonce(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
    <Banner  texte={titre} img={imgFront} />
      <section>
        <div className="box">
          {loading && <p>Chargement en cours ...</p>}
          {!loading &&
            annonce.map((annonce) => (
              <Card
                key={annonce.id}
                cover={annonce.cover}
                title={annonce.title}
                id={annonce.id}
              />
            ))}
        </div>
      </section>
    </>
  );
}
export default Home;
