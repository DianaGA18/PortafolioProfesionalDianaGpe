// App.js
import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Python from './routes/Python';
import JavaScript from './routes/JavaScript';
import CSS from './routes/CSS';
import Php from './routes/Php';
import Kotlin from './routes/Kotlin';
import './styles.css'; // Importa la hoja de estilo

const App = () => {
  return (
    <div className="">
      <nav>
        <NavLink to="/python" activeClassName="active">| Python |</NavLink>
        <NavLink to="/javascript" activeClassName="active">| JavaScript |</NavLink>
        <NavLink to="/ctt" activeClassName="active">| C++ |</NavLink>
        <NavLink to="/c" activeClassName="active">| C |</NavLink>
        <NavLink to="/kotlin" activeClassName="active">| Kotlin |</NavLink>
        <NavLink className={'ml-96'} to="/" activeClassName="active">Diana Guadalupe González Alfaro</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/python" element={<Python />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/ctt" element={<CSS />} />
        <Route path="/c" element={<Php />} />
        <Route path="/kotlin" element={<Kotlin />} />
      </Routes>
    </div>
  );
};

export default App;
