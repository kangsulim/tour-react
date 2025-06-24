import { useState, useEffect } from "react";
import AuthModal from "./AuthModal.tsx";
import { Link } from "react-router-dom";

export default function Header() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 컴포넌트 최초 마운트 시 한 번만 로그인 상태 확인
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
    // 로그인 성공 후 상태 업데이트
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };
  
  const handleOpenSignupModal = () => {
    setOpenLoginModal(false);
    setOpenSignupModal(true);
  };
  
  const handleCloseSignupModal = () => setOpenSignupModal(false);
  
  const handleBackToLogin = () => {
    setOpenSignupModal(false);
    setOpenLoginModal(true);
  };

  // 로그아웃 구현
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    console.log("로그아웃 완료");
  };

  return (
    <>
      <header 
        style={{
          margin: "0",
          padding: "24px 40px 24px 48px",
          width: "100%",
          height: "80px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>🌍 어디로든 문</div>
        
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#333", fontSize: "1.1rem", fontWeight: "500" }}>홈</Link>
          <Link to="/plan" style={{ textDecoration: "none", color: "#333", fontSize: "1.1rem", fontWeight: "500" }}>여행 계획</Link>
          <Link to="/thread" style={{ textDecoration: "none", color: "#333", fontSize: "1.1rem", fontWeight: "500" }}>여행 게시판</Link>
          <Link to="/mypage" style={{ textDecoration: "none", color: "#333", fontSize: "1.1rem", fontWeight: "500" }}>마이페이지</Link>
        </nav>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <button 
            style={{
              padding: "10px 20px",
              backgroundColor: "#1976D2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              marginRight: "20px",
          }}
            onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#1976D2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              marginRight: "20px",
            }}
          onClick={handleOpenLoginModal}>
              로그인
            </button>
          )}
        </div>
      </header>

      <AuthModal
        openLogin={openLoginModal}
        openSignup={openSignupModal}
        onCloseLogin={handleCloseLoginModal}
        onCloseSignup={handleCloseSignupModal}
        onOpenSignup={handleOpenSignupModal}
        onBackToLogin={handleBackToLogin}
      />
    </>
  );
}