/*import keyConceptsImage from './assets/images/key-concepts.png';
import { Header } from "./react-key-concepts/components/ui/Header.tsx";
import { Concepts } from "./react-key-concepts/components/concepts/Concepts.tsx";
import { concepts } from "./react-key-concepts/data/concepts.ts";*/
import Expenses from "./components/Expences/Expenses.tsx";
import { expenses } from "./data.ts";

function App() {
   /* const alt = "Medal badge with a star";
    const title = "Key React Concepts";
    const description = "Selected key React concepts you should know about";*/
    return (
        <div>
             <h2>Let's get started!</h2>
            <Expenses expenses={expenses}></Expenses>
          {/*  <Header image={keyConceptsImage} alt={alt} title={title} description={description}/>
            <Concepts concepts={concepts}/>*/}
        </div>
    );
}

export default App
