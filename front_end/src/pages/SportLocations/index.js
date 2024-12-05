import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css';

const SportLocations = () => {
    const { sport } = useParams();
    const navigate = useNavigate();

    // Dados mockados para exemplo
    const locations = {
        futebol: [
            { id: 1, name: 'Arena Soccer', address: 'Rua A, 123', price: '80/hora', image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800' },
            { id: 2, name: 'Campo Society', address: 'Rua B, 456', price: '100/hora', image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800' },
            { id: 3, name: 'Estádio Municipal', address: 'Rua C, 789', price: '120/hora', image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800' }
        ],
        volei: [
            { id: 1, name: 'Quadra de Areia', address: 'Rua D, 123', price: '60/hora', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800' },
            { id: 2, name: 'Ginásio Coberto', address: 'Rua E, 456', price: '80/hora', image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?w=800' },
            { id: 3, name: 'Arena Vôlei', address: 'Rua F, 789', price: '90/hora', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800' }
        ],
        basquete: [
            { id: 1, name: 'Quadra NBA', address: 'Rua G, 123', price: '70/hora', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800' },
            { id: 2, name: 'Street Basketball', address: 'Rua H, 456', price: '50/hora', image: 'https://images.unsplash.com/photo-1544919982-4aa493ea9305?w=800' },
            { id: 3, name: 'Arena Basquete', address: 'Rua I, 789', price: '85/hora', image: 'https://images.unsplash.com/photo-1505666287802-931dc83a75ed?w=800' }
        ]
    };

    const currentLocations = locations[sport] || [];

    return (
        <div className="locations-container">
            <header className="locations-header">
                <div className="header-content">
                    <button onClick={() => navigate('/dashboard')} className="back-button">
                        ← Voltar
                    </button>
                    <h1>Locais disponíveis para {sport}</h1>
                </div>
            </header>

            <main className="locations-content">
                <div className="locations-grid">
                    {currentLocations.map(location => (
                        <div key={location.id} className="location-card">
                            <div className="location-image">
                                <img src={location.image} alt={location.name} />
                            </div>
                            <div className="location-info">
                                <h3>{location.name}</h3>
                                <p className="address">{location.address}</p>
                                <p className="price">R$ {location.price}</p>
                                <button 
                                    className="reserve-button"
                                    onClick={() => navigate(`/reserva/${sport}/${location.id}`)}
                                >
                                    Reservar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SportLocations; 