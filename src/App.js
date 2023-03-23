import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import Page404 from "./pages/page404/page404.js";
import Home from "./pages/home/home.js";
import Apropos from "./pages/apropos/Apropos.js";
import Fiche from "./pages/fiche/Fiche.js";
import { useParams } from "react-router-dom";

import "../src/css/app.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fiche/:id" element={<ValidateUser />}/>
        <Route path="/*" element={<Page404 />} />
        <Route path="/fiche/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

function ValidateUser() {
  let params = useParams();
  // Utilisez params.id directement pour extraire l'ID de l'utilisateur
  let userId = params.id.match(/\d+/);
  if (!userId) {
    return <Page404 />;
  }
  // Utilisez params.id directement pour passer l'ID de l'utilisateur à Fiche
  return <Fiche id={params.id} />;
}

export default App;
