export default class Account {
    constructor(id: number,
                userName: string,
                readAmount: number,
                created: Date,
                status: string) {
        this._id = id;
        this._userName = userName;
        this._readAmount = readAmount;
        this._created = created;
        this._status = status;
    }

    get id(): number {
        return this._id;
    }

    get userName(): string {
        return this._userName;
    }

    get readAmount(): number {
        return this._readAmount;
    }

    set readAmount(newAmount: number) {
        this._readAmount = newAmount;
    }

    get created(): Date {
        return this._created;
    }

    get status(): string {
        return this._status;
    }

    set status(newStatus: string) {
        this._status = newStatus;
    }

}
