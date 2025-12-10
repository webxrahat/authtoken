import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connetDB.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHanders.js";
import { authMiddleware } from "./middlewares/auth.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/api/users", authMiddleware, userRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler, notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
