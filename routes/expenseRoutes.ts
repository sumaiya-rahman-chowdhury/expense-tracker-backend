import express from "express";
import {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.use(protect);

router.post("/", addExpense);
router.get("/", getExpenses);
router.patch("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;
