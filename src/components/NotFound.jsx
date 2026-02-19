import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={containerStyle}>
      <div style={iconStyle}>😵</div>
      <h1 style={titleStyle}>404 - 페이지를 찾을 수 없습니다</h1>
      <p style={descriptionStyle}>
        죄송합니다. 요청하신 페이지가 삭제되었거나 <br />
        주소가 잘못 입력된 것 같습니다.
      </p>

      <Link to="/" style={homeButtonStyle}>
        홈으로 돌아가기
      </Link>
    </div>
  );
};

// --- 스타일 설정 ---
const containerStyle = {
  background: "white",
  padding: "60px 20px",
  borderRadius: "24px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
  maxWidth: "500px",
  margin: "50px auto",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "5rem",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "1.8rem",
  color: "#212529",
  marginBottom: "15px",
};

const descriptionStyle = {
  fontSize: "1rem",
  color: "#868e96",
  lineHeight: "1.6",
  marginBottom: "30px",
};

const homeButtonStyle = {
  display: "inline-block",
  backgroundColor: "#4dabf7",
  color: "white",
  padding: "12px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "all 0.2s ease",
  boxShadow: "0 4px 12px rgba(77, 171, 247, 0.3)",
};

export default NotFound;
