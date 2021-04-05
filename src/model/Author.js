export default class Author {
    constructor(id: number, name: string) {
        this._name = name;
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
}
