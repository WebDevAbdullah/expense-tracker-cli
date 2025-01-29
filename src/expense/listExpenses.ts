import { readFile } from "fs/promises";
import { IExpense } from "../types/expense";
import { fileName } from "../config";

export async function listExpenses(): Promise<void> {
  try {
    const data: string = await readFile(fileName, "utf8");

    if (data.length === 0) {
      console.log("No expense found.");
      return;
    }

    console.log("ID\tDate\t\tDescription\t\tAmount");

    const tasks: IExpense[] = JSON.parse(data);

    tasks.forEach((t) => {
      console.log(`${t.id.toString().padEnd(4)}\t${t.date.padEnd(10)}\t${t.description.padEnd(20)}\t${t.amount.toString().padEnd(6)}`);
    });
  } catch (err) {
    console.error("Error reading tasks:", err);
  }
}
