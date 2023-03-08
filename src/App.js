import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/home.js';
import Apropos from '../src/components/Apropos.js';
import Menu from '../src/components/menu.js';
import Page404 from '../src/components/page404.js';
import Footer from '../src/components/footer.js';
import '../src/css/app.css';
function App() {
  return (
  <>
  <Menu />
  <Routes >
  <Route path="/" element={<Home /> } />
  <Route path="/apropos" element={<Apropos /> } />
  <Route path="/*" element={<Page404 /> } />
  </Routes>
  <Footer />
  </>
  );
  }
  export default App;