import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css';

const Reservation = () => {
    const { sport, locationId } = useParams();
    const navigate = useNavigate();
    const [selectedTime, setSelectedTime] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [reservationStatus, setReservationStatus] = useState(null);
    const [showCheckingPopup, setShowCheckingPopup] = useState(false);

    // Dados mockados dos horários disponíveis
    const availableTimes = [
        { id: 1, time: '08:00', available: true },
        { id: 2, time: '09:00', available: true },
        { id: 3, time: '10:00', available: false },
        { id: 4, time: '11:00', available: true },
        { id: 5, time: '14:00', available: true },
        { id: 6, time: '15:00', available: false },
        { id: 7, time: '16:00', available: true },
        { id: 8, time: '17:00', available: true }
    ];

    const handleTimeSelect = (timeSlot) => {
        if (timeSlot.available) {
            setSelectedTime(timeSlot);
            setShowConfirmation(true);
        }
    };

    const handleReservation = () => {
        setReservationStatus('confirmed');
        setShowConfirmation(false);
    };

    const handleCheckin = () => {
        setShowCheckingPopup(true);
        // Aqui você pode adicionar a lógica para notificar o local
        setTimeout(() => {
            // Simulando resposta do local após 3 segundos
            setShowCheckingPopup(false);
            setReservationStatus('checked');
        }, 3000);
    };

    return (
        <div className="reservation-container">
            <header className="reservation-header">
                <button onClick={() => navigate(-1)} className="back-button">
                    ← Voltar
                </button>
                <h1>Reserva de Horário</h1>
            </header>

            <main className="reservation-content">
                <div className="time-slots-grid">
                    {availableTimes.map((timeSlot) => (
                        <button
                            key={timeSlot.id}
                            className={`time-slot ${!timeSlot.available ? 'unavailable' : ''} 
                                      ${selectedTime?.id === timeSlot.id ? 'selected' : ''}`}
                            onClick={() => handleTimeSelect(timeSlot)}
                            disabled={!timeSlot.available}
                        >
                            {timeSlot.time}
                        </button>
                    ))}
                </div>

                {showConfirmation && (
                    <div className="confirmation-modal">
                        <div className="modal-content">
                            <h2>Confirmar Reserva</h2>
                            <p>Deseja confirmar a reserva para {selectedTime.time}?</p>
                            <div className="modal-buttons">
                                <button onClick={handleReservation} className="confirm-button">
                                    Confirmar
                                </button>
                                <button onClick={() => setShowConfirmation(false)} className="cancel-button">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {reservationStatus === 'confirmed' && (
                    <div className="reservation-status">
                        <h3>Reserva Confirmada!</h3>
                        <p>Horário: {selectedTime.time}</p>
                        <button onClick={handleCheckin} className="checkin-button">
                            Fazer Check-in
                        </button>
                    </div>
                )}

                {showCheckingPopup && (
                    <div className="checking-popup">
                        <div className="popup-content">
                            <div className="loader"></div>
                            <p>Aguardando confirmação do local...</p>
                        </div>
                    </div>
                )}

                {reservationStatus === 'checked' && (
                    <div className="checked-status">
                        <h3>Check-in Confirmado!</h3>
                        <p>Aproveite sua atividade!</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Reservation; 