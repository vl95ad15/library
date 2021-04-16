export default class Order {
    constructor(id: number,
                userID: number,
                librarianID: number,
                booksArr: [],
                executionTime: Date,
                status: string) {
        this._id = id;
        this._userID = userID;
        this._librarianID = librarianID;
        this._booksArr = booksArr;
        this._executionTime = executionTime;
        this._status = status;
    }

    get id(): number {
        return this._id;
    }

    get userID(): number {
        return this._userID;
    }

    get librarianID(): number {
        return this._librarianID;
    }

    get booksArr(): [] {
        return this._booksArr;
    }

    set booksArr(newValue: []) {
        this._booksArr = newValue
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
