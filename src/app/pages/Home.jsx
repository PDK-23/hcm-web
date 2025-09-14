import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <div className="page-container">
      <div className="banner">
        <h1 className="banner-title">
          "Độc lập dân tộc – từ khát vọng tiền nhân đến tư tưởng Hồ Chí Minh"
        </h1>
        <p className="banner-subtitle">
          Các nhà yêu nước trước Hồ Chí Minh đều khát khao độc lập, nhưng con đường khác nhau.
          Hồ Chí Minh kế thừa và sáng tạo, đưa dân tộc đến thắng lợi.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">🎯 Mục tiêu bài thuyết trình</h2>
        <div className="card-content">
          <p>
            Bài thuyết trình này sẽ giúp chúng ta hiểu rõ sự phát triển tư tưởng độc lập dân tộc
            từ các nhà yêu nước tiền bối đến tư tưởng Hồ Chí Minh, qua đó thấy được sự kế thừa,
            sáng tạo và giá trị thời đại của tư tưởng Hồ Chí Minh.
          </p>
        </div>
      </div>

      <div className="infographic">
        <div className="infographic-item">
          <div className="infographic-icon">📜</div>
          <h3 className="infographic-title">Quan điểm tiền nhân</h3>
          <p>Tìm hiểu tư tưởng của Phan Bội Châu và Phan Châu Trinh về con đường cứu nước</p>
        </div>

        <div className="infographic-item">
          <div className="infographic-icon">🌟</div>
          <h3 className="infographic-title">Tư tưởng Hồ Chí Minh</h3>
          <p>Khám phá những điểm sáng tạo trong tư tưởng độc lập dân tộc của Người</p>
        </div>

        <div className="infographic-item">
          <div className="infographic-icon">⚖️</div>
          <h3 className="infographic-title">So sánh & Giá trị</h3>
          <p>Phân tích sự khác biệt và giá trị thời đại của tư tưởng Hồ Chí Minh</p>
        </div>

        <div className="infographic-item">
          <div className="infographic-icon">🌐</div>
          <h3 className="infographic-title">Dẫn chứng từ bối cảnh</h3>
          <p>Xã hội, kinh tế – chính trị hiện nay minh chứng giá trị thời đại của tư tưởng Hồ Chí Minh</p>
        </div>

        <div className="infographic-item">
          <div className="infographic-icon">🎮</div>
          <h3 className="infographic-title">Quiz & Tương tác</h3>
          <p>Kiểm tra kiến thức và tương tác với nội dung bài học</p>
        </div>
      </div>

      <div className="quote">
        <p>
          "Không có gì quý hơn độc lập, tự do"
        </p>
        <div className="quote-author">- Hồ Chí Minh</div>
      </div>

      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={() => onNavigate('predecessors')}
        >
          📜 Quan điểm tiền nhân
        </button>
        <button
          className="nav-button"
          onClick={() => onNavigate('ideology')}
        >
          🌟 Tư tưởng Hồ Chí Minh
        </button>
        <button
          className="nav-button"
          onClick={() => onNavigate('comparison')}
        >
          ⚖️ So sánh & Giá trị thời đại
        </button>
        <button
          className="nav-button"
          onClick={() => onNavigate('valueOfEra')}
        >
          ⚖️ Dẫn chứng từ bối cảnh
        </button>
        <button
          className="nav-button"
          onClick={() => onNavigate('quiz')}
        >
          🎮 Quiz & Tương tác
        </button>
      </div>
    </div>
  );
};

export default Home;
