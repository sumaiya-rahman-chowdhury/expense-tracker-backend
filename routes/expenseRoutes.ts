import express from "express";
import {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getTotalExpenses,
  getExpensesByCategory,
} from "../controllers/expenseController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.use(protect);

router.post("/", addExpense);
router.get("/", getExpenses);
router.patch("/:id", updateExpense);
router.delete("/:id", deleteExpense);
router.get("/total", getTotalExpenses);
router.get("/stats/category", getExpensesByCategory);


export default router;
