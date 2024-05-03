import express from "express";
import {
  createMovieController,
  getMovieByIDController,
  getAllMoviesController,
  updateMovieController
} from "../controller/movieController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/movies", protect, createMovieController);
router.get("/:id", protect, getMovieByIDController);
router.get("", protect, getAllMoviesController);
router.update("/:id",protect,updateMovieController)

export default router;
