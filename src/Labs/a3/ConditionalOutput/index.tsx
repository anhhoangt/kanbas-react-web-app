import React from "react"
import ConditionalOutputIfElse from "./ConditionalOutputIfElse"
import ConditionalOutputInline from "./ConditionalOutputInline"

const ConditionalOutput = () => {
    return (
        <div>
            <h2>Conditional Output</h2>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
        </div>
    )
}

export default ConditionalOutput