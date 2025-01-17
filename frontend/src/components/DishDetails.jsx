import { useState } from 'react';

export default function DishDetails({ dishData }) {
  const [updatedItems, setUpdatedItems] = useState(dishData.items);

  // Function to handle quantity changes
  const handleQuantityChange = (name, change) => {
    const updated = updatedItems.map(item => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity + change };
      }
      return item;
    });
    setUpdatedItems(updated);
  };

  // Calculate the total calories
  const calculateTotalCalories = () => {
    return updatedItems.reduce((total, item) => {
      // Assuming each item has a "calories" property for simplicity
      const calorieData = item.calories || 100; // Default to 100 cal if not provided
      return total + calorieData * item.quantity;
    }, 0);
  };

  return (
    <div>
      <h2>{dishData.dishName}</h2>
      <div>
        {updatedItems.map((item, index) => (
          <div key={index}>
            <p>{item.name} ({item.quantity}): {item.calories * item.quantity} cal</p>
            <button onClick={() => handleQuantityChange(item.name, 1)}>+</button>
            <button onClick={() => handleQuantityChange(item.name, -1)}>-</button>
          </div>
        ))}
      </div>
      <h3>Total Calories: {calculateTotalCalories()}</h3>
    </div>
  );
}
