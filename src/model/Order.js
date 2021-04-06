export default class Order {
    constructor(userID: number,
                librarianID: number,
                books: [],
                executionTime: Date,
                status: string) {
        this._userID = userID;
        this._librarianID = librarianID;
        this._books = books;
        this._executionTime = executionTime;
        this._status = status;
    }

    get userID(): number {
        return this._userID;
    }

    get librarianID(): number {
        return this._librarianID;
    }

    get books(): [] {
        return this._books;
    }

    set books(newValue: []) {
        this._books = newValue
    }

    get executionTime(): Date {
        return this._executionTime;
    }

    get status(): string {
        return this._status;
    }

    set status(newStatus: string) {
        this._status = newStatus;
    }

}
