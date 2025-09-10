import React, { useState } from 'react';
import Home from './app/pages/Home';
import Predecessors from './app/pages/Predecessors';
import HoChiMinhIdeology from './app/pages/HoChiMinhIdeology';
import Comparison from './app/pages/Comparison';
import QuizGame from './app/pages/Quizgame';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'predecessors':
        return <Predecessors onNavigate={setCurrentPage} />;
      case 'ideology':
        return <HoChiMinhIdeology onNavigate={setCurrentPage} />;
      case 'comparison':
        return <Comparison onNavigate={setCurrentPage} />;
      case 'quiz':
        return <QuizGame onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Tư tưởng Hồ Chí Minh</span>
          </div>
          <div className="nav-menu">
            <button
              className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              🏠 Trang chủ
            </button>
            <button
              className={`nav-item ${currentPage === 'predecessors' ? 'active' : ''}`}
              onClick={() => setCurrentPage('predecessors')}
            >
              📜 Quan điểm tiền nhân
            </button>
            <button
              className={`nav-item ${currentPage === 'ideology' ? 'active' : ''}`}
              onClick={() => setCurrentPage('ideology')}
            >
              🌟 Tư tưởng Hồ Chí Minh
            </button>
            <button
              className={`nav-item ${currentPage === 'comparison' ? 'active' : ''}`}
              onClick={() => setCurrentPage('comparison')}
            >
              ⚖️ So sánh & Giá trị
            </button>
            <button
              className={`nav-item ${currentPage === 'quiz' ? 'active' : ''}`}
              onClick={() => setCurrentPage('quiz')}
            >
              🎮 Quiz & Tương tác
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
