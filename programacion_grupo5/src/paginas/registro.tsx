const Registro = () => {
    const handleSubmit = (event: any) => {
      event.preventDefault();
      // Aquí se llamará a la API para enviar los datos a la base de datos MySQL
      window.location.href = "/cursos";
    };
  
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
          <h1>Registro</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" name="nombre" required />
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input type="text" name="apellido" required />
            </div>
            <div className="form-group">
              <label>Usuario:</label>
              <input type="text" name="usuario" required />
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input type="password" name="contraseña" required />
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento:</label>
              <input type="date" name="fechaNacimiento" required />
            </div>
            <div className="form-group">
              <label>Dirección:</label>
              <input type="text" name="direccion" required />
            </div>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <input type="email" name="correo" required />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input type="text" name="telefono" required />
            </div>
            <div className="form-group">
              <label>Carrera:</label>
              <select name="carrera" required>
                <option value="">Seleccione una carrera</option>
                <option value="Ingeniería en Sistemas">Ingeniería en Sistemas</option>
                <option value="Ingeniería en Computación">Ingeniería en Computación</option>
                <option value="Ingeniería en Electrónica">Ingeniería en Electrónica</option>
                <option value="Ingeniería en Mecánica">Ingeniería en Mecánica</option>
              </select>
            </div>
            <button type="submit">Siguiente</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Registro;