import './ExpenseItem.css';
import { ExpenseDate } from "./ExpenseDate.tsx";
import { Card } from "../views/Card.tsx";

interface ExpenseItemProps {
    title: string;
    amount: number;
    date: Date;
}
export function ExpenseItem({title, amount, date}: ExpenseItemProps) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}