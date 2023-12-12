import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Login.css'
function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        // Realiza cualquier lógica de autenticación aquí
      
        // Redirige al usuario a la página de inicio después del inicio de sesión
        navigate('/');
      };
      
    return (
        <div className="container ">
            <div className="card">
                
                    <h3 className="card-title ">Inicio de Sesión</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Nombre de Usuario
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Ingresa tu nombre de usuario"
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
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div className="d-grid">
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={handleLogin}
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                    <p>No tienes una cuenta aún? <Link to="/register">Regístrate</Link></p>
            </div>
            <svg class="yellow-square" viewBox="0 0 200 655" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="32" width="1616" height="1616" rx="28" ry="28" fill="#ffc107" transform="rotate(-45 200 100)" />
      </svg>
        </div>
    );
}

export default Login;
