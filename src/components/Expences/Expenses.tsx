import { ExpenseItem } from "./ExpenseItem.tsx";
import "./Expenses.css"
import type { Expense } from "../../data.ts";
import { Card } from "../ui/Card.tsx";

interface ExpensesProps {
    expenses: Expense[];
}

export default function Expenses({expenses}: ExpensesProps) {
    return (
        <Card className="expenses">
            {expenses.map(expense => {
                return <ExpenseItem key={expense.id}
                                    title={expense.title}
                                    amount={expense.amount}
                                    date={expense.date}
                ></ExpenseItem>
            })}
        </Card>
    );
}