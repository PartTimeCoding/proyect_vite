
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseSelection from './paginas/CourseSelection';
import './App.css';

// Páginas adicionales (puedes crear estos componentes)
const Home = () => <div>Página de inicio</div>;
const Dashboard = () => <div>Panel de control</div>;

function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/">Inicio</Link>
                <Link to="/dashboard">Panel</Link>
                <Link to="/seleccion-cursos">Seleccionar Cursos</Link>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/seleccion-cursos" element={<CourseSelection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;