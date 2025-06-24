import { useState } from "react";
import AuthModal from "./AuthModal.tsx";

export default function Header() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);
  const handleOpenSignupModal = () => {
    setOpenLoginModal(false);
    setOpenSignupModal(true);
  };
  const handleCloseSignupModal = () => setOpenSignupModal(false);
  const handleBackToLogin = () => {
    setOpenSignupModal(false);
    setOpenLoginModal(true);
  };

  return (
    <>
      <header className="header">
        <div className="logo">🌍 어디로든 문</div>
        
        <nav className="nav">
          <a href="/">홈</a>
          <a href="/plan">여행 계획</a>
          <a href="/plan">여행 게시판</a>
          <a href="/mypage">마이페이지</a>
        </nav>

        <button className="login-button" onClick={handleOpenLoginModal}>
          로그인
        </button>
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