import { render } from "react-dom"
import { expect } from "chai"

import { Hello } from "./Hello"

describe("Hello", () => {
    it("Produces expected text content", () => {
        const container = document.createElement("div")
        document.body.appendChild(container)
        render(<Hello compiler="Foo" framework="Bar" n={5} />, container)

        expect(container.querySelector("[data-qa=greeting]")?.textContent).eql(
            "Hello from Foo and Bar!"
        )

        expect(container.querySelector("[data-qa=fib-intro]")?.textContent).eql(
            "Here are the first 5 fibonacci numbers:"
        )

        const listItems = container.querySelectorAll("[data-qa=fib-numbers] li")
        const expectedNums = [1, 1, 2, 3, 5]
        for (let i = 0; i < expectedNums.length; i++) {
            expect(listItems[i].textContent).eql(String(expectedNums[i]))
        }
    })
})
