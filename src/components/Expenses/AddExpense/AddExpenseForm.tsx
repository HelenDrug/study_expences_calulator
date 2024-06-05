import './AddExpenseForm.css'
import { type ChangeEvent, type FormEvent, useState } from "react";

export function AddExpenseForm() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date());

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const onAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value)
    }
    const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(event.target.value))
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        console.log(expenseData)
        setTitle("")
        setAmount("")
        setDate(new Date())
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={"add-expense__controls"}>
                <div className={"add-expense__control"}>
                    <label>Title</label>
                    <input type={"text"} value={title} onChange={onTitleChange}/>
                </div>
                <div className={"add-expense__control"}>
                    <label>Amount</label>
                    <input type={"number"} value={amount} min={"0.01"} step={"0.01"} onChange={onAmountChange}/>
                </div>
                <div className={"add-expense__control"}>
                    <label>Date</label>
                    <input type={"date"} value={date.toLocaleString()} min={"2019-01-01"} max={"2022-12-31"} onChange={onDateChange}/>
                </div>
            </div>
            <div className={"add-expense__actions"}>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    )
}