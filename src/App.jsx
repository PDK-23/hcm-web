import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import Home from './app/pages/Home';
import Predecessors from './app/pages/Predecessors';
import HoChiMinhIdeology from './app/pages/HoChiMinhIdeology';
import Comparison from './app/pages/Comparison';
import QuizGame from './app/pages/Quizgame';
import './App.css';
import './cursor-burst.css';
import flagImg from './app/assets/vietnam-flag-icon.svg';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const burstLayerRef = useRef(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    // Create a fixed overlay div once
    const layer = document.createElement('div');
    layer.className = 'flag-global-burst-layer';
    document.body.appendChild(layer);
    burstLayerRef.current = layer;

    const throttleMs = 80;
    const spawnBurst = (x, y) => {
      const container = burstLayerRef.current;
      if (!container) return;
      const count = 10 + Math.floor(Math.random() * 8);
      for (let i = 0; i < count; i++) {
        const p = document.createElement('img');
        p.src = flagImg;
        p.alt = 'Vietnam flag';
        p.className = 'flag-burst-particle';

        const size = 10 + Math.random() * 16;
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 60;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const rot = (Math.random() * 60 - 30).toFixed(2);
        const duration = (0.6 + Math.random() * 0.9).toFixed(2);

        p.style.width = `${size}px`;
        p.style.height = 'auto';
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.style.setProperty('--dx', `${dx.toFixed(2)}px`);
        p.style.setProperty('--dy', `${dy.toFixed(2)}px`);
        p.style.setProperty('--rot', `${rot}deg`);
        p.style.animationDuration = `${duration}s`;

        p.addEventListener('animationend', () => p.remove(), { once: true });
        container.appendChild(p);
      }
    };

    const handleMove = (e) => {
      const now = performance.now();
      if (now - lastSpawnRef.current < throttleMs) return;
      lastSpawnRef.current = now;
      spawnBurst(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      layer.remove();
    };
  }, []);

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

      {/* Floating chat button */}
      <Tooltip title="Cùng hỏi Chat box nào" placement="left" overlayStyle={{ zIndex: 2147483647 }}>
        <a
          className="floating-chat-btn"
          href="https://chatgpt.com/g/g-68c4e3f247488191abcb7181c60ee725-doc-lap-dan-toc-cua-ho-chi-minh-va-cac-tien-nhan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mở chat box"
        >
          <MessageOutlined />
        </a>
      </Tooltip>
    </div>
  );
}

export default App;
