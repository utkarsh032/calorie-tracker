import express from 'express';
import { dishByName } from '../controllers/DishByName.js';

const router = express.Router();

router.get('/dish/:name', dishByName);

export default router;
