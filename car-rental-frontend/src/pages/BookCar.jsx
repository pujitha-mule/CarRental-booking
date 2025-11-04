import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function BookCar() {
  const { id } = useParams();
  const [name, setName] = useState("");

  const submitBooking = () => {
    axios.post(`${import.meta.env.VITE_API_URL}/bookcar`, { carId: id, name })
      .then(() => alert("Car booked ✅"))
      .catch(() => alert("Booking failed ❌"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Book Car</h2>
      <input
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 10, marginBottom: 10 }}
      />
      <br />
      <button onClick={submitBooking}>Confirm Booking</button>
    </div>
  );
}
