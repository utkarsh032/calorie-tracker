import express from 'express';
import { mongoDB } from './API/config/database.js';
import dishRoutes from './API/routes/dishRoutes.js'

const app = express();

app.use(express.json());

app.use(dishRoutes);

// MongoDB Connection
mongoDB();


app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});


// Server Connection
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
