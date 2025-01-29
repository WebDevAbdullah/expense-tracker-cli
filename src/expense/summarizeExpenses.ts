import { loadData } from "./loadData";
import { getMonthShortName } from "../lib/date";
import { totalExpenses } from "./totalExpenses";

export async function summarizeExpenses(month?: number): Promise<void> {
  try {
    const data = await loadData();

    if (data.length === 0) {
      console.log("No expenses found.");
      return;
    }

    let total: number = 0;

    total = await totalExpenses(month);

    if (month) {
      console.log(`Total expenses for ${getMonthShortName(month)}: ${total}`);
    } else {
      console.log(`Total expenses: ${total}`);
    }
  } catch (err) {
    console.error("Error summarizing expenses:", err);
  }
}
