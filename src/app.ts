import { Command } from "commander";
import { addExpense } from "./expense/addExpense";
import { listExpenses } from "./expense/listExpenses";
import { deleteExpense } from "./expense/deleteExpense";
import { summarizeExpenses } from "./expense/summarizeExpenses";

// Set up the CLI using commander
const program = new Command();

program.name("expense-tracker").description("A simple expense tracker application").version("1.0.0");

// Add expense command
program
  .command("add")
  .description("Add an expense")
  .requiredOption("--description <description>", "Description of the expense")
  .requiredOption("--amount <amount>", "Amount of the expense", parseFloat)
  .action((options) => {
    addExpense(options.description, options.amount);
  });

// List expenses command
program
  .command("list")
  .description("List all expenses")
  .action(() => {
    listExpenses();
  });

// Delete expense command
program
  .command("delete")
  .description("Delete an expense")
  .requiredOption("--id <id>", "ID of the expense to delete", parseInt)
  .action((options) => {
    deleteExpense(options.id);
  });

// Summarize expenses command
program
  .command("summary")
  .description("Summarize expenses")
  .option("--month <month>", "Summarize expenses for a specific month", parseInt)
  .action((options) => {
    summarizeExpenses(options.month);
  });

program.parse(process.argv);
