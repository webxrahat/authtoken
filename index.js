import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connetDB.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHanders.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/users", userRoutes);
app.use(errorHandler, notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
