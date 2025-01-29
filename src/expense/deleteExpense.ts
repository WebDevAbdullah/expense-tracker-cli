import { IExpense } from "../types/expense";
import { readFile, writeFile } from "fs/promises";
import { fileName } from "../config";

export async function deleteExpense(id: number): Promise<void> {
  try {
    const data: string = await readFile(fileName, "utf8");

    if (data.length === 0) {
      console.log("No expenses found.");
      return;
    }

    const expenses: IExpense[] = JSON.parse(data);

    const index = expenses.findIndex((e) => e.id === id);

    if (index === -1) {
      console.log(`Expense with ID: ${id} not found.`);
      return;
    }

    expenses.splice(index, 1);

    const dataString = JSON.stringify(expenses, null, 2);

    console.log(`Expense deleted successfully (ID: ${id}).`);
  } catch (err) {
    console.error("Error deleting expense:", err);
  }
}
