import { readFile } from "fs/promises";
import { IExpense } from "../types/expense";
import { fileName } from "../config";

export async function loadData(): Promise<IExpense[]> {
  try {
    const data: string = await readFile(fileName, "utf8");

    if (data.length === 0) {
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading expenses:", err);
    return [];
  }
}
