import express from 'express';
import { mongoDB } from './API/config/database.js';
import dishRoutes from './API/routes/dishRoutes.js'

const app = express();

app.use(express.json());

app.use(dishRoutes);

// MongoDB Connection
mongoDB();


// Server Connection
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
