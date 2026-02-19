import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import UpDown from "./components/UpDown";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      {/* 세련된 네비게이션 바 */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "1% 5%",
          background: "#ffffff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, color: "#4dabf7", marginRight: "auto" }}>
          MyLab
        </h2>
        <Link
          to="/"
          style={{
            ...linkStyle,
            background: "#4dabf7",
            color: "white",
            borderRadius: "5px",
          }}
        >
          홈
        </Link>
        <Link
          to="/counter"
          style={{
            ...linkStyle,
            background: "#4dabf7",
            color: "white",
            borderRadius: "5px",
          }}
        >
          카운터
        </Link>
        <Link
          to="/updown"
          style={{
            ...linkStyle,
            background: "#4dabf7",
            color: "white",
            borderRadius: "5px",
          }}
        >
          업다운
        </Link>
        <Link
          to="/todo"
          style={{
            ...linkStyle,
            background: "#4dabf7",
            color: "white",
            borderRadius: "5px",
          }}
        >
          투두리스트
        </Link>
      </nav>

      {/* 메인 콘텐츠 영역 */}
      <main style={{ padding: "40px 5%", textAlign: "center" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/updown" element={<UpDown />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

// 스타일 변수
const linkStyle = {
  textDecoration: "none",
  color: "#495057",
  fontWeight: "600",
  padding: "8px 12px",
  transition: "0.2s",
};

export default App;
