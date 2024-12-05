import React, { useState, useEffect } from 'react';
import api from '../services/api';
import UserForm from '../components/UserForm';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await api.get('/usuarios');
            setUsers(response.data);
        } catch (error) {
            setError('Erro ao carregar usuários');
        }
    };

    const handleCreateUser = async (userData) => {
        try {
            await api.post('/usuarios', userData);
            fetchUsers(); // Recarrega a lista
            alert('Usuário criado com sucesso!');
        } catch (error) {
            alert('Erro ao criar usuário');
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await api.delete(`/usuarios/${id}`);
            fetchUsers(); // Recarrega a lista
            alert('Usuário deletado com sucesso!');
        } catch (error) {
            alert('Erro ao deletar usuário');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-list-container">
            <h1>Gerenciamento de Usuários</h1>
            
            <h2>Criar Novo Usuário</h2>
            <UserForm onSubmit={handleCreateUser} buttonText="Criar Usuário" />

            <h2>Lista de Usuários</h2>
            {error && <p className="error">{error}</p>}
            <div className="user-list">
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.nome}</h3>
                        <p>{user.email}</p>
                        <button onClick={() => handleDeleteUser(user.id)}>
                            Deletar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList; 