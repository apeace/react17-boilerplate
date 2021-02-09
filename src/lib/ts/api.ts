export interface API {
    getNames(): Promise<string[]>
}

export class FakeAPI implements API {
    getNames(): Promise<string[]> {
        return Promise.resolve(["Fred", "George"])
    }
}

export class HTTPAPI implements API {
    getNames(): Promise<string[]> {
        return Promise.reject("API not implemented")
    }
}
