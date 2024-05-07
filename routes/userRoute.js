import express from "express";
import {
  createUser,
  authenticateUser,
  getUserByID,
  
} from "../controller/userController.js";
import { protect, checkUserDetails } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register",  createUser);
router.post("/login", authenticateUser);
router.get("/id:", protect, checkUserDetails, getUserByID);

export default router;
