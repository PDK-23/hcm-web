import React from 'react';

const Predecessors = ({ onNavigate }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">📜 Quan điểm tiền nhân</h1>
      <p className="page-subtitle">
        Tìm hiểu về các nhà yêu nước tiền bối và con đường cứu nước của họ
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="card">
            <div className="historical-figure">
              <div className="figure-image">
                <img
                  src="/Phan_Boi_Chau.jpg"
                  alt="Phan Bội Châu (1867-1940)"
                  className="portrait-image"
                />
              </div>
              <div className="figure-info">
                <h2 className="card-title">Phan Bội Châu (1867-1940)</h2>
              </div>
            </div>
            <div className="card-content">
              <h3>🏛️ Chủ trương:</h3>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li><strong>Bạo động cách mạng:</strong> Chủ trương dùng bạo lực để đánh đuổi thực dân Pháp</li>
                <li><strong>Cầu viện ngoại bang:</strong> Dựa vào sự giúp đỡ của Nhật Bản và Trung Quốc</li>
                <li><strong>Phong trào Đông Du:</strong> Đưa thanh niên sang Nhật học tập để chuẩn bị lực lượng</li>
              </ul>

              <h3 style={{ marginTop: '1.5rem' }}>⚡ Đặc điểm:</h3>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Khát vọng độc lập lớn lao</li>
                <li>Thiếu tính tự lực, phụ thuộc vào ngoại bang</li>
                <li>Chưa có hệ thống lý luận hoàn chỉnh</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="card">
            <div className="historical-figure">
              <div className="figure-image">
                <img
                  src="/Phan-Chau-Trinh.jpg"
                  alt="Phan Châu Trinh (1872-1926)"
                  className="portrait-image"
                />
              </div>
              <div className="figure-info">
                <h2 className="card-title">Phan Châu Trinh (1872-1926)</h2>
              </div>
            </div>
            <div className="card-content">
              <h3>🏛️ Chủ trương:</h3>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li><strong>Cải cách văn hóa:</strong> "Khai dân trí, chấn dân khí, hậu dân sinh"</li>
                <li><strong>Đấu tranh hòa bình:</strong> Không chủ trương bạo động</li>
                <li><strong>Trông chờ Pháp:</strong> Hy vọng Pháp sẽ canh tân, không đặt vấn đề giành chính quyền</li>
              </ul>

              <h3 style={{ marginTop: '1.5rem' }}>⚡ Đặc điểm:</h3>
              <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
                <li>Chú trọng nâng cao dân trí</li>
                <li>Thiếu tính cách mạng triệt để</li>
                <li>Không đặt vấn đề giành chính quyền</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">🔍 Điểm chung của các nhà yêu nước tiền bối</h2>
        <div className="card-content">
          <div className="infographic">
            <div className="infographic-item">
              <div className="infographic-icon">❤️</div>
              <h3 className="infographic-title">Lòng yêu nước</h3>
              <p>Đều có tinh thần yêu nước nồng nàn, khát khao độc lập</p>
            </div>

            <div className="infographic-item">
              <div className="infographic-icon">🎯</div>
              <h3 className="infographic-title">Mục tiêu chung</h3>
              <p>Đều hướng tới mục tiêu giải phóng dân tộc khỏi ách thực dân</p>
            </div>

            <div className="infographic-item">
              <div className="infographic-icon">⚠️</div>
              <h3 className="infographic-title">Hạn chế</h3>
              <p>Thiếu tính tự lực, chưa có con đường đúng đắn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="quote">
        <p>
          "Các nhà yêu nước trước Hồ Chí Minh đều có khát vọng độc lập,
          nhưng chưa tìm được con đường đúng đắn để thực hiện khát vọng đó."
        </p>
      </div>

      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={() => onNavigate('home')}
        >
          🏠 Về trang chủ
        </button>
        <button
          className="nav-button"
          onClick={() => onNavigate('ideology')}
        >
          🌟 Tư tưởng Hồ Chí Minh →
        </button>
      </div>
    </div>
  );
};

export default Predecessors;
