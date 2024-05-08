import './Concept.css'
import type { ConceptValue } from "../shared/interfaces.ts";

export function Concept({concept}: {concept: ConceptValue}) {
    return (
        <li className="concept">
            <img src={concept.image} alt={concept.title}/>
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
        </li>
    );
}