// fib returns a list of the first n fibonacci numbers.
export default function fib(n: number): number[] {
    const nums: number[] = []
    let a = 1,
        b = 1
    for (let i = 0; i < n; i++) {
        nums.push(a)
        const newB = a + b
        a = b
        b = newB
    }
    return nums
}
