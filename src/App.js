import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import Page404 from "../src/pages/page404/page404.js";
import Home from "../src/pages/home/home.js";
import Apropos from "./pages/apropos/Apropos.js";
import Contact from "./pages/contact/Contact.js";
import Fiche from "./pages/fiche/Fiche.js";
import { useParams } from "react-router-dom";
import logement from "../src/json/logement.json";

import "../src/css/app.css";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fiche/:id" element={<ValidateUser />}errorElement={<Page404 />}/>
        <Route path="/*" element={<Page404 />} />
        <Route path="/fiche/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

function ValidateUser() {
  let params = useParams();
  const element = logement.find((item) => item.id === params.id);
  if (!element) {
    return <Page404 />;
  }
  return <Fiche id={params.id} />;
}

export default App;