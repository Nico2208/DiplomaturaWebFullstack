import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Galeria from './pages/Galeria';
import Novedades from './pages/Novedades';



function App() {
  return (

    <Router>

      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/novedades' exact element={<Novedades/>}/>
        <Route path='/nosotros' exact element={<Nosotros/>}/>
        <Route path='/servicios' exact element={<Servicios/>}/>
        <Route path='/contacto' exact element={<Contacto/>}/>
        <Route path='/galeria' exact element={<Galeria/>}/>
      </Routes>
      <Footer></Footer>

    </Router>
  );
}

export default App;
