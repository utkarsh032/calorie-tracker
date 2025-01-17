export const dishByName = async (req, res) => {
  try {
    const dishName = req.params.name;
    const dish = await Dish.findOne({ name: dishName });

    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }

    const calorieBreakdown = dish.items.map((item) => ({
      ...item._doc,
      totalCalories: item.calories * item.quantity,
    }));

    const totalCalories = calorieBreakdown.reduce((acc, item) => acc + item.totalCalories, 0);

    res.json({ dishName: dish.name, calorieBreakdown, totalCalories });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dish data' });
  }
};
