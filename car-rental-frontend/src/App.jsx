import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import BookCar from "./pages/BookCar.jsx";

export default function App() {
  return (
    <>
      <nav style={{ padding: "10px", background: "#222" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Home</Link>
        <Link to="/cars" style={{ color: "#fff" }}>Cars</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/book/:id" element={<BookCar />} />
      </Routes>
    </>
  );
}
