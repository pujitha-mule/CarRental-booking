import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/cars`)
    .then(res => setCars(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Available Cars</h2>
      {cars.map(car => (
        <div key={car._id} style={{ marginBottom: 10 }}>
          <h3>{car.name}</h3>
          <p>{car.rentPerDay} / day</p>
          <Link to={`/book/${car._id}`}>
            <button>Book Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
