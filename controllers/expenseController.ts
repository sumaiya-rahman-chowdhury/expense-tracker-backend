import { Request, Response } from "express";
import Expense, { IExpense } from "../models/expenseModel";
import { FilterQuery, Types } from "mongoose";

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
    const { category, start, end } = req.query;
    const userId = req.user!._id as Types.ObjectId;
    const filter: FilterQuery<IExpense> = { user: userId };
    if (category) filter.category = category as string;
    if (start || end) {
      filter.date = {};
      if (start) filter.date.$gte = new Date(start as string);
      if (end) filter.date.$lte = new Date(end as string);
    }
    const expenses = await Expense.find(filter).sort({ date: -1 });
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
      return res
        .status(404)
        .json({ message: "Expense not found or not authorized" });
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
      return res
        .status(404)
        .json({ message: "Expense not found or not authorized" });
    }

    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
export const getTotalExpenses = async (req: Request, res: Response) => {
  try {
    const result = await Expense.aggregate([
      { $match: { user: req.user._id } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    res.json({ total: result[0]?.total || 0 });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
export const getExpensesByCategory = async (req: Request, res: Response) => {
  try {
    const stats = await Expense.aggregate([
      { $match: { user: req.user._id } },
      { $group: { _id: "$category", total: { $sum: "$amount" } } }
    ]);

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
