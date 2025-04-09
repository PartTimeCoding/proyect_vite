import { useState } from "react";
import "../App.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    usuario: "",
    contrasena: "",
  });

  const [errores, setErrores] = useState<string | null>(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    const { nombre, apellido, correo, telefono, usuario, contrasena } =
      formData;

    if (
      !nombre ||
      !apellido ||
      !correo ||
      !telefono ||
      !usuario ||
      !contrasena
    ) {
      return "Todos los campos son obligatorios.";
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      return "Correo electrónico no es válido.";
    }

    if (telefono.length < 8) {
      return "Número de teléfono debe tener al menos 8 dígitos.";
    }

    if (contrasena.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres.";
    }

    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const error = validarFormulario();
    if (error) {
      setErrores(error);
    } else {
      setErrores(null);
      console.log("Datos enviados:", formData);
      setMostrarModal(true); // Muestra el modal
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    // Aquí podrías limpiar el formulario si quieres
    setFormData({
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      usuario: "",
      contrasena: "",
    });
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="title">
          Página 2: Formulario de Registro de Estudiante
        </h2>

        <form onSubmit={handleSubmit} className="form-section">
          <h3 className="section-title">Información del Estudiante</h3>

          <div className="grid">
            <input
              name="nombre"
              placeholder="Nombre*"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              name="apellido"
              placeholder="Apellido*"
              value={formData.apellido}
              onChange={handleChange}
            />
            <input
              name="correo"
              type="email"
              placeholder="Correo Electrónico*"
              value={formData.correo}
              onChange={handleChange}
            />
            <input
              name="telefono"
              placeholder="Número de Teléfono*"
              value={formData.telefono}
              onChange={handleChange}
            />
            <input
              name="usuario"
              placeholder="Nombre de Usuario*"
              value={formData.usuario}
              onChange={handleChange}
            />
            <input
              name="contrasena"
              type="password"
              placeholder="Contraseña*"
              value={formData.contrasena}
              onChange={handleChange}
            />
          </div>

          {errores && (
            <p style={{ color: "red", marginTop: "1rem" }}>{errores}</p>
          )}

          <div className="actions">
            <button
              type="button"
              className="cancel-button"
              onClick={() =>
                setFormData({
                  nombre: "",
                  apellido: "",
                  correo: "",
                  telefono: "",
                  usuario: "",
                  contrasena: "",
                })
              }
            >
              Cancelar
            </button>
            <button type="submit" className="continue-button">
              Continuar
            </button>
          </div>
        </form>
      </div>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>✅ Datos enviados correctamente</h3>
            <button onClick={cerrarModal}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
