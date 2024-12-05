import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserForm.css';

const UserForm = ({ onSubmit, buttonText, isLogin }) => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmSenha: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="mb-4">
                            <label className="form-label">Confirmar Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmSenha"
                                value={formData.confirmSenha}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            {buttonText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm; 