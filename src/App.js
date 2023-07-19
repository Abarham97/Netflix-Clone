
import './App.css';
import Home from './components /Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBAr from './components /NavBar/NavBar';
import Favlist from './components /Favlist/Favlist';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
 <NavBAr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favlist" element={<Favlist />} />
      </Routes>
    </div>
  );
}

export default App;
