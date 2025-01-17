import mongoose from "mongoose";

export const mongoDB = (req, res) => {
  mongoose.connect('mongodb://localhost:27017/calorieDB')
    .then(() => {
      console.log('Successfully connected to the MongoDB database');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};
