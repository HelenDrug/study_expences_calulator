import { ExpenseItem } from "./ExpenseItem.tsx";
import "./Expenses.css"

import { Card } from "../ui/Card.tsx";
import { ExpensesFilter } from "./ExpenseFilter/ExpensesFilter.tsx";
import { useState } from "react";
import type { Expense } from "./interfaces.ts";

interface ExpensesProps {
    expenses: Expense[];
}

export default function Expenses({expenses}: ExpensesProps) {
    const [filteredYear, setFilteredYear] = useState('2020')
    return (
        <>
            <ExpensesFilter filteredYear={filteredYear} setFilteredYear={setFilteredYear}/>
            <Card className="expenses">
                {expenses.map(expense => {
                    return <ExpenseItem key={expense.id}
                                        title={expense.title}
                                        amount={expense.amount}
                                        date={expense.date}
                    ></ExpenseItem>
                })}
            </Card>
        </>
    );
}