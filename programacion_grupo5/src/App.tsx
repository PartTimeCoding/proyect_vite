import './App.css';
import Registro from './paginas/registro';

const BotonRegistro = () => {
  const handleRegistro = () => {
    window.location.href = "/registro";
  };

  return (
    <div className='registro' onClick={handleRegistro}>Registrarse</div>
  );
};

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="titulo">Sistema de Gestión de Universidades</div>
        <ul className='links'>
            <li><a href="/">Inicio</a></li>
            <li><a href="/seleccion-cursos">Cursos</a></li>
            <li><a href="/inscripcion">Inscripcion</a></li>
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
        {window.location.pathname === "/registro" && <Registro />}
      </div>
    </div>
  );
}

export default App;