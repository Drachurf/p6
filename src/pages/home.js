import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Card from '../../src/components/card.js';
import Fiche from '../../src/pages/Fiche.js';

function Home(){
  const [picturesArray, setPicturesArray] = useState([]);
  const [titleArray, setTitleArray] = useState([]);
  const [idArray, setIdArray] = useState([]);

  useEffect(() => {
    fetch('logement.json')
    .then(response => response.json())
    .then(data => {
      const idArray = data.map(logement => logement.id);
      setIdArray(idArray);
      const picturesArray = data.map(logement => logement.pictures[0]);
      setPicturesArray(picturesArray);
      const titleArray = data.map(logement => logement.title);
      setTitleArray(titleArray)
    })
    .catch(error => console.error(error));
}, []);

  return (
        <section>
        <div className="imageacceuil">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        
        <div className='box'>
          {idArray.map((id, index) => (
<Card key={`${id}-${index}`} img={picturesArray[index]} title={titleArray[index]}/>
))}
<Routes >
<Route path="/fiche/{id}" element={<Fiche /> } />
</Routes>
        </div>
        </section>
    )
}
export default Home
