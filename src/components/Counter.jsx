import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={cardStyle}>
      <h2 style={labelStyle}>실시간 카운트</h2>

      <div style={numberStyle}>{count}</div>

      <div style={buttonContainerStyle}>
        <button
          onClick={() => setCount(count - 1)}
          style={{ ...buttonStyle, backgroundColor: "#ff6b6b" }} // 빨간색 계열
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          - 감소
        </button>

        <button
          onClick={() => setCount(0)}
          style={{ ...buttonStyle, backgroundColor: "#adb5bd" }} // 회색 계열
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          초기화
        </button>

        <button
          onClick={() => setCount(count + 1)}
          style={{ ...buttonStyle, backgroundColor: "#4dabf7" }} // 파란색 계열
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          + 증가
        </button>
      </div>
    </div>
  );
};

// 스타일 설정
const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  maxWidth: "400px",
  margin: "20px auto",
  textAlign: "center",
};

const labelStyle = {
  color: "#868e96",
  fontSize: "1rem",
  marginBottom: "10px",
};

const numberStyle = {
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#212529",
  margin: "20px 0",
};

const buttonContainerStyle = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
};

const buttonStyle = {
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

export default Counter;
