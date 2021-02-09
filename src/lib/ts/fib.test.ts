import { expect } from "chai"
import fib from "./fib"

describe("fib", () => {
    const tests = [
        { input: 0, want: [] },
        { input: 1, want: [1] },
        { input: 2, want: [1, 1] },
        { input: 3, want: [1, 1, 2] },
        { input: 6, want: [1, 1, 2, 3, 5, 8] },
    ]
    for (let test of tests) {
        it(`${test.input}`, () => {
            expect(fib(test.input)).eql(test.want)
        })
    }
})
