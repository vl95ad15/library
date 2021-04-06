export default class Library {
    constructor(name: string, type: string, address: string) {
        this._name = name;
        this._type = type;
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

    get type(): string {
        return this._type;
    }

    get address(): string {
        return this._address;
    }

}
