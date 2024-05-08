import './AddExpenseForm.css'

export function AddExpenseForm() {
    return (
        <form>
            <div className={"add-expense__controls"}>
                <div className={"add-expense__control"}>
                    <label>Title</label>
                    <input type={"text"}/>
                </div>
                <div className={"add-expense__control"}>
                    <label>Amount</label>
                    <input type={"number"} min={"0.01"} step={"0.01"}/>
                </div>
                <div className={"add-expense__control"}>
                    <label>Date</label>
                    <input type={"date"} min={"2019-01-01"} max={"2022-12-31"}/>
                </div>
            </div>
        </form>
    )
}