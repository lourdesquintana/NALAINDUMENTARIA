import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './styles/Register.css'
function Register() {
  const navigate = useNavigate(); // Obtiene la función navigate

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro, como enviar los datos al servidor
    // Por ahora, solo mostraremos los datos ingresados en la consola
    console.log('Nombre:', firstName);
    console.log('Apellido:', lastName);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    // Utiliza navigate para redirigir al usuario al componente Login después del registro
    navigate('/login');
  };
  return (
    <div className="container d-flex justify-content-center align-items-center ">
    <div className='card'>
      <h2 className='card-title'>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico (Gmail)
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Registrarse
        </button>
      </form>
      
    </div>
    <svg class="yellow-square" viewBox="0 0 200 655" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="32" width="1616" height="1616" rx="28" ry="28" fill="#ffc107" transform="rotate(-45 200 100)" />
      </svg>
    </div>
  );
}

export default Register;
