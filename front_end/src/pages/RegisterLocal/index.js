import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const RegisterLocal = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmSenha: '',
        nomeEstabelecimento: '',
        endereco: '',
        telefone: '',
        tiposQuadra: [] // ex: ['Futebol', 'Basquete']
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/proprietarios', formData);
            alert('Cadastro realizado com sucesso!');
            navigate('/login-proprietario');
        } catch (error) {
            alert('Erro ao realizar cadastro.');
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white">
                                <h2 className="h4 mb-0">Cadastro de Local Esportivo</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    {/* Dados Pessoais */}
                                    <h5 className="mb-3">Dados do Proprietário</h5>
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nome Completo</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nome"
                                                value={formData.nome}
                                                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Dados do Estabelecimento */}
                                    <h5 className="mb-3">Dados do Estabelecimento</h5>
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nome do Estabelecimento</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nomeEstabelecimento"
                                                value={formData.nomeEstabelecimento}
                                                onChange={(e) => setFormData({...formData, nomeEstabelecimento: e.target.value})}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Telefone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Endereço Completo</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="endereco"
                                                value={formData.endereco}
                                                onChange={(e) => setFormData({...formData, endereco: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Cadastrar Estabelecimento
                                        </button>
                                        <Link to="/" className="btn btn-outline-secondary">
                                            Voltar para Home
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLocal; 