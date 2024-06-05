import './AddExpense.css';
import { AddExpenseForm } from "./AddExpenseForm.tsx";

export function AddExpense() {
    return (
        <div className={"add-expense"}>
           <AddExpenseForm/>
        </div>
    );
}