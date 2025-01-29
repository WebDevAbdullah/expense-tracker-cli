import { writeFile } from "fs/promises";
import { loadData } from "./loadData";
import { getDateNow } from "../lib/date";
import { IExpense } from "../types/expense";
import { fileName } from "../config";

export async function addExpense(description: string, amount: number): Promise<void> {
  try {
    const data = await loadData();

    const expense: IExpense = {
      id: data.length + 1,
      description,
      amount,
      date: getDateNow(),
    };

    data.push(expense);

    const dataString = JSON.stringify(data, null, 2);

    await writeFile(fileName, dataString);
    console.log(`Expense added successfully (ID: ${expense.id}).`);
  } catch (err) {
    console.error("Error adding expense:", err);
  }
}
