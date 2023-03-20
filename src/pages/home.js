import React, { useState, useEffect } from "react";
import Card from "../../src/components/card.js";
import Banner from "../../src/components/banner.js";
import imgFront from "../../src/images/IMG.jpg";
import { fetchData } from "../../src/module/Api.js";

const titre = "Chez vous, partout et ailleurs"

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <>
    <Banner  texte={titre} img={imgFront} />
      <section>
        <div className="box">
      {data ? (
        data.map((annonce) => (
          <Card
                key={annonce.id}
                cover={annonce.cover}
                title={annonce.title}
                id={annonce.id} />
        ))
      ) : (
        <p>Chargement en cours ...</p>
      )}
    </div>
    </section>
    </>
  );
}
export default Home;
