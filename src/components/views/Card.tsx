import type { ReactNode } from "react";
import "./Card.css";

interface CardProps {
    children: ReactNode;
    className: string;
}
export function Card({children, className}: CardProps) {
    const classes = `card ${className}`
    return (
        <div className={classes}>
            {children}
        </div>
    );
}