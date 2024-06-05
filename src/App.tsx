/*import keyConceptsImage from './assets/images/key-concepts.png';
import { Header } from "./react-key-concepts/components/ui/Header.tsx";
import { Concepts } from "./react-key-concepts/components/concepts/Concepts.tsx";
import { concepts } from "./react-key-concepts/data/concepts.ts";*/

import { AddExpense } from "./components/Expenses/AddExpense/AddExpense.tsx";
import Expenses from "./components/Expenses/Expenses.tsx";
import { expenses } from "./components/Expenses/data.ts";

function App() {
    /* const alt = "Medal badge with a star";
     const title = "Key React Concepts";
     const description = "Selected key React concepts you should know about";*/
    return (
        <div>
            <AddExpense/>
            <Expenses expenses={expenses}></Expenses>
            {/*  <Header image={keyConceptsImage} alt={alt} title={title} description={description}/>
            <Concepts concepts={concepts}/>*/}
        </div>
    );
}

export default App
