function Home() {
  return (
    <div
      style={{
        background: "white",
        padding: "50px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        marginTop: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#212529" }}>반갑습니다! 👋</h1>
      <p style={{ color: "#868e96", fontSize: "1.1rem" }}>
        현재 리액트로 멋진 프로젝트를 구축 중이시군요.
      </p>
    </div>
  );
}

// ⬇️ 이 줄이 없으면 App.jsx에서 Home을 찾을 수 없습니다!
export default Home;
