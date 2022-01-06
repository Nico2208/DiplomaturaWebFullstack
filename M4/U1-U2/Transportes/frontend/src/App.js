import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Galeria from './pages/Galeria';
import Servicios from './pages/Servicios';
import Novedades from './pages/Novedades';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
