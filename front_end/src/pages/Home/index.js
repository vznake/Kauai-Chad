import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Home = () => {
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
        <div className="home-container">
            <header className="home-header">
                <h1>TOCLOC</h1>
                <nav>
                    <Link to="/login" className="nav-button">Login</Link>
                    <div className="dropdown">
                        <button className="nav-button dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Cadastro
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="/cadastro" className="dropdown-item">Cadastro Usuário</Link></li>
                            <li><Link to="/cadastro-local" className="dropdown-item">Cadastro Proprietário</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="home-content">
                <div className="content-wrapper">
                    <h2>Bem-vindo ao TOCLOC</h2>
                    <p>Encontre e reserve quadras esportivas na sua região</p>
                    <div className="cta-buttons">
                        <Link to="/cadastro" className="cta-button">Começar como Usuário</Link>
                        <Link to="/cadastro-local" className="cta-button secondary">Cadastrar meu Local</Link>
                    </div>
                </div>
            </main>

            <section className="sports-section">
                <div className="content-wrapper">
                    <h3>Modalidades Disponíveis</h3>
                    <div className="sports-grid">
                        {sports.map((sport) => (
                            <div key={sport.name} className="sport-card">
                                <div className="sport-image">
                                    <img src={sport.image} alt={sport.name} />
                                </div>
                                <div className="sport-info">
                                    <h4>{sport.name}</h4>
                                    <p>{sport.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="home-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h5>TOCLOC</h5>
                        <p>Conectando atletas a espaços esportivos</p>
                    </div>
                    <div className="footer-section">
                        <h5>Links Úteis</h5>
                        <ul>
                            <li><Link to="/sobre">Sobre Nós</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                            <li><Link to="/termos">Termos de Uso</Link></li>
                            <li><Link to="/privacidade">Privacidade</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h5>Contato</h5>
                        <p>Email: contato@tocloc.com</p>
                        <p>Tel: (85) 9999-9999</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 TOCLOC. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home; 