import express from "express";
import {
  createUser,
  authenticateUser,
  getUserByID,
} from "../controller/userController.js";
import { protect, checkUserDetails,register } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", createUser,register);
router.post("/login", authenticateUser);
router.get("/id:", protect, checkUserDetails, getUserByID);

export default router;
