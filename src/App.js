import { Routes, Route } from "react-router-dom";
import Footer from "../src/components/footer.js";
import Menu from "../src/components/menu.js";

import Page404 from "../src/pages/page404.js";
import Home from "../src/pages/home.js";
import Apropos from "../src/pages/Apropos.js";
import Fiche from "../src/pages/Fiche";

import "../src/css/app.css";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
