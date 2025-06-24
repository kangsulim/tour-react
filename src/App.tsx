import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/main/mainpage";

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
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}
