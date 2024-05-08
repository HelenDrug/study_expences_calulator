import './ExpenseItem.css';
import { ExpenseDate } from "./ExpenseDate.tsx";
import { Card } from "../ui/Card.tsx";
import { useState } from "react";

interface ExpenseItemProps {
    title: string;
    amount: number;
    date: Date;
}
export function ExpenseItem({title, amount, date}: ExpenseItemProps) {
    const [newtTitle, setNewTitle] = useState(title)
    const handleClick = () => {
        setNewTitle('Updated!')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{newtTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}