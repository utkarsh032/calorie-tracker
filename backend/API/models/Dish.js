import mongoose from 'mongoose';

export const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  calories: Number,
});

const dishSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema],
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;
