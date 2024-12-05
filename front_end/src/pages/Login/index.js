import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import api from '../../services/api';
import './styles.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {
            const response = await api.post('/login', formData);
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center mb-4">Login</h2>
                        <UserForm 
                            onSubmit={handleLogin} 
                            buttonText="Entrar" 
                            isLogin={true} 
                        />
                        <div className="text-center mt-3">
                            <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                            <Link to="/" className="btn btn-outline-secondary mt-2">Voltar para Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 