import { Concept } from "./Concept.tsx";
import type { ConceptValue } from "../shared/interfaces.ts";
import './Concepts.css'

interface ConceptsProps {
    concepts: ConceptValue[];
}

export function Concepts({concepts}: ConceptsProps) {
    return (
        <ul id="concepts">
            {concepts.map((concept, index) => (
                <Concept concept={concept} key={index}/>
            ))}
        </ul>
    )
}