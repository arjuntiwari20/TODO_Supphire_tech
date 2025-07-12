import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Backend/db/db.js';
import todoRoutes from './Backend/routes/routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

// Mount routes
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
