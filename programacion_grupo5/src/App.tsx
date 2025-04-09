import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Registro from './paginas/registro';

const BotonRegistro = () => {
  const navigate = useNavigate();

  const handleRegistro = () => {
    navigate("/registro");
  };

  return (
    <div className='registro' onClick={handleRegistro}>Registrarse</div>
  );
};

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="titulo">Sistema de Gestión de Universidades</div>
        <ul className='links'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/seleccion-cursos">Cursos</Link></li>
            <li><Link to="/inscripcion">Inscripcion</Link></li>
        </ul>
      </nav>

      <div className="container">
        <div className='imagenAlumnos'>
          <img src ='src\assets\images\classroom-2787754_1920.jpg'></img>
          <p>Matriculate Ya!</p>
        </div>
        <div className='panelBotones'>
          <div>
            <p>Si ya te registraste en el sistema, dale click aqui para Iniciar Sesion y matricular tus cursos!</p>
            <div className='login'>Iniciar Sesión</div>
          </div>
          <div>
            <p>Si todavia no te haz registrado, dale click aqui para comenzar tu proceso de matricula!</p>
            <BotonRegistro />
          </div>
        </div>
        <Routes>
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;