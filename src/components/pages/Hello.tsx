import * as React from "react"

import fib from "../../lib/ts/fib"

import partyparrot from "../../assets/images/partyparrot.gif"
import "./Hello.scss"

export interface HelloProps {
    compiler: string
    framework: string
    n: number
}

export const Hello = (props: HelloProps) => (
    <div className="Hello">
        <div className="Hello_outer">
            <h1 data-qa="greeting">
                Hello from {props.compiler} and {props.framework}!
            </h1>
            <p>
                <img src={partyparrot} />
            </p>
            <p data-qa="fib-intro">Here are the first {props.n} fibonacci numbers:</p>
            <ul data-qa="fib-numbers">
                {fib(props.n).map((num, idx) => (
                    <li key={idx}>{num}</li>
                ))}
            </ul>
        </div>
    </div>
)
