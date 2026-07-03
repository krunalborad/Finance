const prisma = require("../utils/prisma");

// =======================
// SUMMARY API
// =======================
exports.summary = async (req, res) => {
  try {
    const income = await prisma.record.aggregate({
      where: { type: "INCOME" },
      _sum: { amount: true }
    });

    const expense = await prisma.record.aggregate({
      where: { type: "EXPENSE" },
      _sum: { amount: true }
    });

    const totalIncome = income._sum.amount || 0;
    const totalExpense = expense._sum.amount || 0;

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching summary" });
  }
};


// =======================
// CATEGORY BREAKDOWN API
// =======================
exports.categoryBreakdown = async (req, res) => {
  try {
    const data = await prisma.record.groupBy({
      by: ["category"],
      _sum: { amount: true }
    });

    const formatted = data.map(item => ({
      category: item.category,
      total: item._sum?.amount || 0   // ✅ safe access
    }));

    res.json(formatted);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching categories" });
  }
};


// =======================
// RECENT TRANSACTIONS API
// =======================
exports.recent = async (req, res) => {
  try {
    const records = await prisma.record.findMany({
      orderBy: { date: "desc" }, 
      take: 5                    // ✅ last 5 records
    });

    res.json(records);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recent records" });
  }
};