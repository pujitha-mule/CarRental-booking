import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Car Rental System 🚗</h1>
      <p>Rent your dream car with ease</p>
      <Link to="/cars">
        <button style={{ padding: 10, marginTop: 10 }}>Browse Cars</button>
      </Link>
    </div>
  );
}
