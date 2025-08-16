import app from "./app";
import authRoutes from "./routes/authRoutes";
import expenseRoutes from "./routes/expenseRoutes";

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
