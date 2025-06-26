import Header from "./components/Header";
import Footer from "./components/Footer";
import { LocationProvider } from "./contexts/LocationContext"; // LocationProvider import 추가

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/mainpage";
import PlanPage from "./pages/plan/planpage";
import ThreadPage from "./pages/thread/threadpage";
import MyPage from "./pages/mypage/mypage";

export default function App() {

  return (
    <div
      style={{
          margin: "0",
          padding: "0",
          width: "100%",
          minHeight: "100vh",
          height: "auto",
          position: "relative",
          overflow: "auto",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
      }}
    >
      <Router>
        <LocationProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/thread" element={<ThreadPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
          <Footer />
        </LocationProvider>
      </Router>
    </div>
  );
}