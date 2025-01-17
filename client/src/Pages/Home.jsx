import { useState } from 'react';
import QRScanner from '../components/QRScanner';
import DishDetails from '../components/DishDetails';
import axios from 'axios';

export default function Home() {
  const [dishData, setDishData] = useState(null);

  // Handle the QR data after scanning
  const handleQRScan = async (data) => {
    const scannedDish = JSON.parse(data);

    try {
      // Fetch food details from the backend (e.g., calories, ingredients)
      const response = await axios.get(`http://localhost:3000/dish/${scannedDish.dishName}`);

      // Assuming the response contains the full details of the dish
      setDishData(response.data); // Set the dish details received from the server
    } catch (error) {
      console.error('Error fetching dish data:', error);
    }
  };

  return (
    <div className="flex items-center justify-center gap-10 bg-[#B92F72]">
      {/* QR Scanner */}
      <div>
        <QRScanner onScan={handleQRScan} />
      </div>

      {/* Dish Details or Placeholder */}
      <div>
        {dishData ? (
          <DishDetails dishData={dishData} />
        ) : (
          <p>Please scan a dish to see the details.</p>
        )}
      </div>
    </div>
  );
}
