import React from 'react';

function ValueOfEra({ onNavigate }) {
  const timelineEvents = [
    {
      year: 2015,
      title: 'Ký Hiệp định TPP/CPTPP',
      content: 'Bước ngoặt hội nhập, đa phương hóa quan hệ.',
      source: 'https://vnexpress.net/viet-nam-ky-hiep-dinh-tpp-3142396.html'
    },
    {
      year: 2017,
      title: 'APEC Đà Nẵng',
      content: 'Khẳng định uy tín quốc tế, làm bạn với tất cả các nước.',
      source: 'https://vnexpress.net/apec-2017'
    },
    {
      year: '2020-2021',
      title: 'Ủy viên HĐBA LHQ & Ứng phó COVID-19',
      content: 'Tiếng nói tích cực về hòa bình, kiểm soát dịch hiệu quả.',
      source: 'https://baochinhphu.vn/viet-nam-hoan-thanh-xuat-sac-vai-tro-uy-vien-khong-thuong-truc-hdba-lhq-102306286.htm#:~:text=C%C3%A1c%20%C4%91%E1%BA%A1i%20bi%E1%BB%83u%20%C4%91%E1%BB%81u%20nh%E1%BA%A5t%20tr%C3%AD%20%C4%91%C3%A1nh%20gi%C3%A1,n%C6%B0%E1%BB%9Bc%2C%20kh%E1%BB%A7ng%20b%E1%BB%91%2C%20t%E1%BB%99i%20ph%E1%BA%A1m%20xuy%C3%AAn%20qu%E1%BB%91c%20gia'
    },
    {
      year: 2021,
      title: 'Cam kết Net Zero 2050',
      content: 'Trách nhiệm toàn cầu, phát triển bền vững tại COP26.',
      source: 'https://moit.gov.vn/bao-ve-moi-truong/no-luc-thuc-hien-cac-cam-ket-cua-viet-nam-tai-hoi-nghi-cop26.html'
    },
    {
      year: 2023,
      title: 'Quan hệ Việt-Mỹ & Năng lượng xanh',
      content: 'Đối tác chiến lược toàn diện, dẫn đầu ASEAN về điện mặt trời.',
      source: 'https://laodong.vn/thoi-su/viet-my-ky-nhieu-thoa-thuan-cong-nghe-nang-luong-1398589.ldo'
    },
    {
      year: 2024,
      title: 'Thành tựu kinh tế-xã hội',
      content: 'Tỷ lệ hộ nghèo <2%, GDP vượt 430 tỷ USD.',
      source: 'https://thanhnien.vn/gdp-dat-430-ti-usd-viet-nam-vao-nhom-trung-binh-cao-cua-the-gioi-185240520233752573.htm'
    },
    {
      year: 2025,
      title: 'Phát triển toàn diện',
      content: 'GDP >500 tỷ USD, Vietnam Today TV, 30 năm quan hệ Việt-Mỹ.',
      source: 'https://vtv.vn/kinh-te/quy-mo-nen-kinh-te-nam-2025-co-the-dat-500-ty-usd-20241023204017161.htm\n https://vietnamtoday.vtv.vn/\n https://laodong.vn/the-gioi/hanh-trinh-dang-nho-30-nam-quan-he-viet-my-1451344.ldo'
    },
  ];

  const timelineStyles = {
    container: {
      background: 'rgba(255, 255, 255, 0.98)',
      borderRadius: '20px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
    },
    event: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start',
      marginBottom: '2rem',
      position: 'relative'
    },
    year: {
      minWidth: '120px',
      background: '#da251d',
      color: '#ffd700',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(218, 37, 29, 0.2)'
    },
    content: {
      flex: 1,
      background: 'white',
      padding: '1.5rem',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      borderLeft: '4px solid #ffd700'
    },
    sourceLink: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#da251d',
      textDecoration: 'none',
      fontSize: '0.9rem',
      padding: '4px 8px',
      borderRadius: '12px',
      background: 'rgba(255, 215, 0, 0.1)',
      transition: 'all 0.3s ease',
      marginTop: '8px'
    },
    sourcesContainer: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginTop: '10px',
      borderTop: '1px dashed #eee',
      paddingTop: '10px'
    }
  };

  const formatSources = (sourceString) => {
    return sourceString.split('\n').map(url => {
      // Extract domain name for display
      const domain = new URL(url).hostname.replace('www.', '');
      return { url, domain };
    });
  };

  return (
    <div className="page-container">
      <div className="banner" style={{ marginBottom: '3rem' }}>
        <h1 className="banner-title">Giá Trị Thời Đại của Tư Tưởng Hồ Chí Minh</h1>
        <p className="banner-subtitle">Trong 10 năm gần đây (2015-2025)</p>
      </div>

      {/* Timeline Section */}
      <div style={timelineStyles.container}>
        {timelineEvents.map((event, index) => (
          <div key={index} style={timelineStyles.event}>
            <div style={timelineStyles.year}>{event.year}</div>
            <div style={timelineStyles.content}>
              <h3 style={{ color: '#da251d', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                {event.title}
              </h3>
              <p style={{ marginBottom: '0.5rem' }}>{event.content}</p>
              <div style={timelineStyles.sourcesContainer}>
                {formatSources(event.source).map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={timelineStyles.sourceLink}
                    onMouseOver={(e) => {
                      e.target.style.background = 'rgba(218, 37, 29, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'rgba(255, 215, 0, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    🔗 {source.domain}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* International Comparison */}
      <div className="infographic" style={{ marginBottom: '3rem' }}>
        <div className="infographic-item">
          <h3 className="infographic-title">Pháp (2025)</h3>
          <p>Biểu tình "Block Everything" phản đối cắt giảm ngân sách 52 tỷ USD  → xã hội bất ổn do chính sách thiếu công bằng.</p>
          <a
            href="https://vnexpress.net/bieu-tinh-phan-doi-chinh-phu-lan-rong-o-phap-4937558.html"
            target="_blank"
            rel="noopener noreferrer"
            style={timelineStyles.sourceLink}
          >
            🔗 vnexpress.net
          </a>
        </div>
        <div className="infographic-item">
          <h3 className="infographic-title">Nepal (2025)</h3>
          <p>Biểu tình "Gen Z" chống tham nhũng, bất bình đẳng, thất nghiệp → bạo động, Thủ tướng phải từ chức.</p>
          <a
            href="https://www.bbc.com/vietnamese/articles/cwy8403nrj1o"
            target="_blank"
            rel="noopener noreferrer"
            style={timelineStyles.sourceLink}
          >
            🔗 bbc.com
          </a>
        </div>
      </div>

      {/* Conclusion */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #fff9e6 0%, #fff 100%)' }}>
        <h2 className="card-title" style={{ textAlign: 'center' }}>Kết luận</h2>
        <div className="card-content">
          <p style={{ marginBottom: '1rem' }}>
            <strong>Trong hơn 10 năm qua, Việt Nam kiên định đường lối Hồ Chí Minh:</strong>
          </p>
          <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
            <li>Đối nội: ổn định chính trị, cải cách bộ máy, giảm nghèo, tăng trưởng kinh tế.</li>
            <li>Đối ngoại: hội nhập sâu rộng, cân bằng quan hệ với các cường quốc.</li>
          </ul>
          <p style={{ color: '#da251d', fontWeight: 'bold', textAlign: 'center', marginTop: '1rem' }}>
            → Khẳng định giá trị thời đại của tư tưởng Hồ Chí Minh: độc lập dân tộc phải gắn với tự do, hạnh phúc nhân dân.
          </p>
        </div>
      </div>

      <div className="nav-buttons">
        <button className="nav-button" onClick={() => onNavigate('comparison')}>
          ← So sánh & Giá trị
        </button>
        <button className="nav-button" onClick={() => onNavigate('quiz')}>
          Kiểm tra kiến thức →
        </button>
      </div>
    </div>
  );
}

export default ValueOfEra;
