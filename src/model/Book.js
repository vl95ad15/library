export default class Book {
    constructor(id: number,
                ISBN: number,
                name: string,
                authors: [],
                status: string,
                published: Date,
                genre: string,
                cost: number) {
        this._id = id;
        this._ISBN = ISBN;
        this._name = name;
        this._authors = authors;
        this._status = status;
        this._published = published;
        this._genre = genre;
        this._cost = cost;
    }

    get id(): number {
        return this._id;
    }

    get ISBN(): number {
        return this._ISBN;
    }

    get name(): string {
        return this._name;
    }

    get authors(): [] {
        return this._authors;
    }

    get status(): string {
        return this._status;
    }

    get published(): Date {
        return this._published;
    }

    get genre(): string {
        return this._genre;
    }

    get cost(): number {
        return this._cost;
    }
}
