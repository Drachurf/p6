import React, { useState, useEffect } from "react";
import Card from "../../src/components/card.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [annonce, setAnnonce] = useState();

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
    <section>
      <div className="imageacceuil">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
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
  );
}
export default Home;
