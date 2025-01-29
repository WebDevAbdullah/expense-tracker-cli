# Expense Tracker

CLI project to keep track of your expenses based on roadmap [Expense Tracker CLI](https://roadmap.sh/projects/expense-tracker)

## Installation

1. Clone the GitHub repository:

```bash
git clone https://github.com/WebDevAbdullah/expense-tracker-cli.git
```

2. Navigate to the project directory:

```bash
cd expense-tracker-cli
```

3. install npm packages.:

```bash
npm i
```

## Usage

```bash
$ npm run add -- --description "Dinner" --amount 10
# Expense added successfully (ID: 1).

$ npm run list
# ID      Date            Description             Amount
# 1       2025-1-29       Dinner                  10
# 2       2025-1-29       lunch                   8.5

$ expense-tracker summary
# Total expenses: 18.5

$ expense-tracker summary --month 1
# Total expenses for Jan: 18.5

expense-tracker delete --id 2
# Expense deleted successfully (ID: 2).
```
