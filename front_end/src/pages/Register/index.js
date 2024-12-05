import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import api from '../../services/api';
import './styles.css';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = async (formData) => {
        try {
            await api.post('/usuarios', formData);
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (error) {
            alert('Erro ao realizar cadastro. Tente novamente.');
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center mb-4">Criar Conta</h2>
                        <UserForm 
                            onSubmit={handleRegister} 
                            buttonText="Criar Conta" 
                            isLogin={false} 
                        />
                        <div className="text-center mt-3">
                            <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
                            <Link to="/" className="btn btn-outline-secondary mt-2">Voltar para Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register; 