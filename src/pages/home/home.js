import React, { useState, useEffect } from "react";
import Card from "../../components/card/card.js";
import Banner from "../../components/banner/banner.js";
import imgFront from "../../../src/images/IMG.jpg";
import logement from "../../json/logement.json";

const titre = "Chez vous, partout et ailleurs";

const Home = () => {
  // message de chargement
  const [isLoading, setIsLoading] = useState(true);
  const [annonces, setAnnonces] = useState([]);

  // récupération des données avec UseEffet dans setAnnonces
  useEffect(() => {
    setAnnonces(logement);
    // c'est chargé, loading en false
    setIsLoading(false);
  }, []);
  return (
    <>
      <Banner texte={titre} img={imgFront} />
      <section>
        <div className="box">
          {isLoading ? (
            <p>Chargement en cours ...</p>
          ) : (
            annonces.map((annonce) => (
              <Card
                key={annonce.id}
                cover={annonce.cover}
                title={annonce.title}
                id={annonce.id}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};
export default Home;
