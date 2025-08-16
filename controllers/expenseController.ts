import { Request, Response } from "express";
import Expense from "../models/expenseModel";

export const addExpense = async (req: Request, res: Response) => {
  try {
    const { title, amount, category, date } = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      date,
      user: req.user._id, 
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find({ user: req.user._id }).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateExpense = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found or not authorized" });
    }

    res.json(expense);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found or not authorized" });
    }

    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
