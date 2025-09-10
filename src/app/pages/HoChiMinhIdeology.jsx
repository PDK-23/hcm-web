import React from 'react';

const HoChiMinhIdeology = ({ onNavigate }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">🌟 Tư tưởng Hồ Chí Minh</h1>
      <p className="page-subtitle">
        Khám phá những điểm sáng tạo trong tư tưởng độc lập dân tộc của Chủ tịch Hồ Chí Minh
      </p>

      <div className="hero-section">
        <div className="hero-image">
          <img
            src="/Ho-Chi-Minh.jpg"
            alt="Chủ tịch Hồ Chí Minh"
            className="hero-portrait"
          />
        </div>
        <div className="hero-content">
          <h2 className="hero-title">Chủ tịch Hồ Chí Minh (1890-1969)</h2>
          <p className="hero-description">
            Người sáng lập và lãnh đạo Đảng Cộng sản Việt Nam,
            người đã tìm ra con đường đúng đắn để giải phóng dân tộc Việt Nam
            khỏi ách thực dân và đế quốc.
          </p>
        </div>
      </div>

      <div className="quote">
        <p>
          "Không có gì quý hơn độc lập, tự do"
        </p>
        <div className="quote-author">- Hồ Chí Minh</div>
      </div>

      <div className="card">
        <h2 className="card-title">🎯 Độc lập dân tộc trong tư tưởng Hồ Chí Minh</h2>
        <div className="card-content">
          <div className="infographic">
            <div className="infographic-item">
              <div className="infographic-icon">🏛️</div>
              <h3 className="infographic-title">Thiêng liêng</h3>
              <p>Độc lập dân tộc là thiêng liêng, bất khả xâm phạm</p>
            </div>

            <div className="infographic-item">
              <div className="infographic-icon">🤝</div>
              <h3 className="infographic-title">Gắn liền</h3>
              <p>Độc lập gắn liền với tự do, hạnh phúc của nhân dân</p>
            </div>

            <div className="infographic-item">
              <div className="infographic-icon">🌍</div>
              <h3 className="infographic-title">Toàn diện</h3>
              <p>Độc lập về chính trị, kinh tế, văn hóa, xã hội</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">🛤️ Con đường cách mạng</h2>
        <div className="card-content">
          <h3>1. Đi theo con đường cách mạng vô sản</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
            <li>Tiếp thu chủ nghĩa Mác-Lênin</li>
            <li>Kết hợp độc lập dân tộc với chủ nghĩa xã hội</li>
            <li>Giải quyết cả mâu thuẫn dân tộc và giai cấp</li>
          </ul>

          <h3>2. Dựa vào sức mạnh dân tộc kết hợp sức mạnh thời đại</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
            <li>Tự lực cánh sinh là chính</li>
            <li>Tranh thủ sự ủng hộ của các lực lượng tiến bộ</li>
            <li>Đặt cách mạng Việt Nam trong quỹ đạo cách mạng thế giới</li>
          </ul>

          <h3>3. Cách mạng do quần chúng lãnh đạo</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
            <li>Không dựa vào ngoại bang</li>
            <li>Dựa vào sức mạnh của toàn dân tộc</li>
            <li>Xây dựng khối đại đoàn kết toàn dân</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">💡 Những điểm sáng tạo</h2>
        <div className="card-content">
          <div className="infographic">
            <div className="infographic-item">
              <div className="infographic-icon">🔄</div>
              <h3 className="infographic-title">Kế thừa & Sáng tạo</h3>
              <p>Kế thừa khát vọng độc lập của tiền nhân nhưng tìm ra con đường đúng đắn</p>
            </div>

            <div className="infographic-item">
              <div className="infographic-icon">🌐</div>
              <h3 className="infographic-title">Tầm nhìn thời đại</h3>
              <p>Đặt cách mạng Việt Nam trong xu thế phát triển của thế giới</p>
            </div>

            <div className="infographic-item">
              <div className="infographic-icon">👥</div>
              <h3 className="infographic-title">Lực lượng cách mạng</h3>
              <p>Xác định đúng lực lượng cách mạng là toàn dân tộc</p>
            </div>

            <div className="infographic-item">
              <div className="infographic-icon">🎯</div>
              <h3 className="infographic-title">Mục tiêu cuối cùng</h3>
              <p>Độc lập dân tộc gắn liền với chủ nghĩa xã hội</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">📊 So sánh với quan điểm tiền nhân</h2>
        <div className="card-content">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Tiêu chí</th>
                <th>Tiền nhân</th>
                <th>Hồ Chí Minh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Con đường</strong></td>
                <td>Bạo động hoặc cải cách</td>
                <td>Cách mạng vô sản</td>
              </tr>
              <tr>
                <td><strong>Lực lượng</strong></td>
                <td>Dựa vào ngoại bang</td>
                <td>Tự lực cánh sinh</td>
              </tr>
              <tr>
                <td><strong>Mục tiêu</strong></td>
                <td>Chỉ độc lập dân tộc</td>
                <td>Độc lập + CNXH</td>
              </tr>
              <tr>
                <td><strong>Tầm nhìn</strong></td>
                <td>Chỉ Việt Nam</td>
                <td>Gắn với thời đại</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="quote">
        <p>
          "Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập,
          dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn, áo mặc, ai cũng được học hành."
        </p>
        <div className="quote-author">- Hồ Chí Minh</div>
      </div>

      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={() => onNavigate('predecessors')}
        >
          ← Quan điểm tiền nhân
        </button>
        <button
          className="nav-button"
          onClick={() => onNavigate('comparison')}
        >
          ⚖️ So sánh & Giá trị thời đại →
        </button>
      </div>
    </div>
  );
};

export default HoChiMinhIdeology;
