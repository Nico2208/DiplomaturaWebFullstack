import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
