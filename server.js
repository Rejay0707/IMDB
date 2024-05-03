import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import movieRoutes from "./routes/movieRoutes.js"

dotenv.config();

connectDb();
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes)

app.listen(port, () => {
  console.log("Server running on " + port);
});
