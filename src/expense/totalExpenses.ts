import { loadData } from "./loadData";
import { IExpense } from "../types/expense";

export async function totalExpenses(month?: number): Promise<number> {
  let total: number = 0;

  try {
    const expenses: IExpense[] = await loadData();

    if (month) {
      expenses.forEach((expense) => {
        const expenseMonth = new Date(expense.date).getMonth() + 1;

        if (expenseMonth === month) {
          total += expense.amount;
        }
      });
    } else {
      expenses.forEach((expense) => {
        total += expense.amount;
      });
    }
  } catch (err) {
    console.error("Error calculating total expenses:", err);
  }

  return total;
}
