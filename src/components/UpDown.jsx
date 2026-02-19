import React, { useState } from "react";

const UpDown = () => {
  const [num, setNum] = useState(0);

  // 숫자의 상태에 따라 색상을 변경해줍니다.
  const getNumColor = () => {
    if (num > 0) return "#4dabf7"; // 양수일 때 파란색
    if (num < 0) return "#ff6b6b"; // 음수일 때 빨간색
    return "#adb5bd"; // 0일 때 회색
  };

  // 상태 메시지를 한글로 정의합니다.
  const getStatusText = () => {
    if (num === 0) return "유지 중";
    if (num > 0) return "상승 추세";
    return "하락 추세";
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>데이터 수치 모니터링</h3>

      <div style={displaySectionStyle}>
        <div style={{ ...numberStyle, color: getNumColor() }}>{num}</div>
        <div style={{ ...statusTextStyle, color: getNumColor() }}>
          {getStatusText()}
        </div>
      </div>

      <div style={buttonWrapperStyle}>
        <button
          onClick={() => setNum(num + 1)}
          style={{ ...btnStyle, border: "2px solid #4dabf7", color: "#4dabf7" }}
          onMouseOver={(e) => (e.target.style.background = "#e7f5ff")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          ▲ 수치 증가
        </button>

        <button
          onClick={() => setNum(num - 1)}
          style={{ ...btnStyle, border: "2px solid #ff6b6b", color: "#ff6b6b" }}
          onMouseOver={(e) => (e.target.style.background = "#fff5f5")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          ▼ 수치 감소
        </button>
      </div>
    </div>
  );
};

// --- 스타일 (이전과 동일하게 유지하여 일관성을 줍니다) ---
const containerStyle = {
  background: "#ffffff",
  padding: "40px",
  borderRadius: "24px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  maxWidth: "450px",
  margin: "30px auto",
  textAlign: "center",
  border: "1px solid #f1f3f5",
};

const headerStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#495057",
  marginBottom: "30px",
};

const displaySectionStyle = {
  marginBottom: "40px",
};

const numberStyle = {
  fontSize: "5rem",
  fontWeight: "800",
  lineHeight: "1.2",
  transition: "all 0.3s ease",
};

const statusTextStyle = {
  fontSize: "1.1rem",
  fontWeight: "700",
  marginTop: "10px",
  letterSpacing: "0.5px",
};

const buttonWrapperStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
};

const btnStyle = {
  padding: "15px",
  borderRadius: "12px",
  background: "transparent",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

export default UpDown;
