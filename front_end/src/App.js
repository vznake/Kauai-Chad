import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterLocal from './pages/RegisterLocal';
import Dashboard from './pages/Dashboard';
import SportLocations from './pages/SportLocations';
import Reservation from './pages/Reservation';
import { useState } from 'react';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/cadastro-local" element={<RegisterLocal />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/locais/:sport" element={<SportLocations />} />
                <Route path="/teste-post" element={<TestForm />} />
                <Route path="/reserva/:sport/:locationId" element={<Reservation />} />
            </Routes>
        </Router>
    );
}

function TestForm() {
  const [formData, setFormData] = useState({
    campo1: '',
    campo2: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/sua-rota', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Resposta:', data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.campo1}
        onChange={(e) => setFormData({...formData, campo1: e.target.value})}
        placeholder="Campo 1"
      />
      <input
        type="text"
        value={formData.campo2}
        onChange={(e) => setFormData({...formData, campo2: e.target.value})}
        placeholder="Campo 2"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
