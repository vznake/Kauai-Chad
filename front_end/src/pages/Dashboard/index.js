import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleSportSelect = (sport) => {
        // Normaliza o nome do esporte para a URL
        const sportUrl = sport.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/[^a-z0-9]/g, ''); // Remove caracteres especiais
        
        navigate(`/locais/${sportUrl}`);
    };

    const sports = [
        {
            name: 'Futebol',
            image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop',
            description: 'Encontre os melhores campos'
        },
        {
            name: 'Vôlei',
            image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?w=800&auto=format&fit=crop',
            description: 'Quadras preparadas para vôlei'
        },
        {
            name: 'Basquete',
            image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop',
            description: 'Quadras ideais para basquete'
        }
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Bem-vindo ao TOCLOC</h1>
                <button onClick={handleLogout} className="logout-button">
                    Sair
                </button>
            </header>
            
            <main className="dashboard-content">
                <section className="sports-section">
                    <h2>Escolha seu Esporte</h2>
                    <div className="sports-grid">
                        {sports.map((sport) => (
                            <div 
                                key={sport.name} 
                                className="sport-card"
                                onClick={() => handleSportSelect(sport.name)}
                            >
                                <div className="sport-image">
                                    <img src={sport.image} alt={sport.name} />
                                </div>
                                <div className="sport-info">
                                    <h3>{sport.name}</h3>
                                    <p>{sport.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="reservas-section">
                    <h2>Suas Reservas</h2>
                    <div className="reservas-grid">
                        <p>Nenhuma reserva encontrada</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard; 