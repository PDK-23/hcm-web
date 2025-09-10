import React from 'react';

const Comparison = ({ onNavigate }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">⚖️ So sánh & Giá trị thời đại</h1>
      <p className="page-subtitle">
        Phân tích sự khác biệt và giá trị thời đại của tư tưởng Hồ Chí Minh
      </p>

      <div className="card">
        <h2 className="card-title">🔄 Sự kế thừa từ tiền nhân</h2>
        <div className="card-content">
          <div className="infographic">
            <div className="infographic-item">
              <div className="infographic-icon">❤️</div>
              <h3 className="infographic-title">Khát vọng độc lập</h3>
              <p>Kế thừa tinh thần yêu nước và khát vọng độc lập của các thế hệ trước</p>
            </div>
            
            <div className="infographic-item">
              <div className="infographic-icon">🤝</div>
              <h3 className="infographic-title">Truyền thống yêu nước</h3>
              <p>Phát huy truyền thống đấu tranh kiên cường của dân tộc</p>
            </div>
            
            <div className="infographic-item">
              <div className="infographic-icon">💪</div>
              <h3 className="infographic-title">Ý chí đấu tranh</h3>
              <p>Tiếp nối ý chí quyết tâm giành độc lập của tiền nhân</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">✨ Sự khác biệt và sáng tạo</h2>
        <div className="card-content">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Khía cạnh</th>
                <th>Tiền nhân</th>
                <th>Hồ Chí Minh</th>
                <th>Ý nghĩa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Con đường</strong></td>
                <td>Bạo động hoặc cải cách</td>
                <td>Cách mạng vô sản</td>
                <td>Tìm được con đường đúng đắn</td>
              </tr>
              <tr>
                <td><strong>Lực lượng</strong></td>
                <td>Dựa vào ngoại bang</td>
                <td>Tự lực cánh sinh</td>
                <td>Không lệ thuộc, tự chủ</td>
              </tr>
              <tr>
                <td><strong>Mục tiêu</strong></td>
                <td>Chỉ độc lập dân tộc</td>
                <td>Độc lập + CNXH</td>
                <td>Toàn diện, bền vững</td>
              </tr>
              <tr>
                <td><strong>Tầm nhìn</strong></td>
                <td>Chỉ Việt Nam</td>
                <td>Gắn với thời đại</td>
                <td>Phù hợp xu thế thế giới</td>
              </tr>
              <tr>
                <td><strong>Lý luận</strong></td>
                <td>Thiếu hệ thống</td>
                <td>Có hệ thống hoàn chỉnh</td>
                <td>Khoa học, có căn cứ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">🌍 Giá trị thời đại</h2>
        <div className="card-content">
          <h3>1. Trong kháng chiến</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
            <li>Trở thành kim chỉ nam cho cuộc kháng chiến chống Pháp và Mỹ</li>
            <li>Động viên toàn dân tộc đấu tranh giành độc lập</li>
            <li>Xây dựng khối đại đoàn kết toàn dân</li>
          </ul>

          <h3>2. Trong xây dựng đất nước</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
            <li>Định hướng cho công cuộc xây dựng chủ nghĩa xã hội</li>
            <li>Bảo vệ chủ quyền và toàn vẹn lãnh thổ</li>
            <li>Phát triển kinh tế - xã hội</li>
          </ul>

          <h3>3. Trong hội nhập quốc tế</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
            <li>Giữ vững độc lập, tự chủ trong hội nhập</li>
            <li>Phát huy bản sắc dân tộc</li>
            <li>Đóng góp tích cực vào hòa bình thế giới</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">🎯 Ý nghĩa hiện tại</h2>
        <div className="card-content">
          <div className="infographic">
            <div className="infographic-item">
              <div className="infographic-icon">🏛️</div>
              <h3 className="infographic-title">Độc lập dân tộc</h3>
              <p>Tiếp tục là nguyên tắc bất di bất dịch trong chính sách đối ngoại</p>
            </div>
            
            <div className="infographic-item">
              <div className="infographic-icon">🌐</div>
              <h3 className="infographic-title">Hội nhập quốc tế</h3>
              <p>Hướng dẫn cách hội nhập mà không mất bản sắc</p>
            </div>
            
            <div className="infographic-item">
              <div className="infographic-icon">👥</div>
              <h3 className="infographic-title">Đại đoàn kết</h3>
              <p>Xây dựng khối đại đoàn kết toàn dân tộc</p>
            </div>
            
            <div className="infographic-item">
              <div className="infographic-icon">💡</div>
              <h3 className="infographic-title">Sáng tạo</h3>
              <p>Vận dụng sáng tạo vào điều kiện mới</p>
            </div>
          </div>
        </div>
      </div>

      <div className="quote">
        <p>
          "Tư tưởng Hồ Chí Minh về độc lập dân tộc không chỉ có giá trị trong quá khứ 
          mà còn là ngọn đuốc soi đường cho hiện tại và tương lai."
        </p>
      </div>

      <div className="card">
        <h2 className="card-title">📈 Kết luận</h2>
        <div className="card-content">
          <p>
            Tư tưởng Hồ Chí Minh về độc lập dân tộc là sự kế thừa và phát triển sáng tạo 
            từ các nhà yêu nước tiền bối. Người đã tìm ra con đường đúng đắn để thực hiện 
            khát vọng độc lập của dân tộc, đưa Việt Nam đến thắng lợi hoàn toàn. 
            Tư tưởng này không chỉ có giá trị lịch sử mà còn có ý nghĩa thời đại sâu sắc, 
            tiếp tục soi đường cho công cuộc xây dựng và bảo vệ Tổ quốc hiện nay.
          </p>
        </div>
      </div>

      <div className="nav-buttons">
        <button 
          className="nav-button"
          onClick={() => onNavigate('ideology')}
        >
          ← Tư tưởng Hồ Chí Minh
        </button>
        <button 
          className="nav-button"
          onClick={() => onNavigate('quiz')}
        >
          🎮 Quiz & Tương tác →
        </button>
      </div>
    </div>
  );
};

export default Comparison;
